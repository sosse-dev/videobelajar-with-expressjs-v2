// components/LeftBar.jsx
import { BookIcon, ListOrderedIcon, UserIcon } from "lucide-react";
import MenuItem from "./MenuItem";

interface ILeftBarProp {
  path: "/profile" | "/class" | "/order";
}

export default function LeftBar({ path }: ILeftBarProp) {
  return (
    <div className="lg:w-72 flex-shrink-0">
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-[#222325]">
          {path === "/profile"
            ? "Ubah Profile"
            : path === "/class"
            ? "Daftar Kelas"
            : path === "/order"
            ? "Daftar Pesanan"
            : ""}
          {/* {myClassesVersion ? "Daftar Kelas" : "Ubah Profil"} */}
        </h1>
        <p className="text-base text-[#333]/[0.68]">
          {path === "/profile"
            ? "Ubah data diri Anda"
            : path === "/class"
            ? "Akses Materi Belajar dan Mulailah Meningkatkan Pengetahuan Anda!"
            : path === "/order"
            ? "Informasi terperinci mengenai pembelian"
            : ""}
        </p>
      </div>

      <div className="bg-white rounded-lg border border-[#3a3541]/[0.12] p-4 space-y-2">
        <MenuItem
          isActive={path === "/profile"}
          icon={<UserIcon />}
          to="/setting/profile"
          label="Profil Saya"
        />
        <MenuItem
          isActive={path === "/class"}
          icon={<BookIcon />}
          to="/setting/class"
          label="Kelas Saya"
        />
        <MenuItem
          isActive={path === "/order"}
          icon={<ListOrderedIcon />}
          to="/setting/order"
          label="Pesanan Saya"
        />
      </div>
    </div>
  );
}