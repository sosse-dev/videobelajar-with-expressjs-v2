import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD, // app-password, bukan password akun gmail!
  },
});

export async function sendVerificationEmail(email, token) {
  const mailOptions = {
    from: process.env.EMAIL_SENDER, // Pengirim
    to: email, // Penerima
    subject: "Verifikasi Email",
    text: `Klik link berikut untuk verifikasi email: ${process.env.URL_BACKEND}/verify-email?token=${token}`, // sekarang tidak bisa mengirim lewat frontend, jadi tes langsung dengan: /verify-email?token=<token>
  };

  await transporter.sendMail(mailOptions);
}
