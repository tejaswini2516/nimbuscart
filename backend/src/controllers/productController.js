const pool = require("../config/db");

async function getProducts(req, res) {
  try {
    const result = await pool.query(
      "SELECT * FROM products ORDER BY id"
    );

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching products:", error);

    res.status(500).json({
      message: "Failed to fetch products",
    });
  }
}

async function getProductById(req, res) {
  try {
    const id = Number(req.params.id);

    const result = await pool.query(
      "SELECT * FROM products WHERE id = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching product:", error);

    res.status(500).json({
      message: "Failed to fetch product",
    });
  }
}

module.exports = {
  getProducts,
  getProductById,
};