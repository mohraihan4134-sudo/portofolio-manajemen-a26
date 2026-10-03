// app/about/page.tsx
import Link from "next/link";

export default function AboutPage() {
  const stats = [
    { label: "Total Mahasiswa", value: "32" },
    { label: "Laki-laki", value: "16" },
    { label: "Perempuan", value: "16" },
  ];

  return (
    <main className="bg-[#FAFAF9] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-[#111111] mb-6 leading-tight tracking-tight">
          Tentang <span className="text-[#7C9A72]">Kami</span>
        </h1>
        <p className="text-[#525252] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Mengenal lebih dekat perjalanan, visi, dan misi mahasiswa Manajemen A 26.
        </p>
      </section>

      {/* Deskripsi Kelas */}
      <section className="max-w-4xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
        <div className="bg-white border border-[#E5E5E5] rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6 tracking-tight">
            Siapa Kami?
          </h2>
          <p className="text-[#525252] leading-relaxed mb-4">
            Kami adalah mahasiswa kelas Manajemen A 26 yang bersemangat dalam mendalami 
            dunia bisnis, strategi organisasi, dan kewirausahaan modern. Kelas ini terdiri 
            dari individu-individu yang memiliki minat dan bakat di bidang manajemen dan bisnis digital.
          </p>
          <p className="text-[#525252] leading-relaxed">
            Selama perkuliahan, kami telah mempelajari berbagai bidang seperti manajemen strategis, 
            pemasaran digital, perilaku organisasi, dan analisis keuangan. Portofolio ini adalah 
            bukti karya, proyek, dan perjalanan akademik kami.
          </p>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="max-w-4xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-white border border-[#E5E5E5] rounded-2xl p-8 hover:border-[#7C9A72] transition-colors duration-300">
            <div className="w-12 h-12 bg-[#7C9A72]/10 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold text-[#111111] mb-3 tracking-tight">
              Visi
            </h3>
            <p className="text-[#525252] leading-relaxed">
              Menjadi calon pemimpin dan profesional muda yang unggul, inovatif, 
              dan siap menghadapi dinamika dunia bisnis global.
            </p>
          </div>

          <div className="bg-white border border-[#E5E5E5] rounded-2xl p-8 hover:border-[#7C9A72] transition-colors duration-300">
            <div className="w-12 h-12 bg-[#7C9A72]/10 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold text-[#111111] mb-3 tracking-tight">
              Misi
            </h3>
            <ul className="text-[#525252] leading-relaxed space-y-2">
              <li>• Menguasai teori dan praktik manajemen modern</li>
              <li>• Membangun jejaring profesional dan kolaborasi tim</li>
              <li>• Mengembangkan pola pikir kritis dan solutif dalam bisnis</li>
              <li>• Siap berkarir di dunia korporat atau membangun usaha sendiri</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Statistik Kelas */}
      <section className="max-w-4xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#111111] mb-12 tracking-tight">
          Statistik Kelas
        </h2>
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white border border-[#E5E5E5] rounded-2xl p-6 text-center hover:border-[#7C9A72] transition-colors duration-300"
            >
              <p className="text-4xl font-bold text-[#7C9A72] mb-2">
                {stat.value}
              </p>
              <p className="text-[#525252] text-sm tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tombol Kembali */}
      <section className="max-w-4xl mx-auto py-20 px-6 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#111111] text-white px-8 py-4 rounded-full font-medium hover:bg-[#7C9A72] transition-colors duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Kembali ke Home
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E5E5E5] bg-white py-12 text-center">
        <p className="text-[#525252] text-sm">
          &copy; 2026 Kelas Manajemen A 26.
        </p>
      </footer>
    </main>
  );
}