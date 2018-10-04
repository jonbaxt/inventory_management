DROP TABLE IF EXISTS InventoryOrders;
DROP TABLE IF EXISTS InventoryEmployees;
DROP TABLE IF EXISTS InventoryClients;
DROP TABLE IF EXISTS InventoryProducts;

CREATE TABLE IF NOT EXISTS InventoryProducts (
    inventory_id SERIAL PRIMARY KEY,
    product_name TEXT,
    part_number TEXT,
    product_label TEXT,
    product_image TEXT,
    current_count INTEGER,
    minimum_stock INTEGER,
    price DECIMAL,
    alert_when_low BOOLEAN
);

CREATE TABLE IF NOT EXISTS InventoryClients (
    client_id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    phone_number TEXT,
    email TEXT,
    company TEXT,
    company_address_line_1 TEXT,
    company_address_line_2 TEXT,
    company_address_line_3 TEXT,
    mailing_address_line_1 TEXT,
    mailing_address_line_2 TEXT,
    mailing_address_line_3 TEXT
);

CREATE TABLE IF NOT EXISTS InventoryEmployees (
    employee_id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    phone_number TEXT,
    email TEXT,
    address_line_1 TEXT,
    address_line_2 TEXT,
    address_line_3 TEXT,
    employee_role TEXT
);

CREATE TABLE IF NOT EXISTS InventoryOrders (
    order_id SERIAL PRIMARY KEY,
    date_ordered DATE,
    date_shipped DATE,
    date_recieved DATE,
    completed BOOLEAN,
    product_sold_id INTEGER REFERENCES InventoryProducts(inventory_id) ON DELETE CASCADE,
    client_id INTEGER REFERENCES InventoryClients(client_id) ON DELETE CASCADE
);
