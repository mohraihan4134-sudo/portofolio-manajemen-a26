// components/MemberCard.tsx
import { Anggota } from "@/app/data";

interface MemberCardProps {
  anggota: Anggota;
  isStruktur?: boolean;
}

export default function MemberCard({ anggota, isStruktur = false }: MemberCardProps) {
  // Fungsi untuk menentukan style badge berdasarkan jabatan
  const getBadgeStyle = () => {
    if (anggota.jabatan === "Ketua Kelas") {
      return "bg-[#7C9A72] text-white border-[#7C9A72]";
    }
    if (anggota.jabatan === "Sekretaris" || anggota.jabatan === "Bendahara") {
      return "bg-[#7C9A72]/10 text-[#7C9A72] border-[#7C9A72]/30";
    }
    return "bg-[#111111]/5 text-[#525252] border-[#E5E5E5]";
  };

  return (
    <div className="group bg-white border border-[#E5E5E5] rounded-2xl p-8 text-center hover:border-[#7C9A72] hover:shadow-lg transition-all duration-300">
      
      {/* Badge Jabatan (Hanya muncul jika isStruktur = true) */}
      {isStruktur && (
        <div className="mb-6">
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border ${getBadgeStyle()}`}>
            {anggota.jabatan}
          </span>
        </div>
      )}

      {/* Foto Anggota (Sedikit diperbesar agar lebih proporsional tanpa teks) */}
      <div className="relative w-28 h-28 mx-auto mb-6">
        <img
          src={anggota.foto}
          alt={anggota.nama}
          className="w-full h-full rounded-full object-cover border-2 border-[#E5E5E5] group-hover:border-[#7C9A72] transition-colors duration-300"
        />
      </div>

      {/* Nama */}
      <h3 className="text-xl font-bold text-[#111111] mb-6">
        {anggota.nama}
      </h3>

      {/* Tombol Instagram */}
      <div className="flex justify-center mt-2">
        <a
          href={anggota.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#7C9A72] text-[#7C9A72] px-8 py-2.5 rounded-full text-sm font-medium hover:bg-[#7C9A72] hover:text-white transition-all duration-300"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}