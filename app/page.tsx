// app/page.tsx
import { anggotaKelas } from "./data";
import MemberCard from "@/components/MemberCard";

export default function Home() {
  // Filter data berdasarkan jabatan
  const ketua = anggotaKelas.find((a) => a.jabatan === "Ketua Kelas");
  const sekretaris = anggotaKelas.find((a) => a.jabatan === "Sekretaris");
  const bendahara = anggotaKelas.find((a) => a.jabatan === "Bendahara");
  const anggotaBiasa = anggotaKelas.filter((a) => a.jabatan === "Anggota");

  return (
    <main className="bg-[#FAFAF9] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-[#111111] mb-6 leading-tight tracking-tight">
          Portofolio Kelas <br />
          <span className="text-[#7C9A72]">Manajemen A 26</span>
        </h1>
        
        <p className="text-[#525252] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Kumpulan karya, ide, dan profil dari mahasiswa yang bersemangat 
          membangun masa depan di dunia bisnis dan manajemen.
        </p>
        
        <a
          href="#struktur"
          className="inline-flex items-center gap-2 bg-[#111111] text-white px-8 py-4 rounded-full font-medium hover:bg-[#7C9A72] transition-colors duration-300"
        >
          Lihat Struktur
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </a>
      </section>

      {/* Section Struktur Kelas (Piramid) */}
      <section id="struktur" className="max-w-4xl mx-auto py-20 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4 tracking-tight">
            Struktur Kelas
          </h2>
          <div className="w-16 h-1 bg-[#7C9A72] mx-auto rounded-full"></div>
          <p className="text-[#525252] mt-4 max-w-xl mx-auto">
            Pengurus inti yang bertanggung jawab atas jalannya kegiatan kelas.
          </p>
        </div>

                {/* Layout Piramid */}
        <div className="flex flex-col items-center">
          {/* Ketua Kelas (Puncak) */}
          {ketua && (
            <div className="w-full max-w-sm mb-4">
              <MemberCard anggota={ketua} isStruktur={true} />
            </div>
          )}

          {/* Garis Penghubung Vertikal */}
          <div className="w-px h-8 bg-[#7C9A72]/30 mb-4"></div>

          {/* Sekretaris & Bendahara (Dasar Piramid) */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {sekretaris && (
              <div className="w-full max-w-sm">
                <MemberCard anggota={sekretaris} isStruktur={true} />
              </div>
            )}
            {bendahara && (
              <div className="w-full max-w-sm">
                <MemberCard anggota={bendahara} isStruktur={true} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section Anggota Kelas (Grid) */}
      <section id="anggota" className="max-w-6xl mx-auto py-20 px-6 border-t border-[#E5E5E5]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4 tracking-tight">
            Anggota Kelas
          </h2>
          <div className="w-16 h-1 bg-[#7C9A72] mx-auto rounded-full"></div>
          <p className="text-[#525252] mt-4 max-w-xl mx-auto">
            Mahasiswa-mahasiswi berbakat yang menjadi bagian dari Manajemen A 26.
          </p>
        </div>

                <div className="flex flex-wrap justify-center">
          {anggotaBiasa.map((anggota) => (
            <div key={anggota.id} className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <MemberCard anggota={anggota} />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E5E5E5] bg-white py-12 text-center">
        <p className="text-[#525252] text-sm">
          &copy; 2026 Kelas Manajemen A 26. Dibuat dengan ❤️ menggunakan Next.js & Tailwind CSS.
        </p>
      </footer>
    </main>
  );
}