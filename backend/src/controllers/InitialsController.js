import bcryptjs from "bcryptjs";
import db from "../config/db/index.js";
import {
  Users,
  UserProfile,
  Venues,
  Sports,
  Courts,
  Slots,
  Bookings,
  PaymentMethods,
  Ratings,
  VenueSport,
  VenuePaymentMethod,
  SlotBooking,
  UserSport,
} from "../../db/schema.js";

const initials = async (req, res) => {
  try {
    // 1. Create Users
    const password1 = await bcryptjs.hash("admin", 10);
    const password2 = await bcryptjs.hash("user", 10);
    const [user1, user2] = await db
      .insert(Users)
      .values([
        { username: "admin", password: password1, email: "admin@a.com" },
        { username: "user", password: password2, email: "user@u.com" },
      ])
      .$returningId();

    // 2. Create UserProfiles
    await db.insert(UserProfile).values([
      { userId: user1.id, location: "Da Nang", availableDays: "Mon-Fri" },
      { userId: user2.id, location: "Hanoi", availableDays: "Weekends" },
    ]);

    // 3. Create Sports
    const [sport1, sport2] = await db
      .insert(Sports)
      .values([{ name: "Football" }, { name: "Pickleball" }])
      .$returningId();

    // 4. Create PaymentMethods
    const [pm1, pm2] = await db
      .insert(PaymentMethods)
      .values([{ name: "Credit Card" }, { name: "Cash" }])
      .$returningId();

    // 5. Create Venue
    const [venue1] = await db
      .insert(Venues)
      .values([
        {
          name: "Thong Nhat Stadium",
          address: "12 Tran Hung Dao",
          latitude: 16.06,
          longitude: 108.22,
          description: "Popular sports venue",
        },
      ])
      .$returningId();

    // 6. Venue-Sport & Venue-PaymentMethod
    await db.insert(VenueSport).values([
      { venueId: venue1.id, sportId: sport1.id },
      { venueId: venue1.id, sportId: sport2.id },
    ]);
    await db.insert(VenuePaymentMethod).values([
      { venueId: venue1.id, paymentId: pm1.id },
      { venueId: venue1.id, paymentId: pm2.id },
    ]);

    // 7. Create Court
    const [court1] = await db
      .insert(Courts)
      .values([{ venueId: venue1.id, name: "Court A" }])
      .$returningId();

    // 8. Create Slots
    const [slot1, slot2] = await db
      .insert(Slots)
      .values([
        {
          courtId: court1.id,
          hourStart: "09:00",
          hourEnd: "10:00",
          price: 100000,
          isDiscounted: true,
          discountType: "fixed",
          discount: 20000,
        },
        {
          courtId: court1.id,
          hourStart: "10:00",
          hourEnd: "11:00",
          price: 100000,
          isDiscounted: false,
        },
      ])
      .$returningId();

    // 9. Create Booking
    const [booking1] = await db
      .insert(Bookings)
      .values({
        userId: user1.id,
        paymentStatus: "PAID",
        totalPrice: 80000,
        paymentMethodId: pm1.id,
      })
      .$returningId();

    // 10. SlotBooking
    await db
      .insert(SlotBooking)
      .values([{ bookingId: booking1.id, slotId: slot1.id }]);

    // 11. UserSport
    await db.insert(UserSport).values([
      { userId: user1.id, sportId: sport1.id },
      { userId: user2.id, sportId: sport2.id },
    ]);

    // 12. Rating
    await db
      .insert(Ratings)
      .values([{ userId: user1.id, rating: 5, comment: "Great venue!" }]);

    res.status(201).send({
      message: "Sample data created successfully",
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const InitialsController = {
  initials,
};
