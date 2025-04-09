ALTER TABLE `user` ADD `role` varchar(20);--> statement-breakpoint
ALTER TABLE `venue` ADD `imageUrl` varchar(255);--> statement-breakpoint
ALTER TABLE `venue` ADD `managerId` varchar(36);--> statement-breakpoint
ALTER TABLE `venue` ADD CONSTRAINT `venue_ratingId_rating_id_fk` FOREIGN KEY (`ratingId`) REFERENCES `rating`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `venue` ADD CONSTRAINT `venue_managerId_user_id_fk` FOREIGN KEY (`managerId`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;