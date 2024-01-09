import { pool } from "../db.js";
import { formatDate } from "../function/formaDate.js";
//! GET
export const getTests = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tasks ORDER BY createAt ASC"
    );
    for (let i = 0; i < result.length; i++) {
      result[i].createAt = formatDate(result[i].createAt);
    }
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//! GET + ID
export const getTest = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM tasks WHERE id = ?", [
      req.params.id,
    ]);
    result.length === 0
      ? res.status(404).json({ message: "Task not found" })
      : res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//! POST
export const createTests = async (req, res) => {
  try {
    const { title, description } = req.body;
    const [result] = await pool.query(
      "INSERT INTO tasks(title, description) VALUES (?, ?)",
      [title, description]
    );
    res.json({
      id: result.insertId,
      title,
      description,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//! PUT
export const updateTests = async (req, res) => {
  try {
    const { title, description } = req.body;
    const result = await pool.query("UPDATE tasks SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    result.affectedRows === 0
      ? res.status(404).json({ message: "Task not found" })
      : res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//! DELETE
export const deleteTests = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [
      req.params.id,
    ]);
    result.affectedRows === 0
      ? res.status(404).json({ message: "Task not found" })
      : res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
