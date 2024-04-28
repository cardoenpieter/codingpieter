const express = require("express");
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const db = require("./services/db");
const verifyToken = require("./middleware/verifyToken");
const checkIfAdmin = require("./middleware/checkIfAdmin");
const app = express();

require("dotenv").config();

app.use(express.json());

app.post("/auth/token", (req, res) => {
  const email = req.body.email;
  const password = req.body.password; // plain text password

  db.get(`SELECT * FROM user WHERE email = ?`, [email], (err, row) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    if (!row) {
      return res
        .status(401)
        .json({ message: "User or password are incorrect." });
    }
    const storedPassword = row.password; // hashed password in db
    const hashedPassword = md5(password);
    if (storedPassword !== hashedPassword) {
      return res
        .status(401)
        .json({ message: "User or password are incorrect." });
    }
    // the user can login, so we return a token
    const token = jwt.sign(
      {
        email: row.email,
        role: "admin",
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "10d",
      }
    );
    res.status(200).json({ token });
  });
});

app.get("/user", function (req, res, next) {
  const limit = req.query.limit || 10;
  db.all(`SELECT * FROM user LIMIT ?`, [limit], (err, rows) => {
    if (err) {
      res.status(500).json({ message: err.message });
    }
    res.json(rows);
  });
});

app.get("/user/:id", function (req, res) {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({ message: "Invalid ID." });
  }
  db.get(`SELECT * FROM user WHERE id = ?`, [id], (err, row) => {
    res.json(row);
  });
});

app.post("/user", function (req, res) {
  const { name, email, password } = req.body;
  db.run(
    `INSERT INTO user (name, email, password) VALUES (?,?,?)`,
    [name, email, md5(password)],
    (err) => {
      if (err) {
        next(err.message);
      }
      res.status(201).json({ message: "User created" });
    }
  );
});

app.put("/user/:id", verifyToken, function (req, res) {
  const id = req.params.id;
  const { name, email, password } = req.body;
  db.run(
    `UPDATE user SET name = ?, email = ?, password = ? WHERE id = ?`,
    [name, email, password, id],
    (err) => {
      res.status(202).json({ message: "User updated" });
    }
  );
});

app.delete("/user/:id", verifyToken, checkIfAdmin, function (req, res) {
  const id = req.params.id;
  db.run(`DELETE FROM user WHERE id = ?`, [id], (err) => {
    res.json({ message: "User deleted" });
  });
});

app.use("*", (req, res) => {
  res.status(404).json({ message: "Not Found" });
});

app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "Something went wrong." });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
