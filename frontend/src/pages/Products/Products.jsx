import { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import ProductCard from "../../components/common/ProductCard";
import { getProducts } from "../../services/productService";

function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error("Error loading products:", err);
        setError("Unable to load products");
      }
    }

    loadProducts();
  }, []);

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Products
      </Typography>

      {error && (
        <Typography color="error">
          {error}
        </Typography>
      )}

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Products;