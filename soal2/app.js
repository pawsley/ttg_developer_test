const express = require("express");
const db = require("./db");

const app = express();
app.use(express.json()); // validasi JSON

// =======================
// POST - Tambah pengguna
// =======================
app.post("/users", (req, res) => {
  const { name, email, password_user } = req.body;

  if (!name || !email || !password_user) {
    return res.status(400).json({ message: "Name, Email, dan Password wajib diisi" });
  }

  const sql = "INSERT INTO users (name, email, password_user) VALUES (?, ?, ?)";

  db.query(sql, [name, email, password_user], (err, result) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        return res.status(400).json({ message: "Email sudah terdaftar" });
      }
      return res.status(500).json(err);
    }

    res.status(201).json({
      message: "User berhasil ditambahkan",
      id: result.insertId
    });
  });
});

// =======================
// GET - Semua pengguna
// =======================
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// =======================
// GET - Pengguna by ID
// =======================
app.get("/users/:id", (req, res) => {
  const { id } = req.params;

  db.query("SELECT * FROM users WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json(err);

    if (results.length === 0) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }

    res.json(results[0]);
  });
});

// =======================
// DELETE - Hapus pengguna
// =======================
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM users WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json(err);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }

    res.json({ message: "User berhasil dihapus" });
  });
});

// =======================
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
