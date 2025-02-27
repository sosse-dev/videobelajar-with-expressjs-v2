import LeftBar from "@/components/pages/_generic/setting/LeftBar";
import Navbar from "@/components/pages/_generic/navbar/Navbar";
import { ChevronLeft, ChevronRight, Clock, FileText, SearchIcon, User } from "lucide-react";

export default function MyClasses() {
  return (
    <div className="mx-auto max-w-7xl">
      <Navbar showDropdown={true} />

      <main className="container mx-auto px-4 md:px-8 lg:px-16 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <LeftBar path="/class" /> 

          {/* Main Content */}
          <div className="flex-1 flex flex-col bg-white rounded-lg border border-[#3a3541]/[0.12] p-6 space-y-6">
            {/* Header */}
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-semibold text-[#222325]">Daftar Kelas</h1>
              <p className="text-base text-[#333]/[0.68]">
                Akses Materi Belajar dan Mulailah Meningkatkan Pengetahuan Anda!
              </p>
            </div>

            {/* Filter Section */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              {/* Tabs */}
              <div className="flex border-b border-[#3a3541]/[0.12]">
                <TabItem active label="Semua Kelas" />
                <TabItem label="Sedang Berjalan" />
                <TabItem label="Selesai" />
              </div>

              {/* Search */}
              <div className="relative w-full lg:w-72">
                <input
                  placeholder="Cari Kelas"
                  className="w-full pl-4 pr-10 py-2 text-base border border-[#3a3541]/[0.12] rounded-lg"
                />
                <SearchIcon className="absolute right-3 top-2.5 text-[#333]/[0.68] w-5 h-5" />
              </div>
            </div>

            {/* Class List */}
            <div className="space-y-6">
              <ClassCard 
                progress={100}
                status="Selesai"
                modulesCompleted={12}
                totalModules={12}
                duration={360}
              />
              <ClassCard 
                progress={28}
                status="Sedang Berjalan"
                modulesCompleted={2}
                totalModules={12}
                duration={360}
              />
            </div>

            {/* Pagination */}
            <Pagination />
          </div>
        </div>
      </main>
    </div>
  );
}

// Components
function TabItem({ active, label }) {
  return (
    <div className={`relative px-4 py-2 cursor-pointer ${active ? 'text-[#f64920]' : 'text-[#333]/[0.68]'}`}>
      {label}
      {active && <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#f64920] rounded-t" />}
    </div>
  );
}

function ClassCard({ progress, status, modulesCompleted, totalModules, duration }) {
  return (
    <div className="border border-[#3a3541]/[0.12] rounded-lg overflow-hidden">
      {/* Card Header */}
      <div className="flex justify-between items-center p-4 bg-[#e2fcd9]/20 border-b">
        <span className="text-base font-medium">
          {modulesCompleted}/{totalModules} Modul Terselesaikan
        </span>
        <span className={`px-2 py-1 rounded-lg ${
          status === 'Selesai' ? 'bg-[#e0fddf] text-[#38d189]' 
          : 'bg-[#fff7d7]/80 text-[#ffbd3a]'
        }`}>
          {status}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-4 bg-white flex flex-col lg:flex-row gap-6">
        <img 
          src="/rectangle-22957.png" 
          className="w-40 h-40 rounded-lg object-cover"
          alt="Class thumbnail"
        />

        <div className="flex-1 space-y-4">
          <h2 className="text-lg font-semibold">Big 4 Auditor Financial Analyst</h2>
          
          {/* Instructor */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gray-200 rounded-lg" />
            <div>
              <p className="font-medium">Jenna Ortega</p>
              <p className="text-sm text-[#333]/[0.68]">
                Senior Accountant di <span className="font-bold">Gojek</span>
              </p>
            </div>
          </div>

          {/* Details */}
          <div className="flex gap-6 text-[#333]/[0.68]">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              <span>{totalModules} Modul</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{duration} Menit</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center p-4 bg-[#e2fcd9]/20 gap-4">
        <div className="flex-1 flex items-center gap-3 w-full">
          <span className="text-[#333]/[0.68]">Progres Kelas:</span>
          <span className="font-medium">{progress}%</span>
          <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#f64920]" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex gap-4">
          {status === 'Selesai' ? (
            <>
              <Button variant="outline">Unduh Sertifikat</Button>
              <Button>Lihat Detail Kelas</Button>
            </>
          ) : (
            <Button>Lanjutkan Pembelajaran</Button>
          )}
        </div>
      </div>
    </div>
  );
}

function Pagination() {
  return (
    <div className="flex gap-2">
      <Button variant="ghost">
        <ChevronLeft className="w-5 h-5" />
      </Button>
      {[1,2,3,4,5,6].map(num => (
        <Button 
          key={num}
          variant={num === 1 ? 'solid' : 'ghost'}
        >
          {num}
        </Button>
      ))}
      <Button variant="ghost">
        <ChevronRight className="w-5 h-5" />
      </Button>
    </div>
  );
}

function Button({ children, variant = 'solid', ...props }) {
  const variants = {
    solid: 'bg-[#3ecf4c] text-white',
    outline: 'border border-[#3ecf4c] text-[#3ecf4c]',
    ghost: 'bg-transparent text-[#222325] hover:bg-gray-100'
  };
  
  return (
    <button
      className={`px-4 py-2 rounded-lg font-medium transition-colors ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}