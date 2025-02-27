import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface MenuItemProps {
  icon: ReactNode;
  label: string;
  to: string;
  isActive?: boolean;
}

export default function MenuItem({
  icon,
  label,
  to,
  isActive = false,
}: MenuItemProps) {
  return (
    <Link to={to}>
      <div
        className={`flex items-center gap-3 p-3 rounded ${
          isActive
            ? "bg-[#fff7d7]/80 border border-[#ffbd3a] text-[#ffbd3a] hover:opacity-80"
            : "text-[#3a3541]/[0.38] hover:bg-[#3a3541]/[0.050] transition-colors"
        }`}
      >
        {icon}
        <p className={`text-lg font-bold ${isActive ? "text-[#ffbd3a]" : ""}`}>
          {label}
        </p>
      </div>
    </Link>
  );
}
