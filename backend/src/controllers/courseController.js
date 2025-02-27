import pool from "../config/database.js";

export async function getAllCourses() {
  try {
    const [rows] = await pool.query("SELECT * FROM ProdukKelas");
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getCourseById(id) {
  try {
    // Ambil detail kursus + kategori
    const [courseRows] = await pool.query(
      `
      SELECT
        pk.*,
        kk.name AS category_name,
        kk.description AS category_description
      FROM
        ProdukKelas AS pk
      JOIN
        KategoriKelas AS kk
      ON
        pk.category_id = kk.category_id
      WHERE
        pk.product_id = ?
      `,
      [id]
    );

    if (courseRows.length === 0) return null;
    const course = courseRows[0];

    // Ambil tutor terkait
    const [tutorRows] = await pool.query(
      `
      SELECT t.tutor_id, t.name, t.bio, t.picture, t.email
      FROM Tutor AS t
      JOIN ProdukKelas_Tutor AS pkt ON t.tutor_id = pkt.tutor_id
      WHERE pkt.product_id = ?
      `,
      [id]
    );

    // Ambil pretest terkait (jika ada)
    const [pretestRows] = await pool.query(
      `
      SELECT pretest_id, title, description, passing_score
      FROM Pretest
      WHERE product_id = ?
      `,
      [id]
    );

    // Ambil modul dan material terkait
    const [moduleRows] = await pool.query(
      `
      SELECT
        mk.module_id,
        mk.title AS module_title,
        mk.description AS module_description,
        mk.order_index,
        IFNULL(
          JSON_ARRAYAGG(
            JSON_OBJECT(
              'material_id', m.material_id,
              'type', m.type,
              'title', m.title,
              'content', m.content,
              'order_index', m.order_index
            )
          ),
          JSON_ARRAY()
        ) AS materials
      FROM ModulKelas AS mk
      LEFT JOIN Material AS m ON mk.module_id = m.module_id
      WHERE mk.product_id = ?
      GROUP BY mk.module_id
      ORDER BY mk.order_index
      `,
      [id]
    );

    // Return semua data terkait
    return {
      ...course,
      tutors: tutorRows,
      pretest: pretestRows[0] || null,
      modules: moduleRows.map((module) => ({
        ...module,
        // ✅ Tidak perlu JSON.parse karena materials sudah dalam bentuk JSON
        materials: module.materials || [],
      })),
    };
  } catch (error) {
    console.error("Error saat mengambil data kursus:", error);
    throw error;
  }
}

export async function createOneCourse({
  title,
  description,
  basePrice,
  discount,
  language,
  categoryId,
  tutorIds, // Array of tutor IDs
  pretest, // { title: string, description: string, passingScore: number }
  modules, // Array of { title: string, description: string, orderIndex: number }
}) {
  try {
    // Mulai transaksi
    await pool.query("START TRANSACTION");

    // 1. Buat kursus baru di ProdukKelas
    const [newCourse] = await pool.query(
      `
      INSERT INTO ProdukKelas (title, description, base_price, discount, language, category_id)
      VALUES (?, ?, ?, ?, ?, ?)
      `,
      [title, description, basePrice, discount, language, categoryId]
    );
    const productId = newCourse.insertId;

    // 2. Tambahkan tutor ke ProdukKelas_Tutor
    if (tutorIds?.length > 0) {
      for (const tutorId of tutorIds) {
        await pool.query(
          `
          INSERT INTO ProdukKelas_Tutor (product_id, tutor_id)
          VALUES (?, ?)
          `,
          [productId, tutorId]
        );
      }
    }

    // 3. Tambahkan pretest jika ada
    if (pretest) {
      const {
        title: pretestTitle,
        description: pretestDesc,
        passingScore,
      } = pretest;
      await pool.query(
        `
        INSERT INTO Pretest (product_id, title, description, passing_score)
        VALUES (?, ?, ?, ?)
        `,
        [productId, pretestTitle, pretestDesc, passingScore]
      );
    }

    // 4. Tambahkan modul jika ada
    if (modules?.length > 0) {
      for (const {
        title: moduleTitle,
        description: moduleDesc,
        orderIndex,
      } of modules) {
        await pool.query(
          `
          INSERT INTO ModulKelas (product_id, title, description, order_index)
          VALUES (?, ?, ?, ?)
          `,
          [productId, moduleTitle, moduleDesc, orderIndex]
        );
      }
    }

    // Commit transaksi
    await pool.query("COMMIT");

    return {
      productId,
      message:
        "Kursus berhasil dibuat lengkap dengan tutor, pretest, dan modul.",
    };
  } catch (error) {
    await pool.query("ROLLBACK");
    console.error("Error creating course:", error);
    throw error;
  }
}

export async function editCourseById(
  id,
  { title, description, basePrice, discount, language, categoryId }
) {
  try {
    await pool.query("START TRANSACTION");

    // Cek apakah kursus ada
    const [courseExists] = await pool.query(
      `SELECT product_id FROM ProdukKelas WHERE product_id = ?`,
      [id]
    );
    if (courseExists.length === 0) throw new Error("Kursus tidak ditemukan.");

    // Cek apakah kategori valid (jika categoryId diberikan)
    if (categoryId) {
      const [categoryExists] = await pool.query(
        `SELECT category_id FROM KategoriKelas WHERE category_id = ?`,
        [categoryId]
      );
      if (categoryExists.length === 0)
        throw new Error("Kategori tidak ditemukan.");
    }

    // Update data kursus
    await pool.query(
      `
      UPDATE ProdukKelas
      SET title = ?, description = ?, base_price = ?, discount = ?, language = ?, category_id = ?
      WHERE product_id = ?
      `,
      [
        title,
        description,
        basePrice,
        discount,
        language,
        categoryId || null,
        id,
      ]
    );

    await pool.query("COMMIT");
    return { message: "Kursus berhasil diperbarui." };
  } catch (error) {
    await pool.query("ROLLBACK");
    console.error("Error updating course:", error);
    throw error;
  }
}

export async function deleteCourseById(id) {
  try {
    await pool.query("START TRANSACTION");

    // Hapus data dari tabel yang memiliki foreign key ke ProdukKelas
    await pool.query(`DELETE FROM ProdukKelas_Tutor WHERE product_id = ?`, [
      id,
    ]);
    await pool.query(`DELETE FROM Pretest WHERE product_id = ?`, [id]);
    await pool.query(
      `DELETE FROM Material WHERE module_id IN (SELECT module_id FROM ModulKelas WHERE product_id = ?)`,
      [id]
    );
    await pool.query(`DELETE FROM ModulKelas WHERE product_id = ?`, [id]);

    // Setelah semua relasi terhapus, hapus ProdukKelas
    await pool.query(`DELETE FROM ProdukKelas WHERE product_id = ?`, [id]);

    await pool.query("COMMIT");
    return { message: "Kursus berhasil dihapus beserta semua relasinya." };
  } catch (error) {
    await pool.query("ROLLBACK");
    console.error("Error deleting course:", error);
    throw error;
  }
}

export async function createOneTutor({ name, bio, picture, email }) {
  try {
    // name: Tutor, bio: Dengan memberikan kualitas course yang baik lagi berguna, picture: /avatar.png, tutor@test.com
    const newTutor = await pool.query(
      `
      INSERT INTO Tutor (name, bio, picture, email)
      VALUES (?, ?, ?, ?)
      `,
      [name, bio, picture, email]
    );
    return newTutor;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
