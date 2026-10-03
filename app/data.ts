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
    nama: "Ayu Mulyani",
    jabatan: "Ketua Kelas",
    foto: "/images/ayu.jpeg",
    instagram: "https://www.instagram.com/ayymly4nn?stkn=MXJwOGc1dTU5cmZxcA%3D%3D&utm_source=qr",
  },
  {
    id: 2,
    nama: "Ega Nanda Hardianti",
    jabatan: "Sekretaris",
    foto: "/images/nanda.jpeg",
    instagram: "https://www.instagram.com/nndynraaaa?stkn=ZmkyZ29yMDR5ejkx",
  },
  {
    id: 3,
    nama: "Aprilia Wulandari",
    jabatan: "Bendahara",
    foto: "/images/april.jpeg",
    instagram: "https://www.instagram.com/_apreals?stkn=MzYxY21qYmF0M2V5",
  },

  // === ANGGOTA KELAS (29 Mahasiswa) ===
  {
    id: 4,
    nama: "Shinta Desiana Permatasari",
    jabatan: "Anggota",
    foto: "/images/shinta.jpeg",
    instagram: "https://www.instagram.com/naee_shn16?stkn=YjZkNTEwNjcxODR2",
  },
  {
    id: 5,
    nama: "Sakinah Bilala",
    jabatan: "Anggota",
    foto: "/images/sakinah.jpeg",
    instagram: "https://www.instagram.com/elfdream_02?stkn=MW4xdTYyNWdjM2Rpcw==",
  },
  {
    id: 6,
    nama: "Moh Rizki Utomo",
    jabatan: "Anggota",
    foto: "/images/rizki.jpeg",
    instagram: "https://www.instagram.com/zxy__kyyy60?stkn=NTloenpsdHpyNDFz",
  },
  {
    id: 7,
    nama: "Raihanun Noviatul Hasanah",
    jabatan: "Anggota",
    foto: "/images/raihanun.jpeg",
    instagram: "https://www.instagram.com/cllmerere?stkn=ajVpZXdmbTA1aW94",
  },
  {
    id: 8,
    nama: "Moch Hanut Mifta Muafa",
    jabatan: "Anggota",
    foto: "/images/hanut.jpeg",
    instagram: "https://www.instagram.com/nuuuttellaaa_?stkn=MXhxMGloOGNkcnR6dw==",
  },
  {
    id: 9,
    nama: "Mellydia",
    jabatan: "Anggota",
    foto: "/images/mellydia.jpeg",
    instagram: "https://www.instagram.com/ssmeylly?stkn=eWpuc29sYXgyZXQ1",
  },
  {
    id: 10,
    nama: "Nasywa Yumna Putri Sugiarto",
    jabatan: "Anggota",
    foto: "/images/nasywa.jpeg",
    instagram: "https://www.instagram.com/ptrinsyw?stkn=MWtlaXY5NDhoMWY1Yw==",
  },
  {
    id: 11,
    nama: "Mohammad Zainur Rohim",
    jabatan: "Anggota",
    foto: "/images/rohim.jpeg",
    instagram: "https://www.instagram.com/r0him._?stkn=MWZvM2J5c3Zmc2Qwbw==",
  },
  {
    id: 12,
    nama: "Sofia",
    jabatan: "Anggota",
    foto: "/images/sofia.jpeg",
    instagram: "https://www.instagram.com/fiazvr?stkn=eGxsaWJtOXo0dTFr",
  },
  {
    id: 13,
    nama: "Arief Rizky Saputra",
    jabatan: "Anggota",
    foto: "/images/arif.jpeg",
    instagram: "https://www.instagram.com/rzqyesptraa?stkn=MTBocGVoYmthNXBubA==",
  },
  {
    id: 14,
    nama: "Naylan Karyati",
    jabatan: "Anggota",
    foto: "/images/naylan.jpeg",
    instagram: "https://www.instagram.com/nylln_kyt?stkn=NmxvN21uYzZuNWQ4",
  },
  {
    id: 15,
    nama: "Ayla Azna",
    jabatan: "Anggota",
    foto: "/images/ayla.jpeg",
    instagram: "https://www.instagram.com/aylzn._?stkn=d291OWxmMDBxaDkx",
  },
  {
    id: 16,
    nama: "Wildan Sabiq Mujtaba",
    jabatan: "Anggota",
    foto: "/images/wildan.jpeg",
    instagram: "https://www.instagram.com/wiell.16?stkn=am9rMHNvNjZqdjhs",
  },
  {
    id: 17,
    nama: "Ike Faizatul Nikmah",
    jabatan: "Anggota",
    foto: "/images/iza.jpeg",
    instagram: "https://www.instagram.com/ikfztnkm?stkn=MWd0dWY0OGQxM2RlYw==",
  },
  {
    id: 18,
    nama: "Dhion Aditama Maulana Ramadhan",
    jabatan: "Anggota",
    foto: "/images/dhion.jpeg",
    instagram: "https://www.instagram.com/dhinadtm14?stkn=bmExMnV3MXk5ZG5p",
  },
  {
    id: 19,
    nama: "Estonia Bago",
    jabatan: "Anggota",
    foto: "/images/esto.jpeg",
    instagram: "https://www.instagram.com/e_b5314?stkn=amhhYzJrczE2Y2xq",
  },
  {
    id: 20,
    nama: "Safina Najati",
    jabatan: "Anggota",
    foto: "/images/safina.jpeg",
    instagram: "https://www.instagram.com/sfinanaty?stkn=MW1xd2Zhb3Zpc2puYQ==",
  },
  {
    id: 21,
    nama: "Triyan Makruf Fil Ahkam",
    jabatan: "Anggota",
    foto: "/images/riyan.jpeg",
    instagram: "https://www.instagram.com/tynmhrfkm?stkn=MWNlOXUyYnR2b2lubw==",
  },
  {
    id: 22,
    nama: "Niagara Jasmine Almaida Santoso",
    jabatan: "Anggota",
    foto: "/images/aya.jpeg",
    instagram: "https://www.instagram.com/ayaajasminetea_?stkn=d3dibzI0M25yNm9z",
  },
  {
    id: 23,
    nama: "Syifa Urrohmah",
    jabatan: "Anggota",
    foto: "/images/sifa.jpeg",
    instagram: "https://www.instagram.com/sfurmh___?stkn=MWhibTJydjl6Zjk1ZQ==",
  },
  {
    id: 24,
    nama: "Dimas Setyawan",
    jabatan: "Anggota",
    foto: "/images/dimas.jpeg",
    instagram: "https://www.instagram.com/sety.aa12?stkn=MTF0NTh5ZmZmMGVlbA==",
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
    nama: "Syahdatian Matalino Zahran",
    jabatan: "Anggota",
    foto: "/images/tian.jpeg",
    instagram: "https://www.instagram.com/syahdatian_?stkn=MXFjd2tpMDBmMnVnbQ==",
  },
  {
    id: 27,
    nama: "Muh Zaqi Maulana Khoir",
    jabatan: "Anggota",
    foto: "/images/zaky.jpeg",
    instagram: "https://www.instagram.com/zkyy.eight_?stkn=dDdhb2Z1cjN0Znd2",
  },
  {
    id: 28,
    nama: "Zainul Rohman",
    jabatan: "Anggota",
    foto: "/images/zainul.jpeg",
    instagram: "https://www.instagram.com/z4l__nunkk?stkn=MW03a3R3cGNhOTI5eA==",
  },
  {
    id: 29,
    nama: "Saeful Rijal",
    jabatan: "Anggota",
    foto: "/images/rijal.jpeg",
    instagram: "https://www.instagram.com/ngkpnya8?stkn=MXE1Ym12ZW42bHJlOQ==",
  },
  {
    id: 30,
    nama: "Mohammad Arva Nadhif Wiryawan",
    jabatan: "Anggota",
    foto: "/images/arva.jpeg",
    instagram: "https://www.instagram.com/n4dhivvv?stkn=MWxyZTg0MzVubnR4Ng==",
  },
  {
    id: 31,
    nama: "M.Asifurrohman",
    jabatan: "Anggota",
    foto: "/images/asif.jpeg",
    instagram: "https://www.instagram.com/asifurrohman09?stkn=MXdrc3Y2d3JiMGZ6Mw==",
  },
  {
    id: 32,
    nama: "Mohammad Fahmi Al Fahrossi",
    jabatan: "Anggota",
    foto: "/images/fahmi.jpeg",
    instagram: "https://www.instagram.com/fahmi_alfahrossi?stkn=dXR6YTFlZ2ZmM2E=",
  },
];