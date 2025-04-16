CREATE TABLE `user` (
	`id` int AUTO_INCREMENT NOT NULL,
	`password` varchar(255) NOT NULL,
	`email` varchar(255),
	`phoneNumber` varchar(20),
	`role` varchar(20),
	`img` varchar(255),
	`facebookId` varchar(255),
	`googleId` varchar(255),
	`createdAt` timestamp DEFAULT (now()),
	`updatedAt` timestamp ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `user_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `user_profile` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`bio` text,
	`location` varchar(255),
	`availableDays` varchar(100),
	`currentStatus` varchar(100),
	CONSTRAINT `user_profile_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `user_sport` (
	`userId` int,
	`sportId` int
);
--> statement-breakpoint
CREATE TABLE `sport` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	CONSTRAINT `sport_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `booking` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int,
	`paymentStatus` varchar(50),
	`totalPrice` decimal(10,2),
	`paymentMethodId` int,
	`createAt` timestamp DEFAULT (now()),
	CONSTRAINT `booking_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `payment_method` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255),
	CONSTRAINT `payment_method_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `rating` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int,
	`rating` int,
	`comment` text,
	CONSTRAINT `rating_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `Slot` (
	`id` int AUTO_INCREMENT NOT NULL,
	`courtId` int NOT NULL,
	`dayOfWeek` enum('Sun','Mon','Tue','Wed','Thu','Fri','Sat') NOT NULL,
	`hourStart` time NOT NULL,
	`hourEnd` time NOT NULL,
	`status` enum('available','booked','unavailable') NOT NULL DEFAULT 'available',
	`price` decimal(10,2) NOT NULL,
	`isDiscounted` boolean DEFAULT false,
	`discountType` enum('percentage','fixed'),
	`discount` decimal(10,2) DEFAULT '0.00',
	`createdAt` timestamp DEFAULT (now()),
	`updatedAt` timestamp ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `Slot_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `slot_booking` (
	`bookingId` int,
	`slotId` int
);
--> statement-breakpoint
CREATE TABLE `venue` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`ratingId` int,
	`address` varchar(255),
	`latitude` double,
	`longitude` double,
	`description` text,
	`imageUrl` varchar(255),
	`managerId` int,
	CONSTRAINT `venue_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `venue_sport` (
	`venueId` int,
	`sportId` int
);
--> statement-breakpoint
CREATE TABLE `venue_payment_method` (
	`venueId` int,
	`paymentId` int
);
--> statement-breakpoint
CREATE TABLE `court` (
	`id` int AUTO_INCREMENT NOT NULL,
	`venueId` int,
	`name` varchar(255),
	CONSTRAINT `court_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `user_profile` ADD CONSTRAINT `user_profile_userId_user_id_fk` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `user_sport` ADD CONSTRAINT `user_sport_userId_user_id_fk` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `user_sport` ADD CONSTRAINT `user_sport_sportId_sport_id_fk` FOREIGN KEY (`sportId`) REFERENCES `sport`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `booking` ADD CONSTRAINT `booking_userId_user_id_fk` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `booking` ADD CONSTRAINT `booking_paymentMethodId_payment_method_id_fk` FOREIGN KEY (`paymentMethodId`) REFERENCES `payment_method`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `rating` ADD CONSTRAINT `rating_userId_user_id_fk` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Slot` ADD CONSTRAINT `Slot_courtId_court_id_fk` FOREIGN KEY (`courtId`) REFERENCES `court`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `slot_booking` ADD CONSTRAINT `slot_booking_bookingId_booking_id_fk` FOREIGN KEY (`bookingId`) REFERENCES `booking`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `slot_booking` ADD CONSTRAINT `slot_booking_slotId_Slot_id_fk` FOREIGN KEY (`slotId`) REFERENCES `Slot`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `venue` ADD CONSTRAINT `venue_ratingId_rating_id_fk` FOREIGN KEY (`ratingId`) REFERENCES `rating`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `venue` ADD CONSTRAINT `venue_managerId_user_id_fk` FOREIGN KEY (`managerId`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `venue_sport` ADD CONSTRAINT `venue_sport_venueId_venue_id_fk` FOREIGN KEY (`venueId`) REFERENCES `venue`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `venue_sport` ADD CONSTRAINT `venue_sport_sportId_sport_id_fk` FOREIGN KEY (`sportId`) REFERENCES `sport`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `venue_payment_method` ADD CONSTRAINT `venue_payment_method_venueId_venue_id_fk` FOREIGN KEY (`venueId`) REFERENCES `venue`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `venue_payment_method` ADD CONSTRAINT `venue_payment_method_paymentId_payment_method_id_fk` FOREIGN KEY (`paymentId`) REFERENCES `payment_method`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `court` ADD CONSTRAINT `court_venueId_venue_id_fk` FOREIGN KEY (`venueId`) REFERENCES `venue`(`id`) ON DELETE no action ON UPDATE no action;