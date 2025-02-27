import { useCounter } from "@/stores/zustand";

export default function Banner({ banner1 }: { banner1: string }) {
  const { inc } = useCounter();
  return (
    <div className="relative w-full max-w-6xl rounded-lg overflow-hidden mt-[3rem]">
      {/* Background Image for its banner */}
      <div className="absolute inset-0">
        <img
          src={banner1}
          alt="Background"
          className="w-full h-full object-cover scale-125"
        />
      </div>

      {/* Title and Desc */}
      <div className="relative z-10 text-center flex flex-col justify-center items-center py-18 px-3 sm:px-8 md:px-10 lg:px-0">
        <h1 className="text-4xl md:text-5xl max-w-[50rem] font-black text-white mb-6">
          Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
          Interaktif!
        </h1>
        <p className="text-lg md:text-lg max-w-[60rem] text-gray-200 mb-8">
          Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
          pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
          berpartisipasi dalam latihan interaktif yang akan meningkatkan
          pemahaman Anda.
        </p>
        <button
          onClick={inc}
          className="w-fit bg-[#3ECF4C] text-white py-3 px-2 md:px-8 rounded-lg font-bold hover:bg-[#2e9f3a] cursor-pointer transition"
        >
          Temukan Video Course untuk Dipelajari!
        </button>
      </div>
    </div>
  );
}
