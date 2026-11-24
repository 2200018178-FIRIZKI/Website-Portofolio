/* =========================================================
   Shah Firizki Azmi — Portfolio
   "Laptop dive" stage + page interactions
   ========================================================= */

const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const T = ms => (RM ? 0 : ms);
const EASE = 'cubic-bezier(.2,.8,.2,1)';
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const U = (id, w = 1800) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;

/* ---------- Case data (projects shown inside the laptop) ---------- */
const CASES = [
  {
    title: 'SICER', rows: ['BANK BRI · CREDIT DIVISION', 'DESKTOP APP · PYTHON', '2026'],
    key: 'sicer credit review',
    text: 'Turns SLIK OJK & SICD PDFs into a credit-analysis Excel report: up to ±5 hours of manual work now takes 3–5 seconds.',
    textId: 'Mengubah PDF SLIK OJK & SICD menjadi laporan Excel analisa kredit: pekerjaan manual hingga ±5 jam kini selesai dalam 3–5 detik.',
    tech: ['Python', 'Tkinter', 'PyMuPDF', 'openpyxl', 'pytest'],
    img: '1554224155-6726b3ff858f', fb: 'images/dashboard.png', link: '#project', linkText: 'read case', linkTextId: 'baca studi kasus',
  },
  {
    title: 'RETAIL ERP', rows: ['40 BRANCHES · 6 REGIONS', 'BI DASHBOARD · ECHARTS', '2026'],
    key: 'retail erp dashboard',
    text: 'One interactive view of sales, stock, finance, KPIs and risk, with a Balanced Scorecard, early-warning KRIs and a branch map.',
    textId: 'Satu tampilan interaktif untuk penjualan, stok, keuangan, KPI, dan risiko, lengkap dengan Balanced Scorecard, KRI peringatan dini, dan peta cabang.',
    tech: ['JavaScript', 'ECharts', 'Leaflet', 'Google Sheets'],
    img: '1604719312566-8912e9227c6a', fb: 'images/dashboard.png',
    link: 'https://lnkd.in/gfKUt_dz', linkText: 'open live demo', linkTextId: 'buka demo',
  },
  {
    title: 'GESTURETUNE', rows: ['COMPUTER VISION', 'WEB APP · NO SERVER', '2026'],
    key: 'gesturetune',
    text: 'A music player you control with your hands: pinch for volume, fingers to pick a song, a fist to pause. Runs fully in the browser.',
    textId: 'Pemutar musik yang dikendalikan tangan: cubit untuk volume, jari untuk memilih lagu, kepalan untuk jeda. Berjalan penuh di browser.',
    tech: ['MediaPipe', 'JavaScript', 'Web Audio API'],
    img: '1470225620780-dba8ba36b745', fb: 'images/machine-learning.png', link: '#project', linkText: 'see details', linkTextId: 'lihat detail',
  },
  {
    title: 'DOKUSHOT', rows: ['PRODUCTIVITY TOOL', 'DESKTOP APP · PYSIDE6', '2026'],
    key: 'dokushot',
    text: 'Ctrl+Shift+S, pick an area, mark it up and paste straight into Word. Batch-export many screenshots to Word or PDF.',
    textId: 'Ctrl+Shift+S, pilih area, beri tanda, lalu tempel langsung ke Word. Ekspor banyak screenshot sekaligus ke Word atau PDF.',
    tech: ['Python', 'PySide6'],
    img: '1586281380349-632531db7ed4', fb: 'images/understanding.png', link: '#project', linkText: 'see details', linkTextId: 'lihat detail',
  },
  {
    title: 'RFM & CHURN', rows: ['ASAH · DICODING × ACCENTURE', 'CUSTOMER ANALYTICS', '2026'],
    key: 'rfm & churn',
    text: 'RFM segmentation with K-Means (4 segments) and a churn model where Random Forest beat 2 rivals, shipped as 2 Tableau dashboards.',
    textId: 'Segmentasi RFM dengan K-Means (4 segmen) dan model churn di mana Random Forest unggul dari 2 model lain, disajikan dalam 2 dashboard Tableau.',
    tech: ['Python', 'Scikit-learn', 'Tableau'],
    img: '1551288049-bebda4e38f71', fb: 'images/Customer.jpg',
    link: 'https://public.tableau.com/app/profile/shah.firizki.azmi/viz/A25-CS320ShahFirizkiAzmi/Dashboard1A25-CS320?publish=yes', linkText: 'view dashboard', linkTextId: 'lihat dashboard',
  },
  {
    title: 'HR ATTRITION', rows: ['IDCAMP · INDOSAT', 'HR ANALYTICS · METABASE', '2026'],
    key: 'hr attrition',
    text: '1,000+ employee records analysed to find why attrition sat above 10%, with a real-time Metabase dashboard for HR.',
    textId: 'Data 1.000+ karyawan dianalisis untuk menemukan penyebab attrition di atas 10%, dengan dashboard Metabase real-time untuk tim HR.',
    tech: ['Python', 'Pandas', 'Metabase'],
    img: '1552664730-d307ca884978', fb: 'images/HR.jpeg',
    link: 'https://github.com/2200018178-FIRIZKI/Project_chatboot_JDIH', linkText: 'view on github', linkTextId: 'lihat di github',
  },
  {
    title: 'DROPOUT RISK', rows: ['IDCAMP · INDOSAT', 'ML · BI DASHBOARD', '2026'],
    key: 'student dropout',
    text: 'Student performance analytics and a dropout prediction model, combined with a business-intelligence dashboard.',
    textId: 'Analitik performa mahasiswa dan model prediksi dropout, dipadukan dengan dashboard business intelligence.',
    tech: ['Scikit-learn', 'Pandas', 'Metabase'],
    img: '1523240795612-9a054b0db644', fb: 'images/Dropout.jpeg',
    link: 'https://github.com/2200018178-FIRIZKI/Proyek-Akhir-Penerapan-Data-Science-Indosat/tree/main', linkText: 'view on github', linkTextId: 'lihat di github',
  },
  {
    title: 'CHATBOT JDIH', rows: ['KOMINFO · YOGYAKARTA', 'RAG · LLM', '2025'],
    key: 'chatbot jdih',
    text: 'A legal-document chatbot that answers from Indonesian regulations using retrieval-augmented generation.',
    textId: 'Chatbot dokumen hukum yang menjawab berdasarkan peraturan Indonesia dengan retrieval-augmented generation.',
    tech: ['FastAPI', 'Qdrant', 'Docker', 'RAG'],
    img: '1505664194779-8beaceb93744', fb: 'images/Chatboot.jpeg',
    link: 'https://github.com/2200018178-FIRIZKI/Project_chatboot_JDIH', linkText: 'view on github', linkTextId: 'lihat di github',
  },
  {
    title: 'E-COMMERCE', rows: ['PUBLIC DATASET', 'EDA · STREAMLIT', '2025'],
    key: 'e-commerce analysis',
    text: 'SMART business questions answered through wrangling and EDA, deployed as a live Streamlit dashboard.',
    textId: 'Pertanyaan bisnis SMART dijawab lewat data wrangling dan EDA, lalu di-deploy sebagai dashboard Streamlit.',
    tech: ['Python', 'Pandas', 'Streamlit'],
    img: '1556742049-0cfed4f6a45d', fb: 'images/E-Commerce.jpeg',
    link: 'https://firizki-ecommerce-analysis.streamlit.app/', linkText: 'open streamlit', linkTextId: 'buka streamlit',
  },
  {
    title: 'BANK SEGMENTS', rows: ['BANKING TRANSACTIONS', 'CLUSTERING · CLASSIFY', '2025'],
    key: 'bank segmentation',
    text: 'K-Means tuned with Elbow & Silhouette, then Decision Tree classification benchmarked against other algorithms.',
    textId: 'K-Means dievaluasi dengan Elbow & Silhouette, lalu klasifikasi Decision Tree dibandingkan dengan algoritma lain.',
    tech: ['Scikit-learn', 'K-Means', 'Decision Tree'],
    img: '1563986768494-4dee2763ff3f', fb: 'images/Cleveroad.jpg',
    link: 'https://github.com/2200018178-FIRIZKI/Bank-Transaction-Analysis-with-Machine-Learning-Customer-Segmentation-and-Classification', linkText: 'view on github', linkTextId: 'lihat di github',
  },
  {
    title: 'TELCO CHURN', rows: ['TELECOM CUSTOMERS', 'END-TO-END ML PIPELINE', 'ML'],
    key: 'telco churn',
    text: 'An end-to-end pipeline from preprocessing and feature engineering to training and evaluation of churn models.',
    textId: 'Pipeline end-to-end dari preprocessing dan feature engineering hingga pelatihan dan evaluasi model churn.',
    tech: ['Python', 'Scikit-learn'],
    img: '1512941937669-90a1b58e7e9c', fb: 'images/Telco Customer Churn.jpg',
    link: 'https://github.com/2200018178-FIRIZKI/SML_SHAH-FIRIZKI-AZMI', linkText: 'view on github', linkTextId: 'lihat di github',
  },
  {
    title: 'CLAIM INSIGHTS', rows: ['INSURANCE CLAIMS', 'TABLEAU DASHBOARD', 'BI'],
    key: 'insurance claims',
    text: 'An interactive Tableau dashboard that reads insurance claims through key metrics, trends and visual insight.',
    textId: 'Dashboard Tableau interaktif untuk membaca klaim asuransi lewat metrik utama, tren, dan insight visual.',
    tech: ['Tableau', 'Python'],
    img: '1450101499163-c8848c66ca85', fb: 'images/Claim Asuransi.jpeg',
    link: 'https://public.tableau.com/app/profile/shah.firizki.azmi/viz/LabrakTerus/Dashboard1', linkText: 'view dashboard', linkTextId: 'lihat dashboard',
  },
  {
    title: 'FREE FIRE NLP', rows: ['12,000 APP REVIEWS', 'SENTIMENT ANALYSIS', 'NLP'],
    key: 'free fire sentiment',
    text: '12,000 player reviews classified as positive, negative or neutral with machine and deep learning.',
    textId: '12.000 ulasan pemain diklasifikasikan menjadi positif, negatif, atau netral dengan machine & deep learning.',
    tech: ['NLP', 'Scikit-learn', 'Random Forest'],
    img: '1542751371-adc38448a05e', fb: 'images/Analysis Free-Fire.jpeg',
    link: 'https://github.com/2200018178-FIRIZKI/Sistem-Analisis-Sentimen', linkText: 'view on github', linkTextId: 'lihat di github',
  },
  {
    title: 'CIFAR-10 CNN', rows: ['IMAGE CLASSIFICATION', 'DEEP LEARNING', 'CV'],
    key: 'cifar-10 cnn',
    text: 'A deep convolutional network trained and evaluated on CIFAR-10 with TensorFlow and Keras.',
    textId: 'Jaringan konvolusi dalam yang dilatih dan dievaluasi pada CIFAR-10 dengan TensorFlow dan Keras.',
    tech: ['TensorFlow', 'Keras', 'CNN'],
    img: '1677442136019-21780ecad995', fb: 'images/Image Classification.png',
    link: 'https://github.com/2200018178-FIRIZKI/Proyek-Klasifikasi-Gambar', linkText: 'view on github', linkTextId: 'lihat di github',
  },
];

