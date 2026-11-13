/* ===== BANK SOAL TERPUSAT =====
   Tiap soal: {id, topik, pertanyaan, pilihan[4], jawaban_benar(0-3), pembahasan_langkah[], image_url?, visual?}
   - <b>..</b> pada langkah = teks yang di-highlight kuning
   - Pecahan cukup ditulis "1/2" (otomatis tampil bertingkat), pangkat pakai <sup>
   - Untuk menambah paket: buat array 25 soal dengan helper Q(), lalu push ke PAKET di bawah */
const TOPIK = ['Number Theory','Aljabar Dasar','Geometri','Pola Bilangan','Kombinatorika','Logika','Statistika','Peluang'];
const mk = () => { let n = 0; return (topik, pertanyaan, pilihan, jawaban_benar, pembahasan_langkah = [], visual = '', image_url = '') =>
  ({ id: ++n, topik, pertanyaan, pilihan, jawaban_benar, pembahasan_langkah, visual, image_url }); };

const tabel = (h, rows) => `<table class="tbl"><tr>${h.map(x=>`<th>${x}</th>`).join('')}</tr>${rows.map(r=>`<tr>${r.map(x=>`<td>${x}</td>`).join('')}</tr>`).join('')}</table>`;

/* ---------- BAGIAN 1: 25 CONTOH SOAL + PEMBAHASAN ---------- */
let Q = mk();
const CONTOH = [
 Q(0,'KPK dari 12 dan 18 adalah ...',['6','24','36','72'],2,['Uraikan: 12 = <b>2<sup>2</sup> × 3</b> dan 18 = <b>2 × 3<sup>2</sup></b>.','KPK: ambil semua faktor prima dengan <b>pangkat tertinggi</b>: 2<sup>2</sup> × 3<sup>2</sup>.','4 × 9 = <b>36</b>. Jawaban: C.']),
 Q(0,'Banyak faktor dari 36 adalah ...',['6','8','9','12'],2,['36 = <b>2<sup>2</sup> × 3<sup>2</sup></b>.','Tambah 1 pada tiap pangkat: (2+1) × (2+1).','3 × 3 = <b>9</b> faktor (1,2,3,4,6,9,12,18,36).']),
 Q(0,'Ada berapa bilangan prima di antara 20 dan 40?',['3','4','5','6'],1,['Periksa satu-satu: 21(3×7), 22, 24, 25, 26, 27, 28 bukan prima.','Yang prima: <b>23, 29, 31, 37</b>.','Totalnya <b>4</b> bilangan.']),
 Q(0,'Bilangan terkecil lebih dari 1 yang jika dibagi 4, 6, dan 8 bersisa 1 adalah ...',['13','25','49','97'],1,['Cari bilangan yang habis dibagi 4, 6, 8: itu <b>KPK</b>-nya.','KPK(4,6,8) = <b>24</b>.','Sisanya 1, jadi 24 + 1 = <b>25</b>.']),
 Q(1,'Jika 3x + 7 = 25, maka x = ...',['5','6','7','8'],1,['Kurangi 7 di kedua sisi: 3x = 25 − 7 = <b>18</b>.','Bagi 3: x = 18 ÷ 3 = <b>6</b>.']),
 Q(1,'a + b = 12 dan a − b = 4. Nilai a adalah ...',['4','6','8','10'],2,['Jumlahkan kedua persamaan: (a+b) + (a−b) = 12 + 4.','2a = <b>16</b>.','a = <b>8</b>.']),
 Q(1,'Umur Ani 3 tahun lebih tua dari Budi. Jumlah umur mereka 27 tahun. Umur Ani adalah ...',['12','14','15','16'],2,['Misal Budi = b, Ani = b + 3.','b + (b+3) = 27 → 2b = <b>24</b> → b = 12.','Ani = 12 + 3 = <b>15</b>.']),
 Q(2,'Keliling sebuah persegi 36 cm. Luasnya adalah ... cm<sup>2</sup>',['36','64','81','144'],2,['Sisi = keliling ÷ 4 = 36 ÷ 4 = <b>9 cm</b>.','Luas = 9 × 9 = <b>81</b>.']),
 Q(2,'Dua sudut sebuah segitiga adalah 50° dan 60°. Sudut ketiganya adalah ...',['60°','70°','80°','90°'],1,['Jumlah sudut segitiga = <b>180°</b>.','180 − 50 − 60 = <b>70°</b>.']),
 Q(2,'Persegi panjang 8 × 5 dipotong persegi 3 × 3 di pojoknya. Luas bangun sisa adalah ...',['25','28','31','34'],2,['Luas persegi panjang = 8 × 5 = <b>40</b>.','Luas potongan = 3 × 3 = <b>9</b>.','Sisa = 40 − 9 = <b>31</b>.'],
   `<svg viewBox="0 0 220 140" class="w-64 mx-auto"><path d="M10 10H170V50H130V110H10Z" fill="#a5f3fc" stroke="#0e7490" stroke-width="3"/><rect x="130" y="10" width="40" height="40" fill="none" stroke="#f43f5e" stroke-dasharray="4"/><text x="90" y="8" font-size="11" text-anchor="middle">8</text><text x="4" y="64" font-size="11">5</text><text x="150" y="35" font-size="10" fill="#f43f5e" text-anchor="middle">3×3</text></svg>`),
 Q(3,'Pola 3, 7, 11, 15, ... Suku ke-10 adalah ...',['37','39','41','43'],1,['Beda tiap suku = <b>4</b>, suku pertama = 3.','Rumus: U<sub>n</sub> = 3 + (n−1)×4.','U<sub>10</sub> = 3 + 9×4 = 3 + 36 = <b>39</b>.']),
 Q(3,'Pola 1, 4, 9, 16, ... Suku ke-8 adalah ...',['49','56','64','81'],2,['Ini bilangan kuadrat: 1<sup>2</sup>, 2<sup>2</sup>, 3<sup>2</sup>, 4<sup>2</sup>.','Suku ke-n = <b>n<sup>2</sup></b>.','8<sup>2</sup> = <b>64</b>.']),
 Q(3,'Rumus suku ke-n dari 5, 8, 11, 14, ... adalah ...',['2n + 3','3n + 2','3n + 5','5n + 3'],1,['Beda = <b>3</b>, maka rumus berbentuk 3n + ...','Suku ke-1 = 5 → 3×1 + ? = 5 → ? = <b>2</b>.','Rumus: <b>3n + 2</b>. Cek n=4: 14 ✓.']),
 Q(4,'Ada 3 baju dan 4 celana berbeda. Banyak pasangan baju-celana adalah ...',['7','12','16','24'],1,['Aturan perkalian: baju × celana.','3 × 4 = <b>12</b>.']),
 Q(4,'Dari angka 1, 2, 3 dibuat bilangan 3 angka dengan angka berbeda. Banyaknya bilangan adalah ...',['3','6','9','27'],1,['Angka pertama: <b>3</b> pilihan, kedua: <b>2</b> pilihan, ketiga: <b>1</b> pilihan.','3 × 2 × 1 = <b>6</b>: 123, 132, 213, 231, 312, 321.']),
 Q(4,'Lima orang saling berjabat tangan tepat sekali. Banyak jabat tangan adalah ...',['5','10','15','20'],1,['Tiap orang berjabat dengan 4 orang lain: 5 × 4 = 20.','Tiap jabat tangan terhitung <b>dua kali</b>, jadi bagi 2.','20 ÷ 2 = <b>10</b>.']),
 Q(5,'Semua kucing adalah hewan. Tom adalah kucing. Kesimpulan yang benar ...',['Tom bukan hewan','Tom adalah hewan','Semua hewan kucing','Tom bukan kucing'],1,['Kucing ⊂ hewan, dan Tom ∈ kucing.','Maka <b>Tom adalah hewan</b>. (Pilihan C terbalik arahnya!)']),
 Q(5,'Andi lebih tinggi dari Budi. Budi lebih tinggi dari Cici. Siapa paling pendek?',['Andi','Budi','Cici','Tidak bisa ditentukan'],2,['Urutkan: <b>Andi > Budi > Cici</b>.','Yang paling kanan = paling pendek = <b>Cici</b>.']),
 Q(5,'"Jika hujan, Dina membawa payung." Dina tidak membawa payung. Kesimpulannya ...',['Hujan','Tidak hujan','Mungkin hujan','Dina sakit'],1,['Jika hujan → bawa payung. Tidak bawa payung berarti syaratnya <b>tidak terpenuhi</b>.','Jadi <b>tidak hujan</b> (kontraposisi).']),
 Q(6,'Nilai 4 siswa: 70, 80, 90, 60. Rata-ratanya adalah ...',['70','75','80','85'],1,['Jumlah = 70 + 80 + 90 + 60 = <b>300</b>.','Rata-rata = 300 ÷ 4 = <b>75</b>.'],
   tabel(['Siswa','A','B','C','D'],[['Nilai',70,80,90,60]])),
 Q(6,'Median dari data 3, 9, 5, 7, 5 adalah ...',['5','6','7','9'],0,['Urutkan: <b>3, 5, 5, 7, 9</b>.','Median = nilai tengah (ke-3) = <b>5</b>.']),
 Q(6,'Berdasarkan tabel, selisih buah terbanyak dan tersedikit dipilih adalah ...',['3','7','10','12'],2,['Terbanyak: Pisang = <b>15</b>. Tersedikit: Mangga = <b>5</b>.','15 − 5 = <b>10</b>.'],
   tabel(['Buah','Apel','Jeruk','Mangga','Pisang'],[['Jumlah siswa',8,12,5,15]])),
 Q(7,'Sebuah dadu dilempar. Peluang muncul bilangan prima adalah ...',['1/6','1/3','1/2','2/3'],2,['Prima pada dadu: <b>2, 3, 5</b> → 3 kejadian.','Semua kemungkinan = 6.','Peluang = 3/6 = <b>1/2</b>.']),
 Q(7,'Kantong berisi 3 bola merah, 5 biru, 2 kuning. Peluang terambil bola kuning adalah ...',['1/10','1/5','1/3','1/2'],1,['Total bola = 3 + 5 + 2 = <b>10</b>.','Kuning = 2 → 2/10 = <b>1/5</b>.']),
 Q(7,'Dua koin dilempar bersamaan. Peluang keduanya "Gambar" adalah ...',['1/2','1/4','1/3','1/8'],1,['Kemungkinan: GG, GA, AG, AA = <b>4</b>.','Yang diinginkan hanya <b>GG</b> = 1.','Peluang = <b>1/4</b>.']),
];

