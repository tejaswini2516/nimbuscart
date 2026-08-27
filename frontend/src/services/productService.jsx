import hero from "../assets/hero.png";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2499,
    image: hero,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 3999,
    image: hero,
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 1299,
    image: hero,
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 1999,
    image: hero,
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: 3499,
    image: hero,
  },
  {
    id: 6,
    name: "USB-C Hub",
    price: 1599,
    image: hero,
  },
];

export function getProducts() {
  return products;
}

export function getFeaturedProducts() {
  return products.slice(0, 3);
}