/* ---------- language (EN / ID) ---------- */
const ID_TEXT = {"k1": "<span class=\"pulse-dot\"></span> Saat ini: Magang Data Analyst di Bank BRI", "k2": "Saya menganalisis data, menggali insight, dan membangun solusi berbasis data.", "k3": "Dengan pengalaman kuat di data cleaning, visualisasi, machine learning, dan pengembangan dashboard,", "k4": "saya mengubah data mentah menjadi cerita yang jelas untuk mendukung pengambilan keputusan.", "k5": "<i class=\"fa-solid fa-location-dot\"></i> Berdomisili di Indonesia (Jakarta Barat)", "k6": "<i class=\"fa-solid fa-briefcase\"></i> Siap Bekerja", "k7": "<i class=\"fa-solid fa-graduation-cap\"></i> S.Kom, IPK 3.70", "k8": "<i class=\"fa-solid fa-arrow-right\"></i> Rekrut Saya", "k9": "<i class=\"fa-solid fa-download\"></i> Unduh CV", "k10": "Ikuti saya:", "k11": "Tahun pengalaman di bidang data", "k12": "Proyek dibangun", "k13": "Magang &amp; peran", "k14": "IPK dari 4.00", "k15": "TENTANG SAYA", "k16": "KEAHLIAN", "k17": "PENGALAMAN", "k18": "PROYEK", "k19": "PENDIDIKAN &amp; SERTIFIKASI", "k20": "LAYANAN", "k21": "KONTAK", "k22": "Membangun <span class=\"gradient-text\">Pengalaman Digital</span> yang Bermakna", "k23": "Tools &amp; <span class=\"gradient-text\">Keahlian</span>", "k24": "Pengalaman <span class=\"gradient-text\">Profesional</span>", "k25": "Karya <span class=\"gradient-text\">Pilihan</span>", "k26": "Belajar <span class=\"gradient-text\">Tanpa Henti</span>", "k27": "Fitur &amp; <span class=\"gradient-text\">Layanan</span>", "k28": "Mari <span class=\"gradient-text\">Terhubung</span>", "k29": "Teknologi dan konsep yang saya gunakan setiap hari untuk mengubah data menjadi insight dan pekerjaan manual menjadi otomatis.", "k30": "Pengalaman profesional saya melalui magang, program pelatihan, dan kegiatan akademik di bidang Data Science, Artificial Intelligence, Machine Learning, dan Software Development.", "k31": "Beberapa proyek analisis data dan machine learning yang telah saya bangun, mulai dari data cleaning, exploratory data analysis (EDA), visualisasi, hingga predictive modeling — semuanya untuk menyelesaikan masalah nyata.", "k32": "Sarjana Informatika (S.Kom) Universitas Ahmad Dahlan dengan IPK 3.70/4.00 dan pengalaman lebih dari satu tahun di bidang data analysis dan data science. Saat ini menjalani magang sebagai Data Analyst di Bank BRI melalui program Magang Hub Kemnaker, dengan fokus pada pengolahan data, pelaporan, otomatisasi proses, dan pembuatan dashboard untuk monitoring kinerja.", "k33": "Saya seorang Data Analyst yang berfokus mengubah data mentah menjadi insight bermakna dan rekomendasi yang bisa ditindaklanjuti. Pekerjaan saya berfokus pada memahami pola, menyelesaikan masalah bisnis, dan menciptakan solusi berbasis data yang mendukung pengambilan keputusan.", "k34": "Perjalanan saya di data analytics dimulai ketika saya menyadari bahwa data lebih dari sekadar angka—data adalah cerita yang mengungkap tren, perilaku, dan peluang. Saya senang membersihkan, mengeksplorasi, memvisualisasikan data, dan membangun model prediktif yang memberi nilai nyata. Saya juga suka mengotomatisasi pekerjaan rutin agar lebih cepat dan akurat.", "k35": "Yang Mendorong Saya", "k36": "<i class=\"fa-solid fa-code\"></i> Kemampuan Analitis", "k37": "<i class=\"fa-solid fa-graduation-cap\"></i> Pendidikan", "k38": "<i class=\"fa-solid fa-folder-open\"></i> Proyek", "k39": "<i class=\"fa-solid fa-gears\"></i> Otomatisasi", "k40": "Python, PostgreSQL, Data Cleaning &amp; EDA, Visualisasi Data", "k41": "Sarjana Informatika (S.Kom), Universitas Ahmad Dahlan · IPK 3.70", "k42": "Telah membangun lebih dari 10 proyek", "k43": "Memangkas proses manual dari hitungan jam menjadi detik dengan Python", "k45": "Magang Hub Kemnaker · 2026", "k46": "Analisis Data &amp; Pemrograman", "k47": "Visualisasi &amp; Pelaporan", "k48": "Otomatisasi", "k49": "Pengembangan Aplikasi", "k50": "Konsep Data", "k51": "AI &amp; Web", "k52": "Agu 2026 - Sekarang", "k53": "Jan 2026 - Jun 2026", "k54": "Mei 2025 - Jan 2026", "k55": "Okt 2025 - Des 2025", "k56": "Mar 2024 - Agu 2024", "k57": "Apr 2026 - Mei 2026", "k58": "Feb 2024 - Jul 2024", "k59": "Data Analyst &amp; Automation Developer (Magang)", "k60": "Data Scientist Intern (IDCamp)", "k61": "Machine Learning Engineer (Magang)", "k62": "AI Engineering Intern", "k63": "Asisten Praktikum", "k64": "Bootcamp Microsoft Excel Basic to Advanced", "k65": "Peserta Pelatihan Full-Stack Developer", "k66": "Bank Rakyat Indonesia (BRI), Kantor Pusat · Magang Hub Kemnaker (Kementerian Ketenagakerjaan RI)", "k67": "IDCamp Indosat Ooredoo Hutchison · Remote", "k68": "Accenture ASAH led by Dicoding · Remote", "k73": "Melakukan analisis attrition karyawan, data preprocessing, exploratory data analysis (EDA), mengembangkan dashboard interaktif dengan Streamlit dan Metabase, serta menyusun rekomendasi berbasis data untuk meningkatkan retensi karyawan.", "k74": "Mengembangkan solusi customer analytics end-to-end melalui data preprocessing, segmentasi pelanggan RFM, pemodelan prediksi churn, dan pengembangan dashboard interaktif. Menghasilkan insight bisnis dan rekomendasi strategis untuk mendukung retensi pelanggan dan keputusan berbasis data di sektor retail.", "k75": "Mengembangkan chatbot dokumen hukum berbasis AI menggunakan Retrieval-Augmented Generation (RAG), FastAPI, Qdrant, Docker, dan Large Language Models.", "k76": "Membantu praktikum Grafika Komputer dan Strategi Algoritma dengan membimbing sekitar 40 mahasiswa dalam pemrograman C++. Memandu sesi praktikum, menjelaskan konsep pemrograman dan algoritma, membantu debugging, menilai tugas, dan mendukung mahasiswa mengembangkan kemampuan problem solving.", "k77": "Menyelesaikan bootcamp intensif Microsoft Excel yang mencakup data cleaning, rumus dan fungsi, Pivot Table, pelaporan dashboard, validasi data, makro VBA, dan visualisasi data. Menerapkan Excel untuk pelaporan bisnis, analisis data, dan otomatisasi melalui latihan praktis dan proyek akhir.", "k78": "Menyelesaikan program pelatihan intensif Full-Stack Web Development yang berfokus pada teknologi front-end dan back-end modern. Mengembangkan <strong>Budget Ease</strong>, aplikasi web manajemen keuangan pribadi dengan antarmuka responsif, RESTful API, autentikasi, dan pengelolaan data menggunakan React, Node.js, Express.js, dan database berbasis SQL.", "k79": "Mengolah, membersihkan, dan menganalisis data harian dan bulanan menggunakan Microsoft Excel untuk mengidentifikasi tren dan pola yang mendukung keputusan bisnis.", "k80": "Menyusun laporan analisis dan mengembangkan dashboard berbasis website (frontend, backend SQL, database PostgreSQL) untuk monitoring dan evaluasi kinerja.", "k81": "Mengoptimalkan program Python untuk ekstraksi data dan ekspor PDF/Excel, memangkas waktu proses dari ±30 menit menjadi 9 menit.", "k82": "Mengotomatisasi pengolahan file Excel (CMB, TL, linkage) menjadi presentasi PowerPoint.", "k83": "Membangun website rekap rekening koran berbasis OCR untuk membaca dokumen PDF.", "k84": "Mengembangkan aplikasi Android (Flutter) untuk perangkingan performa peserta oleh Group Head, serta program Python/Jupyter Notebook untuk otomatisasi data harian dan ekstraksi dokumen iDeb OJK ke PDF.", "k85": "Mengembangkan <strong>SICER (SLIK–SICD Credit Review)</strong>, aplikasi desktop pre-screening calon debitur untuk Divisi Kredit yang memangkas waktu analisa dari hingga ±5 jam (manual) menjadi 3–5 detik. <a class=\"inline-link\" href=\"#project\">Lihat proyek →</a>", "k86": "Melakukan data preprocessing (cleaning, missing values, transformasi) pada dataset karyawan.", "k87": "Menganalisis penyebab tingginya attrition rate dengan EDA dan mengidentifikasi variabel kunci yang memengaruhi keputusan resign.", "k88": "Membangun dashboard interaktif (Streamlit dan Metabase) untuk memonitor attrition rate dan performa karyawan.", "k89": "Menyusun rekomendasi berbasis data bagi tim HR untuk menurunkan attrition dan meningkatkan retensi.", "k90": "Melakukan preprocessing data transaksi pelanggan sektor retail (cleaning, missing values, transformasi).", "k91": "Menerapkan metode RFM untuk segmentasi pelanggan berdasarkan perilaku pembelian.", "k92": "Membangun model prediksi churn untuk mengidentifikasi pelanggan berisiko berhenti.", "k93": "Membuat dashboard interaktif untuk visualisasi segmen dan pemantauan performa bisnis.", "k94": "Membangun chatbot tanya-jawab berbasis dokumen PDF dengan pendekatan RAG (Retrieval-Augmented Generation).", "k95": "Mengembangkan sistem pencarian konteks agar jawaban konsisten dengan dokumen sumber.", "k96": "Mengintegrasikan frontend dan backend agar chatbot merespons berdasarkan dokumen terbaru secara otomatis.", "k97": "Memangkas waktu analisa dari hingga ±5 jam menjadi 3–5 detik: input data dari PDF, penyusunan di Excel, dan pengolahan insight kini berjalan otomatis hingga laporan Excel dan kesimpulan analisa langsung jadi.", "k98": "Mengekstrak data fasilitas kredit, kolektibilitas 24 bulan, agunan, tolakan, serta pemilik/pengurus dari PDF SLIK OJK dan SICD menggunakan PyMuPDF berbasis koordinat tata letak.", "k99": "Mesin kesimpulan berbasis aturan (Layak / Dengan Catatan / Tidak Direkomendasikan) dan modul Pre-Screening yang mencocokkan SLIK dengan SICD berdasarkan NIK/NPWP, menghitung total exposure di BRI, serta menampilkan matriks kewenangan PDWK.", "k100": "Laporan Excel multi-sheet (openpyxl) dengan rumus SUMIFS/SUBTOTAL yang dapat ditelusuri, dilengkapi evaluator rumus internal agar angka tetap tampil di pratinjau ponsel; tervalidasi 100% terhadap LibreOffice pada 1.800+ rumus.", "k101": "Validasi data otomatis: pencocokan total dengan ringkasan PDF, deteksi laporan iDeb yang belum lengkap, dan penandaan inkonsistensi data antar-pelapor.", "k102": "Menangani 6+ variasi format laporan (termasuk “Data Tidak Ditemukan”, IDI BRI v1.0, dan hasil pencarian BRI Checking), diuji pada 40+ sampel PDF asli.", "k103": "36 pengujian otomatis (pytest) dengan generator PDF sintetis, dikemas menjadi file .exe (PyInstaller), dan diamankan dengan kata sandi ber-hash SHA-256.", "k104": "Menerjemahkan kebutuhan stakeholder non-IT menjadi fitur melalui beberapa siklus revisi (v2.0 → v2.3.2), serta menyusun dokumentasi alur sistem dan panduan pengguna.", "k105": "<i class=\"fa-solid fa-award\"></i> Lihat Sertifikat", "k106": "<i class=\"fa-solid fa-award\"></i> Lihat Sertifikat", "k107": "<i class=\"fa-solid fa-award\"></i> Lihat Sertifikat", "k108": "<i class=\"fa-solid fa-award\"></i> Lihat Sertifikat", "k109": "<i class=\"fa-solid fa-award\"></i> Lihat Sertifikat", "k110": "<i class=\"fa-solid fa-award\"></i> Lihat Sertifikat", "k111": "<i class=\"fa-solid fa-chalkboard-user\"></i> Pelatihan &amp; Bootcamp", "k112": "<i class=\"fa-solid fa-star\"></i> Unggulan · 2026 · Python Developer", "k113": "Proyek internal Divisi Kredit (Perbankan)", "k114": "Aplikasi desktop untuk mengoptimalkan pre-screening calon debitur: membaca laporan SLIK OJK (iDeb) dan Informasi Debitur BRI (SICD) dalam format PDF, lalu menyusunnya menjadi laporan Excel analisa kredit secara otomatis.", "k115": "Waktu analisa", "k116": "rumus tervalidasi", "k117": "PDF asli diuji", "k118": "pengujian otomatis", "k119": "<i class=\"fa-solid fa-lock\"></i> Proyek internal perbankan. Kode sumber bersifat rahasia.", "k120": "Semua", "k121": "Analisis Data &amp; BI", "k122": "Machine Learning", "k123": "AI &amp; Deep Learning", "k124": "Aplikasi &amp; Otomatisasi", "k125": "Dashboard ERP Ritel untuk Monitoring Strategi &amp; Mitigasi Risiko", "k126": "GestureTune — Pemutar Musik dengan Gerakan Tangan", "k127": "DokuShot — Aplikasi Screenshot untuk Dokumentasi Kerja", "k128": "E-Customer Segmentation dan Klasifikasi", "k129": "Klasifikasi Gambar CIFAR-10 dengan Deep CNN", "k130": "Analisis Sentimen 12.000 Ulasan Free Fire dengan Machine Learning &amp; Deep Learning", "k131": "Pipeline Machine Learning End-to-End untuk Prediksi Churn Pelanggan Telco", "k134": "Analisis Data Publik E-Commerce &amp; Dashboard", "k135": "HR Analytics: Prediksi Attrition Karyawan &amp; Dashboard", "k136": "Sistem Prediksi Dropout Mahasiswa", "k137": "Dashboard Segmentasi Pelanggan &amp; Analisis Churn", "k138": "Dashboard ERP interaktif untuk perusahaan ritel fiktif dengan 40 cabang di 6 region Indonesia, menyatukan data penjualan, stok, keuangan, KPI, dan risiko dalam satu tampilan.", "k139": "Pemutar musik berbasis web yang sepenuhnya dikendalikan gestur tangan lewat webcam. Semuanya berjalan di browser: tanpa server, tanpa API berbayar, dan video kamera tidak dikirim ke mana pun.", "k140": "Aplikasi screenshot desktop yang menghilangkan rutinitas screenshot → Paint → Word. Tekan Ctrl+Shift+S, pilih area, beri tanda, lalu tempel langsung ke Word.", "k141": "Proyek machine learning untuk analisis transaksi bank, segmentasi pelanggan, dan klasifikasi pelanggan melalui data preprocessing, feature engineering, dan predictive modeling.", "k142": "Proyek klasifikasi gambar berbasis deep learning dengan TensorFlow dan Keras, mencakup preprocessing data, pelatihan model, dan evaluasi.", "k143": "Sistem analisis sentimen yang mengklasifikasikan teks menjadi positif, negatif, atau netral menggunakan natural language processing dan machine learning.", "k144": "Pipeline machine learning end-to-end untuk memprediksi churn pelanggan telekomunikasi, mulai dari preprocessing data, feature engineering, pelatihan, hingga evaluasi model.", "k145": "Dashboard Tableau interaktif untuk menganalisis data klaim asuransi melalui metrik utama, tren, dan insight visual.", "k146": "Chatbot dokumen hukum berbasis AI dengan Retrieval-Augmented Generation (RAG) untuk menjawab pertanyaan berdasarkan dokumen hukum Indonesia.", "k147": "Dashboard analisis data E-Commerce interaktif yang mencakup data wrangling, EDA, dan insight bisnis SMART, dibangun dengan Streamlit.", "k148": "Dashboard HR analytics interaktif dengan Metabase untuk memantau attrition karyawan, tren tenaga kerja, dan insight bisnis utama.", "k149": "Sistem analitik performa mahasiswa dan prediksi dropout yang menggabungkan dashboard business intelligence dengan machine learning.", "k150": "Proyek customer analytics dengan segmentasi RFM dan analisis churn untuk memahami perilaku pelanggan, peluang retensi, dan insight bisnis melalui dashboard interaktif.", "k151": "Monitoring harian, bulanan, dan tahunan yang terhubung langsung ke Google Sheets.", "k152": "Balanced Scorecard dan Key Risk Indicator dengan peringatan dini otomatis.", "k153": "Insight dan rekomendasi bisnis yang dihitung langsung dari data.", "k154": "Peta jaringan cabang, risk heatmap, dan pemantauan rencana mitigasi.", "k155": "Export Excel/PDF serta tampilan dalam Bahasa Indonesia dan Inggris.", "k156": "Tangan kiri: jarak jempol dan telunjuk mengatur volume.", "k157": "Tangan kanan: angkat 1 sampai 5 jari untuk memilih lagu.", "k158": "Kepalan tangan untuk putar/jeda, usap kiri/kanan untuk ganti lagu, jempol ke atas untuk favorit.", "k159": "MediaPipe Hands membaca 21 titik landmark tangan secara real-time, lengkap dengan debounce, kalibrasi tangan, dan visualizer musik dengan Web Audio API.", "k160": "Tangkap layar dengan hotkey global, pilih area, dan beri kotak penanda.", "k161": "Ekspor banyak screenshot sekaligus ke Word atau PDF.", "k162": "Dilengkapi panduan penggunaan lengkap.", "k163": "EDA &amp; preprocessing (outlier, encoding, scaling) pada data transaksi perbankan.", "k164": "K-Means dengan evaluasi Elbow Method &amp; Silhouette Score, serta klasifikasi Decision Tree yang dibandingkan dengan algoritma lain.", "k165": "Merumuskan pertanyaan bisnis dengan metode SMART dan menjawabnya melalui EDA.", "k166": "Data wrangling (gathering, assessing, cleaning) untuk menangani missing value, duplikat, dan inkonsistensi.", "k167": "Dashboard interaktif di-deploy ke Streamlit Community Cloud.", "k168": "Menganalisis data 1.000+ karyawan untuk mengidentifikasi faktor penyebab attrition rate di atas 10%.", "k169": "Membangun dashboard Metabase untuk monitoring attrition secara real-time bagi tim HR.", "k170": "Pipeline end-to-end segmentasi pelanggan RFM dengan K-Means (4 segmen optimal).", "k171": "Membandingkan 3 model (Logistic Regression, Random Forest, Deep Neural Network); Random Forest memberikan performa terbaik.", "k172": "Merancang 2 dashboard Tableau interaktif untuk segmen pelanggan dan skor risiko churn.", "k173": "<i class=\"fas fa-chart-line\"></i> Demo Langsung", "k174": "<i class=\"fab fa-github\"></i> Kode Sumber", "k179": "<i class=\"fas fa-chart-bar\"></i> Lihat Dashboard", "k185": "<i class=\"fas fa-chart-bar\"></i> Lihat Dashboard", "k188": "Sarjana Komputer (S.Kom), Informatika", "k189": "IPK <strong>3.70</strong> / 4.00", "k193": "Front-End and Back-End Developer", "k195": "MySkill · Mei 2026", "k196": "IDCamp Indosat Ooredoo Hutchison · Mei 2026", "k197": "Amazon Web Services · Juli 2025", "k198": "Coding Camp powered by DBS Foundation · Juli 2025", "k199": "Dicoding &amp; Accenture · Maret 2025", "k200": "Lihat <i class=\"fa-solid fa-arrow-up-right-from-square\"></i>", "k201": "Lihat <i class=\"fa-solid fa-arrow-up-right-from-square\"></i>", "k202": "Lihat <i class=\"fa-solid fa-arrow-up-right-from-square\"></i>", "k203": "Lihat <i class=\"fa-solid fa-arrow-up-right-from-square\"></i>", "k204": "Pemahaman Bisnis", "k205": "Pengumpulan Data", "k206": "Data Cleaning &amp; Persiapan", "k207": "Exploratory Data Analysis (EDA)", "k208": "Dashboard &amp; Visualisasi", "k209": "Analitik Prediktif", "k210": "Insight Bisnis", "k211": "Rekomendasi Berbasis Data", "k212": "Otomatisasi Proses", "k213": "Memahami tujuan bisnis, mendefinisikan masalah analitis, dan menentukan key performance indicators (KPI) sebelum analisis dimulai.", "k214": "Mengumpulkan data terstruktur dan tidak terstruktur dari database, spreadsheet, API, atau sumber bisnis lain yang relevan.", "k215": "Membersihkan, mentransformasi, menangani missing value, menghapus duplikat, dan menyiapkan dataset berkualitas untuk analisis yang andal.", "k216": "Mengeksplorasi data dengan analisis statistik dan visualisasi untuk menemukan tren, pola, korelasi, dan anomali.", "k217": "Merancang dashboard interaktif dan laporan visual dengan Tableau, Power BI, Streamlit, atau Metabase untuk monitoring bisnis yang lebih baik.", "k218": "Membangun model machine learning untuk klasifikasi, regresi, clustering, segmentasi pelanggan, dan prediksi churn sesuai kebutuhan.", "k219": "Menerjemahkan temuan analisis menjadi insight bermakna yang menyoroti peluang, risiko, dan faktor kunci kinerja bisnis.", "k220": "Menyampaikan rekomendasi yang jelas dan strategi yang dapat ditindaklanjuti untuk mendukung keputusan bisnis dan perbaikan berkelanjutan.", "k221": "Mengotomatisasi pekerjaan rutin dengan Python: ekstraksi PDF/OCR, ekspor laporan Excel &amp; PDF, dan pembuatan PowerPoint dari Excel agar laporan lebih cepat dan akurat.", "k222": "Saya selalu terbuka untuk mendiskusikan proyek menarik dan peluang baru. Mari berkolaborasi!", "k228": "<i class=\"fa-solid fa-paper-plane\"></i> Kirim Pesan", "k229": "Tombol ini membuka aplikasi email kamu dengan pesan yang siap dikirim.", "k230": "Data Analyst · Automation Developer · Fullstack Developer", "k231": "Beranda", "k232": "Tentang", "k233": "Keahlian", "k234": "Pengalaman", "k235": "Proyek", "k236": "Sertifikasi", "k237": "Layanan", "k238": "Kontak", "k239": "© <span id=\"year\">2026</span> Shah Firizki Azmi. Hak cipta dilindungi. · Foto dari <a href=\"https://unsplash.com\" rel=\"noopener\" target=\"_blank\">Unsplash</a>", "k240": "Beranda", "k241": "Tentang", "k242": "Keahlian", "k243": "Pengalaman", "k244": "Proyek", "k245": "Sertifikasi", "k246": "Layanan", "k247": "Kontak", "k248": "beranda", "k249": "proyek", "k250": "menu", "k251": "rekrut saya", "k252": "<i class=\"fa-solid fa-laptop\"></i> jelajahi proyek saya", "k253": "lewati ke profil ↓", "k254": "Data Analyst, Automation &amp; Fullstack Developer", "k255": "Jakarta Barat, Indonesia", "k256": "<i class=\"dot\"></i> Saat ini @ Bank BRI", "k257": "S.Kom Informatika · IPK 3.70", "k260": "Nama Kamu", "k261": "Email Kamu", "k262": "Pesan Kamu", "dragHint": "tarik aku", "detailBtn": "Lihat detail", "ks1t": "Aplikasi Kasir Toko Rizky (POS Android)", "ks1d": "Aplikasi kasir tablet Android untuk toko keluarga yang tetap jalan tanpa internet: penjualan, kasbon, stok, keuangan, dan laporan di satu tempat, lalu tersinkron ke cloud saat online.", "ksPdf": "<i class=\"fa-solid fa-file-pdf\"></i> Lihat panduan (PDF)", "ksGuide": "Lihat panduan (PDF)", "ks1p0": "Kasir cepat: scan barcode, barang multi-satuan dan curah per kilo, bayar tunai, QRIS, transfer, atau kasbon, lalu struk dicetak atau dikirim ke WhatsApp.", "ks1p1": "Tetap jalan tanpa internet dengan database lokal, backup harian otomatis, dan sinkron ke cloud Supabase, ditambah dashboard web yang bisa dibuka pemilik dari HP.", "ks1p2": "Kasbon pelanggan dengan umur piutang (0–30, 31–60, lebih dari 60 hari) dan pengingat WhatsApp, serta shift yang menghitung selisih uang laci.", "ks1p3": "Stok opname, pencatatan barang masuk dari supplier, dan laba bersih yang memisahkan biaya toko dari uang yang diambil untuk rumah.", "ks1p4": "Analisis: Pareto ABC, margin dan tata rak, margin per kategori, perbandingan harga supplier, serta saran stok dan harga otomatis.", "ks1p5": "Hak akses per peran dengan PIN pemilik, log kejanggalan, dan export Excel multi-sheet yang langsung siap dibuat pivot.", "fs1t": "Pengembangan Web Fullstack", "fs1d": "Membangun aplikasi web lengkap dari tampilan hingga database, seperti dashboard internal, sistem disposisi tugas, dan aplikasi proses kredit.", "fs2t": "Frontend &amp; UI Interaktif", "fs2d": "Tampilan rapi dan responsif dengan HTML, CSS, JavaScript, dan React agar data dan alur kerja mudah dipakai di perangkat apa pun.", "fs3t": "Backend, API &amp; Database", "fs3d": "REST API dengan Node.js, Express, atau FastAPI, database SQL dan PostgreSQL, autentikasi, serta hak akses per peran untuk alur kerja tim yang aman.", "cf0": "<i class=\"fa-solid fa-lock\"></i> Proyek rahasia · kode tidak dipublikasikan", "cfBadge": "RAHASIA", "cf1t": "Website KMK Buyer untuk BRI", "cf1d": "Aplikasi web internal untuk proses KMK (Kredit Modal Kerja) Buyer di BRI, agar data buyer dan fasilitas tersusun rapi di satu tempat untuk tim.", "cf1p0": "Satu tampilan web untuk input dan memantau data KMK Buyer.", "cf1p1": "Data terstruktur yang mudah dicari, ditinjau, dan dilaporkan.", "cf1p2": "Dibangun sebagai proyek independen untuk dipakai tim internal setiap hari.", "cf2t": "Dashboard Data Harian & Bulanan untuk Monitoring Strategi dan Mitigasi (BRI)", "cf2d": "Dashboard web yang menyatukan data harian dan bulanan dalam satu tampilan untuk memantau kinerja strategi dan menindaklanjuti langkah mitigasi.", "cf2p0": "Tampilan harian dan bulanan untuk melihat tren dan pola lebih awal.", "cf2p1": "Indikator utama untuk memantau kinerja strategi dan progres mitigasi.", "cf2p2": "Berbasis web: frontend, backend SQL, dan database PostgreSQL.", "cf3t": "Website Disposition Flow untuk Penugasan (BRI)", "cf3d": "Aplikasi disposisi tugas: Department Head memberi tugas ke Team Leader, lalu Team Leader meneruskannya ke anggota tim, dan setiap langkah tercatat.", "cf3p0": "Alur tiga tingkat: Department Head ke Team Leader ke anggota tim.", "cf3p1": "Setiap tugas menampilkan penerima tugas dan status terkininya.", "cf3p2": "Satu tempat untuk memantau penugasan, tidak lagi tercecer di chat dan catatan.", "cf4t": "Dashboard Rekap Rekening Koran dengan OCR (BRI)", "cf4d": "Membaca PDF rekening koran hasil scan dengan OCR, merekap transaksinya dalam dashboard, lalu mengekspor hasil analisisnya ke Excel.", "cf4p0": "OCR membaca PDF rekening koran hasil scan secara otomatis.", "cf4p1": "Transaksi direkap menjadi ringkasan dashboard yang jelas.", "cf4p2": "Hasil analisis diekspor menjadi laporan Excel.", "k59s": "Pengolahan data, pelaporan, otomatisasi Python, dan dashboard web di Kantor Pusat BRI, termasuk SICER, aplikasi pre-screening kredit yang memangkas analisa berjam-jam menjadi hitungan detik.", "pmHi": "Poin utama", "pmTech": "Teknologi"};
const UI = {
  en: { prevCase: 'previous <br>case', nextCase: 'next <br>case', backHome: 'back <br>home', fullProfile: 'full <br>profile', title: 'Shah Firizki Azmi — Data Analyst Portfolio' },
  id: { prevCase: 'proyek <br>sebelumnya', nextCase: 'proyek <br>berikutnya', backHome: 'kembali <br>ke awal', fullProfile: 'profil <br>lengkap', title: 'Shah Firizki Azmi — Portofolio Data Analyst' },
};
let LANG = 'en';
try { LANG = localStorage.getItem('lang') || ((navigator.language || '').toLowerCase().startsWith('id') ? 'id' : 'en'); } catch (e) { /* storage unavailable */ }
const EN_TEXT = {};
document.querySelectorAll('[data-i18n]').forEach(el => { EN_TEXT[el.dataset.i18n] = el.innerHTML; });
document.querySelectorAll('[data-i18n-ph]').forEach(el => { EN_TEXT[el.dataset.i18nPh] = el.placeholder; });
function applyLang(lang, animate) {
  LANG = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    const html = lang === 'id' && ID_TEXT[k] != null ? ID_TEXT[k] : EN_TEXT[k];
    if (html != null && el.innerHTML !== html) el.innerHTML = html;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const k = el.dataset.i18nPh;
    el.placeholder = lang === 'id' && ID_TEXT[k] ? ID_TEXT[k] : EN_TEXT[k];
  });
  document.title = UI[lang].title;
  const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
  try { localStorage.setItem('lang', lang); } catch (e) { /* ignore */ }
  if (booted) { fillCase(cur); layoutTags(); if (window.__pm) window.__pm.refresh(); }
  if (animate) { document.body.classList.remove('lang-swap'); void document.body.offsetWidth; document.body.classList.add('lang-swap'); }
}
let booted = false;