/* ---------- BAGIAN 2: PAKET LATIHAN (25 soal/paket) ---------- */
Q = mk();
const PAKET1 = [
 Q(0,'KPK dari 8 dan 12 adalah ...',['16','24','36','48'],1),
 Q(0,'FPB dari 24 dan 36 adalah ...',['6','8','12','18'],2),
 Q(0,'Jumlah semua bilangan prima kurang dari 10 adalah ...',['15','17','18','19'],1),
 Q(0,'Banyak kelipatan 7 antara 50 dan 80 adalah ...',['3','4','5','6'],1),
 Q(1,'Jika 2x − 5 = 13, maka x = ...',['8','9','10','11'],1),
 Q(1,'Jika a + a + a = 2a + 10, maka a = ...',['5','8','10','12'],2),
 Q(1,'Harga 3 pensil Rp7.500. Harga 5 pensil yang sama adalah ...',['Rp10.000','Rp12.000','Rp12.500','Rp15.000'],2),
 Q(2,'Persegi panjang berukuran 12 cm × 5 cm. Kelilingnya ... cm',['17','34','60','30'],1),
 Q(2,'Segitiga siku-siku, satu sudut lancipnya 35°. Sudut lancip lainnya ...',['45°','55°','65°','125°'],1),
 Q(2,'Luas segitiga dengan alas 10 cm dan tinggi 6 cm adalah ... cm<sup>2</sup>',['60','30','16','15'],1,[],
   `<svg viewBox="0 0 200 110" class="w-48 mx-auto"><polygon points="20,95 180,95 70,15" fill="#fde68a" stroke="#b45309" stroke-width="3"/><line x1="70" y1="15" x2="70" y2="95" stroke="#f43f5e" stroke-dasharray="4"/><text x="100" y="108" font-size="11">10</text><text x="74" y="58" font-size="11" fill="#f43f5e">6</text></svg>`),
 Q(3,'Pola 2, 5, 8, 11, ... Suku ke-10 adalah ...',['27','29','30','32'],1),
 Q(3,'Pola 1, 2, 4, 8, 16, ... Suku berikutnya ...',['24','30','32','36'],2),
 Q(3,'Pola 2, 6, 12, 20, 30, ... Suku berikutnya ...',['36','40','42','44'],2),
 Q(4,'Empat orang berfoto berjajar. Banyak susunan berbeda ...',['12','16','24','48'],2),
 Q(4,'Dari huruf A, B, C dibuat kode 2 huruf berbeda. Banyak kode ...',['3','6','8','9'],1),
 Q(4,'Memilih ketua dan wakil ketua dari 4 orang. Banyak cara ...',['6','8','12','16'],2),
 Q(5,'Nina lebih tua dari Omar. Putri lebih muda dari Omar. Siapa paling tua?',['Nina','Omar','Putri','Tidak bisa ditentukan'],0),
 Q(5,'Semua A adalah B, dan semua B adalah C. Maka ...',['Semua C adalah A','Semua A adalah C','Tidak ada A yang C','Semua B adalah A'],1),
 Q(5,'"Jika lulus, Rina dapat hadiah." Rina tidak dapat hadiah. Maka ...',['Rina lulus','Rina tidak lulus','Rina mungkin lulus','Rina dapat hadiah'],1),
 Q(6,'Rata-rata dari 4, 6, 8, 10, 12 adalah ...',['6','7','8','9'],2),
 Q(6,'Modus dari data 2, 3, 3, 4, 5, 3, 2 adalah ...',['2','3','4','5'],1),
 Q(6,'Berdasarkan tabel, banyak siswa dengan nilai 8 ke atas adalah ...',['5','6','10','11'],3,[],
   tabel(['Nilai','6','7','8','9'],[['Banyak siswa',4,10,6,5]])),
 Q(7,'Sebuah dadu dilempar. Peluang muncul mata genap adalah ...',['1/6','1/3','1/2','2/3'],2),
 Q(7,'Kartu bernomor 1–10 diacak. Peluang terambil nomor lebih dari 7 adalah ...',['1/5','3/10','2/5','1/2'],1),
 Q(7,'Kantong berisi 4 bola merah dan 6 hijau. Peluang terambil hijau adalah ...',['2/5','1/2','3/5','2/3'],2),
];

