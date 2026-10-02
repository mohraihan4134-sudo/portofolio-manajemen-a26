// app/data.ts

export interface Anggota {
  id: number;
  nama: string;
  jabatan: "Ketua Kelas" | "Sekretaris" | "Bendahara" | "Anggota";
  foto: string;
  instagram: string;
}

export const anggotaKelas: Anggota[] = [
  // === STRUKTUR KELAS ===
  {
    id: 1,
    nama: "Budi Santoso",
    jabatan: "Ketua Kelas",
    foto: "https://i.pravatar.cc/150?u=budi",
    instagram: "https://instagram.com/",
  },
  {
    id: 2,
    nama: "Siti Aminah",
    jabatan: "Sekretaris",
    foto: "https://i.pravatar.cc/150?u=siti",
    instagram: "https://instagram.com/",
  },
  {
    id: 3,
    nama: "Andi Pratama",
    jabatan: "Bendahara",
    foto: "https://i.pravatar.cc/150?u=andi",
    instagram: "https://instagram.com/",
  },

  // === ANGGOTA KELAS (29 Mahasiswa) ===
  {
    id: 4,
    nama: "Dewi Lestari",
    jabatan: "Anggota",
    foto: "https://i.pravatar.cc/150?u=dewi",
    instagram: "https://instagram.com/",
  },
  {
    id: 5,
    nama: "Rizky Hidayat",
    jabatan: "Anggota",
    foto: "https://i.pravatar.cc/150?u=rizky",
    instagram: "https://instagram.com/",
  },
  {
    id: 6,
    nama: "Putri Wulandari",
    jabatan: "Anggota",
    foto: "https://i.pravatar.cc/150?u=putri",
    instagram: "https://instagram.com/",
  },
  {
    id: 7,
    nama: "Fajar Nugroho",
    jabatan: "Anggota",
    foto: "https://i.pravatar.cc/150?u=fajar",
    instagram: "https://instagram.com/",
  },
  {
    id: 8,
    nama: "Anisa Rahma",
    jabatan: "Anggota",
    foto: "https://i.pravatar.cc/150?u=anisa",
    instagram: "https://instagram.com/",
  },
  {
    id: 9,
    nama: "Dimas Saputra",
    jabatan: "Anggota",
    foto: "https://i.pravatar.cc/150?u=dimas",
    instagram: "https://instagram.com/",
  },
  {
    id: 10,
    nama: "Rina Marlina",
    jabatan: "Anggota",
    foto: "https://i.pravatar.cc/150?u=rina",
    instagram: "https://instagram.com/",
  },
  {
    id: 11,
    nama: "Bayu Setiawan",
    jabatan: "Anggota",
    foto: "https://i.pravatar.cc/150?u=bayu",
    instagram: "https://instagram.com/",
  },
  {
    id: 12,
    nama: "Lina Kusuma",
    jabatan: "Anggota",
    foto: "https://i.pravatar.cc/150?u=lina",
    instagram: "https://instagram.com/",
  },
  {
    id: 13,
    nama: "Hendra Wijaya",
    jabatan: "Anggota",
    foto: "https://i.pravatar.cc/150?u=hendra",
    instagram: "https://instagram.com/",
  },
  {
    id: 14,
    nama: "Maya Sari",
    jabatan: "Anggota",
    foto: "https://i.pravatar.cc/150?u=maya",
    instagram: "https://instagram.com/",
  },
  {
    id: 15,
    nama: "Arif Rahman",
    jabatan: "Anggota",
    foto: "https://i.pravatar.cc/150?u=arif",
    instagram: "https://instagram.com/",
  },
  {
    id: 16,
    nama: "Nadia Putri",
    jabatan: "Anggota",
    foto: "https://i.pravatar.cc/150?u=nadia",
    instagram: "https://instagram.com/",
  },
  {
    id: 17,
    nama: "Yoga Pratama",
    jabatan: "Anggota",
    foto: "https://i.pravatar.cc/150?u=yoga",
    instagram: "https://instagram.com/",
  },
  {
    id: 18,
    nama: "Dian Permata",
    jabatan: "Anggota",
    foto: "https://i.pravatar.cc/150?u=dian",
    instagram: "https://instagram.com/",
  },
  {
    id: 19,
    nama: "Raka Aditya",
    jabatan: "Anggota",
    foto: "https://i.pravatar.cc/150?u=raka",
    instagram: "https://instagram.com/",
  },
  {
    id: 20,
    nama: "Fitri Handayani",
    jabatan: "Anggota",
    foto: "https://i.pravatar.cc/150?u=fitri",
    instagram: "https://instagram.com/",
  },
  {
    id: 21,
    nama: "Galang Saputra",
    jabatan: "Anggota",
    foto: "https://i.pravatar.cc/150?u=galang",
    instagram: "https://instagram.com/",
  },
  {
    id: 22,
    nama: "Indah Lestari",
    jabatan: "Anggota",
    foto: "https://i.pravatar.cc/150?u=indah",
    instagram: "https://instagram.com/",
  },
  {
    id: 23,
    nama: "Joko Widodo",
    jabatan: "Anggota",
    foto: "https://i.pravatar.cc/150?u=joko",
    instagram: "https://instagram.com/",
  },
  {
    id: 24,
    nama: "Kartika Sari",
    jabatan: "Anggota",
    foto: "https://i.pravatar.cc/150?u=kartika",
    instagram: "https://instagram.com/",
  },
  {
    id: 25,
    nama: "Moh. Raihan Rahmatullah",
    jabatan: "Anggota",
    foto: "/images/rehan.jpg",
    instagram: "https://instagram.com/rhannrh",
  },
  {
    id: 26,
    nama: "Mega Wati",
    jabatan: "Anggota",
    foto: "https://i.pravatar.cc/150?u=mega",
    instagram: "https://instagram.com/",
  },
  {
    id: 27,
    nama: "Nanda Pratama",
    jabatan: "Anggota",
    foto: "https://i.pravatar.cc/150?u=nanda",
    instagram: "https://instagram.com/",
  },
  {
    id: 28,
    nama: "Oscar Firmansyah",
    jabatan: "Anggota",
    foto: "https://i.pravatar.cc/150?u=oscar",
    instagram: "https://instagram.com/",
  },
  {
    id: 29,
    nama: "Putri Ayuningtyas",
    jabatan: "Anggota",
    foto: "https://i.pravatar.cc/150?u=putriay",
    instagram: "https://instagram.com/",
  },
  {
    id: 30,
    nama: "Qori Aulia",
    jabatan: "Anggota",
    foto: "https://i.pravatar.cc/150?u=qori",
    instagram: "https://instagram.com/",
  },
  {
    id: 31,
    nama: "Rafi Hidayat",
    jabatan: "Anggota",
    foto: "https://i.pravatar.cc/150?u=rafi",
    instagram: "https://instagram.com/",
  },
  {
    id: 32,
    nama: "Salsa Billa",
    jabatan: "Anggota",
    foto: "https://i.pravatar.cc/150?u=salsa",
    instagram: "https://instagram.com/",
  },
];