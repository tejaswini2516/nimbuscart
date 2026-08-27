import { Container, Grid, Typography } from "@mui/material";
import ProductCard from "../../components/common/ProductCard";
import hero from "../../assets/hero.png";
import { getProducts } from "../../services/productService";


function Products() {
    const products = getProducts();
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Products
      </Typography>

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