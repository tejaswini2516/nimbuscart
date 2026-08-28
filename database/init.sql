CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    stock INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO products (name, price, description, stock)
VALUES
('Wireless Headphones', 2499.00, 'Bluetooth wireless headphones', 25),
('Smart Watch', 3999.00, 'Smart fitness tracking watch', 15),
('Gaming Mouse', 1299.00, 'Ergonomic gaming mouse', 30),
('Bluetooth Speaker', 1999.00, 'Portable Bluetooth speaker', 20),
('Mechanical Keyboard', 3499.00, 'Mechanical gaming keyboard', 10),
('USB-C Hub', 1599.00, 'Multi-port USB-C hub', 18);