Q = mk();
const PAKET2 = [
 Q(0,'KPK dari 15 dan 20 adalah ...',['30','45','60','300'],2),
 Q(0,'FPB dari 18 dan 27 adalah ...',['3','6','9','18'],2),
 Q(0,'Bilangan berikut yang merupakan bilangan prima adalah ...',['51','57','59','63'],2),
 Q(0,'Lampu A berkedip tiap 6 detik, lampu B tiap 8 detik. Keduanya berkedip bersamaan pada detik 0. Mereka berkedip bersamaan lagi pada detik ke ...',['12','24','36','48'],1),
 Q(1,'Jika 5x − 3 = 2x + 12, maka x = ...',['3','4','5','6'],2),
 Q(1,'Dua kali suatu bilangan ditambah 9 hasilnya 31. Bilangan itu adalah ...',['10','11','12','13'],1),
 Q(1,'Umur Ayah 4 kali umur Dika. Selisih umur mereka 27 tahun. Umur Dika adalah ... tahun',['7','8','9','12'],2),
 Q(2,'Trapesium dengan sisi sejajar 6 cm dan 10 cm, tinggi 4 cm. Luasnya ... cm<sup>2</sup>',['24','32','40','64'],1,[],
   `<svg viewBox="0 0 220 110" class="w-56 mx-auto"><polygon points="50,90 170,90 140,20 80,20" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/><text x="110" y="14" font-size="11" text-anchor="middle">6</text><text x="110" y="104" font-size="11" text-anchor="middle">10</text><line x1="140" y1="20" x2="140" y2="90" stroke="#f43f5e" stroke-dasharray="4"/><text x="145" y="60" font-size="11" fill="#f43f5e">4</text></svg>`),
 Q(2,'Tiga sudut sebuah segi empat adalah 90°, 100°, dan 80°. Sudut keempatnya adalah ...',['80°','90°','100°','110°'],1),
 Q(2,'Keliling persegi panjang 28 cm dan panjangnya 9 cm. Luasnya ... cm<sup>2</sup>',['36','40','45','56'],2),
 Q(3,'Pola 100, 93, 86, 79, ... Suku ke-8 adalah ...',['44','51','58','65'],1),
 Q(3,'Pola 1, 3, 6, 10, 15, ... Suku berikutnya adalah ...',['18','20','21','25'],2),
 Q(3,'Jika U<sub>n</sub> = 4n − 1, maka suku ke-12 adalah ...',['45','47','48','49'],1),
 Q(4,'Dari 6 siswa dipilih 2 orang sebagai wakil (tanpa jabatan). Banyak cara memilih ...',['12','15','20','30'],1),
 Q(4,'Dari angka 1, 2, 3, 4 dibuat bilangan 2 angka (angka boleh sama). Banyak bilangan ...',['8','12','16','24'],2),
 Q(4,'Dari A ke B ada 3 jalan, B ke C ada 4 jalan, C ke D ada 2 jalan. Banyak rute A ke D ...',['9','12','24','48'],2),
 Q(5,'Ali lebih berat dari Beni. Candra lebih ringan dari Beni. Urutan dari terberat ...',['Ali, Beni, Candra','Beni, Ali, Candra','Candra, Beni, Ali','Ali, Candra, Beni'],0),
 Q(5,'"Jika habis dibagi 6, maka habis dibagi 3." Bilangan 20 tidak habis dibagi 3. Maka 20 ...',['Habis dibagi 6','Tidak habis dibagi 6','Habis dibagi 2 saja','Tidak dapat disimpulkan'],1),
 Q(5,'Hadiah ada di tepat satu kotak. Merah: "Hadiah di sini." Biru: "Hadiah tidak di Merah." Hijau: "Hadiah tidak di sini." Hanya SATU pernyataan benar. Hadiah ada di kotak ...',['Merah','Biru','Hijau','Tidak bisa ditentukan'],2),
 Q(6,'Rata-rata 5 bilangan adalah 12. Bilangan keenam agar rata-ratanya menjadi 13 adalah ...',['16','18','20','22'],1),
 Q(6,'Berdasarkan tabel, modus ukuran sepatu adalah ...',['36','37','38','39'],1,[],
   tabel(['Ukuran','36','37','38','39'],[['Banyak siswa',3,7,5,2]])),
 Q(6,'Median dari 12, 4, 8, 6, 10, 2 adalah ...',['6','7','8','9'],1),
 Q(7,'Dua dadu dilempar. Peluang jumlah mata dadu 7 adalah ...',['1/12','1/6','1/9','1/4'],1),
 Q(7,'Kantong berisi 5 bola merah dan 3 biru. Peluang terambil BUKAN merah adalah ...',['3/5','5/8','3/8','1/2'],2),
 Q(7,'Kartu bernomor 1–20. Peluang terambil kelipatan 5 adalah ...',['1/4','1/5','1/10','3/20'],1),
];

/* Tambah paket baru: push objek ke array ini (wajib 25 soal) */
const PAKET = [
  { nama: 'Paket 1', warna: 'from-pink-400 to-rose-500', soal: PAKET1 },
  { nama: 'Paket 2', warna: 'from-sky-400 to-blue-500', soal: PAKET2 },
  // { nama: 'Paket 3', warna: 'from-emerald-400 to-teal-500', soal: PAKET3 },
];
