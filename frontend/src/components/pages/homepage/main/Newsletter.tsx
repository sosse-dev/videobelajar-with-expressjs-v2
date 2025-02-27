import banner1 from "../../../../assets/banner1.png";

export default function Newsletter() {
  return (
    <div className="relative w-full max-w-6xl overflow-hidden rounded-lg">
      {/* Background Image */}
      <div className="absolute inset-0 z-[-10]">
        <img
          src={banner1}
          alt="Background"
          className="w-full h-full object-cover scale-125"
        />
      </div>

      {/* Title and Desc */}
      <div className="max-w-2xl mx-auto z-10 py-24 flex flex-col items-center justify-center px-5 sm:px-8 md:px-0">
        <h3 className="text-2xl font-extralight opacity-55 text-white mb-2">
          NEWSLETTER
        </h3>
        <h4 className="text-3xl font-semibold text-white mb-2 text-center">
          Mau Belajar Lebih Banyak?
        </h4>
        <p className="max-w-[30rem] text-gray-200 mb-8 text-center">
          Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
          spesial dari program-program terbaik hariesok.id
        </p>

        {/* Input Newsletter */}
        <div className="w-full max-w-[40rem] flex gap-4 flex-col md:flex-row md:bg-white md:p-2 rounded-xl">
          <input
            type="email"
            placeholder="Masukan Emailmu"
            className="flex-1 rounded-lg px-6 py-3 focus:outline-none text-center md:text-start bg-white md:bg-transparent"
          />
          <button className="bg-[#FFBD3A] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#e6a82a] cursor-pointer transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
