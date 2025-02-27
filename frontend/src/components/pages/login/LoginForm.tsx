import useUserHandler from "@/hooks/api/use-user-handler";
import GoogleButton from "../_generic/form/GoogleButton";
import DividerForm from "../_generic/form/DividerForm";
import HeaderForm from "../_generic/form/HeaderForm";
import bcrypt from "bcryptjs";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "@/schema/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { z } from "zod";
import useNetworkStatus from "@/hooks/use-network-status";

export default function LoginForm() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { fetchAllUsers } = useUserHandler();
  const { isOnline } = useNetworkStatus();
  const navigate = useNavigate();

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    setLoading(true);

    if (!isOnline) {
      toast.error("Terjadi kesalahan, apakah anda sedang offline?");
      return;
    }

    try {
      // Fetch users dari API
      const users = await fetchAllUsers();

      // Cek apa user ada atau tidak
      const user = users?.find((user) => user.email === values.email);

      if (!user) {
        toast.error("Email atau kata sandi anda salah");
        return;
      }

      // Validasi sandi
      const isPasswordValid = await bcrypt.compare(
        values.password,
        user.password
      );

      if (!isPasswordValid) {
        toast.error("Email atau kata sandi anda salah");
        return;
      }

      // Masukan user yang login ke localStorage
      localStorage.setItem("loggedInUser", JSON.stringify(user));

      toast.success("Login berhasil");
      navigate("/");
    } catch {
      return;
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-[500px] border border-gray-300 bg-white p-6 rounded-lg"
      >
        {/* Form Header */}
        <HeaderForm
          title="Masuk Ke Akun"
          desc="Yuk, lanjutin belajarmu di videobelajar."
        />

        {/* Form Fields */}
        <div className="space-y-4">
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  E-Mail<span className="text-red-500 ml-1">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="xxx@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Kata Sandi<span className="text-red-500 ml-1">*</span>
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="********"
                      {...field}
                      className="pr-10"
                    />
                    <div className="absolute right-2 top-2.5 cursor-pointer">
                      {showPassword ? (
                        <EyeIcon
                          onClick={() => setShowPassword(false)}
                          className="w-5 h-5 text-gray-5)00"
                        />
                      ) : (
                        <EyeOffIcon
                          onClick={() => setShowPassword(true)}
                          className="w-5 h-5 text-gray-500"
                        />
                      )}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Forgot Password */}
        <a
          href="#"
          className="text-sm text-opacity-60 font-bold mt-4 block text-right"
        >
          Lupa Password?
        </a>

        {/* Action Buttons */}
        <div className="space-y-3.5 mt-5">
          <Button
            type="submit"
            disabled={loading}
            className="w-full font-bold dark:bg-green-500 dark:text-white dark:hover:bg-green-600"
          >
            Masuk
          </Button>
          <Link to="/signup">
            <Button
              variant="outline"
              type="button"
              className="w-full font-bold dark:bg-green-50 text-green-600 dark:hover:text-green-700 border-0 dark:hover:bg-green-100"
            >
              Daftar
            </Button>
          </Link>
        </div>

        {/* Divider */}
        <DividerForm />

        <GoogleButton />
      </form>
    </Form>
  );
}
