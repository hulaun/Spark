CREATE TABLE `user` (
	`id` varchar(36) NOT NULL,
	`username` varchar(50) NOT NULL,
	`password` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`phoneNumber` varchar(20),
	`img` varchar(255),
	`facebookId` varchar(255),
	`googleId` varchar(255),
	`createdAt` timestamp DEFAULT (now()),
	`updatedAt` timestamp ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `user_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `user_profile` (
	`userId` varchar(36) NOT NULL,
	`bio` text,
	`location` varchar(255),
	`availableDays` varchar(100),
	`currentStatus` varchar(100),
	CONSTRAINT `user_profile_userId` PRIMARY KEY(`userId`)
);
--> statement-breakpoint
CREATE TABLE `user_sport` (
	`userId` varchar(36),
	`sportId` varchar(36)
);
--> statement-breakpoint
CREATE TABLE `sport` (
	`id` varchar(36) NOT NULL,
	`name` varchar(255) NOT NULL,
	CONSTRAINT `sport_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `booking` (
	`id` varchar(36) NOT NULL,
	`userId` varchar(36),
	`paymentStatus` varchar(50),
	`totalPrice` decimal(10,2),
	`paymentMethodId` varchar(36),
	`createAt` timestamp DEFAULT (now()),
	CONSTRAINT `booking_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `payment_method` (
	`id` varchar(36) NOT NULL,
	`name` varchar(255),
	CONSTRAINT `payment_method_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `rating` (
	`id` varchar(36) NOT NULL,
	`userId` varchar(36),
	`rating` int,
	`comment` text,
	CONSTRAINT `rating_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `slot` (
	`id` varchar(36) NOT NULL,
	`courtId` varchar(36),
	`startTime` timestamp NOT NULL,
	`endTime` timestamp NOT NULL,
	`price` decimal(10,2) NOT NULL,
	`isDiscounted` boolean DEFAULT false,
	`discountAmount` decimal(10,2),
	CONSTRAINT `slot_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `slot_booking` (
	`bookingId` varchar(36),
	`slotId` varchar(36)
);
--> statement-breakpoint
CREATE TABLE `venue` (
	`id` varchar(36) NOT NULL,
	`name` varchar(255) NOT NULL,
	`ratingId` varchar(36),
	`address` varchar(255),
	`latitude` double,
	`longitude` double,
	`description` text,
	CONSTRAINT `venue_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `venue_sport` (
	`venueId` varchar(36),
	`sportId` varchar(36)
);
--> statement-breakpoint
CREATE TABLE `venue_payment_method` (
	`venueId` varchar(36),
	`paymentId` varchar(36)
);
--> statement-breakpoint
CREATE TABLE `court` (
	`id` varchar(36) NOT NULL,
	`venueId` varchar(36),
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
ALTER TABLE `slot` ADD CONSTRAINT `slot_courtId_court_id_fk` FOREIGN KEY (`courtId`) REFERENCES `court`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `slot_booking` ADD CONSTRAINT `slot_booking_bookingId_booking_id_fk` FOREIGN KEY (`bookingId`) REFERENCES `booking`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `slot_booking` ADD CONSTRAINT `slot_booking_slotId_slot_id_fk` FOREIGN KEY (`slotId`) REFERENCES `slot`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `venue_sport` ADD CONSTRAINT `venue_sport_venueId_venue_id_fk` FOREIGN KEY (`venueId`) REFERENCES `venue`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `venue_sport` ADD CONSTRAINT `venue_sport_sportId_sport_id_fk` FOREIGN KEY (`sportId`) REFERENCES `sport`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `venue_payment_method` ADD CONSTRAINT `venue_payment_method_venueId_venue_id_fk` FOREIGN KEY (`venueId`) REFERENCES `venue`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `venue_payment_method` ADD CONSTRAINT `venue_payment_method_paymentId_payment_method_id_fk` FOREIGN KEY (`paymentId`) REFERENCES `payment_method`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `court` ADD CONSTRAINT `court_venueId_venue_id_fk` FOREIGN KEY (`venueId`) REFERENCES `venue`(`id`) ON DELETE no action ON UPDATE no action;