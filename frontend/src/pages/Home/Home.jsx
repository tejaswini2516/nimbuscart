import { useEffect, useState } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import ProductCard from "../../components/common/ProductCard";
import { getFeaturedProducts } from "../../services/productService";

function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadFeaturedProducts() {
      try {
        const data = await getFeaturedProducts();
        setProducts(data);
      } catch (err) {
        console.error("Error loading featured products:", err);
        setError("Unable to load featured products");
      }
    }

    loadFeaturedProducts();
  }, []);

  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(to right, #1565C0, #42A5F5)",
          color: "white",
          py: 8,
        }}
      >
        <Container>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Welcome to NimbusCart
          </Typography>

          <Typography variant="h6" sx={{ mb: 3 }}>
            Discover quality products at the best prices.
          </Typography>

          <Button variant="contained" color="secondary" size="large">
            Shop Now
          </Button>
        </Container>
      </Box>

      <Container sx={{ py: 6 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Featured Products
        </Typography>

        {error && (
          <Typography color="error">
            {error}
          </Typography>
        )}

        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid key={product.id} size={{ xs: 12, md: 4 }}>
              <ProductCard {...product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Home;