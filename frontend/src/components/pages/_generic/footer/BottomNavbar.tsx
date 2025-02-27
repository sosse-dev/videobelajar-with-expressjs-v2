export default function BottomNavbar() {
  return (
    <div className="border-t border-gray-200 py-8">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <h5 className="text-gray-600">
          @2023 Gerobak Sayur All Rights Reserved.
        </h5>
        <div className="flex gap-4">
          {[...Array(4)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-600 hover:text-[#3ECF4C] cursor-pointer"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}
