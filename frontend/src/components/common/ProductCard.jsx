import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { useCart } from "../../context/CartContext";

function ProductCard({id, name, price, image }) {
    const { addToCart } = useCart();

  function handleAddToCart() {
    addToCart({
      id,
      name,
      price,
      image,
    });
  }
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

        <Button variant="contained" fullWidth  onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;