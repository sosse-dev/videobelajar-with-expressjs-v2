export default function ProductDetail() {
  return (
    <div className="flex flex-col justify-start items-start w-[1440px] gap-9 px-[120px] py-16">
      {/* Breadcrumb */}
      <div className="flex justify-start items-start overflow-hidden">
        {["Beranda", "Desain", "Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager."].map((item, index) => (
          <div key={index} className="flex items-center gap-1">
            <p className={`text-base text-left ${index === 2 ? "text-[#222325]" : "text-[#333]/[0.68]"}`}>{item}</p>
            {index < 2 && <p className="text-base text-left text-[#333]/[0.68]">/</p>}
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-start self-stretch h-[400px] gap-6 px-[100px] pt-[82px] pb-16 rounded-[10px] bg-black/80">
        <div className="flex flex-col items-center gap-3">
          <p className="w-[840px] text-[40px] font-semibold text-left text-white">
            Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.
          </p>
          <p className="w-[840px] text-base font-medium text-left text-white">
            Belajar bersama tutor profesional di Video Course. <br /> Kapanpun, di manapun.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <svg key={i} width={24} height={24} viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill={i < 3 ? "#FCE91B" : "#9D9EA1"} />
            </svg>
          ))}
          <p className="text-sm font-medium text-left text-[#c1c2c4]">3.5 (86)</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex justify-start items-start self-stretch gap-9">
        <div className="flex flex-col gap-9 flex-grow">
          {/* Description Section */}
          <div className="flex flex-col self-stretch gap-6 p-6 rounded-[10px] bg-white border border-[#3a3541]/[0.12]">
            <p className="text-xl font-semibold text-left text-[#222325]">Deskripsi</p>
            <p className="text-base text-left text-[#333]/[0.68]">
              Foundations of User Experience (UX) Design adalah yang pertama dari rangkaian tujuh kursus yang akan membekali Anda dengan keterampilan yang dibutuhkan untuk melamar pekerjaan tingkat pemula dalam desain pengalaman pengguna.
            </p>
          </div>

          {/* Tutors Section */}
          <div className="flex flex-col self-stretch gap-6 p-6 rounded-[10px] bg-white border border-[#3a3541]/[0.12]">
            <p className="text-xl font-semibold text-left text-[#222325]">Belajar bersama Tutor Profesional</p>
            <div className="flex gap-4">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex flex-col flex-grow gap-4 p-5 rounded-[10px] bg-white border border-[#3a3541]/[0.12]">
                  <div className="flex items-start gap-2.5">
                    <div className="w-10 h-10 rounded-[10px] bg-[url('avatar-2.png')] bg-cover bg-no-repeat bg-center" />
                    <div className="flex flex-col">
                      <p className="text-base font-medium text-left text-[#222325]">Gregorius Edrik Lawanto</p>
                      <div className="flex gap-1">
                        <p className="text-sm text-left text-[#333]/[0.68]">Senior Talent Acquisition di</p>
                        <p className="text-sm font-bold text-left text-[#333]/[0.68]">WingsGroup</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-base text-left text-[#222325]">
                    Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Section */}
          <div className="flex flex-col self-stretch gap-6 p-6 rounded-[10px] bg-white border border-[#3a3541]/[0.12]">
            <p className="text-xl font-semibold text-left text-[#222325]">Kamu akan Mempelajari</p>
            <div className="flex flex-col gap-6">
              {["Introduction to Course 1", "Universal design", "Introduction to design sprints", "Introduction to UX research"].map((item, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <p className="text-lg font-semibold text-left text-[#3ecf4c]">{item}</p>
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                      <path d="M19 9L12 16L5 9" stroke="#333333" strokeOpacity="0.68" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  {i === 0 && (
                    <div className="flex justify-between items-center p-5 rounded-[10px] bg-white border border-[#3a3541]/[0.12]">
                      <p className="text-base font-medium text-left text-[#222325]">The basics of user experience design</p>
                      <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                            <path d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z" stroke="#333333" strokeOpacity="0.68" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 15V9L15 12L10 15Z" stroke="#333333" strokeOpacity="0.68" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <p className="text-base text-left text-[#333]/[0.68]">Video</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                            <path d="M12 7V12H17M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#333333" strokeOpacity="0.68" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <p className="text-base text-left text-[#333]/[0.68]">12 Menit</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Ratings Section */}
          <div className="flex flex-col self-stretch gap-6 p-6 rounded-[10px] bg-white border border-[#3a3541]/[0.12]">
            <p className="text-xl font-semibold text-left text-[#222325]">Rating dan Review</p>
            <div className="flex gap-4">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex flex-col flex-grow gap-4 p-5 rounded-[10px] bg-white border border-[#3a3541]/[0.12]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-[10px] bg-[url('avatar-2.png')] bg-cover bg-no-repeat bg-center" />
                    <div className="flex flex-col">
                      <p className="text-base font-medium text-left text-[#222325]">Gregorius Edrik Lawanto</p>
                      <p className="text-sm text-left text-[#333]/[0.68]">Alumni Batch {i + 2}</p>
                    </div>
                  </div>
                  <p className="text-base text-left text-[#222325]">
                    Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.
                  </p>
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} width={18} height={18} viewBox="0 0 18 18" fill="none" className="w-[18px] h-[18px]">
                        <path d="M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z" fill={j < 3 ? "#FCE91B" : "#3A3541"} fillOpacity={j < 3 ? 1 : 0.12} />
                      </svg>
                    ))}
                    <p className="text-sm font-medium text-left text-[#333]/[0.68]">3.5</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col w-[366px] gap-6 p-6 rounded-[10px] bg-white border border-[#3a3541]/[0.12]">
          <div className="flex flex-col gap-4">
            <p className="text-lg font-semibold text-left text-[#222325]">
              Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.
            </p>
            <div className="flex justify-between items-end">
              <div className="flex gap-2">
                <p className="text-lg font-semibold text-left text-[#3ecf4c]">Rp 250K</p>
                <p className="text-base font-medium text-left text-[#3a3541]/[0.38]">Rp 500K</p>
              </div>
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-[10px] bg-[#ffbd3a]">
                <p className="text-xs text-left text-white">Diskon 50%</p>
              </div>
            </div>
            <p className="text-sm font-medium text-left text-[#0980e2]">Penawaran spesial tersisa 2 hari lagi!</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-center items-center w-full rounded-[10px] bg-[#3ecf4c]">
              <p className="text-base font-bold text-left text-white">Beli Sekarang</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold text-left text-[#222325]">Kelas Ini Sudah Termasuk</p>
            <div className="flex gap-4">
              <div className="flex flex-col gap-4">
                {["Ujian Akhir", "7 Dokumen", "Pretest"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="#FCE91B" />
                    </svg>
                    <p className="text-sm text-left text-[#333]/[0.68]">{item}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                {["49 Video", "Sertifikat"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="#FCE91B" />
                    </svg>
                    <p className="text-sm text-left text-[#333]/[0.68]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold text-left text-[#222325]">Bahasa Pengantar</p>
            <div className="flex items-center gap-2">
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <circle cx={12} cy={12} r={9} stroke="#333333" strokeOpacity="0.68" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.59961 9H20.3996" stroke="#333333" strokeOpacity="0.68" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.59961 15H20.3996" stroke="#333333" strokeOpacity="0.68" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.4997 3C8.06261 8.50778 8.06261 15.4922 11.4997 21" stroke="#333333" strokeOpacity="0.68" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.5 3C15.9371 8.50778 15.9371 15.4922 12.5 21" stroke="#333333" strokeOpacity="0.68" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-sm text-left text-[#333]/[0.68]">Bahasa Indonesia</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Videos Section */}
      <div className="flex flex-col justify-center items-start self-stretch gap-8">
        <div className="flex justify-start items-start gap-[345px]">
          <div className="flex flex-col justify-center items-start gap-2.5">
            <p className="text-[32px] font-semibold text-left text-[#222325]">Video Pembelajaran Terkait Lainnya</p>
            <p className="text-base text-left text-[#333]/[0.68]">Ekspansi Pengetahuan Anda dengan Rekomendasi Spesial Kami!</p>
          </div>
        </div>
        <div className="flex justify-start items-start w-[1200px] gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex flex-col w-96 gap-4 p-5 rounded-[10px] bg-white border border-[#3a3541]/[0.12]">
              <img className="w-[344px] h-[193px] rounded-[10px]" src={`rectangle-22957-${i + 1}.png`} />
              <div className="flex flex-col gap-2">
                <p className="text-lg font-semibold text-left text-[#222325]">Big 4 Auditor Financial Analyst</p>
                <p className="text-base text-left text-[#333]/[0.68]">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik</p>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-10 h-10 rounded-[10px] bg-[url('avatar-${i + 1}.png')] bg-cover bg-no-repeat bg-center" />
                <div className="flex flex-col">
                  <p className="text-base font-medium text-left text-[#222325]">Jenna Ortega</p>
                  <div className="flex gap-1">
                    <p className="text-sm text-left text-[#333]/[0.68]">Senior Accountant di</p>
                    <p className="text-sm font-bold text-left text-[#333]/[0.68]">Gojek</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width={18} height={19} viewBox="0 0 18 19" fill="none" className="w-[18px] h-[18px]">
                      <path d="M9 13.4525L13.635 16.25L12.405 10.9775L16.5 7.43L11.1075 6.9725L9 2L6.8925 6.9725L1.5 7.43L5.595 10.9775L4.365 16.25L9 13.4525Z" fill={j < 3 ? "#FCE91B" : "#3A3541"} fillOpacity={j < 3 ? 1 : 0.12} />
                    </svg>
                  ))}
                  <p className="text-sm font-medium text-left text-[#333]/[0.68]">3.5 (86)</p>
                </div>
                <p className="text-2xl font-semibold text-left text-[#3ecf4c]">Rp 300K</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}