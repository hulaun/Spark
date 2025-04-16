ALTER TABLE `user` ADD `otp` varchar(6);--> statement-breakpoint
ALTER TABLE `user` ADD `otpExpires` timestamp;--> statement-breakpoint
ALTER TABLE `user` ADD `isVerified` int DEFAULT 0;--> statement-breakpoint
ALTER TABLE `user` ADD `isBlocked` int DEFAULT 0;