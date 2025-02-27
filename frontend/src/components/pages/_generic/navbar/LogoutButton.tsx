import { useAuth } from "@/hooks/use-auth";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const navigate = useNavigate();
  const user = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className={`w-full flex gap-x-2 text-red-400 text-start cursor-pointer py-4 pl-[1rem] border-b hover:bg-gray-100 border-gray-300 active:bg-gray-50 ${
        user ? "block" : "hidden"
      }`}
    >
      Keluar
      <LogOut />
    </button>
  );
}
