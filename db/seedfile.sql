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
'https://images-na.ssl-images-amazon.com/images/I/81of70K7nDL._SL1500_.jpg', 5, 1, 14.99, TRUE),
('Nano Metalfigs DC Comics 10-Pack Set 1', 'CCCCQ', 'Set includes: Superman (Red and Blue), Killer Croc, Green Lantern, Wonder Woman, The Flash, Mr. Freeze, Two-Face , Metamorpho, Martian Manhunter, and Batman (Silver and Black). Figures are made of die-cast. Figures are just over 1.5 inches tall and do not have any articulation.',
'https://images-na.ssl-images-amazon.com/images/I/51sg7u75NTL._SX425_.jpg', 20, 2, 14.95, TRUE),
('Sonic Classic Metal & Modern Metal with Comic Book, Blue', 'CCCQQ', 'Include 2 figures and comic book. Comes with Archie comic. Ages 4+.',
'https://images-na.ssl-images-amazon.com/images/I/81ROnC8b0mL._SL1500_.jpg', 20, 10, 16.99, TRUE),
('DC Comics Justice League New Frontier Bendable Action Figures Superhero Set', 'CCQQQ', 'A must have for all DC Comics fans. Unique Box Set featuring The Flash. Made with safe, nontoxic PVC bendable material. A must have for all DC Comics fans. Not Suitable for Children under 3 years old.',
'https://images-na.ssl-images-amazon.com/images/I/618YfbkRbaL._SL1001_.jpg', 2, 0, 30.36, FALSE),
('The Simpsons Series 15 Action Figure Comic Book Guy', 'CQQQQ', 'Playmates - The Simpsons - World of Springfield Interactive Figures - Series 15 - Comic Book Guy',
'https://images-na.ssl-images-amazon.com/images/I/4151672A1EL.jpg', 1, 0, 37.13, FALSE);

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
('Rod', 'Ferdinand', '801-899-2456', 'rodboy@generalgoods.com', 'General Goods', '123 South 23 East', 'Houston TX 77001', '123 South 23 East', 'Houston TX 77001'),
('Dean', 'Thomas', '414-000-3213', 'dthomas@disney.go.com', 'Disney Enterprises', '100 South Buena Vista Road', 'Los Angeles CA 90001', '100 South Buena Vista Road', 'Los Angeles CA 90001'),
('Rand', 'Paul', '921-222-9009', 'rand@randpaul.com', 'Senator of the USA', '10 E. Capitol Hill', 'Washington DC 20001', '1000 W. 1400 S.', 'Louisville, KY 40018'),
('Todd', 'Christensen', '801-202-4715', 'todd201827@yahoo.com', 'Orem Walmart', '100 E Sandhill RD', 'Orem, UT 84058', '100 E Sandhill RD', 'Orem, UT 84058'),
('Rudy', 'Anderson', '801-812-2000', 'rudyinorem@target.com', 'Orem Target', '100 E Center St', 'Orem, UT 84058', '100 E Center St', 'Orem, UT 84058'),
('Chance', 'Sharp', '801-200-2121', 'chance@jpmmorganc.com', 'JP Morgan Salt Lake City', '5 W 200 S', 'Salt Lake Ciy, UT 84044', '5 W 200 S', 'Salt Lake Ciy, UT 84044'),
('Devan', 'Oswald', '801-592-4561', 'oswald@wellsfargo.com', 'Wells Fargo Salt Lake City Headquarters', '1200 E 500 N', 'Salt Lake City, UT 84044', '1200 E 500 N', 'Salt Lake City, UT 84044'),
('George', 'Costansa', '801-100-1999', 'costansa@burtonmurdoch.com', 'Burton Murdoch Salt Lake', '1162 W 100 S', 'Salt Lake City, UT 84044', '1162 W 100 S', 'Salt Lake City, UT 84044'),
('Barholemew', 'Rudy', '801-451-4856', 'rudy@gmail.com', 'Rizzo Repairs Salt Lake', '300 W 4015 S', 'Salt Lake City, UT 84044', '300 W 4015 S', 'Salt Lake City, UT 84044'),
('Rick', 'Grimes', '801-888-7898', 'grimes@saltlakepolice.org', 'Salt Lake Police Department', '5 E 120 N', 'Salt Lake City, UT 84044', '5 E 120 N', 'Salt Lake City, UT 84044'),
('Ted', 'Mosby', '801-100-1000', 'ted@mosbyindustries.com', 'Mosby Industries', '2100 W 1600 N', 'Salt Lake City, UT 84044', '2100 W 1600 N', 'Salt Lake City, UT 84044'),
('Ray', 'Charles', '801-808-8000', 'ray@spoons.com', 'Spoons Inc.', '94 E 200 S', 'Salt Lake City, UT 84044', '94 E 200 S', 'Salt Lake City, UT 84001'),
('Bob', 'Villa', '801-888-9102', 'bob@villahomes.com', 'Villa Homes', '123 Fake Street', 'Provo, UT 84053', '123 Fake Street', 'Provo, UT 84053'),
('Ray', 'Stanz', '999-102-3827', 'ray@cornbellys.com', 'Cornbellys Utah', '100 S 1000 E', 'Lehi, UT 84043', '100 S 100 E', 'Lehi, UT 84043' ),
('Rodney', 'Dangerfield', '801-802-1928', 'rod@dangeresque.com', 'Dangeresque Films', '1050 S 10 E', 'Provo, UT 84404', '1050 S 10 E', 'Provo, UT 84404'),
('Gary', 'Herbert', '801-100-1000', 'gherbert@utah.gov', 'State of Utah', '100 S Capital Hill Drive', 'Salt Lake City, UT 84404', 'PO Box 100', 'Salt Lake City, UT 84404'),
('Adam', 'Sandler', '399-219-9999', 'adam@happymadison.com', 'Happy Madison Productions', '3680 N Happy Ave', 'Los Angeles, CA 90001', 'PO Box 385', 'Los Angeles, CA 90001'),
('Ryan', 'Reynolds', '301-298-1387', 'ryan@ryanreynolds.com', '20th Century Fox', '4055 S 20th Century Ave', 'Los Angeles, CA 90001', 'PO Box 3049', 'Los Angeles, CA 90001'),
('John', 'Perry', '801-002-1113', 'johnperry01@walmart.com', 'Lindon Walmart', '102 S State Street', 'Lindon, UT 84042', '102 S State Street', 'Lindon, UT 84042')
;

