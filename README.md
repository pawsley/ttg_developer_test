# ttg_developer_test
TTG Developer Test

Untuk Soal 1, Soal 2 dan Soal 3 cukup menjalankan index.html saja

Soal 2

## Fitur
- POST /users
- GET /users
- GET /users/:id
- DELETE /users/:id

## Tech Stack
- Node.js
- Express
- MySQL
- Buat database dengan nama soal2_db
- Kemudian jalankan query SQL ini untuk membuat table users
  
  CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password_user VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

- Untuk mengaktifkan koneksi buka dan edit db.js sesuaikan dengan komputer client

## Jalankan Project
npm install
node app.js
