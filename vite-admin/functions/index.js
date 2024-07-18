const functions = require("firebase-functions");
const admin = require("firebase-admin");
const mailgun = require("mailgun-js");

admin.initializeApp();

// Remove unused firestore variable
// const firestore = admin.firestore();

// Configure Mailgun
const mg = mailgun({
  apiKey: "ef3e6dafc2a813c6ad214b10c62b19f3",
  domain: "sandboxe4f548b9549f455bbb19789bafc21cd9.mailgun.org",
});

// Cloud Function to send confirmation email upon booking creation
exports.sendBookingConfirmation = functions.firestore
    .document("bookings/{bookingId}")
    .onCreate(async (snap, context) => {
      const bookingData = snap.data();
      const {name, email, movieName, showtime} = bookingData;

      const data = {
        from: "your-verified-sender@example.com",
        to: email,
        subject: "Booking Confirmation",
        html: `<p>Dear ${name},</p>
             <p>Your booking for ${movieName} at ${showtime} is done.</p>
             <p>Thank you for booking with us!</p>`,
      };

      try {
        await mg.messages().send(data);
        console.log(`Booking confirmation email sent to ${email}`);
      } catch (error) {
        console.error("Error sending email:", error);
      }
    });