const N = CASES.length;
const pad2 = n => String(n).padStart(2, '0');

/* ---------- elements ---------- */
const stage = $('.stage');
const laptop = $('#laptop');
const casesBox = $('#cases');
const dash = $('#dash');
const flash = $('#flash');
const ticket = $('#ticket');
const descKids = () => [...$('#desc').children];
const btnPrev = $('#btn-prev');
const btnNext = $('#btn-next');

// build case figures
CASES.forEach((c, i) => {
  const f = document.createElement('figure');
  f.innerHTML = `<img alt="${c.title}" decoding="async" ${i < 2 ? '' : 'loading="lazy"'} src="${U(c.img, 1600)}"><figcaption>${pad2(i + 1)} · ${c.key}</figcaption>`;
  const img = f.querySelector('img');
  img.addEventListener('error', () => { if (!img.dataset.f) { img.dataset.f = 1; img.src = c.fb; } });
  casesBox.appendChild(f);
});
const figs = [...casesBox.children];

/* ---------- viewport unit + laptop pose ---------- */
let W = innerWidth, H = innerHeight, n = 1;
const LW = 1000, LH = 674, BASEW = 1160;
const isMobile = () => W <= 820;

function measure() {
  W = innerWidth; H = stage.clientHeight || innerHeight;
  n = isMobile() ? W / 430 : Math.min(W / 1440, H / 900);
  document.documentElement.style.setProperty('--n', `${n}px`);
}

