import { FC } from "react";
import LeftBar from "@/components/pages/_generic/setting/LeftBar";
import Navbar from "@/components/pages/_generic/navbar/Navbar";
import { SearchIcon, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

// Interfaces for props
interface TabItemProps {
  active: boolean;
  label: string;
}

interface OrderCardProps {
  invoice: string;
  date: string;
  status: "Berhasil" | "Gagal" | "Belum Bayar";
  price: string;
}

interface ButtonProps {
  variant?: "solid" | "outline" | "ghost";
  children: React.ReactNode;
  [key: string]: any;
}

// Main Component
export default function MyOrders() {
  return (
    <div className="mx-auto max-w-7xl">
      <Navbar showDropdown={true} />
      <main className="container mx-auto px-4 md:px-8 lg:px-16 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <LeftBar path="/order" />
          <div className="flex-1 flex flex-col bg-white rounded-lg border border-[#3a3541]/[0.12] p-6 space-y-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-semibold text-[#222325]">Daftar Pesanan</h1>
              <p className="text-base text-[#333]/[0.68]">Informasi terperinci mengenai pembelian</p>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              <div className="flex border-b border-[#3a3541]/[0.12]">
                <TabItem active label="Semua Pesanan" />
                <TabItem active={false} label="Menunggu" />
                <TabItem active={false} label="Berhasil" />
                <TabItem active={false} label="Gagal" />
              </div>
              <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-auto">
                <div className="relative w-full lg:w-60">
                  <input placeholder="Cari Kelas" className="w-full pl-4 pr-10 py-2 text-base border border-[#3a3541]/[0.12] rounded-lg" />
                  <SearchIcon className="absolute right-3 top-2.5 text-[#333]/[0.68] w-5 h-5" />
                </div>
                <div className="relative w-full lg:w-40">
                  <select className="w-full pl-4 pr-10 py-2 text-base border border-[#3a3541]/[0.12] rounded-lg appearance-none bg-white">
                    <option>Urutkan</option>
                    <option>Terbaru</option>
                    <option>Terlama</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 text-[#333]/[0.68] w-5 h-5 pointer-events-none" />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <OrderCard invoice="HEL/VI/10062023" date="10 Juni 2023, 14.17" status="Berhasil" price="300.000" />
              <OrderCard invoice="HEL/VI/10062023" date="10 Juni 2023, 14.17" status="Gagal" price="300.000" />
              <OrderCard invoice="HEL/VI/10062023" date="10 Juni 2023, 14.17" status="Belum Bayar" price="300.000" />
            </div>
            <Pagination />
          </div>
        </div>
      </main>
    </div>
  );
};

// Sub-components
const TabItem: FC<TabItemProps> = ({ active, label }) => (
  <div className={`relative px-4 py-2 cursor-pointer ${active ? 'text-[#f64920]' : 'text-[#333]/[0.68]'}`}>
    {label}
    {active && <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#f64920] rounded-t" />}
  </div>
);

const OrderCard: FC<OrderCardProps> = ({ invoice, date, status, price }) => {
  const statusConfig = {
    Berhasil: { color: '#38d189', bg: '#e0fddf' },
    Gagal: { color: '#ff5c2b', bg: '#fce3d1' },
    'Belum Bayar': { color: '#ffbd3a', bg: '#fff7d7' }
  };

  return (
    <div className="border border-[#3a3541]/[0.12] rounded-lg overflow-hidden">
      <div className="flex justify-between items-center p-4 bg-[#e2fcd9]/20 border-b">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[#333]/[0.68]">No. Invoice:</span>
            <span className="text-[#0980e2]">{invoice}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#333]/[0.68]">Waktu Pembayaran:</span>
            <span>{date}</span>
          </div>
        </div>
        <span className="px-3 py-1 rounded-lg text-sm" style={{ backgroundColor: statusConfig[status].bg, color: statusConfig[status].color }}>
          {status}
        </span>
      </div>
      <div className="p-4 bg-white flex flex-col lg:flex-row items-center gap-6 border-b">
        <img src="/rectangle-22957.png" className="w-12 h-12 rounded-lg object-cover" alt="Course thumbnail" />
        <p className="flex-1 text-lg font-medium">Belajar Microsoft Office dan Google Workspace untuk Pemula</p>
        <div className="hidden lg:block w-px h-12 bg-[#3a3541]/[0.12]" />
        <div className="lg:w-40">
          <p className="text-[#333]/[0.68]">Harga</p>
          <p className="text-lg font-semibold">Rp {price}</p>
        </div>
      </div>
      <div className="flex justify-between items-center p-4 bg-[#e2fcd9]/20">
        <p className="text-[#333]/[0.68]">Total Pembayaran</p>
        <p className="text-lg font-semibold text-[#3ecf4c]">Rp {price}</p>
      </div>
    </div>
  );
};

const Pagination: FC = () => (
  <div className="flex gap-2">
    <Button variant="ghost">
      <ChevronLeft className="w-5 h-5" />
    </Button>
    {[1, 2, 3, 4, 5, 6].map((num) => (
      <Button key={num} variant={num === 1 ? 'solid' : 'ghost'}>
        {num}
      </Button>
    ))}
    <Button variant="ghost">
      <ChevronRight className="w-5 h-5" />
    </Button>
  </div>
);

const Button: FC<ButtonProps> = ({ variant = 'solid', children, ...props }) => {
  const variants = {
    solid: 'bg-[#3ecf4c] text-white',
    outline: 'border border-[#3ecf4c] text-[#3ecf4c]',
    ghost: 'bg-transparent text-[#222325] hover:bg-gray-100'
  };

  return (
    <button className={`px-4 py-2 rounded-lg font-medium transition-colors ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};