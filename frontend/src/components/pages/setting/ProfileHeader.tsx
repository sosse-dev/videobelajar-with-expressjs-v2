import avatar from "../../../assets/avatar.png";
import { user } from "@/type/types";

export default function ProfileHeader({ user }: { user: user | undefined }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6">
      <div
        className="w-24 h-24 rounded bg-cover bg-center"
        style={{ backgroundImage: `url(${avatar})` }}
      />
      <div className="text-center md:text-left">
        <h2 className="text-xl font-semibold text-[#222325]">
          {user?.name || "Anda belum Mendaftar"}
        </h2>
        <p className="text-[#222325]">{user?.email}</p>

        <button className="text-[#f64920] font-bold mt-2">
          Ganti Foto Profil
        </button>
      </div>
    </div>
  );
}
