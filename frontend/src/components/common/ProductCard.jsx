import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

function ProductCard({ name, price, image }) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt={name}
      />

      <CardContent>
        <Typography variant="h6">{name}</Typography>

        <Typography color="primary" fontWeight="bold" sx={{ mb: 2 }}>
          ₹{price}
        </Typography>

        <Button variant="contained" fullWidth>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;