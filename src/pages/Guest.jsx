import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  IoCutOutline, IoSparklesOutline, IoColorPaletteOutline, 
  IoHappyOutline, IoArrowForwardOutline, IoChatbubbleEllipses, 
  IoCloseOutline, IoPaperPlaneOutline, IoShieldCheckmarkOutline, 
  IoRibbonOutline, IoTicketOutline, IoBagCheckOutline,
  IoChevronBackOutline, IoChevronForwardOutline, IoGridOutline,
  IoStar, IoCartOutline, IoEyeOutline, IoHeartOutline, IoGiftOutline,
  IoCalendarOutline, IoPeopleOutline, IoWalletOutline, IoThumbsUp,
  IoChatbubbleOutline, IoCheckmarkCircle, IoImagesOutline, IoPlayOutline,
  IoLogoInstagram, IoLogoTiktok, IoLogoFacebook, IoLogoWhatsapp
} from 'react-icons/io5';

export default function Guest() {
  const navigate = useNavigate();

  // --- STATE UNTUK DETEKSI SCROLL (NAVBAR) ---
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- STATE UNTUK ANIMASI HERO ON LOAD ---
  const [heroAnimate, setHeroAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroAnimate(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // --- STATE & OBSERVER: TENTANG ---
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsIntersecting(true);
      },
      { threshold: 0.1 }
    );
    if (currentSection) observer.observe(currentSection);
    return () => { if (currentSection) observer.unobserve(currentSection); };
  }, []);

  // --- STATE & OBSERVER: LAYANAN ---
  const [isLayananIntersecting, setIsLayananIntersecting] = useState(false);
  const layananSectionRef = useRef(null);

  useEffect(() => {
    const currentSection = layananSectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLayananIntersecting(true);
        }
      },
      { threshold: 0.05 }
    );
    if (currentSection) observer.observe(currentSection);
    return () => { if (currentSection) observer.unobserve(currentSection); };
  }, []);

  // --- STATE & OBSERVER: PRODUK ---
  const [isProdukIntersecting, setIsProdukIntersecting] = useState(false);
  const produkSectionRef = useRef(null);

  useEffect(() => {
    const currentSection = produkSectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsProdukIntersecting(true);
        }
      },
      { threshold: 0.1 }
    );
    if (currentSection) observer.observe(currentSection);
    return () => { if (currentSection) observer.unobserve(currentSection); };
  }, []);

  // --- STATE & OBSERVER: PROMO ---
  const [isPromoIntersecting, setIsPromoIntersecting] = useState(false);
  const promoSectionRef = useRef(null);

  useEffect(() => {
    const currentSection = promoSectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsPromoIntersecting(true);
      },
      { threshold: 0.1 }
    );
    if (currentSection) observer.observe(currentSection);
    return () => { if (currentSection) observer.unobserve(currentSection); };
  }, []);

  // --- STATE & OBSERVER: RATING CEPSTER ---
  const [isRatingIntersecting, setIsRatingIntersecting] = useState(false);
  const ratingSectionRef = useRef(null);

  useEffect(() => {
    const currentSection = ratingSectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsRatingIntersecting(true);
      },
      { threshold: 0.1 }
    );
    if (currentSection) observer.observe(currentSection);
    return () => { if (currentSection) observer.unobserve(currentSection); };
  }, []);

  // --- STATE & OBSERVER: GALLERY ---
  const [isGalleryIntersecting, setIsGalleryIntersecting] = useState(false);
  const gallerySectionRef = useRef(null);

  useEffect(() => {
    const currentSection = gallerySectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsGalleryIntersecting(true);
      },
      { threshold: 0.1 }
    );
    if (currentSection) observer.observe(currentSection);
    return () => { if (currentSection) observer.unobserve(currentSection); };
  }, []);

  // --- STATE & AUTO-SCROLL UNTUK CHAT AI ---
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: 'ai', text: 'Halo! Selamat datang di Crown & Co. Barbershop. Tempat perawatan rambut terbaik ala K-Beauty. Ada yang bisa dibantu?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isChatOpen]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMsg = { id: Date.now(), sender: 'user', text: inputMessage };
    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');

    setTimeout(() => {
      let botText = "Untuk booking jadwal atau pilih stylist andalan kamu, langsung klik tombol 'Booking Sekarang' di atas ya!";
      if (inputMessage.toLowerCase().includes('harga') || inputMessage.toLowerCase().includes('bayar')) {
        botText = "Tarif potong rambut mulai Rp 85.000, sedangkan untuk K-Treatment & Coloring mulai dari Rp 130.000. Cek menu 'Layanan' untuk detailnya.";
      } else if (inputMessage.toLowerCase().includes('promo') || inputMessage.toLowerCase().includes('diskon')) {
        botText = "Saat ini Crown & Co. sedang ada promo spesial! Gabung member dapat diskon 20% untuk first visit, plus voucher Rp 25.000 dan bundle serum gratis. Yuk daftar sekarang!";
      } else if (inputMessage.toLowerCase().includes('stylist') || inputMessage.toLowerCase().includes('cepster')) {
        botText = "Kami memiliki cepster profesional bersertifikasi dengan rating rata-rata 4.9/5! Rekomendasi terbaik: Kak Jun (Korean Cut Specialist) dan Kak Mina (Coloring Expert).";
      } else if (inputMessage.toLowerCase().includes('gallery') || inputMessage.toLowerCase().includes('portfolio')) {
        botText = "Lihat portofolio hasil potongan kami di section Gallery! Ada berbagai gaya rambut dari Korean Cut hingga Fade yang bisa kamu jadikan inspirasi.";
      }
      setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'ai', text: botText }]);
    }, 1000);
  };

  // --- STATE UNTUK FAQ ACCORDION ---
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // --- DATA FAQ ---
  const faqs = [
    {
      question: "Apakah harus booking terlebih dahulu?",
      answer: "Booking sangat dianjurkan untuk mengatur jadwal dan menghindari antrean panjang. Kamu bisa booking melalui tombol 'Booking Sekarang' di atas atau langsung hubungi WhatsApp kami. Walk-in tetap diterima tapi tergantung ketersediaan cepster."
    },
    {
      question: "Berapa harga potong rambut di Crown & Co.?",
      answer: "Tarif potong rambut mulai dari Rp 85.000 untuk style reguler, Rp 130.000 untuk K-Treatment, dan Rp 195.000 untuk Coloring. Untuk paket grooming dan perawatan lainnya, cek lengkapnya di section Layanan."
    },
    {
      question: "Apakah melayani customer wanita?",
      answer: "YES! Crown & Co. adalah barbershop unisex yang melayani pria dan wanita. Kami punya stylist khusus yang berpengalaman menangani berbagai gaya rambut wanita, dari layer cutting hingga coloring."
    },
    {
      question: "Produk yang digunakan merek apa?",
      answer: "Kami menggunakan produk premium K-Beauty seperti Chorok-Ip, Mise-En, dan Insam Root. Semua produk vegan, bebas amonia, dan aman untuk semua jenis rambut. Produk kami juga bisa dibeli langsung di section Produk."
    },
    {
      question: "Ada promo atau diskon khusus?",
      answer: "Ada! Member baru dapat diskon 20% untuk kunjungan pertama, voucher Rp 25.000, dan gratis hair serum. Juga ada promo weekend Buy 1 Get 1, referral program, dan birthday reward. Cek detailnya di section Promo!"
    },
    {
      question: "Berapa lama proses potong rambut?",
      answer: "Rata-rata proses potong rambut memakan waktu 45-60 menit tergantung gaya yang dipilih. Untuk coloring atau treatment khusus bisa memakan waktu 90-120 menit. Kami akan informasikan estimasi waktu saat booking."
    }
  ];

  // --- DATA & STATE UNTUK MINI SLIDER DI SECTION TENTANG ---
  const sliderImages = [
    { id: 1, title: "Korean Layered Cut", img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80" },
    { id: 2, title: "Dimensional Balayage", img: "https://images.unsplash.com/photo-1605497746444-ac961d194a2a?auto=format&fit=crop&w=800&q=80" },
    { id: 3, title: "Premium Hair Wash", img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80" },
    { id: 4, title: "Classic Taper Fade", img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80" }
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };

  // --- DATA GALLERY / PORTOFOLIO (SEMUA GAMBAR RAMBUT) ---
const galleryImages = [
  {
    id: 1,
    title: "French Crop",
    category: "Haircut",
    cepster: "Kak Jun",
    img: "https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&w=600",
    delay: "delay-100"
  },
  {
    id: 2,
    title: "Two Block Korean",
    category: "Haircut",
    cepster: "Kak Angga",
    img: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600",
    delay: "delay-200"
  },
  {
    id: 3,
    title: "Ash Grey Coloring",
    category: "Coloring",
    cepster: "Kak Mina",
    img: "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600",
    delay: "delay-300"
  },
  {
    id: 4,
    title: "Low Taper Fade",
    category: "Haircut",
    cepster: "Kak Devo",
    img: "https://images.pexels.com/photos/769739/pexels-photo-769739.jpeg?auto=compress&cs=tinysrgb&w=600",
    delay: "delay-400"
  },
  {
    id: 5,
    title: "Textured Quiff",
    category: "Haircut",
    cepster: "Kak Rizky",
    img: "https://images.pexels.com/photos/1380131/pexels-photo-1380131.jpeg?auto=compress&cs=tinysrgb&w=600",
    delay: "delay-500"
  },
  {
    id: 6,
    title: "Beard Styling",
    category: "Grooming",
    cepster: "Kak Braga",
    img: "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=600",
    delay: "delay-600"
  },
  {
    id: 7,
    title: "Brown Highlight",
    category: "Coloring",
    cepster: "Kak Rey",
    img: "https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg?auto=compress&cs=tinysrgb&w=600",
    delay: "delay-700"
  },
  {
    id: 8,
    title: "Modern Pompadour",
    category: "Haircut",
    cepster: "Kak Revan",
    img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
    delay: "delay-800"
  },
  {
    id: 9,
    title: "Undercut Design",
    category: "Haircut",
    cepster: "Kak Ayy",
    img: "https://images.pexels.com/photos/247300/pexels-photo-247300.jpeg?auto=compress&cs=tinysrgb&w=600",
    delay: "delay-100"
  },
  {
    id: 10,
    title: "Side Part Classic",
    category: "Haircut",
    cepster: "Kak Sarah",
    img: "https://images.pexels.com/photos/247297/pexels-photo-247297.jpeg?auto=compress&cs=tinysrgb&w=600",
    delay: "delay-200"
  }
];
  // --- DATA LAYANAN ---
  const services = [
    { id: 1, type: "haircut", category: "Layanan Potong Rambut", name: "Hongdae Trend Cut & Blow", desc: "Sentuhan potongan rambut personal ala tren barbershop Hongdae yang disesuaikan tekstur rambut dan anatomi wajah Anda. Termasuk premium hair wash & styling.", price: "Rp 85.000", time: "45 Min", delay: "delay-100" },
    { id: 2, type: "scalp", category: "Layanan Perawatan Kulit Kepala", name: "Jeju Volcanic Scalp Therapy", desc: "Sesi detoks mendalam membersihkan kulit kepala dari ketombe dan minyak berlebih menggunakan micro-scrub, disusul masker keratin pelindung akar.", price: "Rp 130.000", time: "60 Min", delay: "delay-300" },
    { id: 3, type: "coloring", category: "Layanan Pewarnaan Rambut", name: "K-Glass Dimensional Coloring", desc: "Transformasi warna rambut modern (Balayage atau Full-Tint) menggunakan produk vegan premium bebas amonia yang menjaga kilau pantulan cahaya mahkota Anda.", price: "Rp 195.000", time: "120 Min", delay: "delay-500" },
    { id: 4, type: "grooming", category: "Layanan Eksfoliasi & Grooming", name: "Seoul Refresh & Beard Grooming", desc: "Sesi eksfoliasi wajah kilat dengan cold compress, masker hidrasi instan, serta penataan/pencukuran bulu halus wajah yang higienis untuk tampilan bersih maksimal.", price: "Rp 60.000", time: "30 Min", delay: "delay-700" }
  ];

  // --- DATA PRODUK ---
  const products = [
    { 
      id: 1, 
      name: "Chorok-Ip Silk Styling Clay", 
      type: "MATTE HOLD", 
      price: "Rp 120.000", 
      oldPrice: null, 
      rating: "4.9", 
      reviews: "234", 
      sold: "1250+", 
      tag: "BEST SELLER", 
      tagColor: "bg-amber-500 text-black", 
      img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80",
      delay: "delay-100"
    },
    { 
      id: 2, 
      name: "Mise-En Glow Water Serum", 
      type: "GLOSSY AMPOULE", 
      price: "Rp 100.000", 
      oldPrice: null, 
      rating: "4.7", 
      reviews: "189", 
      sold: "980+", 
      tag: "NEW ARRIVAL", 
      tagColor: "bg-emerald-500 text-white", 
      img: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?auto=format&fit=crop&w=800&q=80",
      delay: "delay-300"
    },
    { 
      id: 3, 
      name: "Insam Root Anti-Thinning Tonic", 
      type: "SCALP TREATMENT", 
      price: "Rp 72.250", 
      oldPrice: "Rp 85.000", 
      rating: "4.8", 
      reviews: "156", 
      sold: "720+", 
      tag: "DISKON 15%", 
      tagColor: "bg-rose-500 text-white", 
      img: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80",
      delay: "delay-500"
    }
  ];

  // --- DATA RATING CEPSTER ---
  const cepsters = [
    {
      id: 1,
      name: "Kak Jun",
      role: "KOREAN CUT SPECIALIST",
      rating: 4.9,
      totalReviews: 342,
      experience: "5+ tahun",
      specialty: "Korean Layered Cut, Taper Fade",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      delay: "delay-100"
    },
    {
      id: 2,
      name: "Kak Mina",
      role: "COLORING EXPERT",
      rating: 4.8,
      totalReviews: 278,
      experience: "4+ tahun",
      specialty: "Balayage, Highlight, Hair Painting",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
      delay: "delay-300"
    },
    {
      id: 3,
      name: "Kak Rizky",
      role: "SCALP & HAIR SPECIALIST",
      rating: 4.9,
      totalReviews: 198,
      experience: "6+ tahun",
      specialty: "Scalp Treatment, Hair Therapy",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      delay: "delay-500"
    },
    {
      id: 4,
      name: "Kak Sarah",
      role: "BARBER & GROOMING",
      rating: 4.7,
      totalReviews: 156,
      experience: "3+ tahun",
      specialty: "Beard Grooming, Classic Cut",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286fd2?auto=format&fit=crop&w=200&q=80",
      delay: "delay-700"
    }
  ];

  // --- STATE: FILTER KATEGORI LAYANAN ---
  const [selectedCategory, setSelectedCategory] = useState('all');
  // --- STATE: FILTER GALLERY ---
  const [galleryFilter, setGalleryFilter] = useState('all');

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(srv => srv.type === selectedCategory);

  const filteredGallery = galleryFilter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category.toLowerCase() === galleryFilter.toLowerCase());

  return (
    <div className="bg-neutral-50 min-h-screen text-neutral-800 font-sans scroll-smooth relative overflow-x-hidden">
      
      {/* --- FLOATING NAVBAR --- */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center p-0 md:p-4 transition-all duration-500 ease-in-out pointer-events-none">
        <nav className={`w-full flex items-center justify-between transition-all duration-500 ease-in-out pointer-events-auto ${
          isScrolled 
            ? 'bg-white text-neutral-800 shadow-xl border border-neutral-200/60 max-w-5xl md:rounded-full px-6 md:px-8 py-3.5' 
            : 'bg-transparent text-white max-w-full px-6 md:px-12 py-6'
        }`}>
          <div className="flex items-center gap-3 select-none">
            <div className={`p-2.5 rounded-xl flex items-center justify-center font-bold shadow-sm transition-colors duration-300 ${
              isScrolled ? 'bg-neutral-950 text-amber-400' : 'bg-white/10 text-white backdrop-blur-sm'
            }`}>
              <IoCutOutline className="text-xl transform -rotate-45" />
            </div>
            <span className={`text-xl font-black tracking-tight transition-colors duration-300 ${
              isScrolled ? 'text-neutral-950' : 'text-white'
            }`}>
              Crown<span className="text-amber-500">&Co.</span>
            </span>
          </div>
          
          <div className={`hidden md:flex items-center gap-6 text-xs font-black tracking-widest transition-colors duration-300 ${
            isScrolled ? 'text-neutral-600' : 'text-neutral-200'
          }`}>
            <a href="#tentang" className="hover:text-amber-500 transition-colors duration-200">TENTANG</a>
            <a href="#layanan" className="hover:text-amber-500 transition-colors duration-200">LAYANAN</a>
            <a href="#produk" className="hover:text-amber-500 transition-colors duration-200">PRODUK</a>
            <a href="#promo" className="hover:text-amber-500 transition-colors duration-200">PROMO</a>
            <a href="#rating" className="hover:text-amber-500 transition-colors duration-200">RATING</a>
            <a href="#gallery" className="hover:text-amber-500 transition-colors duration-200">GALLERY</a>
            <a href="#faq" className="hover:text-amber-500 transition-colors duration-200">FAQ</a>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigate('/login')}
              className={`text-[10px] font-bold px-3 py-1.5 rounded-full transition-all ${
                isScrolled 
                  ? 'text-neutral-600 hover:text-neutral-950' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Login
            </button>
            <span className={`text-[10px] ${isScrolled ? 'text-neutral-300' : 'text-white/30'}`}>|</span>
            <button 
              onClick={() => navigate('/member/login')}
              className={`text-[10px] font-bold px-3 py-1.5 rounded-full transition-all ${
                isScrolled 
                  ? 'text-amber-500 hover:text-amber-600' 
                  : 'text-amber-400 hover:text-amber-300'
              }`}
            >
              Member
            </button>
          </div>
        </nav>
      </div>

      {/* --- HERO SECTION --- */}
      <header className="relative w-full h-[90vh] md:h-screen bg-black text-white flex items-center overflow-hidden z-10">
        <div className={`absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-40 filter grayscale transition-transform duration-[2000ms] ease-out ${
          heroAnimate ? 'scale-100' : 'scale-110'
        }`}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-50 via-transparent to-black/60 z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-12 md:gap-6">
          <div className="flex-1 space-y-7 text-left">
            <div className={`inline-block bg-neutral-900/80 border border-neutral-800 text-amber-500 text-[10px] font-black tracking-widest px-4 py-2 rounded-full uppercase backdrop-blur-sm transition-all duration-1000 ease-out ${
              heroAnimate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              ✨ Premium Unisex Barbershop
            </div>
            <h1 className={`text-5xl md:text-7xl font-black tracking-tight leading-[1.1] text-white transition-all duration-1000 ease-out delay-100 ${
              heroAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Gaya Maksimal.<br /><span className="text-amber-500 italic font-serif font-normal block mt-2">Untuk Semua.</span>
            </h1>
            <p className={`text-neutral-300 text-sm md:text-base max-w-xl leading-relaxed transition-all duration-1000 ease-out delay-200 ${
              heroAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Crown & Co. hadir sebagai ruang perawatan rambut modern wanita dan pria. Ditangani oleh <span className="text-amber-400 font-semibold">cepster handal</span> untuk memancarkan pesona rasa percaya diri terbaik Anda.
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row gap-6 items-start md:items-center justify-start md:justify-end md:w-auto transition-all duration-1000 ease-out delay-300 ${
            heroAnimate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <a 
              href="#tentang" 
              className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black font-black px-8 py-4 rounded-xl transition-all text-xs uppercase tracking-widest transform hover:-translate-y-1 active:translate-y-0 duration-300 whitespace-nowrap shadow-lg hover:shadow-amber-500/20"
            >
              Booking Sekarang
            </a>
            <a 
              href="#layanan" 
              className="text-white hover:text-amber-400 font-black text-xs uppercase tracking-widest py-2 relative group/btn whitespace-nowrap duration-300"
            >
              Lihat Layanan
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-500 group-hover/btn:w-full transition-all duration-300 ease-in-out"></span>
            </a>
          </div>
        </div>
      </header>

      {/* --- TENTANG SECTION --- */}
      <section id="tentang" ref={sectionRef} className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-neutral-50 transition-all duration-700 select-none relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          <div className={`lg:col-span-5 flex flex-col justify-between h-full pt-2 md:pt-4 transition-all duration-1000 ease-out ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="space-y-6">
              <div className="space-y-4 relative">
                <div className="absolute -left-4 top-1 bottom-1 w-[3px] bg-amber-500 rounded-full"></div>
                <span className="text-[10px] font-black tracking-widest text-neutral-400 uppercase block pl-2">📍 FILOSOFI CROWN & CO.</span>
                <h2 className="text-4xl md:text-5xl font-black text-neutral-950 tracking-tight leading-[1.1]">
                  Seni Menata &<br />Merayakan <span className="text-amber-500">Mahkota</span> Anda.
                </h2>
              </div>
              <p className="text-neutral-500 text-xs md:text-sm leading-relaxed font-medium max-w-md text-left">
                Lahir di tahun 2026, Crown & Co. merancang sebuah ruang inklusif tempat keahlian gaya rambut berpadu dengan kenyamanan yang personal.
              </p>
            </div>

            <div className={`pt-8 w-full transition-all duration-[1200ms] ease-out delay-100 ${isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-95 origin-left'}`}>
              <div className="bg-white border border-neutral-200/80 rounded-[24px] p-4 shadow-sm space-y-4 relative overflow-hidden group/slider">
                <div className="relative h-56 md:h-60 rounded-xl overflow-hidden bg-neutral-100">
                  <img 
                    src={sliderImages[currentSlide].img} 
                    alt={sliderImages[currentSlide].title} 
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <span className="absolute bottom-4 left-4 text-white text-[11px] font-black tracking-wider uppercase">
                    ✨ Lookbook: {sliderImages[currentSlide].title}
                  </span>
                  <div className="absolute top-1/2 -translate-y-1/2 left-3 right-3 flex justify-between opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
                    <button onClick={prevSlide} className="w-8 h-8 rounded-lg bg-black/70 hover:bg-amber-500 text-white hover:text-black flex items-center justify-center transition-colors shadow-md backdrop-blur-sm">
                      <IoChevronBackOutline className="text-sm" />
                    </button>
                    <button onClick={nextSlide} className="w-8 h-8 rounded-lg bg-black/70 hover:bg-amber-500 text-white hover:text-black flex items-center justify-center transition-colors shadow-md backdrop-blur-sm">
                      <IoChevronForwardOutline className="text-sm" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between px-0.5 pt-1">
                  <span className="text-[10px] font-black text-neutral-400 tracking-wider uppercase">Our Signature Work</span>
                  <div className="flex gap-1.5">
                    {sliderImages.map((_, idx) => (
                      <button key={idx} onClick={() => setCurrentSlide(idx)} className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-5 bg-amber-500' : 'w-1.5 bg-neutral-200'}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className={`sm:col-span-2 relative rounded-[24px] overflow-hidden shadow-sm border border-neutral-200/50 min-h-[220px] group transition-all duration-1000 ease-out ${heroAnimate ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
              <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80" alt="Crown and Co Studio Interior" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm py-2 px-3 rounded-xl flex items-center gap-2 shadow-sm border border-neutral-100">
                <IoRibbonOutline className="text-amber-500 text-sm animate-pulse" />
                <span className="font-black text-neutral-950 text-[10px] tracking-tight">Est. 2026 — Premium Quality</span>
              </div>
            </div>
            <div className={`bg-white border border-neutral-200/80 p-4 rounded-[20px] flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-amber-500/30 transition-all duration-300 group/item ${heroAnimate ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
              <div className="text-amber-500 bg-neutral-50 group-hover/item:bg-amber-500 group-hover/item:text-black w-9 h-9 rounded-lg border border-neutral-100 flex items-center justify-center shadow-inner transition-colors duration-300">
                <IoShieldCheckmarkOutline className="text-lg" />
              </div>
              <div className="mt-4 text-left">
                <h4 className="font-black text-xs text-neutral-900 tracking-tight mb-0.5">Higienis & Steril</h4>
                <p className="text-neutral-400 text-[10px] leading-relaxed font-medium">Setiap alat dipastikan melalui proses sterilisasi penuh demi keamanan kenyamanan Anda.</p>
              </div>
            </div>
            <div className={`bg-white border border-neutral-200/80 p-4 rounded-[20px] flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-amber-500/30 transition-all duration-300 group/item ${heroAnimate ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
              <div className="text-amber-500 bg-neutral-50 group-hover/item:bg-amber-500 group-hover/item:text-black w-9 h-9 rounded-lg border border-neutral-100 flex items-center justify-center shadow-inner transition-colors duration-300">
                <IoRibbonOutline className="text-lg" />
              </div>
              <div className="mt-4 text-left">
                <h4 className="font-black text-xs text-neutral-900 tracking-tight mb-0.5">Cepster Bersertifikasi</h4>
                <p className="text-neutral-400 text-[10px] leading-relaxed font-medium">Gaya rambut ditangani langsung oleh profesional yang memahami betul anatomi wajah.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION LAYANAN UTAMA (DENGAN TOMBOL BOOKING) --- */}
      <section id="layanan" ref={layananSectionRef} className="py-24 bg-neutral-100/60 select-none overflow-hidden relative border-t border-b border-neutral-200/40">
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-15 filter grayscale mix-blend-luminosity pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-100/40 via-transparent to-neutral-100/40 z-0 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto space-y-6 relative z-10 px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-2">
            <div className="lg:col-span-6 flex flex-wrap items-center gap-2 md:gap-2.5 pb-2 lg:pb-0">
              <button onClick={() => setSelectedCategory('all')} className={`px-4 py-2 rounded-xl text-[10px] font-black tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 border ${selectedCategory === 'all' ? 'bg-neutral-950 text-amber-400 border-neutral-950 shadow-md' : 'bg-white text-neutral-500 border-neutral-200 hover:border-neutral-300'}`}>
                <IoGridOutline /> Semua Menu
              </button>
              <button onClick={() => setSelectedCategory('haircut')} className={`px-4 py-2 rounded-xl text-[10px] font-black tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 border ${selectedCategory === 'haircut' ? 'bg-neutral-950 text-amber-400 border-neutral-950 shadow-md' : 'bg-white text-neutral-500 border-neutral-200 hover:border-neutral-300'}`}>
                <IoCutOutline /> Haircut
              </button>
              <button onClick={() => setSelectedCategory('scalp')} className={`px-4 py-2 rounded-xl text-[10px] font-black tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 border ${selectedCategory === 'scalp' ? 'bg-neutral-950 text-amber-400 border-neutral-950 shadow-md' : 'bg-white text-neutral-500 border-neutral-200 hover:border-neutral-300'}`}>
                <IoSparklesOutline /> Scalp Care
              </button>
              <button onClick={() => setSelectedCategory('coloring')} className={`px-4 py-2 rounded-xl text-[10px] font-black tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 border ${selectedCategory === 'coloring' ? 'bg-neutral-950 text-amber-400 border-neutral-950 shadow-md' : 'bg-white text-neutral-500 border-neutral-200 hover:border-neutral-300'}`}>
                <IoColorPaletteOutline /> Coloring
              </button>
              <button onClick={() => setSelectedCategory('grooming')} className={`px-4 py-2 rounded-xl text-[10px] font-black tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 border ${selectedCategory === 'grooming' ? 'bg-neutral-950 text-amber-400 border-neutral-950 shadow-md' : 'bg-white text-neutral-500 border-neutral-200 hover:border-neutral-300'}`}>
                <IoHappyOutline /> Grooming
              </button>
            </div>
            <div className="lg:col-span-6 text-left lg:text-right space-y-2">
              <span className="inline-block text-[10px] font-black text-amber-400 bg-neutral-950 px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">+ Exclusive Menu Experience</span>
              <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight uppercase leading-none">Katalog Perawatan <br />Studio</h2>
            </div>
          </div>
          <div className="flex justify-end pb-4">
            <div className="text-left lg:text-right lg:max-w-md">
              <p className="text-neutral-500 text-xs md:text-sm leading-relaxed font-medium">Dari potongan <span className="text-neutral-950 font-bold">signature look</span> klasik hingga transformasi warna modern.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {filteredServices.map((srv) => (
              <div 
                key={srv.id} 
                className={`p-6 rounded-[24px] border flex flex-col justify-between text-left group/card relative overflow-hidden cursor-pointer 
                  bg-white text-neutral-800 border-neutral-200/80 
                  hover:bg-neutral-950 hover:text-white hover:border-neutral-900
                  hover:-translate-y-3 hover:shadow-2xl hover:shadow-black/30
                  transition-all duration-[800ms] ease-out transform
                  ${isLayananIntersecting 
                    ? 'opacity-100 translate-x-0 scale-100' 
                    : 'opacity-0 translate-x-16 scale-95'
                  } 
                  ${srv.delay}
                `}
              >
                <div className="space-y-3.5 relative z-10">
                  <div className="flex justify-between items-center">
                    <div className="p-2.5 rounded-xl border bg-neutral-50 text-amber-500 border-neutral-100 group-hover/card:bg-amber-500 group-hover/card:text-black group-hover/card:border-amber-400 transition-all duration-500">
                      {srv.type === 'haircut' && <IoCutOutline className="text-lg" />}
                      {srv.type === 'scalp' && <IoSparklesOutline className="text-lg" />}
                      {srv.type === 'coloring' && <IoColorPaletteOutline className="text-lg" />}
                      {srv.type === 'grooming' && <IoHappyOutline className="text-lg" />}
                    </div>
                  </div>
                  <div className="space-y-0.5 text-left">
                    <span className="text-[9px] font-black uppercase tracking-wider block text-neutral-400 group-hover/card:text-amber-400 transition-colors duration-500">
                      {srv.category}
                    </span>
                    <h3 className="font-black text-sm tracking-tight leading-tight">| {srv.name}</h3>
                  </div>
                  <p className="text-[11px] text-left leading-relaxed text-neutral-500 group-hover/card:text-neutral-300 transition-colors duration-500">
                    {srv.desc}
                  </p>
                </div>
                <div className="pt-4 border-t mt-6 flex justify-between items-center font-black border-neutral-200/50 group-hover/card:border-neutral-800 transition-colors duration-500">
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-[10px] text-neutral-400 group-hover/card:text-neutral-300">⏱ {srv.time}</span>
                    <span className="text-xs text-black group-hover/card:text-amber-400 transition-colors duration-500">
                      {srv.price}
                    </span>
                  </div>
                  <button 
                    onClick={() => navigate('/login')}
                    className="bg-neutral-950 hover:bg-amber-500 hover:text-black text-white font-black text-[8px] uppercase tracking-wider px-3 py-2 rounded-lg transition-all duration-300 flex items-center gap-1 shadow-md"
                  >
                    <span>Booking</span>
                    <IoArrowForwardOutline className="text-[8px] group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRODUK SECTION --- */}
      <section id="produk" ref={produkSectionRef} className="py-16 px-6 md:px-12 bg-white border-b border-neutral-100 select-none overflow-hidden relative z-10">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-black text-amber-500 bg-amber-500/10 px-3 py-1.5 rounded-full uppercase tracking-widest border border-amber-500/20">🛍️ Crown & Co. × K-Beauty</span>
            <h2 className="text-3xl md:text-4xl font-black text-neutral-950 tracking-tight uppercase">Gaya Sehari-hari<br />Mulai dari <span className="text-amber-500">Mahkota</span> Anda.</h2>
            <p className="text-neutral-500 text-[11px] leading-relaxed max-w-lg mx-auto">Rawat mahkota Anda dengan koleksi eksklusif Crown & Co. — produk perawatan rambut premium<br />yang kami gunakan langsung di studio, kini tersedia untuk dibawa pulang.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {products.map((prod) => (
              <div key={prod.id} className={`bg-neutral-50 rounded-2xl p-4 border border-neutral-200/70 shadow-sm flex flex-col justify-between group/prod transition-all duration-500 ease-out transform cursor-pointer hover:-translate-y-2 hover:shadow-xl hover:border-amber-500/30 hover:bg-white ${isProdukIntersecting ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-12 scale-95'} ${prod.delay}`}>
                <div>
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-neutral-100 mb-3">
                    <img src={prod.img} alt={prod.name} className="w-full h-full object-cover grayscale group-hover/prod:grayscale-0 group-hover/prod:scale-110 transition-all duration-500 ease-out" onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80"; }} />
                    <span className={`absolute top-2 left-2 ${prod.tagColor} font-black text-[8px] tracking-wider px-2 py-0.5 rounded-md uppercase shadow-sm transition-all duration-300 group-hover/prod:scale-105`}>{prod.tag}</span>
                  </div>
                  <div>
                    <span className="text-[8px] font-black tracking-widest text-neutral-400 uppercase group-hover/prod:text-amber-500 transition-colors duration-300">{prod.type}</span>
                    <h3 className="font-black text-neutral-950 text-sm tracking-tight mt-0.5 group-hover/prod:text-amber-600 transition-colors duration-300">{prod.name}</h3>
                  </div>
                  <div className="flex items-center gap-1 mt-2">
                    <IoStar className="text-amber-500 text-[10px] group-hover/prod:scale-110 transition-transform duration-300" />
                    <span className="text-[9px] font-bold text-neutral-700">{prod.rating}</span>
                    <span className="text-[9px] text-neutral-400">({prod.reviews})</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-neutral-200/60 mt-3 group-hover/prod:border-amber-500/20 transition-colors duration-300">
                  <span className="font-black text-neutral-950 text-sm group-hover/prod:text-amber-600 transition-colors duration-300">{prod.price}</span>
                  <button className="bg-neutral-950 hover:bg-amber-500 hover:text-black text-white font-black text-[9px] uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all duration-300 active:scale-95 flex items-center gap-1 group-hover/prod:shadow-md">
                    Beli <IoArrowForwardOutline className="text-[10px] group-hover/prod:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROMO SECTION --- */}
      <section id="promo" ref={promoSectionRef} className="py-24 px-6 md:px-12 bg-neutral-950 text-white relative select-none overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 filter grayscale"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/90 via-neutral-950/80 to-neutral-950/90"></div>
        </div>
        
        <div className="absolute inset-0 opacity-10 z-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center space-y-4 mb-12 transition-all duration-700 ease-out ${isPromoIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-4 py-2 rounded-full">
              <IoSparklesOutline className="text-amber-400 text-xs" />
              <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest">PROMO EKSKLUSIF</span>
              <IoSparklesOutline className="text-amber-400 text-xs" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Klaim Voucher <br />
              <span className="text-amber-400">Spesial Anda!</span>
            </h2>
            <p className="text-neutral-400 text-xs md:text-sm max-w-lg mx-auto">
              Daftar sebagai member Crown & Co. sekarang dan nikmati diskon kunjungan pertama 
              <br />serta potongan harga produk eksklusif.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-12">
            <div className={`group relative bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-5 border border-neutral-700 transition-all duration-500 ease-out cursor-pointer overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/20 hover:border-amber-500/50 ${isPromoIntersecting ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'} delay-100`}>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <IoGiftOutline className="text-xl" />
              </div>
              <div className="absolute top-3 right-3">
                <div className="bg-amber-500 text-black text-[9px] font-black px-2 py-0.5 rounded-full shadow-lg group-hover:scale-105 transition-transform duration-300">20% OFF</div>
              </div>
              <h3 className="font-black text-sm text-white mb-0.5 group-hover:text-amber-400 transition-colors duration-300">NEW MEMBER</h3>
              <p className="text-neutral-300 text-[10px] font-bold mb-0.5">Diskon 20% Crown&Co Pertama</p>
              <p className="text-neutral-500 text-[9px] leading-relaxed mb-2">Berlaku untuk transaksi pertama</p>
              <div className="bg-neutral-900/80 rounded-lg p-2 mt-1 border border-neutral-800">
                <p className="text-[8px] text-neutral-500 uppercase tracking-wider">KODE PROMO</p>
                <p className="text-amber-400 text-[10px] font-black tracking-wider">WELCOME20</p>
              </div>
              <div className="mt-3 flex items-center gap-1 text-amber-400 text-[9px] font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                <span>Daftar & Klaim</span>
                <IoArrowForwardOutline className="text-[9px]" />
              </div>
            </div>

            <div className={`group relative bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-5 border border-neutral-700 transition-all duration-500 ease-out cursor-pointer overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/20 hover:border-amber-500/50 ${isPromoIntersecting ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'} delay-300`}>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <IoCalendarOutline className="text-xl" />
              </div>
              <div className="absolute top-3 right-3">
                <div className="bg-amber-500 text-black text-[9px] font-black px-2 py-0.5 rounded-full shadow-lg group-hover:scale-105 transition-transform duration-300">FREE</div>
              </div>
              <h3 className="font-black text-sm text-white mb-0.5 group-hover:text-amber-400 transition-colors duration-300">BIRTHDAY REWARD</h3>
              <p className="text-neutral-300 text-[10px] font-bold mb-0.5">Free Hair Mask + Treatment</p>
              <p className="text-neutral-500 text-[9px] leading-relaxed mb-2">Hadiah spesial di bulan ulang tahun Anda</p>
              <div className="bg-neutral-900/80 rounded-lg p-2 mt-1 border border-neutral-800">
                <p className="text-[8px] text-neutral-500 uppercase tracking-wider">SYARAT & KETENTUAN</p>
                <p className="text-amber-400 text-[8px] font-medium">Tunjukkan KTP saat check-in</p>
              </div>
              <div className="mt-3 flex items-center gap-1 text-amber-400 text-[9px] font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                <span>Klaim Sekarang</span>
                <IoArrowForwardOutline className="text-[9px]" />
              </div>
            </div>

            <div className={`group relative bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-5 border border-neutral-700 transition-all duration-500 ease-out cursor-pointer overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/20 hover:border-amber-500/50 ${isPromoIntersecting ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'} delay-500`}>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <IoPeopleOutline className="text-xl" />
              </div>
              <div className="absolute top-3 right-3">
                <div className="bg-amber-500 text-black text-[9px] font-black px-2 py-0.5 rounded-full shadow-lg group-hover:scale-105 transition-transform duration-300">Rp 50K</div>
              </div>
              <h3 className="font-black text-sm text-white mb-0.5 group-hover:text-amber-400 transition-colors duration-300">REFERRAL PROGRAM</h3>
              <p className="text-neutral-300 text-[10px] font-bold mb-0.5">Ajak Teman, Dapat Potongan!</p>
              <p className="text-neutral-500 text-[9px] leading-relaxed mb-2">Dapatkan Rp 50.000 untuk Anda berdua</p>
              <div className="bg-neutral-900/80 rounded-lg p-2 mt-1 border border-neutral-800">
                <p className="text-[8px] text-neutral-500 uppercase tracking-wider">KODE REFERRAL</p>
                <p className="text-amber-400 text-[10px] font-black tracking-wider">CROWN&FRIEND</p>
              </div>
              <div className="mt-3 flex items-center gap-1 text-amber-400 text-[9px] font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                <span>Bagikan Kode</span>
                <IoArrowForwardOutline className="text-[9px]" />
              </div>
            </div>

            <div className={`group relative bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-5 border border-neutral-700 transition-all duration-500 ease-out cursor-pointer overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/20 hover:border-amber-500/50 ${isPromoIntersecting ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'} delay-700`}>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <IoWalletOutline className="text-xl" />
              </div>
              <div className="absolute top-3 right-3">
                <div className="bg-amber-500 text-black text-[9px] font-black px-2 py-0.5 rounded-full shadow-lg group-hover:scale-105 transition-transform duration-300">B1G1</div>
              </div>
              <h3 className="font-black text-sm text-white mb-0.5 group-hover:text-amber-400 transition-colors duration-300">WEEKEND SPECIAL</h3>
              <p className="text-neutral-300 text-[10px] font-bold mb-0.5">Buy 1 Get 1 Free</p>
              <p className="text-neutral-500 text-[9px] leading-relaxed mb-2">Setiap K-Treatment di weekend, gratis potong rambut</p>
              <div className="bg-neutral-900/80 rounded-lg p-2 mt-1 border border-neutral-800">
                <p className="text-[8px] text-neutral-500 uppercase tracking-wider">PERIODE</p>
                <p className="text-amber-400 text-[8px] font-medium">Sabtu & Minggu</p>
              </div>
              <div className="mt-3 flex items-center gap-1 text-amber-400 text-[9px] font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                <span>Booking Sekarang</span>
                <IoArrowForwardOutline className="text-[9px]" />
              </div>
            </div>
          </div>

          <div className={`relative bg-amber-500/10 rounded-2xl p-6 border border-amber-500/20 backdrop-blur-sm overflow-hidden transition-all duration-700 delay-300 ${isPromoIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full blur-3xl opacity-10"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="space-y-1">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <IoTicketOutline className="text-amber-400 text-base" />
                  <span className="text-[9px] font-black text-amber-400 uppercase tracking-widest">SPECIAL OFFER</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white">Daftar Member Sekarang!</h3>
                <p className="text-neutral-400 text-[11px] max-w-md">Dapatkan diskon 20% untuk first visit + voucher Rp 25.000 + gratis hair serum.</p>
              </div>
              <button 
                onClick={() => navigate('/member/register')}
                className="group bg-amber-500 hover:bg-amber-400 text-black font-black text-[10px] uppercase tracking-widest px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/20 flex items-center gap-2 hover:gap-3"
              >
                <span>Daftar Member</span>
                <IoArrowForwardOutline className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          <div className={`mt-6 text-center transition-all duration-700 delay-500 ${isPromoIntersecting ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-neutral-600 text-[8px] tracking-widest uppercase">✨ Promo berlaku hingga 31 Desember 2026 ✨</p>
          </div>
        </div>
      </section>

      {/* --- RATING CEPSTER SECTION (DENGAN BOOKING OTOMATIS) --- */}
      <section id="rating" ref={ratingSectionRef} className="py-20 px-6 md:px-12 bg-white select-none overflow-hidden relative z-10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15 filter grayscale"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white/60"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center space-y-3 mb-12 transition-all duration-700 ease-out ${isRatingIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full">
              <IoStar className="text-amber-400 text-xs" />
              <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Rating & Review</span>
              <IoStar className="text-amber-400 text-xs" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-neutral-950 tracking-tight">
              Yang Bilang <span className="text-amber-500">"Wow"</span> Soal Cepster Kami
            </h2>
            <p className="text-neutral-500 text-xs max-w-md mx-auto">
              Lebih dari 1000+ pelanggan puas dengan pelayanan profesional dari para cepster handal Crown & Co.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cepsters.map((cepster) => (
              <div 
                key={cepster.id}
                className={`group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-neutral-200/80 shadow-sm 
                  transition-all duration-500 ease-out transform cursor-pointer
                  hover:-translate-y-2 hover:shadow-xl hover:border-amber-500/30 hover:bg-white/95
                  ${isRatingIntersecting ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}
                  ${cepster.delay}`}
              >
                <div className="relative mb-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto border-2 border-amber-500/30 group-hover:border-amber-500 transition-all duration-300">
                    <img 
                      src={cepster.avatar} 
                      alt={cepster.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-[8px] font-black px-2 py-0.5 rounded-full whitespace-nowrap">
                    ⭐ {cepster.rating}
                  </div>
                </div>

                <div className="text-center mb-3">
                  <h3 className="font-black text-neutral-950 text-base group-hover:text-amber-600 transition-colors duration-300">
                    {cepster.name}
                  </h3>
                  <p className="text-[9px] font-bold text-amber-500 uppercase tracking-wider mt-0.5">
                    {cepster.role}
                  </p>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <IoStar 
                        key={i} 
                        className={`text-[10px] ${i < Math.floor(cepster.rating) ? 'text-amber-400' : 'text-neutral-300'}`}
                      />
                    ))}
                    <span className="text-[9px] text-neutral-500 ml-1">({cepster.totalReviews})</span>
                  </div>
                </div>

                <div className="border-t border-neutral-200/60 pt-3 mt-2">
                  <div className="flex justify-between text-[9px] mb-1">
                    <span className="text-neutral-400">Pengalaman</span>
                    <span className="text-neutral-700 font-medium">{cepster.experience}</span>
                  </div>
                  <div className="flex justify-between text-[9px]">
                    <span className="text-neutral-400">Spesialisasi</span>
                    <span className="text-neutral-700 font-medium text-right">{cepster.specialty}</span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-center gap-1 text-[8px] text-emerald-600">
                  <IoCheckmarkCircle className="text-[10px]" />
                  <span>Bersertifikasi Profesional</span>
                </div>

                {/* BOOKING OTOMATIS VIA WHATSAPP */}
                <div className="mt-4 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-0 translate-y-2">
                  <a
                    href={`https://wa.me/6281234567890?text=Halo%20Crown%26Co.%2C%20saya%20mau%20booking%20dengan%20${encodeURIComponent(cepster.name)}%20(${encodeURIComponent(cepster.role)})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-neutral-950 hover:bg-amber-500 hover:text-black text-white font-black text-[8px] uppercase tracking-wider px-4 py-1.5 rounded-lg transition-all duration-300 flex items-center gap-1"
                  >
                    <span>Booking Cepster</span>
                    <IoArrowForwardOutline className="text-[8px]" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-12 bg-gradient-to-r from-amber-50/80 to-neutral-50/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50 text-center transition-all duration-700 delay-300 ${isRatingIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-3xl font-black text-amber-500">4.8</div>
                  <div className="text-[10px] text-neutral-500">Rating Rata-rata</div>
                </div>
                <div className="border-l border-neutral-200 pl-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <IoStar key={i} className="text-amber-400 text-sm" />
                    ))}
                  </div>
                  <div className="text-[10px] text-neutral-500">Dari 974+ ulasan pelanggan</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-neutral-500">
                <IoThumbsUp className="text-amber-500" />
                <span>98% pelanggan merekomendasikan Crown & Co.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- GALLERY / PORTOFOLIO SECTION --- */}
      <section id="gallery" ref={gallerySectionRef} className="py-20 px-6 md:px-12 bg-neutral-100 select-none overflow-hidden relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 filter grayscale"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-100/80 via-neutral-100/90 to-neutral-100/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center space-y-3 mb-10 transition-all duration-700 ease-out ${isGalleryIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full">
              <IoImagesOutline className="text-amber-400 text-xs" />
              <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Portofolio</span>
              <IoImagesOutline className="text-amber-400 text-xs" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-neutral-950 tracking-tight">
              Hasil <span className="text-amber-500">Karya</span> Cepster Kami
            </h2>
            <p className="text-neutral-500 text-xs max-w-md mx-auto">
              Inspirasi gaya rambut terbaik dari para profesional Crown & Co.
            </p>
          </div>

          <div className={`flex flex-wrap justify-center gap-2 mb-8 transition-all duration-700 delay-100 ${isGalleryIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button onClick={() => setGalleryFilter('all')} className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-wider transition-all duration-300 ${galleryFilter === 'all' ? 'bg-neutral-950 text-amber-400 shadow-md' : 'bg-white text-neutral-500 border border-neutral-200 hover:border-amber-500/50 hover:text-amber-500'}`}>Semua</button>
            <button onClick={() => setGalleryFilter('haircut')} className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-wider transition-all duration-300 ${galleryFilter === 'haircut' ? 'bg-neutral-950 text-amber-400 shadow-md' : 'bg-white text-neutral-500 border border-neutral-200 hover:border-amber-500/50 hover:text-amber-500'}`}>Haircut</button>
            <button onClick={() => setGalleryFilter('coloring')} className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-wider transition-all duration-300 ${galleryFilter === 'coloring' ? 'bg-neutral-950 text-amber-400 shadow-md' : 'bg-white text-neutral-500 border border-neutral-200 hover:border-amber-500/50 hover:text-amber-500'}`}>Coloring</button>
            <button onClick={() => setGalleryFilter('treatment')} className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-wider transition-all duration-300 ${galleryFilter === 'treatment' ? 'bg-neutral-950 text-amber-400 shadow-md' : 'bg-white text-neutral-500 border border-neutral-200 hover:border-amber-500/50 hover:text-amber-500'}`}>Treatment</button>
            <button onClick={() => setGalleryFilter('grooming')} className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-wider transition-all duration-300 ${galleryFilter === 'grooming' ? 'bg-neutral-950 text-amber-400 shadow-md' : 'bg-white text-neutral-500 border border-neutral-200 hover:border-amber-500/50 hover:text-amber-500'}`}>Grooming</button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
            {filteredGallery.map((item) => (
              <div key={item.id} className={`group relative overflow-hidden rounded-xl bg-neutral-200 aspect-square cursor-pointer transition-all duration-500 ease-out transform hover:-translate-y-2 hover:shadow-xl ${isGalleryIntersecting ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'} ${item.delay}`}>
                <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-out group-hover:scale-110" onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&q=80"; }} />
                <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm rounded-full px-2 py-0.5">
                  <span className="text-[7px] md:text-[8px] font-black text-amber-400 uppercase">{item.category}</span>
                </div>
                <div className="absolute top-2 right-2 bg-amber-500/90 backdrop-blur-sm rounded-full px-2 py-0.5">
                  <span className="text-[7px] md:text-[8px] font-black text-black">{item.cepster}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                    <h3 className="font-black text-xs md:text-sm mb-0.5 line-clamp-1">{item.title}</h3>
                    <button onClick={() => navigate('/login')} className="mt-2 bg-amber-500 hover:bg-amber-400 text-black font-black text-[8px] px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all duration-300 group/btn w-full justify-center">
                      <span>Booking Style</span>
                      <IoArrowForwardOutline className="text-[8px] group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredGallery.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-500 text-sm">Tidak ada hasil untuk kategori ini.</p>
            </div>
          )}

          <div className={`text-center mt-10 transition-all duration-700 delay-500 ${isGalleryIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button className="bg-neutral-950 hover:bg-amber-500 hover:text-black text-white font-black text-[10px] uppercase tracking-wider px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 mx-auto shadow-md group">
              <span>Lihat Lebih Banyak</span>
              <IoArrowForwardOutline className="text-[10px] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION (ACCORDION) WITH BACKGROUND IMAGE --- */}
      <section id="faq" className="py-20 px-6 md:px-12 relative select-none overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20 filter grayscale"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/95 via-neutral-900/95 to-neutral-950/95"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Header with different styling */}
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 px-4 py-2 rounded-full backdrop-blur-sm">
              <IoChatbubbleOutline className="text-amber-400 text-xs" />
              <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest">FAQ</span>
              <IoChatbubbleOutline className="text-amber-400 text-xs" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Pertanyaan <span className="text-amber-400">Yang Sering</span> Diajukan
            </h2>
            <p className="text-neutral-400 text-xs max-w-md mx-auto">
              Masih bingung? Cek dulu pertanyaan-pertanyaan di bawah ini ya!
            </p>
          </div>

          {/* FAQ Accordion with dark theme */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`bg-neutral-800/80 backdrop-blur-sm rounded-xl border border-neutral-700/80 overflow-hidden transition-all duration-300 ${
                  openFaq === index ? 'shadow-lg shadow-amber-500/20 border-amber-500/50 bg-neutral-800' : 'hover:border-neutral-600 hover:bg-neutral-800/90'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-black text-white hover:text-amber-400 transition-colors duration-200"
                >
                  <span className="text-sm md:text-base tracking-tight">{faq.question}</span>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openFaq === index ? 'bg-amber-500 text-black rotate-180' : 'bg-neutral-700 text-amber-400'
                  }`}>
                    <IoChevronBackOutline className="text-xs transform rotate-90" />
                  </div>
                </button>
                <div className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaq === index ? 'pb-5 max-h-96' : 'max-h-0 pb-0'
                }`}>
                  <p className="text-neutral-300 text-xs md:text-sm leading-relaxed border-t border-neutral-700/60 pt-3">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 text-center">
            <p className="text-neutral-400 text-xs">
              Masih ada pertanyaan lain? 
              <button 
                onClick={() => setIsChatOpen(true)}
                className="text-amber-400 font-bold ml-1 hover:underline"
              >
                Chat dengan AI Assistant kami
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* --- FORM BOOKING OTOMATIS (WhatsApp) --- */}
      <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-amber-50/50 via-white to-amber-50/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full">
              <IoCalendarOutline className="text-amber-400 text-xs" />
              <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Booking Online</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mt-4">
              Booking <span className="text-amber-500">Sekarang</span>
            </h2>
            <p className="text-neutral-500 text-sm mt-2 max-w-md mx-auto">
              Isi form di bawah, kami akan langsung konfirmasi via WhatsApp
            </p>
          </div>

          <form className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-amber-100/50" onSubmit={(e) => {
            e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const phone = form.phone.value;
            const service = form.service.value;
            const date = form.date.value;
            const time = form.time.value;
            const notes = form.notes.value || '';
            
            const message = `Halo%20Crown%26Co.%0A%0A*FORM%20BOOKING%20CROWN%26CO.*%0A%0ANama%3A%20${encodeURIComponent(name)}%0ANo%20WA%3A%20${encodeURIComponent(phone)}%0ALayanan%3A%20${encodeURIComponent(service)}%0ATanggal%3A%20${encodeURIComponent(date)}%0AJam%3A%20${encodeURIComponent(time)}${notes ? `%0ACatatan%3A%20${encodeURIComponent(notes)}` : ''}`;
            
            window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
          }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-black text-neutral-400 uppercase tracking-wider mb-1 ml-1">
                  Nama Lengkap <span className="text-amber-500">*</span>
                </label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Masukkan nama Anda" 
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 outline-none transition text-sm" 
                  required 
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-neutral-400 uppercase tracking-wider mb-1 ml-1">
                  No WhatsApp <span className="text-amber-500">*</span>
                </label>
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="0812-3456-7890" 
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 outline-none transition text-sm" 
                  required 
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-neutral-400 uppercase tracking-wider mb-1 ml-1">
                  Layanan <span className="text-amber-500">*</span>
                </label>
                <select 
                  name="service" 
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 outline-none transition text-sm" 
                  required
                >
                  <option value="">Pilih Layanan</option>
                  <option value="Haircut & Styling">✂️ Haircut & Styling (Rp 85.000)</option>
                  <option value="Scalp Therapy">💆 Scalp Therapy (Rp 130.000)</option>
                  <option value="Coloring">🎨 Coloring (Rp 195.000)</option>
                  <option value="Grooming">🧔 Grooming (Rp 60.000)</option>
                  <option value="K-Treatment Package">✨ K-Treatment Package (Rp 250.000)</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-black text-neutral-400 uppercase tracking-wider mb-1 ml-1">
                  Tanggal <span className="text-amber-500">*</span>
                </label>
                <input 
                  type="date" 
                  name="date" 
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 outline-none transition text-sm" 
                  required 
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-[10px] font-black text-neutral-400 uppercase tracking-wider mb-1 ml-1">
                  Jam Booking <span className="text-amber-500">*</span>
                </label>
                <input 
                  type="time" 
                  name="time" 
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 outline-none transition text-sm" 
                  required 
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-[10px] font-black text-neutral-400 uppercase tracking-wider mb-1 ml-1">
                  Catatan Tambahan <span className="text-neutral-300">(opsional)</span>
                </label>
                <textarea 
                  name="notes" 
                  rows="2" 
                  placeholder="Tulis catatan khusus (misal: gaya rambut, alergi, dll)" 
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 outline-none transition text-sm resize-none"
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full mt-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-black py-3.5 rounded-xl transition-all shadow-lg shadow-amber-500/30 text-sm uppercase tracking-wider flex items-center justify-center gap-2 group"
            >
              <IoLogoWhatsapp className="text-xl" />
              Booking via WhatsApp
              <IoArrowForwardOutline className="text-base group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <p className="text-center text-[9px] text-neutral-400 mt-3">
              ⏱️ Kami akan merespon dalam waktu kurang dari 5 menit
            </p>
          </form>
        </div>
      </section>

      {/* --- CTA SECTION (CALL TO ACTION) - VERSION WITH SOFT BACKGROUND --- */}
      <section className="py-20 px-6 md:px-12 relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-neutral-50">
        {/* Background efek pattern dan gradasi */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-5 filter grayscale"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-300 rounded-full blur-3xl opacity-20"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 px-4 py-2 rounded-full backdrop-blur-sm mb-6 shadow-sm">
            <IoSparklesOutline className="text-amber-500 text-xs" />
            <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest">Special Offer for You</span>
            <IoSparklesOutline className="text-amber-500 text-xs" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight leading-tight">
            Mulai <span className="text-amber-500 underline decoration-amber-400 decoration-4 underline-offset-8">Perjalanan</span> Gayamu
          </h2>
          
          <p className="text-neutral-600 text-sm md:text-base mt-4 max-w-lg mx-auto leading-relaxed">
            Jadilah bagian dari komunitas Crown & Co. yang selalu tampil percaya diri dengan gaya rambut terbaik. 
            Dapatkan pengalaman perawatan rambut premium dengan penawaran spesial untuk pendaftar pertama!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button 
              onClick={() => navigate('/login')}
              className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-black text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2 hover:gap-3 hover:-translate-y-1"
            >
              <span>Booking Sekarang</span>
              <IoArrowForwardOutline className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <a 
              href="https://wa.me/6281234567890?text=Halo%20Crown%26Co.%2C%20saya%20mau%20tanya%20tentang%20layanan"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white font-black text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1"
            >
              <span>Hubungi Kami</span>
              <IoChatbubbleEllipses className="text-sm group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>

          {/* Tambahan benefit kecil */}
          <div className="flex flex-wrap justify-center gap-6 mt-10 pt-4 border-t border-amber-200/50">
            <div className="flex items-center gap-2">
              <IoCheckmarkCircle className="text-amber-500 text-sm" />
              <span className="text-[10px] text-neutral-500 font-medium">Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <IoCheckmarkCircle className="text-amber-500 text-sm" />
              <span className="text-[10px] text-neutral-500 font-medium">Cepster Expert</span>
            </div>
            <div className="flex items-center gap-2">
              <IoCheckmarkCircle className="text-amber-500 text-sm" />
              <span className="text-[10px] text-neutral-500 font-medium">Premium Products</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER SECTION --- */}
      <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
                  <IoCutOutline className="text-xl transform -rotate-45" />
                </div>
                <span className="text-xl font-black tracking-tight text-white">
                  Crown<span className="text-amber-500">&Co.</span>
                </span>
              </div>
              <p className="text-xs leading-relaxed text-neutral-500">
                Premium unisex barbershop dengan sentuhan K-Beauty. 
                Tempat perawatan rambut terbaik untuk pria dan wanita.
              </p>
              <div className="space-y-2 text-xs">
                <p className="flex items-center gap-2">
                  <IoCalendarOutline className="text-amber-500" />
                  <span>Est. 2026 — Premium Quality</span>
                </p>
                <p className="flex items-center gap-2">
                  <IoShieldCheckmarkOutline className="text-amber-500" />
                  <span>Cepster Bersertifikasi Profesional</span>
                </p>
              </div>
            </div>

            {/* Menu Column */}
            <div className="space-y-4">
              <h4 className="text-white font-black text-sm uppercase tracking-wider">Menu</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#tentang" className="hover:text-amber-400 transition-colors duration-200">Tentang</a></li>
                <li><a href="#layanan" className="hover:text-amber-400 transition-colors duration-200">Layanan</a></li>
                <li><a href="#produk" className="hover:text-amber-400 transition-colors duration-200">Produk</a></li>
                <li><a href="#promo" className="hover:text-amber-400 transition-colors duration-200">Promo</a></li>
                <li><a href="#rating" className="hover:text-amber-400 transition-colors duration-200">Rating</a></li>
                <li><a href="#gallery" className="hover:text-amber-400 transition-colors duration-200">Gallery</a></li>
                <li><a href="#faq" className="hover:text-amber-400 transition-colors duration-200">FAQ</a></li>
              </ul>
            </div>

            {/* Jam Operasional Column */}
            <div className="space-y-4">
              <h4 className="text-white font-black text-sm uppercase tracking-wider">Jam Operasional</h4>
              <ul className="space-y-2 text-xs">
                <li className="flex justify-between">
                  <span>Senin - Jumat</span>
                  <span className="text-white">09:00 - 21:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sabtu</span>
                  <span className="text-white">10:00 - 20:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Minggu</span>
                  <span className="text-white">11:00 - 18:00</span>
                </li>
              </ul>
            </div>

            {/* Kontak Column */}
            <div className="space-y-4">
              <h4 className="text-white font-black text-sm uppercase tracking-wider">Kontak Kami</h4>
              <ul className="space-y-3 text-xs">
                <li className="flex items-start gap-2">
                  <IoCalendarOutline className="text-amber-500 mt-0.5 shrink-0" />
                  <span>Jl. Raya Kebayoran Lama No. 88, Jakarta Selatan</span>
                </li>
                <li className="flex items-center gap-2">
                  <IoChatbubbleOutline className="text-amber-500 shrink-0" />
                  <span>+62 812-3456-7890</span>
                </li>
                <li className="flex items-center gap-2">
                  <IoPaperPlaneOutline className="text-amber-500 shrink-0" />
                  <span>info@crownandco.id</span>
                </li>
              </ul>
              
              {/* Social Media Icons */}
              <div className="flex gap-3 pt-2">
                <a href="#" className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-amber-500 hover:text-black flex items-center justify-center transition-all duration-300">
                  <IoLogoInstagram className="text-sm" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-amber-500 hover:text-black flex items-center justify-center transition-all duration-300">
                  <IoLogoTiktok className="text-sm" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-amber-500 hover:text-black flex items-center justify-center transition-all duration-300">
                  <IoLogoFacebook className="text-sm" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-amber-500 hover:text-black flex items-center justify-center transition-all duration-300">
                  <IoLogoWhatsapp className="text-sm" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-neutral-800 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-neutral-500">
            <div className="flex gap-4">
              <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
              <a href="#faq" className="hover:text-amber-400 transition-colors">FAQ</a>
            </div>
            <p>© 2026 Crown & Co. Barbershop. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* --- FITUR FLOATING CHAT AI --- */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start">
        {isChatOpen && (
          <div className="bg-white text-neutral-800 w-80 md:w-96 h-[420px] rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden mb-3 flex flex-col animate-fade-in-up">
            <div className="bg-neutral-950 text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="font-black text-xs tracking-wider uppercase">Crown Assistant AI</span>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="text-white hover:text-amber-400 transition-colors p-1">
                <IoCloseOutline className="text-xl" />
              </button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs bg-neutral-50">
              {messages.map((msg) => (
                <div key={msg.id} className={`max-w-[80%] p-3 rounded-xl leading-relaxed text-left ${msg.sender === 'user' ? 'bg-neutral-950 text-white ml-auto rounded-tr-none' : 'bg-white text-neutral-800 border border-neutral-200 shadow-xs mr-auto rounded-tl-none'}`}>
                  {msg.text}
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <form onSubmit={handleSendMessage} className="p-2 border-t border-neutral-200 bg-white flex items-center gap-2">
              <input type="text" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} placeholder="Tanyakan harga atau lokasi..." className="flex-1 bg-neutral-100 text-xs px-3 py-2.5 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-neutral-900" />
              <button type="submit" className="bg-neutral-950 hover:bg-amber-500 hover:text-black text-white p-2.5 rounded-lg transition-colors shadow-xs">
                <IoPaperPlaneOutline className="text-sm" />
              </button>
            </form>
          </div>
        )}
        <button onClick={() => setIsChatOpen(!isChatOpen)} className="bg-neutral-950 hover:bg-neutral-800 text-amber-400 p-4 rounded-full shadow-2xl transform hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center border border-neutral-800">
          <IoChatbubbleEllipses className="text-xl" />
        </button>
      </div>

    </div>
  );
}