function poseFor(mode) {
  if (mode === 'hero') {
    if (isMobile()) {
      const s = Math.min((W * 0.94) / BASEW, (H * 0.40) / LH);
      return { s, cx: W / 2, cy: H - 104 - (LH * s) / 2, rx: 12, ry: 0, rz: -2 };
    }
    const s = Math.min((W * 0.5) / BASEW, (H * 0.52) / LH);
    return { s, cx: W / 2 - 40 * n, cy: H - 74 * n - (LH * s) / 2, rx: 12, ry: -9, rz: 2 };
  }
  // case
  if (isMobile()) {
    const th = ticket.offsetHeight || 170;
    const dh = Math.max(60, $('#desc').offsetHeight || 80);
    const top = 62 + th + 14 + dh + 18;
    const bottom = 80;
    const s = Math.min((W - 24) / LW, Math.max(0.2, (H - top - bottom) / LH));
    const cy = Math.max(top + (LH * s) / 2, H - bottom - (LH * s) / 2);
    document.documentElement.style.setProperty('--th', `${th}px`);
    return { s, cx: W / 2, cy, rx: 0, ry: 0, rz: 0 };
  }
  const top = 72 * n, bottom = 34 * n, side = 250 * n;
  const s = Math.min((W - side * 2) / LW, (H - top - bottom) / LH);
  return { s, cx: W / 2, cy: top + (LH * s) / 2, rx: 0, ry: 0, rz: 0 };
}

