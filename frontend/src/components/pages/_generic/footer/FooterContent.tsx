import BottomNavbar from "./BottomNavbar";
import logo from "../../../../assets/videobelajar-logo.png";
import { ChevronRight } from "lucide-react";

export default function FooterContent() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
        <div className="max-w-sm">
          <img src={logo} className="w-60 -translate-x-4 mb-4" alt="Logo" />
          <p className="text-gray-600 mb-3 font-black">
            Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
          </p>
          <p className="text-gray-600 mb-3">
            Jl. Usman Effendi No. 50 Lowokwaru, Malang
          </p>
          <p className="text-gray-600">+62-877-7123-1234</p>
        </div>

        {/* Mobile */}
        <div className="flex flex-col w-full h-fit md:hidden">
          <button className="flex justify-between w-full h-fit cursor-pointer">
            <span className="text-lg font-medium">Kategori</span>
           <ChevronRight />
          </button>

          <button className="flex justify-between w-full h-fit cursor-pointer">
            <span className="text-lg font-medium">Perusahaan</span>
           <ChevronRight />
          </button>

          <button className="flex justify-between w-full h-fit cursor-pointer">
            <span className="text-lg font-medium">Komunitas</span>
           <ChevronRight />
          </button>
        </div>

        {/* Tablet and Desktop */}
        <div className="gap-16 hidden md:flex">
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Kategori</h4>
            <div className="flex flex-col gap-3 text-gray-500">
              {[
                "Digital & Teknologi",
                "Pemasaran",
                "Manajemen Bisnis",
                "Pengembangan Diri",
                "Desain",
              ].map((item) => (
                <a key={item} href="#" className="hover:text-[#3ECF4C]">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Perusahaan</h4>
            <div className="flex flex-col gap-3 text-gray-500">
              {[
                "Tentang Kami",
                "FAQ",
                "Kebijakan Privasi",
                "Ketentuan Layanan",
                "Bantuan",
              ].map((item) => (
                <a key={item} href="#" className="hover:text-[#3ECF4C]">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Komunitas</h4>
            <div className="flex flex-col gap-3 text-gray-500">
              {["Tips Sukses", "Blog"].map((item) => (
                <a key={item} href="#" className="hover:text-[#3ECF4C]">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BottomNavbar />
    </div>
  );
}
