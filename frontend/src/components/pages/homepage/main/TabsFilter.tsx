import { categories } from "@/data/courses";
import { TCategory } from "@/type/types";
import { Link } from "react-router-dom";

type TabsFilterProps = {
  categoryQuery: TCategory;
};

export default function TabsFilter({ categoryQuery }: TabsFilterProps) {
  return (
    <div className="flex gap-8 mb-12 overflow-x-auto">
      {categories.map((category, index) => (
        <Link
          key={category.id}
          to={category.id === "semua_kelas" ? "/" : `/?category=${category.id}`}
          className={`pb-2 cursor-pointer hover:opacity-75 hover:border-red-400 ${
            category.id === categoryQuery
              ? "border-b-4 border-[#F64920]"
              : !categoryQuery && category.id === "semua_kelas"
              ? "border-b-4 border-[#F64920]"
              : ""
          }`}
        >
          <button
            className={`truncate font-medium cursor-pointer text-start ${
              index === 0 ? "text-[#F64920]" : "text-gray-500"
            }`}
          >
            {category.value}
          </button>
        </Link>
      ))}
    </div>
  );
}
