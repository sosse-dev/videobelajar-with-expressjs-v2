import DeleteUserButton from "./DeleteUserButton";
import useUserHandler from "@/hooks/api/use-user-handler";
import LogoutButton from "./LogoutButton";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { editProfileSchema } from "@/schema/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { user } from "@/type/types";
import { z } from "zod";
import useNetworkStatus from "@/hooks/use-network-status";

export default function ProfileForm({ user }: { user: user | undefined }) {
  const form = useForm<z.infer<typeof editProfileSchema>>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      name: "",
      email: "",
      countryCode: "+62",
      phoneNumber: "",
    },
  });
  const { fetchAllUsers, updateUser: updateUserById } = useUserHandler(); // Custom Hook API functions
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { isOnline } = useNetworkStatus();
  const session = useAuth();

  const onSubmit: SubmitHandler<z.infer<typeof editProfileSchema>> = async (
    values
  ) => {
    setLoading(true);

    if (!isOnline) {
      toast.error("Terjadi kesalahan, apakah anda sedang offline?");
      return;
    }

    try {
      // Ambil semua pengguna dari API
      const users = await fetchAllUsers();

      if (!users) {
        toast.error("Tidak ada pengguna yang ditemukan");
        return;
      }

      if (!session) {
        toast.error("Sesi pengguna tidak ada");
        return;
      }

      // Cek apakah email sudah dipakai user lain atau belum
      const isUserExists = users?.some(
        (user: user) => user.email === values.email
      );

      if (isUserExists) {
        toast.error("Email sudah terdaftar");
        return;
      }

      const userIndex = users?.findIndex(
        (user) =>
          user.email === session.email && user.password === session.password
      ); // Cari pengguna berdasarkan sesi

      if (userIndex === -1) {
        toast.error("Pengguna tidak ada");
        return;
      }

      const userToUpdate = users[userIndex];

      // Update informasi pengguna berdasarkan input form
      const updatedUser = {
        ...userToUpdate,
        name: values.name,
        email: values.email,
        countryCode: values.countryCode,
        phoneNumber: values.phoneNumber,
      };

      await updateUserById(userToUpdate.id, updatedUser); // Kirim update ke API

      localStorage.setItem("loggedInUser", JSON.stringify(updatedUser)); // Perbarui localStorage loggedInUser

      navigate(0); // Refresh halaman
      toast.success("Pengguna berhasil diperbarui");
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
        className="flex flex-col md:flex-row gap-6 items-start sm:px-12 lg:px-0"
      >
        {/* Full Name Field */}
        <FormItem className="w-full md:w-[25%]">
          <FormLabel className="text-sm text-[#333]/[0.68]">Nama</FormLabel>
          <FormControl>
            <Input
              {...form.register("name")}
              className="border-[#3ecf4c] dark:bg-white focus-visible:ring focus-visible:ring-[#3ecf4c]/40 mt-1"
              placeholder={user?.name}
              defaultValue={user?.name}
            />
          </FormControl>
          <FormMessage>{form.formState.errors.name?.message}</FormMessage>
        </FormItem>

        {/* Email Field */}
        <FormItem className="w-full md:w-[20%]">
          <FormLabel className="text-sm text-[#333]/[0.68]">E-Mail</FormLabel>
          <FormControl>
            <Input
              {...form.register("email")}
              className="mt-1 dark:bg-white"
              placeholder={user?.email}
              defaultValue={user?.email}
            />
          </FormControl>
          <FormMessage>{form.formState.errors.email?.message}</FormMessage>
        </FormItem>

        {/* Phone Number Section */}
        <div className="flex flex-col w-full md:flex-1 gap-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Country Code */}
            <FormItem className="md:w-auto h-fit flex flex-col">
              <FormLabel className="text-sm text-[#333]/[0.68]">
                Kode Negara
              </FormLabel>
              <FormControl>
                <Select defaultValue="+62" {...form.register("countryCode")}>
                  <SelectTrigger className="dark:bg-white cursor-pointer">
                    <SelectValue placeholder="+62" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-white">
                    <SelectItem
                      className="dark:bg-white text-black cursor-pointer"
                      value="+62"
                    >
                      Indonesia (+62)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage>
                {form.formState.errors.countryCode?.message}
              </FormMessage>
            </FormItem>

            {/* Phone Number */}
            <FormItem className="flex-1">
              <FormLabel className="text-sm text-[#333]/[0.68]">
                No. Hp
              </FormLabel>
              <FormControl>
                <Input
                  {...form.register("phoneNumber")}
                  className="mt-1 dark:bg-white"
                  placeholder={user?.phoneNumber}
                  defaultValue={user?.phoneNumber}
                />
              </FormControl>
              <FormMessage>
                {form.formState.errors.phoneNumber?.message}
              </FormMessage>
            </FormItem>
          </div>

          {/* Submit Button */}
          <div className="self-end flex flex-col-reverse w-full md:w-fit gap-y-2 md:flex-row md:gap-x-3">
            <DeleteUserButton session={session} />

            <LogoutButton />

            <button
              type="submit"
              disabled={loading}
              className="bg-[#3ecf4c] text-white font-bold py-2 px-7 rounded-lg w-full md:w-auto cursor-pointer hover:opacity-80"
            >
              Simpan
            </button>
          </div>
        </div>
      </form>
    </Form>
  );
}
