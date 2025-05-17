ALTER TABLE `user_profile` DROP FOREIGN KEY `user_profile_userId_user_id_fk`;
--> statement-breakpoint
ALTER TABLE `user_sport` DROP FOREIGN KEY `user_sport_userId_user_id_fk`;
--> statement-breakpoint
ALTER TABLE `user_sport` DROP FOREIGN KEY `user_sport_sportId_sport_id_fk`;
--> statement-breakpoint
ALTER TABLE `booking` DROP FOREIGN KEY `booking_userId_user_id_fk`;
--> statement-breakpoint
ALTER TABLE `booking` DROP FOREIGN KEY `booking_paymentMethodId_payment_method_id_fk`;
--> statement-breakpoint
ALTER TABLE `rating` DROP FOREIGN KEY `rating_userId_user_id_fk`;
--> statement-breakpoint
ALTER TABLE `Slot` DROP FOREIGN KEY `Slot_courtId_court_id_fk`;
--> statement-breakpoint
ALTER TABLE `slot_booking` DROP FOREIGN KEY `slot_booking_bookingId_booking_id_fk`;
--> statement-breakpoint
ALTER TABLE `slot_booking` DROP FOREIGN KEY `slot_booking_slotId_Slot_id_fk`;
--> statement-breakpoint
ALTER TABLE `venue` DROP FOREIGN KEY `venue_managerId_user_id_fk`;
--> statement-breakpoint
ALTER TABLE `venue_sport` DROP FOREIGN KEY `venue_sport_venueId_venue_id_fk`;
--> statement-breakpoint
ALTER TABLE `venue_sport` DROP FOREIGN KEY `venue_sport_sportId_sport_id_fk`;
--> statement-breakpoint
ALTER TABLE `venue_payment_method` DROP FOREIGN KEY `venue_payment_method_venueId_venue_id_fk`;
--> statement-breakpoint
ALTER TABLE `venue_payment_method` DROP FOREIGN KEY `venue_payment_method_paymentId_payment_method_id_fk`;
--> statement-breakpoint
ALTER TABLE `court` DROP FOREIGN KEY `court_venueId_venue_id_fk`;
--> statement-breakpoint
ALTER TABLE `venue` ADD `createdAt` timestamp DEFAULT (now());--> statement-breakpoint
ALTER TABLE `user_profile` ADD CONSTRAINT `user_profile_userId_user_id_fk` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `user_sport` ADD CONSTRAINT `user_sport_userId_user_id_fk` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `user_sport` ADD CONSTRAINT `user_sport_sportId_sport_id_fk` FOREIGN KEY (`sportId`) REFERENCES `sport`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `booking` ADD CONSTRAINT `booking_userId_user_id_fk` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `booking` ADD CONSTRAINT `booking_paymentMethodId_payment_method_id_fk` FOREIGN KEY (`paymentMethodId`) REFERENCES `payment_method`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `rating` ADD CONSTRAINT `rating_userId_user_id_fk` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Slot` ADD CONSTRAINT `Slot_courtId_court_id_fk` FOREIGN KEY (`courtId`) REFERENCES `court`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `slot_booking` ADD CONSTRAINT `slot_booking_bookingId_booking_id_fk` FOREIGN KEY (`bookingId`) REFERENCES `booking`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `slot_booking` ADD CONSTRAINT `slot_booking_slotId_Slot_id_fk` FOREIGN KEY (`slotId`) REFERENCES `Slot`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `venue` ADD CONSTRAINT `venue_managerId_user_id_fk` FOREIGN KEY (`managerId`) REFERENCES `user`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `venue_sport` ADD CONSTRAINT `venue_sport_venueId_venue_id_fk` FOREIGN KEY (`venueId`) REFERENCES `venue`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `venue_sport` ADD CONSTRAINT `venue_sport_sportId_sport_id_fk` FOREIGN KEY (`sportId`) REFERENCES `sport`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `venue_payment_method` ADD CONSTRAINT `venue_payment_method_venueId_venue_id_fk` FOREIGN KEY (`venueId`) REFERENCES `venue`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `venue_payment_method` ADD CONSTRAINT `venue_payment_method_paymentId_payment_method_id_fk` FOREIGN KEY (`paymentId`) REFERENCES `payment_method`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `court` ADD CONSTRAINT `court_venueId_venue_id_fk` FOREIGN KEY (`venueId`) REFERENCES `venue`(`id`) ON DELETE cascade ON UPDATE no action;