function layoutTags() {
  const t1 = $('.t1'), t2 = $('.t2'), tl = $('.t-lang'), t3 = $('.t3'), t4 = $('.t4');
  if (isMobile()) { [t2, tl, t3].forEach(t => { t.style.left = ''; t.style.right = ''; }); tl.style.right = `${12 + t3.offsetWidth + 8}px`; return; }
  tl.style.right = ''; t3.style.left = '';
  const gap = 12 * n, edge = 30 * n;
  t2.style.left = `${edge + t1.offsetWidth + gap}px`;
  tl.style.left = `${edge + t1.offsetWidth + gap + t2.offsetWidth + gap}px`;
  t3.style.right = `${32 * n + t4.offsetWidth + gap}px`;
}

function place(mode) {
  const p = poseFor(mode);
  laptop.style.transform =
    `translate3d(${p.cx - LW / 2}px, ${p.cy - LH / 2}px, 0) scale(${p.s}) rotateX(${p.rx}deg) rotateY(${p.ry}deg) rotateZ(${p.rz}deg)`;
  stage.classList.toggle('m-case', mode === 'case');
}

/* ---------- state ---------- */
let mode = 'hero';
let cur = 0;
let busy = false;

function setBusy(v) { busy = v; document.body.classList.toggle('busy', v); }
const anim = (el, kf, opt) => (el ? el.animate(kf, { fill: 'both', easing: EASE, ...opt, duration: T(opt.duration || 0), delay: T(opt.delay || 0) }) : null);

