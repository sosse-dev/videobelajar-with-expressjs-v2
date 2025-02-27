import { useNavigate } from "react-router-dom";
import { user } from "@/type/types";
import { toast } from "sonner";
import useUserHandler from "@/hooks/api/use-user-handler";
import { useState } from "react";
import useNetworkStatus from "@/hooks/use-network-status";

export default function DeleteUserButton({
  session,
}: {
  session: user | undefined;
}) {
  const { fetchAllUsers, deleteUser: deleteUserById } = useUserHandler();
  const [loading, setLoading] = useState(false);
  const { isOnline } = useNetworkStatus();
  const navigate = useNavigate();

  const handleDeleteUser = async () => {
    setLoading(true);

    if (!isOnline) {
      toast.error("Terjadi kesalahan, apakah anda sedang offline?");
      return;
    }

    try {
      const users = await fetchAllUsers(); // Ambil semua pengguna dari API

      if (!users) {
        toast.error("Pengguna tidak ditemukan");
        return;
      }

      // Cari indeks user yang login
      const userIndex = users.findIndex(
        (user) =>
          user.email === session?.email && user.password === session?.password
      );

      if (userIndex === -1) {
        toast.error("Pengguna tidak ada");
        return;
      }

      const userToDelete = users[userIndex];

      // Hapus user di API
      await deleteUserById(userToDelete.id);
      localStorage.removeItem("loggedInUser")

      toast.success("Akun Anda berhasil dihapus");
      navigate("/");
    } catch {
      return;
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDeleteUser}
      type="button"
      disabled={loading}
      className="bg-[#c62b2b] text-white font-bold py-2 px-7 rounded-lg w-full md:w-auto cursor-pointer hover:opacity-80"
    >
      Hapus Akun
    </button>
  );
}
