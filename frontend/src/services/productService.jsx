import hero from "../assets/hero.png";

const API_URL = "http://localhost:5000/api/products";

export async function getProducts() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const products = await response.json();

  return products.map((product) => ({
    ...product,
    price: Number(product.price),
    image: hero,
  }));
}

export async function getFeaturedProducts() {
  const products = await getProducts();
  return products.slice(0, 3);
}