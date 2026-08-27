import {
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

import { useCart } from "../../context/CartContext";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    clearCart,
  } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <Container sx={{ py: 6 }}>
        <Typography variant="h4">
          Your Cart
        </Typography>

        <Typography sx={{ mt: 2 }}>
          Your cart is empty.
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>

      <List>
        {cartItems.map((item) => (
          <ListItem
            key={item.id}
            divider
            secondaryAction={
              <Button
                color="error"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </Button>
            }
          >
            <ListItemText
              primary={item.name}
              secondary={`₹${item.price} × ${item.quantity}`}
            />
          </ListItem>
        ))}
      </List>

      <Typography variant="h6" sx={{ mt: 3 }}>
        Total: ₹{total}
      </Typography>

      <Button
        variant="outlined"
        color="error"
        sx={{ mt: 2 }}
        onClick={clearCart}
      >
        Clear Cart
      </Button>
    </Container>
  );
}

export default Cart;