CREATE TABLE IF NOT EXISTS InventoryEmployees (
    employee_id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    id_pic TEXT,
    phone_number TEXT,
    email TEXT,
    address_line_1 TEXT,
    address_line_2 TEXT,
    employee_role TEXT
);

INSERT INTO InventoryEmployees
(first_name, last_name, id_pic, phone_number, email, address_line_1, address_line_2, employee_role)
VALUES
('Dave', 'Thomas', 'https://amp.businessinsider.com/images/51ca1b176bb3f76b0e000004-750-563.jpg', '801-888-2541', 'dave@wendys.com', '123 E Wendys Lane', 'Provo, UT 84601', 'Shelf Stocker'),
('Thomas', 'Cat', 'https://banner2.kisspng.com/20171218/38b/tom-and-jerry-png-5a37adb327b907.5548566515135983871627.jpg', 'no number', 'tommy@cat.me', 'Backyard of Owners House', 'Provo, UT 84601', 'Security'),
('Bugs', 'Bunny', 'https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/220px-Bugs_Bunny.svg.png', '801-111-1545', 'bugs@toon.com', '20 E 20 S', 'Provo, UT 84601', 'Shelf Stocker'),
('Daffy', 'Duck', 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Daffy_Duck.svg/1200px-Daffy_Duck.svg.png', '801-123-1555', 'daff@toon.com', '45 E 20 S', 'Provo, UT 84601', 'Shelf Stocker'),
('Michael', 'Jordan', 'https://cdn.nba.net/nba-drupal-prod/styles/landscape/http/i2.cdn.turner.com/nba/nba/dam/assets/130828123801-michael-jordan-iso-1998-all-star-game.video-player.jpg?itok=6H7vzj5I', '801-454-8598', 'mike@thebulls.com', '50 E 20 S', 'Provo, UT 84601', 'Shelf Stocker'),
('Porky', 'Pig', 'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Porky_Pig.svg/1200px-Porky_Pig.svg.png', '801-789-9874', 'porky@toon.com', '85 E 20 S', 'Provo, UT 84601', 'Shelf Stocker'),
('Taz', 'Devil', 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Taz-Looney_Tunes.svg/220px-Taz-Looney_Tunes.svg.png', '801-100-1000', 'taz@toon.com', '75 E 20 S0', 'Provo, UT 84601', 'Shelf Stocker'),
('Buster', 'Bunny', 'https://vignette.wikia.nocookie.net/loveinterest/images/e/ef/Buster_bunny_standard_by_cheril59-danijzl.png/revision/latest?cb=20180405110250', '801-101-1001', 'buster@toon.com', '70 E 20 S', 'Provo, UT 84601', 'Shelf Stocker'),
('Babs', 'Bunny', 'https://i.pinimg.com/originals/db/e1/d3/dbe1d335b7bcec2a35c6c201638e94b6.png', '801-102-1000', 'babs@toon.com', '70 E 20 S', 'Provo, UT 84601', 'Shelf Stocker'),
('Jon', 'Baxter', 'https://ksassets.timeincuk.net/wp/uploads/sites/55/2018/09/bman-920x584.png', '801-800-1000', 'jon@inventory.com', '547 E 200 N', 'Provo, UT 84601', 'Web Manager');

CREATE TABLE IF NOT EXISTS InventoryOrders (
    order_id SERIAL PRIMARY KEY,
    date_ordered DATE,
    date_shipped DATE,
    date_recieved DATE,
    completed BOOLEAN,
    order_notes TEXT,
    product_sold_id INTEGER REFERENCES InventoryProducts(inventory_id) ON DELETE CASCADE,
    employee_who_entered_id INTEGER REFERENCES InventoryEmployees(employee_id) ON DELETE CASCADE,
    purchaser_id INTEGER REFERENCES InventoryClients(client_id) ON DELETE CASCADE
);

INSERT INTO InventoryOrders
( date_ordered,
    date_shipped,
    date_recieved,
    completed,
    order_notes,
    product_sold_id,
    employee_who_entered_id,
    purchaser_id )
VALUES
('2018-5-1', '2018-5-2', '2018-5-3', TRUE, 'no notes', 1, 1, 1),
('2018-10-1', '2018-10-3', NULL, FALSE, 'Wanted, one day shipping, it was unfortunately before a holdiay.', 3, 1, 2),
('2018-10-2', '2018-10-4', NULL, FALSE, '', 4, 1, 5),
('2018-10-5', '2018-10-7', NULL, FALSE, '', 2, 2, 3),
('2018-9-1', '2018-9-3', '2018-9-5', TRUE, '', 1, 2, 6),
('2018-9-3', '2018-9-5', '2018-9-7', TRUE, '', 1, 2, 4);

SELECT * FROM InventoryProducts;
SELECT * FROM InventoryClients;
SELECT * FROM InventoryEmployees;
SELECT * FROM InventoryOrders;