/* ---------- lanyard physics: two elastic straps + card as a damped mass ---------- */
const Lanyard = (() => {
  const root = $('#lanyard');
  const svg = $('#rope');
  const els = {
    a: { band: $('#rope-band'), shadow: $('#rope-shadow'), stitch: $('#rope-stitch') },
    b: { band: $('#rope-band-2'), shadow: $('#rope-shadow-2'), stitch: $('#rope-stitch-2') },
  };
  const card = $('#idcard');
  const SEG = 14;
  // units are px and "60 Hz frames"; the sim runs in small fixed sub-steps (H frames each)
  const H = 0.25;          // 240 Hz sub-steps -> identical, smooth motion on 60/120/144 Hz screens
  const G = 0.5;           // gravity
  const K = 0.03;          // strap elasticity (keeps straps taut under the card's weight)
  const FMAX = 1.4;        // strongest pull the straps give back
  const DAMP = 0.945;      // velocity kept per frame
  const FOLLOW = 0.35;     // how quickly the card catches the pointer while dragging (per frame)
  let ancA = { x: 0, y: 0 }, ancB = { x: 0, y: 0 }, L = 300;
  let P = { x: 0, y: 0 }, V = { x: 0, y: 0 }, prev = { x: 0, y: 0, r: 0 };
  let ropeA = [], ropeB = [];
  let rot = 0, rotV = 0, swayV = 0, cardW = 236;
  let running = false, raf = 0, active = false, still = 0, last = 0, acc = 0;
  let dragging = false, grab = { x: 0, y: 0 }, target = null;

  function layout() {
    const w = stage.clientWidth, h = stage.clientHeight;
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    cardW = card.offsetWidth || 236;
    let cx, spread, drop;
    if (isMobile()) {
      cx = w * 0.24; spread = Math.max(22, w * 0.07); drop = Math.max(150, 90 + w * 0.2);
      root.style.setProperty('--rw', '10px'); root.style.setProperty('--rt', '5.5px');
    } else {
      cx = w - 205 * n; spread = 58 * n; drop = Math.max(200, 60 * n + Math.min(w * 0.176, h * 0.31) + 10 * n);
      root.style.setProperty('--rw', `${Math.max(12, 18 * n)}px`); root.style.setProperty('--rt', `${Math.max(6, 8 * n)}px`);
    }
    ancA = { x: cx - spread, y: -40 }; ancB = { x: cx + spread, y: -40 };
    const restD = Math.hypot(spread, drop + 40), cos = (drop + 40) / restD;
    L = restD - G / (2 * K * cos);
    return { cx, drop };
  }

  const mkRope = (anc, to) => Array.from({ length: SEG }, (_, i) => {
    const t = i / (SEG - 1), x = anc.x + (to.x - anc.x) * t, y = anc.y + (to.y - anc.y) * t;
    return { x, y, px: x, py: y };
  });

  function build(fromTop) {
    const { cx, drop } = layout();
    P = { x: cx, y: fromTop ? -80 : drop }; V = { x: 0, y: 0 };
    ropeA = mkRope(ancA, P); ropeB = mkRope(ancB, P);
    rot = fromTop ? -6 : 0; rotV = 0; swayV = 0; still = 0;
    prev = { x: P.x, y: P.y, r: rot };
  }

  function stepCard(h) {
    if (dragging && target) {
      // critically-damped follow: smooth even when pointer events arrive unevenly
      const a = 1 - Math.pow(1 - FOLLOW, h);
      const nx = P.x + (target.x - P.x) * a, ny = P.y + (target.y - P.y) * a;
      V.x = (nx - P.x) / h; V.y = (ny - P.y) / h;
      P.x = nx; P.y = ny;
      return;
    }
    let fx = 0, fy = G;
    for (const an of [ancA, ancB]) {
      const dx = P.x - an.x, dy = P.y - an.y, d = Math.hypot(dx, dy) || 1;
      if (d > L) { const f = FMAX * Math.tanh(K * (d - L) / FMAX); fx -= f * dx / d; fy -= f * dy / d; }
    }
    const sp = Math.hypot(V.x, V.y), drag = Math.min(0.5, sp * 0.005);
    V.x += (fx - V.x * drag) * h; V.y += (fy - V.y * drag) * h;
    const keep = Math.pow(DAMP, h); V.x *= keep; V.y *= keep;
    P.x += V.x * h; P.y += V.y * h;
  }

  function stepRot(h) {
    // smoothed sideways velocity drives the swing, so the card never twitches
    swayV += (V.x - swayV) * (1 - Math.pow(0.8, h));
    const mx = (ancA.x + ancB.x) / 2;
    const lean = Math.atan2(P.x - mx, P.y - ancA.y) * 180 / Math.PI;
    const tgt = Math.max(-40, Math.min(40, -lean * 0.55 - swayV * 1.4));
    rotV += (tgt - rot) * 0.05 * h;          // pendulum spring
    rotV *= Math.pow(0.88, h);               // pendulum damping
    rot += rotV * h;
  }

  function stepRope(r, an, h) {
    const keep = Math.pow(0.9, h), g = G * 0.6 * h * h;
    for (let i = 1; i < SEG - 1; i++) {
      const p = r[i], vx = (p.x - p.px) * keep, vy = (p.y - p.py) * keep;
      p.px = p.x; p.py = p.y; p.x += vx; p.y += vy + g;
    }
    const seg = Math.max(L, Math.hypot(P.x - an.x, P.y - an.y)) / (SEG - 1);
    for (let k = 0; k < 6; k++) {
      r[0].x = an.x; r[0].y = an.y; r[SEG - 1].x = P.x; r[SEG - 1].y = P.y;
      for (let i = 0; i < SEG - 1; i++) {
        const a = r[i], b = r[i + 1], dx = b.x - a.x, dy = b.y - a.y, dd = Math.hypot(dx, dy) || 0.0001;
        const diff = (dd - seg) / dd * 0.5, ox = dx * diff, oy = dy * diff;
        if (i > 0) { a.x += ox; a.y += oy; }
        if (i + 1 < SEG - 1) { b.x -= ox; b.y -= oy; }
      }
    }
    r[SEG - 1].x = P.x; r[SEG - 1].y = P.y;
  }

  function step() {
    prev = { x: P.x, y: P.y, r: rot };
    stepCard(H); stepRot(H); stepRope(ropeA, ancA, H); stepRope(ropeB, ancB, H);
  }

  function pathD(pts, ex, ey) {
    let d = `M${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
    for (let i = 1; i < pts.length - 1; i++) {
      const nx = i + 1 === pts.length - 1 ? ex : pts[i + 1].x, ny = i + 1 === pts.length - 1 ? ey : pts[i + 1].y;
      d += ` Q${pts[i].x.toFixed(1)} ${pts[i].y.toFixed(1)} ${((pts[i].x + nx) / 2).toFixed(1)} ${((pts[i].y + ny) / 2).toFixed(1)}`;
    }
    return d + ` L${ex.toFixed(1)} ${ey.toFixed(1)}`;
  }

  function render(alpha = 1) {
    if (!ropeA.length) return;
    // interpolate between the last two sub-steps so frames never "jump"
    const x = prev.x + (P.x - prev.x) * alpha, y = prev.y + (P.y - prev.y) * alpha, r = prev.r + (rot - prev.r) * alpha;
    [[ropeA, els.a], [ropeB, els.b]].forEach(([pts, e]) => {
      const d = pathD(pts, x, y); e.band.setAttribute('d', d); e.shadow.setAttribute('d', d); e.stitch.setAttribute('d', d);
    });
    card.style.transform = `translate3d(${(x - cardW / 2).toFixed(2)}px, ${(y - 8).toFixed(2)}px, 0) rotate(${r.toFixed(2)}deg)`;
  }

  const STEP_MS = 1000 / 60 * H;
  function loop(t) {
    if (!running) return;
    if (!last) last = t;
    acc += Math.min(64, t - last); last = t;
    let n2 = 0;
    while (acc >= STEP_MS && n2 < 40) { step(); acc -= STEP_MS; n2++; }
    render(acc / STEP_MS);
    const v = Math.abs(V.x) + Math.abs(V.y) + Math.abs(rotV);
    still = !dragging && v < 0.05 ? still + 1 : 0;
    if (still > 45) { running = false; render(1); return; }   // at rest: stop until the next drag
    raf = requestAnimationFrame(loop);
  }
  function start() { still = 0; if (running) return; running = true; last = 0; acc = 0; raf = requestAnimationFrame(loop); }
  function stop() { running = false; cancelAnimationFrame(raf); }
  const settle = () => { for (let i = 0; i < 1200; i++) step(); V = { x: 0, y: 0 }; rotV = 0; swayV = 0; render(1); };

  // the card reacts ONLY to press + drag: no hover, no cursor tracking
  const local = ev => { const r = stage.getBoundingClientRect(); return { x: ev.clientX - r.left, y: ev.clientY - r.top }; };
  let stageRect = null;
  card.addEventListener('pointerdown', ev => {
    if (mode !== 'hero' || busy || ev.button > 0) return;
    ev.preventDefault();
    card.setPointerCapture(ev.pointerId);
    stageRect = stage.getBoundingClientRect();
    dragging = true; card.classList.add('dragging'); root.classList.add('touched', 'is-dragging');
    const p = local(ev);
    grab = { x: p.x - P.x, y: p.y - P.y };
    target = { x: P.x, y: P.y };
    start();
  });
  card.addEventListener('pointermove', ev => {
    if (!dragging) return;
    const r = stageRect, x = ev.clientX - r.left - grab.x, y = ev.clientY - r.top - grab.y;
    target = { x: Math.max(0, Math.min(r.width, x)), y: Math.max(-20, Math.min(r.height - 40, y)) };
  });
  const release = () => {
    if (!dragging) return;
    dragging = false; target = null; card.classList.remove('dragging'); root.classList.remove('is-dragging');
    V.x = Math.max(-16, Math.min(16, V.x)); V.y = Math.max(-16, Math.min(16, V.y)); // throw
    start();
  };
  card.addEventListener('pointerup', release);
  card.addEventListener('pointercancel', release);
  card.addEventListener('lostpointercapture', release);

  return {
    init() { build(false); settle(); },
    show() {
      active = true;
      root.getAnimations().forEach(a => a.cancel());
      root.style.opacity = '';
      root.classList.remove('pre');
      if (RM) { build(false); settle(); return; }
      build(true); render(1); start();
    },
    hide() {
      active = false;
      const a = root.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateY(-60%)' }], { duration: T(450), easing: 'cubic-bezier(.5,0,.75,0)', fill: 'forwards' });
      a.finished.then(stop).catch(() => {});
    },
    resize() { if (!active) return; build(false); settle(); },
  };
})();

/* ---------- entrance ---------- */
function entrance() {
  if (document.documentElement.dataset.in) return;
  document.documentElement.dataset.in = '1';
  $$('.tag').forEach((t, i) => anim(t, [{ opacity: 0, transform: 'translateY(-40px) rotate(-4deg)' }, { opacity: 1, transform: 'none' }],
    { duration: 700, delay: 120 + i * 80, easing: 'cubic-bezier(.3,1.5,.5,1)' }).finished.then(a => { t.classList.remove('pre'); a.cancel(); }).catch(() => {}));
  anim($('.wm'), [{ opacity: 0, transform: 'translateY(60px)', clipPath: 'inset(100% 0 0 0)' }, { opacity: 1, transform: 'none', clipPath: 'inset(0)' }], { duration: 1100, delay: 260 });
  anim($('.script'), [{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }, { opacity: 1, clipPath: 'inset(0)' }], { duration: 900, delay: 1050, easing: 'cubic-bezier(.5,0,.3,1)' });
  setTimeout(() => Lanyard.show(), T(650));
  anim(laptop.firstElementChild, [{ opacity: 0, transform: 'translateY(120px)' }, { opacity: 1, transform: 'none' }], { duration: 1200, delay: 380 })
    ?.finished.then(a => a.cancel()).catch(() => {});
  $$('.hero-meta').forEach((m, i) => anim(m, [{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'none' }], { duration: 700, delay: 1300 + i * 100 }));
  anim($('#hint'), [{ opacity: 0 }, { opacity: 0.85 }], { duration: 600, delay: 1800 });
  anim($('#skip'), [{ opacity: 0 }, { opacity: 1 }], { duration: 600, delay: 1900 });
}

/* ---------- case content ---------- */
function fitTitle() {
  const h2 = $('#tk-title');
  h2.style.fontSize = '';
  let fs = parseFloat(getComputedStyle(h2).fontSize);
  const max = h2.parentElement.clientWidth - parseFloat(getComputedStyle(h2.parentElement).paddingLeft) - parseFloat(getComputedStyle(h2.parentElement).paddingRight);
  while (h2.scrollWidth > max && fs > 18) { fs -= 2; h2.style.fontSize = `${fs}px`; }
}

function fillCase(i) {
  const c = CASES[i];
  $('#tk-title').textContent = c.title;
  ['#tk-r1', '#tk-r2', '#tk-r3'].forEach((s, k) => { $(s).textContent = c.rows[k]; });
  const a = $('#tk-link');
  a.href = c.link; a.firstChild.textContent = `${LANG === 'id' ? c.linkTextId : c.linkText} `;
  if (c.link.startsWith('#')) a.removeAttribute('target'); else a.setAttribute('target', '_blank');
  $('#ds-k').textContent = c.key;
  $('#ds-p').textContent = LANG === 'id' ? c.textId : c.text;
  $('#ds-t').innerHTML = c.tech.map(t => `<span>${t}</span>`).join('');
  $('#ds-n').textContent = `${pad2(i + 1)} / ${pad2(N)}`;
  btnPrev.classList.toggle('dim', i === 0);
  const L = UI[LANG];
  $('#btn-prev .l').innerHTML = i === 0 ? L.backHome : L.prevCase;
  $('#btn-next .l').innerHTML = i === N - 1 ? L.fullProfile : L.nextCase;
  fitTitle();
}

function caseIn(first) {
  anim(ticket, [
    { opacity: 0, transform: 'translateY(-60px) rotate(-6deg)', offset: 0 },
    { opacity: 1, transform: 'translateY(6px) rotate(1.2deg)', offset: 0.7 },
    { opacity: 1, transform: 'none' }], { duration: 800, delay: first ? 150 : 0 });
  descKids().forEach((k, j) => anim(k, [{ opacity: 0, transform: 'translateY(14px)' }, { opacity: 1, transform: 'none' }],
    { duration: 600, delay: (first ? 250 : 80) + j * 70 }));
}

function caseOut() {
  const a = anim(ticket, [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateY(-40px) rotate(4deg)' }],
    { duration: 380, easing: 'cubic-bezier(.5,0,.75,0)' });
  descKids().forEach((k, j) => anim(k, [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateY(-10px)' }],
    { duration: 300, delay: j * 40, easing: 'cubic-bezier(.5,0,.75,0)' }));
  return a ? a.finished : Promise.resolve();
}

function showFig(i, enter) {
  figs.forEach((f, k) => { if (k !== i) { f.classList.remove('on'); f.getAnimations().forEach(a => a.cancel()); f.style.opacity = 0; } });
  const f = figs[i];
  f.classList.add('on');
  f.style.opacity = 1;
  anim(f, [{ opacity: 0, transform: `scale(${enter})` }, { opacity: 1, transform: 'scale(1)' }], { duration: enter > 1.05 ? 700 : 500 });
  const nx = figs[(i + 1) % N].querySelector('img');
  if (nx.loading === 'lazy') nx.loading = 'eager';
}

/* ---------- hero → laptop ---------- */
async function toCase(index = 0) {
  if (busy || mode === 'case') return;
  setBusy(true);
  if (scrollY > 2) window.scrollTo({ top: 0, behavior: 'instant' });
  document.body.classList.add('busy-lock');

  // hero out
  anim($('.wm'), [{ opacity: 1, transform: 'none', clipPath: 'inset(0)' }, { opacity: 0, transform: 'translateY(-40px)', clipPath: 'inset(0)' }], { duration: 380, easing: 'cubic-bezier(.5,0,.75,0)' });
  anim($('.script'), [{ opacity: 1 }, { opacity: 0 }], { duration: 300 });
  Lanyard.hide();
  await wait(T(330));

  // the dive: camera glides, laptop straightens and fills the frame
  cur = index;
  fillCase(cur);
  laptop.style.setProperty('--glide', '1.6s');
  laptop.classList.toggle('glide', !RM);
  place('case');
  anim(dash, [{ opacity: 1, filter: 'blur(0)' }, { opacity: 0, filter: 'blur(6px)' }], { duration: 900, delay: 700 });
  await wait(T(1600));
  arriveCase();
}

function arriveCase() {
  mode = 'case';
  document.body.classList.add('is-case');
  anim(flash, [{ opacity: 0 }, { opacity: 0.55, offset: 0.25 }, { opacity: 0 }], { duration: 600, easing: 'ease-out' });
  showFig(cur, 1.06);
  caseIn(true);
  setTimeout(() => { laptop.classList.remove('glide'); setBusy(false); }, T(700));
}

/* ---------- switch case ---------- */
async function swapTo(i) {
  if (busy) return;
  setBusy(true);
  const old = figs[cur];
  await Promise.all([caseOut(), anim(old, [{ opacity: 1 }, { opacity: 0 }], { duration: 350 })?.finished]);
  cur = (i + N) % N;
  fillCase(cur);
  anim(flash, [{ opacity: 0 }, { opacity: 0.35, offset: 0.3 }, { opacity: 0 }], { duration: 420, easing: 'ease-out' });
  showFig(cur, 1.04);
  caseIn(false);
  setTimeout(() => setBusy(false), T(520));
}

function next() {
  if (mode !== 'case') return toCase(0);
  if (cur === N - 1) return toHero(true);
  swapTo(cur + 1);
}
function prev() {
  if (mode !== 'case') return;
  if (cur === 0) return toHero(false);
  swapTo(cur - 1);
}

/* ---------- back to hero ---------- */
async function toHero(thenScroll) {
  if (busy || mode !== 'case') return;
  setBusy(true);
  caseOut();
  figs.forEach(f => anim(f, [{ opacity: Number(getComputedStyle(f).opacity) }, { opacity: 0 }], { duration: 300 }));
  document.body.classList.remove('is-case');
  mode = 'hero';
  laptop.style.setProperty('--glide', '.9s');
  laptop.classList.toggle('glide', !RM);
  place('hero');
  anim(dash, [{ opacity: 0, filter: 'blur(6px)' }, { opacity: 1, filter: 'blur(0)' }], { duration: 700, delay: 250 });
  await wait(T(250));
  // hero in
  anim($('.wm'), [{ opacity: 0, transform: 'translateY(40px)', clipPath: 'inset(0)' }, { opacity: 1, transform: 'none', clipPath: 'inset(0)' }], { duration: 700 });
  anim($('.script'), [{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }, { opacity: 1, clipPath: 'inset(0)' }], { duration: 700, delay: 250 });
  Lanyard.show();
  await wait(T(750));
  figs.forEach(f => { f.classList.remove('on'); f.getAnimations().forEach(a => a.cancel()); f.style.opacity = 0; });
  laptop.classList.remove('glide');
  document.body.classList.remove('busy-lock');
  setBusy(false);
  if (thenScroll) scrollToEl($('#intro'));
}

const wait = ms => new Promise(r => setTimeout(r, ms));

/* ---------- input capture ---------- */
const atTop = () => scrollY <= 4;
let wheelLock = 0;
addEventListener('wheel', e => {
  const menuOpen = $('#nav-menu').classList.contains('open');
  if (menuOpen) return;
  if (mode === 'case' || busy) {
    e.preventDefault();
    if (busy || Math.abs(e.deltaY) < 18 || Date.now() < wheelLock) return;
    wheelLock = Date.now() + 900;
    e.deltaY > 0 ? next() : prev();
    return;
  }
}, { passive: false });

let tx = 0, ty = 0, tStartTop = false;
addEventListener('touchstart', e => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; tStartTop = atTop(); }, { passive: true });
addEventListener('touchmove', e => {
  if (mode === 'case' || busy) { e.preventDefault(); return; }
  const dy = ty - e.touches[0].clientY;
  if (e.target.closest('.idcard')) { e.preventDefault(); return; }
}, { passive: false });
addEventListener('touchend', e => {
  if (e.target.closest('.idcard')) return;
  const dx = tx - e.changedTouches[0].clientX;
  const dy = ty - e.changedTouches[0].clientY;
  if (mode === 'case') {
    if (e.target.closest('a, button')) return;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < 40) return;
    if (Math.abs(dy) >= Math.abs(dx)) dy > 0 ? next() : prev();
    else dx > 0 ? next() : prev();
    return;
  }
});

addEventListener('keydown', e => {
  if (e.target.closest('input, textarea')) return;
  if (e.key === 'Escape') { closeMenu(); if (mode === 'case') toHero(false); return; }
  const fwd = ['ArrowDown', 'PageDown', ' ', 'Spacebar'];
  const back = ['ArrowUp', 'PageUp'];
  if (mode === 'case') {
    if ([...fwd, 'ArrowRight'].includes(e.key)) { e.preventDefault(); next(); }
    else if ([...back, 'ArrowLeft'].includes(e.key)) { e.preventDefault(); prev(); }
    return;
  }
});

btnNext.addEventListener('click', next);
btnPrev.addEventListener('click', prev);
$('#screen-hit').addEventListener('click', next);
$('#hint').addEventListener('click', () => { if (mode !== 'case' && !busy) { scrollTo(0, 0); toCase(0); } });
$('#tag-projects').addEventListener('click', () => (mode === 'case' ? null : toCase(0)));
$('#tag-home').addEventListener('click', () => (mode === 'case' ? toHero(false) : scrollToEl($('#home'))));
$('#logo-c').addEventListener('click', () => toHero(false));
$('#tag-hire').addEventListener('click', async e => {
  e.preventDefault();
  if (mode === 'case') { await toHero(false); }
  scrollToEl($('#contact'));
});
$('#tk-link').addEventListener('click', async e => {
  if (!$('#tk-link').getAttribute('href').startsWith('#')) return;
  e.preventDefault();
  await toHero(false);
  scrollToEl($('#project'));
});
$('#skip').addEventListener('click', e => { e.preventDefault(); scrollToEl($('#intro')); });

function scrollToEl(el) {
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + scrollY - (el.id === 'home' ? 0 : 20), behavior: RM ? 'auto' : 'smooth' });
}

/* ---------- section menu ---------- */
const navMenu = $('#nav-menu');
function openMenu() { navMenu.classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeMenu() { navMenu.classList.remove('open'); document.body.style.overflow = ''; }
$('#tag-menu').addEventListener('click', e => { e.preventDefault(); openMenu(); });
$('#menu-close').addEventListener('click', closeMenu);
navMenu.addEventListener('click', e => { if (e.target === navMenu) closeMenu(); });
$$('.ul-list li a').forEach(link => {
  link.addEventListener('click', async e => {
    e.preventDefault();
    closeMenu();
    if (mode === 'case') await toHero(false);
    scrollToEl($(link.getAttribute('href')));
  });
});

/* ---------- resize ---------- */
let rz;
addEventListener('resize', () => {
  clearTimeout(rz);
  rz = setTimeout(() => { laptop.classList.remove('glide'); measure(); place(mode); layoutTags(); Lanyard.resize(); if (mode === 'case') fitTitle(); }, 80);
});

/* ---------- boot ---------- */
measure();
place('hero');
applyLang(LANG, false);
fillCase(0);
booted = true;
layoutTags();
document.fonts?.ready.then(layoutTags);
Lanyard.init();
$('#tag-lang').addEventListener('click', () => applyLang(LANG === 'en' ? 'id' : 'en', true));
const plateReady = new Promise(r => { const i = new Image(); i.onload = i.onerror = r; i.src = U('1593062096033-9a26b09da705', 2400); });
Promise.race([Promise.all([document.fonts?.ready, plateReady]), wait(2500)]).then(() => requestAnimationFrame(() => { measure(); place('hero'); entrance(); }));
setTimeout(entrance, 4000);

/* =========================================================
   Page below the stage (kept from the previous version)
   ========================================================= */

/* scroll progress, back-to-top, active link */
const progress = $('#scroll-progress');
const backToTop = $('#back-to-top');
const sections = $$('main section[id]');
function onScroll() {
  const y = scrollY;
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;
  backToTop.classList.toggle('show', y > 600);
  const pos = y + innerHeight * 0.35;
  let current = 'home';
  sections.forEach(s => { if (pos >= s.offsetTop) current = s.id; });
  $$('.ul-list li a').forEach(a => a.parentElement.classList.toggle('active', a.getAttribute('href') === `#${current}`));
}
addEventListener('scroll', onScroll, { passive: true });
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* reveal on scroll */
$$('.card, .skills-grid, .projects-container, .services-container, .cert-grid, .stats, .training-grid, .info-home').forEach(g => {
  [...g.children].filter(c => c.classList.contains('reveal')).forEach((c, i) => c.style.setProperty('--d', `${Math.min(i, 6) * 0.08}s`));
});
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('active-reveal'); revealObserver.unobserve(en.target); } });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
$$('.reveal').forEach(el => revealObserver.observe(el));

