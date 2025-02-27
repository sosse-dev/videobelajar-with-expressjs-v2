import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import LogoutButton from "./LogoutButton";
import { Link } from "react-router-dom";

export default function Dropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          style={{
            color: "rgb(39, 39, 39)",
            padding: 0,
            borderWidth: 0,
            outline: 0,
          }}
          className="cursor-pointer"
          variant="link"
        >
          Kategori
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white border dark:border-gray-300">
        <div className="w-full h-full text-gray-800 flex flex-col bg-white">
          <Link to="/setting/profile">
            <button className="w-full text-start cursor-pointer py-4 pl-[1rem] border-b hover:bg-gray-100 border-gray-300 active:bg-gray-50">
              Profil Saya
            </button>
          </Link>
          <Link to="/setting/class">
            <button className="w-full text-start cursor-pointer py-4 pl-[1rem] border-b hover:bg-gray-100 border-gray-300 active:bg-gray-50">
              Kelas Saya
            </button>
          </Link>
          <Link to="/setting/order">
            <button className="w-full text-start cursor-pointer py-4 pl-[1rem] border-b hover:bg-gray-100 border-gray-300 active:bg-gray-50">
              Pesanan Saya
            </button>
          </Link>
          <LogoutButton />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
