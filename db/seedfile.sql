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
'https://images-na.ssl-images-amazon.com/images/I/4151672A1EL.jpg', 1, 0, 37.13, FALSE),
('The Wiggles post 2010s', '01298', 'Available for your birthday party for a concert.', 'https://abccommercial-production-aws.s3-ap-southeast-2.amazonaws.com/styles/article__670_x_375_/s3/articles/field/image/the-wiggles-media.jpg?itok=PSfm7afY', 1, 0, 75000.00, FALSE),
('Nintendo New 3DS XL - Super NES Edition + Super Mario Kart for SNES', 'QQQQA', 'The New Nintendo 3DS XL system combines next-generation portable gaming. The New Nintendo 3DS XL system plays all Nintendo DS games. Nintendo DS games will not appear in 3D. AC adapter sold separately. New Nintendo 3DS XL uses the same AC adapter as the Nintendo DSi, Nintendo 3DS and Nintendo 2DS systems. 3D Mode can be switched on and off and is recommended for Ages 7+ Includes download code for Super Mario Kart (Super NES). Dimensions (open):6.78 × 6.3 × 0.8 inches,Dimensions (folded):3.7 × 6.3 x 0.8 inches.', 'https://images-na.ssl-images-amazon.com/images/I/71q8G2cmmAL._AC_.jpg', 10, 1, 149.99, TRUE),
('LEGO Star Wars X-Wing Starfighter 75218', '75218', 'Build an iconic Rebel X-Wing Starfighter with lever-activated wings and retractable landing gear! Includes Luke Skywalker and biggs dark lighter pilot mini figures, plus R2-D2 and r2-q2 Droids. 731 pieces – for boys and girls between the ages of 8 and 14. LEGO Star Wars building toys are compatible with all lego construction sets for creative building. X-wing in attack mode measures over 4” (11cm) high, 13” (34cm) long and 11” (30cm) wide. Recreate classic space battles from the Star Wars saga.', 'https://images-na.ssl-images-amazon.com/images/I/81q4US7N48L._SL1500_.jpg', 25, 5, 79.99, TRUE),
('Trekking The National Parks: The Family Board Game (Second Edition)', 'QQQAA', 'This MENSA Award winning U.S. National Parks board game is a fun and competitive way to spend a night with your family! Unique evergreen theme that appeals to a wide range of people: outdoor lovers, board game players and gift givers. Simple and elegant game rules that children, teens, families, grandparents, and everyone in between can easily grasp. Learn the geography of the major national parks from the beautiful game board and enjoy the many educational park facts printed on the game cards. Trekking the National Parks brings the fun and challenge of modern family board games to your table. The game was specially designed to be both entertaining and educational!', 'https://images-na.ssl-images-amazon.com/images/I/91Kc5so976L._SL1500_.jpg', 18, 3, 50.00, FALSE),
('KidKraft Vintage Kitchen - White', 'QQAAA', 'Doors open and close. Oven knobs click and turn. Assembled Product Dimensions (L x W x H) : 33.00 x 13.00 x 35.70 Inches. Cordless phone. Removable sink for easy cleanup.', 'https://images-na.ssl-images-amazon.com/images/I/81s3iZ1DxfL._SL1500_.jpg', 10, 2, 146.93, TRUE),
('Hot Wheels Ultimate Gator Car Wash Playset', 'QAAAA', 'Impressive large-scale car wash set with color change features and a giant gator! Kids crank the elevator to send their car to the top and around the track for a car wash and color change fun. Push-around-play rollers and brushes for cleaning cars help develop motor skills and magical color change moments ignite kids` imagination. Escape the swirling whirlpool without getting caught in the giant gator`s jaws! Set includes a manual crank elevator, crazy track, water tower, whirlpool dunk tank, and 1 Color Shifters car.', 'https://images-na.ssl-images-amazon.com/images/I/81MiK1QwgVL._SL1500_.jpg', 50, 15, 69.99, TRUE),
('PLAYMOBIL® Hidden Temple with T-Rex Building Set', 'AUXXX', 'Join the explorers as they embark on a new adventure on Dino island with the hidden Temple with T-Rex. Once you discover the Temple, use the ancient structure as your research base before heading out to explore the island with the help of the secret map. Simply rub the map to reveal a hidden path where x marks the spot! when back at the base, protect the team from the unfriendly T-Rex or enemy explorers with the functioning laser gun. Beware of that T-Rex! his movable arms, legs, and jaw allow for realistic motion and make him one intimidating Dino! use the functioning pulley to bring needed equipment up to the top floor. Kids can also use the included UV flashlight (1 x AAA battery required) to reveal cool glow-in-the dark features, such as with the ruins crystal eyes, jungle plant, and more!', 'https://images-na.ssl-images-amazon.com/images/I/910jPsJDmYL._SL1500_.jpg', 15, 1, 59.99, TRUE),
('Gloomhaven', 'AXUXX', 'For 1-4 players. 60-120 minute playing time. A game of euro-inspired tactical combat in a persistent world of shifting motives.', 'https://images-na.ssl-images-amazon.com/images/I/51ulRXlJ7LL._SX425_.jpg', 5, 1, 139.99, TRUE),
('New Nintendo 2DS XL - Black + Turquoise With Mario Kart 7 Pre-installed - Nintendo 2DS', 'XAXUXX', 'Colorful accents add style, while the sleek clamshell design makes it comfortable to hold. A fast processor offers short loading times. The C Stick brings enhanced controls (like intuitive camera control) to compatible games, while ZL and ZR buttons give you plenty of options. You can play all Nintendo 3DS, New Nintendo 3DS and most Nintendo DS games in 2D on this system. so you can start playing in a snap. And it`s all in a lightweight, play-anywhere package. Tap an amiibo figure to the near-field communication (NFC) reader on the lower screen to enjoy amiibo features in compatible games; Entertainment Software Rating Board (ESRB). Content Description:Comic Mischief', 'https://images-na.ssl-images-amazon.com/images/I/71RL2xIeuAL._AC_.jpg', 2, 0, 149.99, FALSE),
('New Nintendo 2DS XL - Purple + Silver With Mario Kart 7 Pre-installed - Nintendo 2DS', 'BXXXX', 'Colorful accents add style, while the sleek clamshell design makes it comfortable to hold. A fast processor offers short loading times The C Stick brings enhanced controls (like intuitive camera control) to compatible games, while ZL and ZR buttons give you plenty of options. You can play all Nintendo 3DS, New Nintendo 3DS and most Nintendo DS games in 2D on this system, so you can start playing in a snap. And it`s all in a lightweight, play-anywhere package. Tap an amiibo figure to the near-field communication (NFC) reader on the lower screen to enjoy amiibo features in compatible games.', 'https://images-na.ssl-images-amazon.com/images/I/71%2BbFWIMITL._AC_.jpg', 5, 0, 149.99, FALSE),
('Razor E100 Glow Electric Scooter', 'XBXXX', 'One twist of the handle and the blue lights illuminate your way. With power that reaches speeds up to 10mph. All steel frame and fork construction. Front Wheel: 200 mm pneumatic front tire. Features kick start, high-torque, chain-driven motor, twist-grip acceleration control and hand operated front brake. For ages 8 and up;120 lbs Assembled Product Dimensions: 32.5 x 16 x 36 (inches); 8 inches pneumatic front tire. Initial charge time: 12 hours. Charge the battery prior to use. Recharge time: Up to 12 hours, even if the light turns green. Recommended maximum charging time is 24 hours. Run time: Up to 40 minutes of continuous ride time. Run time may vary depending on riding conditions, climate and/or proper maintenance.', 'https://images-na.ssl-images-amazon.com/images/I/71GvEM-kbpL._SL1500_.jpg', 60, 10, 169.99, TRUE),
('LEGO Jurassic World Indoraptor Rampage at Lockwood Estate 75930 Popular Building Kit, Best Fallen Kingdom Indoraptor Dinosaur Toy (1019 Pieces)', 'XXBXX', 'Join Owen and Claire on a thrilling adventure and Build the LEGO Jurassic World Indoraptor Rampage at Lockwood Estate set! Build the museum and laboratory from the film, with removable windows, collapsing roof function and dinosaur toys! Jurassic World dinosaur play set includes LEGO minifigures Owen, Claire, Maisie, Mills, Wheatley and Eversol, plus Indoraptor and Velociraptor figures. This is the coolest gift for boys and girls who love dinosaurs! Recreate the thrilling scene from the epic film Jurassic World: Fallen Kingdom when you build the LEGO Jurassic World Indoraptor Rampage at Lockwood Estate. This best-selling dinosaur toy features cool moving functions and popular dinosaur figures. Start a fun dinosaur adventure with Owen and Claire and build Lockwood Estate from the memorable film Jurassic World: Fallen Kingdom! Jurassic World building sets are compatible with all LEGO building toys. Lockwood Estate measures over 8” (22cm) high, 6” (16cm) wide and 8” (22cm) deep. This dinosaur building set is perfect for boys and girls ages 5-10.', 'https://images-na.ssl-images-amazon.com/images/I/91f7C7hWS9L._SL1500_.jpg', 10, 3, 129.95, TRUE),
('LEGO DUPLO Steam Train 10874 Remote-Control Building Blocks Set Helps Toddlers Learn, Great Educational Birthday Gift (59 Pieces)', 'XXXBX', 'Build a Push & Go steam train track toy with 16 track pieces and action bricks, and use the app functionality for fun activities and remote-control via your own device! This electric remote control train building set includes 59 LEGO DUPLO pieces. Easy to build. Encourages learning through fun play and spatial thinking. The best selling baby learning toy built to be their first and favorite train set. Activate lights, sounds and movement with this easy-to-build train set for toddlers. Includes an animal figure, locomotive driver, and child DUPLO figures to inspire fun and creativity for kids. The LEGO DUPLO Steam Train encourages development in language, fine motor skills, and cognitive ability in boys and girls. The perfect bithday gift for toddlers age 2-5. This construction set`s steam train with passenger wagon measures over 3” (10cm) high, 11” (30cm) long and 2” (7cm) wide. Train station measures over 5” (15cm) high, 4” (12cm) wide and 2” (6cm) deep.', 'https://images-na.ssl-images-amazon.com/images/I/81BwxLchXqL._SL1500_.jpg', 20, 2, 59.99, TRUE),
('LEGO Friends Heartlake City Resort 41347 Top Hotel Building Blocks Kit for Kids, Popular and Fun Toy Set for Girls (1017 Piece)', 'XXXXB', 'Build the LEGO Friends Heartlake City Resort for an awesome holiday at a beachside hotel, with a roof terrace, water park, slides, monorail, water scooter and windsurf board, then hang out and have fun with friends! This hotel playset includes 1017 pieces and 4 LEGO Friends mini-dolls: Stephanie, Andrea, Olivia and Mason, plus a dolphin figure! This unique building set is the best toy for creative girls and boys to inspire imagination and play. The LEGO Friends Heartlake City Resort has a moving monorail to explore the resort, slides, a water park, and tons of fun accessories for the rooftop terrace and juice bar. Build the perfect hotel for the Friends mini-dolls to enjoy their vacation. Girls and boys will enjoy the creative and unique building experience with LEGO Friends Heartlake City Resort hotel building toy which is compatible with all LEGO building bricks for endless fun! Heartlake City Resort measures over 10” (26cm) high, 20” (51cm) wide and 11” (29cm) deep Monorail toy car measures over 2” (7cm) high, 2” (6cm) long and 1” (3cm) wide. This popular toy for girls will inspire hours of creative building play!', 'https://images-na.ssl-images-amazon.com/images/I/91zj3tt%2BDiL._SL1500_.jpg', 20, 2, 99.95, TRUE),
('PAW Patrol - Ultimate Rescue Fire Truck with Extendable 2 Foot Tall Ladder, Ages 3 and Up', 'BBXXX', 'ULTIMATE RESCUE FIRE TRUCK: Save the day with Marshall’s Ultimate Rescue Fire Truck! Extend the two foot tall ladder, roll out the Mini Fire Cart, open up the lookout cab and move the working claw arm to help save the day on your next Ultimate Rescue! WORKING WATER CANNONS: The adventure begins with Marshall (figure included) in the lookout cab. Lift open the top to help Marshall leap into action! Using the water cannon launcher, you can send up to three water cannons (included) flying into the fire! PLUCKY PUPS: The pups of PAW Patrol are rescue dogs in training, inspired by real-world jobs like firefighter, police officer & construction worker. When trouble strikes they`re there to save the day, whether it`s a cat in a tree or a train off the tracks. LEARNING MADE FUN: PAW Patrol is a fun way to learn bravery & heroism, with exciting stories that never get too scary. PAW Patrol figures and playsets put your child ages 3 and up in charge of the action for hours of interactive & fun-filled adventure! GREAT GIFTS FOR KIDS: PAW Patrol action figures & playsets make a great gift for boys and girls ages 3 and up. Try PAW Patrol if your kids have enjoyed toys from PJ Masks, Puppy Dog Pals, Minecraft, Funko Pop, Power Rangers, Star Wars, or Dragonball Z.', 'https://images-na.ssl-images-amazon.com/images/I/81p%2BMn8fI2L._SL1500_.jpg', 50, 10, 59.99, TRUE),
('Avalon Hill Betrayal Legacy, Board Game', 'XBBXX', 'For 3-5 Players. Ages 12 and up. Based on the award-winning board game, Betrayal at House on the Hill. Utilizes the popular “legacy” mechanic, offering players the chance to customize their game and create a unique experience. A prologue and 13 chapters comprise the “Legacy” campaign. Includes 52 brand new haunts. Betrayal Legacy tells your history of the house. Each house will have a different history. Chapters span from 1666 to 2004. Each chapter has several possible outcomes, which will shape your story and your game. Players take on role of a family member across many generations.', 'https://images-na.ssl-images-amazon.com/images/I/714tbkAnXjL._SL1337_.jpg', 5, 1, 59.98, TRUE),
('Avalon Hill Betrayal Legacy, Board Game', 'XXBBX',
'For 3-5 Players. Ages 12 and up. Based on the award-winning board game, Betrayal at House on the Hill. Utilizes the popular “legacy” mechanic, offering players the chance to customize their game and create a unique experience. A prologue and 13 chapters comprise the “Legacy” campaign. Includes 52 brand new haunts. Betrayal Legacy tells your history of the house. Each house will have a different history. Chapters span from 1666 to 2004. Each chapter has several possible outcomes, which will shape your story and your game. Players take on role of a family member across many generations.', 'https://images-na.ssl-images-amazon.com/images/I/512loP9mWaL.jpg', 5, 1, 75.00, TRUE),
('Infinus Nerf N-Strike Elite Toy Motorized Blaster with Speed-Load Technology, 30-Dart Drum, and 30 Official Nerf Elite Darts for Kids, Teens, and Adults', 'XXXBB', 'The Infinus Nerf toy blaster features Speed-Load Technology that automatically loads darts into the 30-dart drum. The N-Strike Elite Infinus blaster is fully motorized to shoot 30 darts fast for intense Nerf battles -- batteries required (not included). Includes 30 Official Nerf Elite darts that are tested and approved for performance and quality and constructed of foam with flexible, hollow tips. Speed-Load Technology lets you load darts without removing the drum, so you can keep firing as you reload to keep you blasting and in the game.', 'https://images-na.ssl-images-amazon.com/images/I/81VnT7M-cyL._SL1500_.jpg', 61, 3, 69.99, TRUE),
('Kingdom Hearts The Story So Far - PlayStation 4', 'BBBXX', 'Join Sora, Donald, and Goofy on their journey across the Disney universe. Contains 9 epic KINGDOM HEARTS experiences. Play through the KINGDOM HEARTS series from the very beginning. All games remastered in HD.', 'https://images-na.ssl-images-amazon.com/images/I/918dC46zXzL._AC_SL1500_.jpg', 50, 5, 39.99, TRUE),
('Monopoly: Fortnite Edition Board Game Inspired by Fortnite Video Game Ages 13 and Up', 'XBBBX', 'Fortnite fans, this edition of the Monopoly game is inspired by the popular Fortnite video game! It’s not about what players own; it’s about how long they can survive. In the Monopoly: Fortnite Edition board game, 2 to 7 players claim locations, battle their opponents, and avoid the Storm to survive; the last player standing wins. The Monopoly: Fortnite Edition board game features well-known locations as properties, and players aim to earn Health Point chips instead of Monopoly money to stay in the game. Use loot chest items and the action die to battle opponents in this fun board game for Monopoly fans and Fortnite fans, ages 13 and up. The game comes with 27 Fortnite outfits with pawn stands, and players can choose to play as their favorite.', 'https://images-na.ssl-images-amazon.com/images/I/61iGZFNPktL._SL1024_.jpg', 20, 2, 19.99, TRUE),
('HASAKEE FPV Drone with HD WiFi Camera Live Video RC Quadcopter with Altitude Hold,APP Control,Headless Mode and One Key Return,Quadcopter Drone for Kids and Beginners', 'XXBBB', 'Wi-Fi FPV HD CAMERA: Featuring with real-time WI-FI transmission function and HD camera. You can snap wonderful photos/videos during your fly and enjoy the real-time perspective from the air, all directly via the app ((iOS and Android)) from your smartphone. Stable Drone: Featuring with Auto Hovering Function. Even if you release the control lever, the drone will still stay at the same height. Images can be steadily snapped. Fun Drone with Multiple Operating Manner: You can control this drone by means of remote controller, smartphone APP or gravity sensor mode. Gravity sensor mode allows user to shift the phone to any directions to regulate the drone’s flying path. Bring you the different experiences and funs. Easy to Fly: There are three speed modes (High/Medium/Low) available for this drone. Beginners are recommended to learn to fly under the low speed mode and speed up gradually when getting more familiar. Yellow Bee: 2.4GHz Technology and 6 axis stabilization system for smooth flight,easy to control. Good For Kids Gift,Beginners,Drone traniners.', 'https://images-na.ssl-images-amazon.com/images/I/71UDPa5RWFL._SL1500_.jpg', 5, 1, 49.99, TRUE);


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