/* typing effect */
const typingElement = $('.info-home h3');
const WORDS = { en: ['Data Analyst', 'Automation Developer', 'Fullstack Developer', 'Data Scientist', 'Machine Learning Engineer', 'Data Visualization Specialist'], id: ['Data Analyst', 'Automation Developer', 'Fullstack Developer', 'Data Scientist', 'Machine Learning Engineer', 'Spesialis Visualisasi Data'] };
const wordsNow = () => WORDS[LANG];
let wordIndex = 0, charIndex = 0, isDeleting = false;
function type() {
  if (!typingElement) return;
  const words = wordsNow();
  const w = words[wordIndex % words.length];
  typingElement.innerHTML = w.substring(0, charIndex) + '<span class="cursor">|</span>';
  if (!isDeleting && charIndex < w.length) { charIndex++; setTimeout(type, 90); }
  else if (isDeleting && charIndex > 0) { charIndex--; setTimeout(type, 45); }
  else { isDeleting = !isDeleting; if (!isDeleting) wordIndex = (wordIndex + 1) % words.length; setTimeout(type, isDeleting ? 1600 : 400); }
}
type();

/* counters */
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target, target = parseFloat(el.dataset.target), dec = parseInt(el.dataset.decimals || '0', 10), start = performance.now();
    (function tick(now) {
      const t = Math.min((now - start) / 1600, 1);
      el.textContent = (target * (1 - Math.pow(1 - t, 3))).toFixed(dec);
      if (t < 1) requestAnimationFrame(tick);
    })(start);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.6 });
