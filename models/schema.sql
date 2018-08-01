DROP DATABASE IF EXISTS `ebay_db`;
CREATE DATABASE `ebay_db`;
USE `ebay_db`;

CREATE TABLE `users`
(
`user_id` integer NOT NULL AUTO_INCREMENT,
`user_name` VARCHAR(255) NOT NULL,
`password` VARCHAR(255) NOT NULL,
`email` VARCHAR(255) NOT NULL,
`phone_number` VARCHAR(255) NOT NULL,
PRIMARY KEY (`user_id`)
);


INSERT INTO `users` (user_name, password, email, phone_number)
VALUES ('Mark Faulkner', 'password', 'markfaulk350@gmail.com', '1(760)-846-0475');
INSERT INTO `users` (user_name, password, email, phone_number)
VALUES ('Mike Tyson', 'sucka!!', 'mike@tyson.com', '1(897)-656-9929');
INSERT INTO `users` (user_name, password, email, phone_number)
VALUES ('James Bond', 'drowssap', 'bond@jamesBond.com', '1(733)-822-0423');
INSERT INTO `users` (user_name, password, email, phone_number)
VALUES ('Ariana Grande', 'DontOD', 'Grande@latte.com', '1(800)-555-0675');
INSERT INTO `users` (user_name, password, email, phone_number)
VALUES ('Travis Thompson', 'Travo100', 'Travo100@master.com', '1(619)-555-0435');


CREATE TABLE `items`
(
`item_id` integer NOT NULL AUTO_INCREMENT,
`user_id` integer NOT NULL,
`item_name` VARCHAR(255) NOT NULL,
`item_price` DECIMAL(10,2) NOT NULL,
`item_description` TEXT, 
`item_location` VARCHAR(255),
`item_img_url` TEXT, 
`item_category` VARCHAR(255) NOT NULL,
PRIMARY KEY (`item_id`)
);


INSERT INTO `items` (user_id, item_name, item_price, item_description, item_location, item_img_url, item_category)
VALUES (1, '2004 GMC Sierra', 21999.99, 'A White 2004 GMC Sierra with 100,000 miles on it, needs new tires.', 'San Diego, Ca', 'https://static.tcimg.net/vehicles/primary/c0f2b391df4555f5/2018-GMC-Sierra_2500HD-white-full_color-driver_side_front_quarter.png', 'Automotive');
INSERT INTO `items` (user_id, item_name, item_price, item_description, item_location, item_img_url, item_category)
VALUES (1, 'iPhone 7', 500.00, 'iPhone 7 with cracked Screen.', 'San Francisco, Ca', 'https://cdn.shopify.com/s/files/1/1043/3082/products/iPhone_7_Black_1024x1024_2ebad569-972a-48c0-aab5-d199a68e707a_1024x1024.jpeg?v=1519090803', 'Electronics');
INSERT INTO `items` (user_id, item_name, item_price, item_description, item_location, item_img_url, item_category)
VALUES (2, 'Bengal TIger', 50000.01, 'A Freaking Tiger.', 'Las Vagas, Nv', 'https://cdn.earlytorise.com/wp-content/uploads/2008/04/white-bengal-tiger.jpg', 'Sports');
INSERT INTO `items` (user_id, item_name, item_price, item_description, item_location, item_img_url, item_category)
VALUES (3, 'Aston Martin', 250000.00, 'Totally doesnt have an ejection seat.', 'London, En', 'http://www.jamesbondlifestyle.com/sites/default/files/ckeditor/images/news/crne-am-db5-auction-large.jpg', 'Automotive');
INSERT INTO `items` (user_id, item_name, item_price, item_description, item_location, item_img_url, item_category)
VALUES (5, 'Ebook', 13000, 'An ebook on node.js and express', 'San Diego, Ca', 'https://ae01.alicdn.com/kf/HTB1PnFaNVXXXXaPXpXXq6xXFXXXC/New-kindle-paperwhite-3-built-in-light-ebook-reader-ebooks-e-book-reader-e-ink-wifi.jpg_640x640.jpg', 'Books');



