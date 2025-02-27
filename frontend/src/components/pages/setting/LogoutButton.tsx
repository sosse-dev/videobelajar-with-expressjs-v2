import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };

  return (
    <button
      onClick={handleLogout}
      type="button"
      className="text-[#c62b2b] border border-[#c62b2b] font-bold py-2 px-7 rounded-lg w-full md:w-auto cursor-pointer hover:opacity-80"
    >
      Keluar
    </button>
  );
}