$$('.counter').forEach(c => counterObserver.observe(c));

/* GPA ring */
const ringObserver = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('filled'); ringObserver.unobserve(en.target); } });
}, { threshold: 0.5 });
$$('.gpa-ring').forEach(r => ringObserver.observe(r));

/* project filter */
const filterBtns = $$('.filter-btn');
const projectCards = $$('.project-card');
filterBtns.forEach(btn => btn.addEventListener('click', () => {
  filterBtns.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const f = btn.dataset.filter;
  projectCards.forEach(card => {
    const show = f === 'all' || card.dataset.category.split(' ').includes(f);
    card.classList.toggle('is-hidden', !show);
    if (show) { card.classList.remove('active-reveal'); void card.offsetWidth; card.classList.add('active-reveal'); }
  });
}));


/* project detail modal: cards stay short, full story opens in a popup */
const PM = (() => {
  const box = $('#pm'), dlg = box.querySelector('.pm-dialog');
  let card = null, lastFocus = null;
  const MAX_TAGS = 4;
  projectCards.forEach(c => {
    const tags = [...c.querySelectorAll('.pc-body > .skills a')];
    if (tags.length > MAX_TAGS) {
      tags.slice(MAX_TAGS).forEach(t => t.classList.add('tag-extra'));
      const more = document.createElement('a'); more.className = 'tag-more'; more.textContent = `+${tags.length - MAX_TAGS}`;
      c.querySelector('.pc-body > .skills').appendChild(more);
    }
    const det = c.querySelector('.pc-detail');
    if (det.tagName !== 'A') det.addEventListener('click', () => open(c)); // a link (e.g. a PDF guide) opens directly
    const img = c.querySelector('.pc-img'); img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => open(c));
  });
  $$('.tl-art .timeline-item').forEach(c => {
    const box = c.querySelector('.skills'), tags = box ? [...box.querySelectorAll('a')] : [];
    if (tags.length > MAX_TAGS) {
      tags.slice(MAX_TAGS).forEach(t => t.classList.add('tag-extra'));
      const more = document.createElement('a'); more.className = 'tag-more'; more.textContent = `+${tags.length - MAX_TAGS}`; box.appendChild(more);
    }
    c.querySelector('.pc-detail').addEventListener('click', () => open(c));
  });
  const isExp = c => c.classList.contains('timeline-item');
  function fill() {
    if (!card) return;
    const q = s => card.querySelector(s);
    const exp = isExp(card);
    dlg.classList.toggle('no-media', exp);
    $('#pm-media').innerHTML = '';
    const meta = [];
    if (exp) {
      meta.push(`<span>${q('.date').innerHTML}</span>`);
      if (q('.badge-now')) meta.push(`<span class="pm-new">${q('.badge-now').textContent}</span>`);
      $('#pm-meta').innerHTML = meta.join('');
      $('#pm-title').innerHTML = q('h3').innerHTML + `<small>${q('h4').innerHTML}</small>`;
    } else {
      const im = q('.pc-img img');
      const ni = document.createElement('img'); ni.src = im.currentSrc || im.src; ni.alt = im.alt; $('#pm-media').appendChild(ni);
      if (q('.pc-new')) meta.push(`<span class="pm-new">${q('.pc-new').textContent}</span>`);
      if (q('.pc-year')) meta.push(`<span>${q('.pc-year').textContent}</span>`);
      const cat = (card.dataset.category || '').split(' ')[0];
      const fb = $(`.filter-btn[data-filter="${cat}"]`); if (fb) meta.push(`<span>${fb.textContent.trim()}</span>`);
      $('#pm-meta').innerHTML = meta.join('');
      $('#pm-title').innerHTML = q('.pc-body h3').innerHTML;
    }
    const d = exp ? q('.timeline-content > p') : q('.pc-body > p');
    $('#pm-desc').innerHTML = d ? d.innerHTML : '';
    const pts = exp ? q('.exp-list') : q('.pc-points');
    $('#pm-hi-wrap').hidden = !pts;
    $('#pm-points').innerHTML = pts ? pts.innerHTML : '';
    $('#pm-skills').innerHTML = [...card.querySelectorAll('.skills a:not(.tag-more)')].map(a => `<a>${a.textContent}</a>`).join('');
    const links = exp ? q('.experience-btn') : q('.btns');
    $('#pm-links').innerHTML = links ? links.innerHTML : '';
    $('#pm-links').hidden = !links;
  }
  function open(c) {
    card = c; lastFocus = document.activeElement; fill();
    box.classList.add('open'); box.setAttribute('aria-hidden', 'false');
    document.documentElement.classList.add('pm-lock');
    setTimeout(() => dlg.focus(), 50);
  }
  function close() {
    if (!box.classList.contains('open')) return;
    box.classList.remove('open'); box.setAttribute('aria-hidden', 'true');
    document.documentElement.classList.remove('pm-lock');
    if (lastFocus) lastFocus.focus({ preventScroll: true });
    card = null;
  }
  box.querySelectorAll('[data-pm-close]').forEach(el => el.addEventListener('click', close));
  addEventListener('keydown', e => {
    if (!box.classList.contains('open')) return;
    e.stopImmediatePropagation();
    if (e.key === 'Escape') close();
  }, true);
  box.addEventListener('wheel', e => e.stopPropagation(), { passive: true });
  return { refresh: fill, close };
})();
window.__pm = PM;

/* experience: a flowing dashed path that winds between the staggered cards */
(() => {
  const tl = $('.tl-art'); if (!tl) return;
  const NS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(NS, 'svg'); svg.setAttribute('class', 'tl-path'); svg.setAttribute('aria-hidden', 'true');
  tl.prepend(svg);
  function draw() {
    const items = [...tl.querySelectorAll('.timeline-item')];
    const one = getComputedStyle(tl).gridTemplateColumns.split(' ').length < 2;
    const pts = items.map((it, i) => {
      const L = it.offsetLeft, T = it.offsetTop, W = it.offsetWidth, H = it.offsetHeight;
      const y = T + Math.min(70, H / 3);
      if (one) return { x: -14, y };
      return { x: i % 2 === 0 ? L + W : L, y };
    });
    if (!pts.length) return;
    let d = `M${pts[0].x} ${pts[0].y - (one ? 40 : 0)}`;
    if (one) { pts.forEach(p => { d += ` L${p.x} ${p.y}`; }); d += ` L${pts[0].x} ${tl.offsetHeight}`; }
    else {
      for (let i = 1; i < pts.length; i++) {
        const a = pts[i - 1], b = pts[i], my = (a.y + b.y) / 2;
        d += ` C${a.x + (b.x - a.x) * .9} ${a.y}, ${b.x - (b.x - a.x) * .9} ${b.y}, ${b.x} ${b.y}`.replace(/NaN/g, '0');
        void my;
      }
    }
    let html = `<path class="p-glow" d="${d}"/><path class="p-line" d="${d}"/>`;
    pts.forEach((p, i) => {
      const s = 7;
      html += `<rect class="p-node${i === 0 ? ' now' : ''}" x="${p.x - s}" y="${p.y - s}" width="${s * 2}" height="${s * 2}" transform="rotate(45 ${p.x} ${p.y})"/>`;
    });
    svg.innerHTML = html;
  }
  draw();
  addEventListener('resize', () => requestAnimationFrame(draw));
  document.fonts?.ready.then(draw);
  addEventListener('load', draw);
  new ResizeObserver(draw).observe(tl);
})();

/* solid header bar on mobile once the page scrolls */
const onScrollBar = () => document.body.classList.toggle('scrolled', scrollY > 30);
addEventListener('scroll', onScrollBar, { passive: true }); onScrollBar();

/* hero tagline: types data-analyst <-> fullstack-dev in the handwritten script */
(() => {
  const el = $('#script-txt'); if (!el) return;
  const WORDS2 = ['data-analyst', 'fullstack-dev'];
  let wi = 0;
  const wait = ms => new Promise(r => setTimeout(r, ms));
  async function run() {
    await wait(RM ? 3000 : 3600);
    for (;;) {
      const next = WORDS2[(wi + 1) % WORDS2.length];
      if (RM) { el.textContent = next; }
      else {
        while (el.textContent.length) { el.textContent = el.textContent.slice(0, -1); await wait(42); }
        await wait(260);
        for (let i = 1; i <= next.length; i++) { el.textContent = next.slice(0, i); await wait(70 + Math.random() * 50); }
      }
      wi = (wi + 1) % WORDS2.length;
      await wait(2600);
    }
  }
  run();
})();

/* 3D tilt + spotlight */
if (!RM && matchMedia('(hover: hover)').matches) {
  projectCards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
  $$('.skill-card').forEach(card => card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
  }));
}

/* image fallback for internet photos */
$$('img[data-fallback]').forEach(img => img.addEventListener('error', () => {
  if (img.dataset.failed) return;
  img.dataset.failed = '1';
  img.src = img.dataset.fallback;
}));

/* contact form → email app */
$('#contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const d = new FormData(e.target);
  const subject = encodeURIComponent(`Portfolio inquiry from ${d.get('user_name')}`);
  const body = encodeURIComponent(`${d.get('message')}\n\n—\n${d.get('user_name')}\n${d.get('user_email')}`);
  location.href = `mailto:shahfirizkiazmi041103@gmail.com?subject=${subject}&body=${body}`;
});

$('#year').textContent = new Date().getFullYear();
onScroll();
