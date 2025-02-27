
-- Tabel User
CREATE TABLE User (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    picture VARCHAR(255),
    country_code VARCHAR(10),
    phone_number VARCHAR(20)
);

-- Tabel Kategori Kelas
CREATE TABLE KategoriKelas (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description TEXT
);

-- Tabel Produk Kelas
CREATE TABLE ProdukKelas (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(150) NOT NULL,
    description TEXT,
    base_price DECIMAL(10,2) NOT NULL,
    discount DECIMAL(5,2),
    language VARCHAR(50),
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES KategoriKelas(category_id)
);

-- Tabel Pretest (One-to-One dengan ProdukKelas)
CREATE TABLE Pretest (
    pretest_id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT UNIQUE,
    title VARCHAR(150),
    description TEXT,
    passing_score INT,
    FOREIGN KEY (product_id) REFERENCES ProdukKelas(product_id)
);

-- Tabel Modul Kelas
CREATE TABLE ModulKelas (
    module_id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT,
    title VARCHAR(150),
    description TEXT,
    order_index INT,
    FOREIGN KEY (product_id) REFERENCES ProdukKelas(product_id)
);

-- Tabel Material
CREATE TABLE Material (
    material_id INT PRIMARY KEY AUTO_INCREMENT,
    module_id INT,
    type ENUM('rangkuman', 'video', 'quiz'),
    title VARCHAR(150),
    content TEXT,
    order_index INT,
    FOREIGN KEY (module_id) REFERENCES ModulKelas(module_id)
);

-- Tabel Tutor
CREATE TABLE Tutor (
    tutor_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    bio TEXT,
    picture VARCHAR(255),
    email VARCHAR(100)
);

-- Tabel Join untuk ProdukKelas dan Tutor (Many-to-Many)
CREATE TABLE ProdukKelas_Tutor (
    product_id INT,
    tutor_id INT,
    PRIMARY KEY (product_id, tutor_id),
    FOREIGN KEY (product_id) REFERENCES ProdukKelas(product_id),
    FOREIGN KEY (tutor_id) REFERENCES Tutor(tutor_id)
);

-- Tabel KelasSaya (Enrollment)
CREATE TABLE KelasSaya (
    enrollment_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    product_id INT,
    enrollment_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    progress DECIMAL(5,2),
    FOREIGN KEY (user_id) REFERENCES User(user_id),
    FOREIGN KEY (product_id) REFERENCES ProdukKelas(product_id)
);

-- Tabel Pembayaran
CREATE TABLE Pembayaran (
    payment_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    product_id INT,
    payment_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    amount DECIMAL(10,2),
    status VARCHAR(50),
    payment_method VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES User(user_id),
    FOREIGN KEY (product_id) REFERENCES ProdukKelas(product_id)
);

-- Tabel Review
CREATE TABLE Review (
    review_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    product_id INT,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    review_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES User(user_id),
    FOREIGN KEY (product_id) REFERENCES ProdukKelas(product_id)
);
