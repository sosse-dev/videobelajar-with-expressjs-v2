import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().min(2, { message: "Nama lengkap minimal 2 karakter" }),
  email: z.string().email({ message: "Masukkan email yang valid" }),
  password: z.string().min(8, { message: "Sandi minimal 8 karakter" }),
  phoneNumber: z.string().min(8, { message: "Nomor HP minimal 8 karaktesr" }),
  countryCode: z.string(),
});

export const editProfileSchema = z.object({
  name: z.string().min(1, "Masukan nama anda"),
  email: z.string().email("Email tidak valid"),
  countryCode: z.enum(["+62", "+1", "+44", "+91", "+81"]).default("+62"),
  phoneNumber: z.string().min(1, "Masukan Nomor Hp"),
});

export const signupSchema = z
  .object({
    name: z.string().min(1, "Masukan nama anda"),
    email: z.string().email("Email tidak valid"),
    countryCode: z.enum(["+62", "+1", "+44", "+91", "+81"]).default("+62"),
    phoneNumber: z.string().min(1, "Masukan Nomor Hp"),
    password: z.string().min(8, "Kata sandi 8 karakter"),
    confirmPassword: z.string().min(8, "Konfirmasi kata sandi 8 karakter"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Kata sandi tidak cocok",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z.string().email("Email tidak valid"),
  password: z.string().min(8, "Kata sandi harus minimal 8 karakter"),
});
