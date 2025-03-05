import { sendVerificationEmail } from "../services/sendVerificationEmail.js";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";
import pool from "../config/database.js";
import jwt from "jsonwebtoken";

export async function loginUser({ email, password }) {
  try {
    // Check if user exists
    const [userRows] = await pool.query(`SELECT * FROM User WHERE email = ?`, [
      email,
    ]);

    if (userRows.length === 0) {
      throw new Error("Email atau password salah.");
    }

    const user = userRows[0];

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Email atau password salah.");
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.user_id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return {
      token,
      message: "Login berhasil.",
    };
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
}

export async function createOneUser({
  name,
  username,
  email,
  password,
  picture,
  country_code,
  phone_number,
}) {
  try {
    await pool.query("START TRANSACTION");

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Generate verification token
    const verificationToken = uuidv4();

    const [newUser] = await pool.query(
      `
      INSERT INTO User (name, username, email, password, picture, country_code, phone_number, verification_token)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        name,
        username,
        email,
        hashedPassword,
        picture,
        country_code,
        phone_number,
        verificationToken,
      ]
    );

    const userId = newUser.insertId;

    // Send verification email
    await sendVerificationEmail(email, verificationToken);

    await pool.query("COMMIT");

    return {
      userId,
      message: "Pengguna berhasil dibuat. Silakan verifikasi email Anda.",
    };
  } catch (error) {
    await pool.query("ROLLBACK");
    console.error("Error creating user:", error);
    throw error;
  }
}

export async function verifyEmail(token) {
  try {
    const [userRows] = await pool.query(
      `SELECT * FROM User WHERE verification_token = ?`,
      [token]
    );

    if (userRows.length === 0) {
      throw new Error("Token verifikasi tidak valid.");
    }

    const user = userRows[0];

    await pool.query(
      `UPDATE User SET is_verified = TRUE, verification_token = NULL WHERE user_id = ?`,
      [user.user_id]
    );

    return { message: "Email berhasil diverifikasi." };
  } catch (error) {
    console.error("Error verifying email:", error);
    throw error;
  }
}
