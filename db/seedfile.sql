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

INSERT INTO InventoryProducts
(product_name, part_number, product_label, product_image, current_count, minimum_stock, price, alert_when_low)
VALUES
('POP Heroes: Batman vs Superman - Wonder Woman Action Figure (Collectible figure)', 'E00FE', 'From the hit movie Batman vs Superman: Dawn of Justice, Wonder Woman, as a stylized POP vinyl from Funko!',
'https://images-na.ssl-images-amazon.com/images/I/51nkI-uBA6L.jpg', 10, 2, 9.50, true),
('Funko Batman The Animated Series Robin Pop Heroes Figure', 'E00FF', 'From Batman The Animated Series, Robin, as a stylized POP vinyl from Funko. Stylized collectable stands 3 ¾ inches tall, perfect for any Batman The Animated Series fan. Collect and display all Batman The Animated Series POP Vinyls.',
'https://images-na.ssl-images-amazon.com/images/I/41D5b2RnHLL.jpg', 9, 2, 7.30, true),
('Funko POP Heroes Classic Batman Action Figure', 'E000F', 'From DC Heroes, Classic Batman, as a stylized POP vinyl from Funko. Stylized collectable stands 3 ¾ inches tall, perfect for any DC Heroes fan. Collect and display all DC Heroes POP Vinyls.', 
'https://images-na.ssl-images-amazon.com/images/I/41qdDvyhAmL.jpg', 5, 2, 10.99, true),
('Funko POP Heroes: Batman vs Superman - Batman Action Figure', 'E0000', 'From the hit movie Batman vs Superman: Dawn of Justice, Batman, as a stylized POP vinyl from Funko! Stylized collectable stands 3 3/4 inches tall, perfect for any Batman, Superman, or DC fan! Collect and display all Batman vs Superman Pop! Vinyl`s!',
'https://images-na.ssl-images-amazon.com/images/I/41BbTiIg9vL.jpg', 3, 2, 10.50, true),
('Funko Batman The Animated Series Harley Quinn Pop Heroes Figure', 'F0FFF', 'Imported. From Batman The Animated Series, Harley Quinn, as a stylized POP vinyl from Funko. Stylized collectable stands 3 ¾ inches tall, perfect for any Batman The Animated Series fan. Collect and display all Batman The Animated Series POP Vinyls.', 
'https://images-na.ssl-images-amazon.com/images/I/41wYHMMhEOL.jpg', 4, 3, 10.99, true),
('Funko Batman: Arkham Knight - Harley Quinn POP! Action Figure', 'F00FF', 'Stands 3 3/4 Inch. Collect all Funko Pops!',
'https://images-na.ssl-images-amazon.com/images/I/617Cv92s5hL._SL1000_.jpg', 15, 4, 10.99, true),
('Mezco Toys One:12 Collective: DC Batman Sovereign Knight (Blue Version) Action Figure', 'FFFFF', 'One: 12 collective body with over 30 points of articulation. Reflects the present-day incarnation of Batman in his prime. Two interchangeable heads. Nine interchangeable hands. Comes with Batman`s, grappling gun, Sonic disruptor, bat-drone and kryptonite knuckle dusters.',
'https://images-na.ssl-images-amazon.com/images/I/71m2BZ4W36L._SL1500_.jpg', 1, 0, 85.00, FALSE),
('Tamashii Nations S.H.Figuarts Batman Ninja 6-Inch Figure', 'C0000', 'Ninja Batman 6 Inch Action Figure S.H. Figuarts - Ninja Batman. 6 inch figure.',
'https://images-na.ssl-images-amazon.com/images/I/81Wix4Jc0oL._SL1500_.jpg', 8, 0, 59.99, false),
('DC Collectibles DC Essentials: Batman Action Figure', 'C000C', 'A new line of 7" figures in 1:10 scale. Depicts classic DC characters with universal appeal. Figure features 19 points of articulation. Based on the designs of acclaimed artist Jason Fabok.',
'https://images-na.ssl-images-amazon.com/images/I/71PvSMKpQOL._SL1500_.jpg', 3, 0, 26.00, FALSE),
('Medicom Batman Begins: Batman MAF EX Action Figure', 'C00CC', 'From the classic Batman film. Figure stands 6" tall. Interchangeable Bruce Wayne head included. Removable cape, grapnel gun, base and more accessories.',
'https://images-na.ssl-images-amazon.com/images/I/71pRf9h%2Bq7L._SL1500_.jpg', 4, 0, 39.95, FALSE),
('Quantum Mechanix World`s Finest: Batman & Superman Q-Fig Max Figure', 'C0CCC', 'Depicts the complex relationship between the two heroes. Superman shares the joy of flight his very best friend, Batman. Inspired by the DC rebirth versions of the characters. Unique Cloud base completes the image of the heroes in flight.',
'https://images-na.ssl-images-amazon.com/images/I/717yZoxvlTL._SL1500_.jpg', 20, 5, 29.95, TRUE),
('Batman Mechs vs Mutants Deadshot Figure', 'CCCCC', 'Richly authentic, deluxe 12” Deadshot figure inspired by the new Suicide Squad movie. 9 points of articulation for great action play and display. Iconic suit with cyber-powered radar monocle, two-tone mask and hands that grip weapons, sold separately.',
'https://images-na.ssl-images-amazon.com/images/I/81of70K7nDL._SL1500_.jpg', 5, 1, 14.99, TRUE);

CREATE TABLE IF NOT EXISTS InventoryClients (
    client_id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    phone_number TEXT,
    email TEXT,
    company TEXT,
    company_address_line_1 TEXT,
    company_address_line_2 TEXT,
    mailing_address_line_1 TEXT,
    mailing_address_line_2 TEXT
);

INSERT INTO InventoryClients 
(first_name, last_name, phone_number, email, company, company_address_line_1, company_address_line_2, mailing_address_line_1, mailing_address_line_2)
VALUES
('Rod', 'Ferdinand', '801-899-2456', 'rodboy@generalgoods.com', 'General Goods', '123 South 23 East', 'Houston TX 77001', '123 South 23 East', 'Houston TX 77001');

CREATE TABLE IF NOT EXISTS InventoryEmployees (
    employee_id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    phone_number TEXT,
    email TEXT,
    address_line_1 TEXT,
    address_line_2 TEXT,
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

SELECT * FROM InventoryProducts;
SELECT * FROM InventoryClients;
SELECT * FROM InventoryOrders;

