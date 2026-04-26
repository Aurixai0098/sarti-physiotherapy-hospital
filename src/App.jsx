import React, { useState, useEffect, useRef } from 'react';

// Hero images set for dynamic background
const heroImageSet = [
  "https://clinicmaster.dexignzone.com/tailwind/physiotherapy/images/hero-banner/banner-1.jpg",
  "https://clinicmaster.dexignzone.com/tailwind/physiotherapy/images/hero-banner/banner-2.jpg",
  "https://clinicmaster.dexignzone.com/tailwind/physiotherapy/images/hero-banner/banner-3.jpg",
  "https://clinicmaster.dexignzone.com/tailwind/physiotherapy/images/hero-banner/banner-4.jpg",
  "https://clinicmaster.dexignzone.com/tailwind/physiotherapy/images/hero-banner/banner-5.jpg",
  "https://clinicmaster.dexignzone.com/tailwind/physiotherapy/images/hero-banner/banner-6.jpg",
  "https://clinicmaster.dexignzone.com/tailwind/physiotherapy/images/hero-banner/banner-7.jpg",
  "https://clinicmaster.dexignzone.com/tailwind/physiotherapy/images/hero-banner/banner-8.jpg"
];

// ----- NAVBAR with Hamburger Menu (Fully Responsive) -----
const Navbar = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <i className={`fas fa-hand-holding-heart text-xl sm:text-2xl ${isScrolled ? 'text-emerald-600' : 'text-white drop-shadow-md'}`}></i>
              <span className={`font-extrabold text-3xl  md:text-5xl  tracking-tight ${isScrolled ? 'text-gray-800' : 'text-white drop-shadow-md'}`}>
                SARTI <span className="text-emerald-400">PHYSIOTHERAPY</span>
              </span>
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-7 bg-white p-2 md:p-1 rounded-full px-3 md:px-2 md:pr-4 font-medium  ">
              {['Home', 'Pages', 'Services', 'Blogs', 'Contact Us'].map(item => (
                <a key={item} href="#" className={`${isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-black hover:text-emerald-600'} transition text-sm lg:text-base whitespace-nowrap ${item === "Home" ? 'bg-green-400  rounded-full p-4 px-6 text-white' : ''}`}>
                  {item}
                </a>
              ))}
            </div>

            {/* Desktop Appointment Button */}
            <button className={`hidden md:block ${isScrolled ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-emerald-500 hover:bg-emerald-600'} text-white px-4  lg:px-5 py-5 rounded-full text-sm font-semibold shadow-md transition whitespace-nowrap`}>
              Appointment
            </button>

            {/* Hamburger Menu Button - Mobile Only */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden relative z-50 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${mobileMenuOpen ? 'bg-white/20 backdrop-blur-sm' : ''}`}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <span className={`absolute left-0 top-0 w-full h-0.5 rounded-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 top-2 bg-white' : isScrolled ? 'bg-gray-800' : 'bg-white'}`}></span>
                <span className={`absolute left-0 top-2 w-full h-0.5 rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : isScrolled ? 'bg-gray-800' : 'bg-white'}`}></span>
                <span className={`absolute left-0 bottom-0 w-full h-0.5 rounded-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 top-2 bg-white' : isScrolled ? 'bg-gray-800' : 'bg-white'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300 md:hidden ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transition-transform duration-300 ease-out md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full pt-5 pb-6 px-6">
          <div onClick={() => setMobileMenuOpen(false)} className=' w-full flex justify-end  cursor-pointer  text-3xl'>X</div>
          {/* Mobile Menu Header */}
          <div className="flex items-center gap-2 mb-8 pb-4 border-b border-gray-100">
            <i className="fas fa-hand-holding-heart text-emerald-600 text-2xl"></i>
            <span className="font-extrabold text-xl tracking-tight text-gray-800">
              SARTI <span className="text-emerald-600">PHYSIOTHERAPY</span>
            </span>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-1  ">
            {['Home', 'Pages', 'Services', 'Blogs', 'Contact Us'].map(item => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-emerald-600  hover:bg-emerald-50 px-4 py-3 rounded-xl transition-all duration-200 text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Appointment Button */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition transform hover:scale-105">
              Appointment
            </button>
          </div>

          {/* Mobile Footer Info */}
          <div className="mt-auto pt-8">
            <div className="flex justify-center gap-5 text-gray-400 text-xl">
              <i className="fab fa-facebook-f hover:text-emerald-600 cursor-pointer transition"></i>
              <i className="fab fa-twitter hover:text-emerald-600 cursor-pointer transition"></i>
              <i className="fab fa-instagram hover:text-emerald-600 cursor-pointer transition"></i>
              <i className="fab fa-linkedin-in hover:text-emerald-600 cursor-pointer transition"></i>
            </div>
            <p className="text-center text-xs text-gray-400 mt-4">
              © 2026 SARTI PHYSIOTHERAPY
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

// ----- HERO SECTION with Responsive Thumbnail Strip -----
const HeroSection = ({ currentImage, images, onSelectImage, onPrev, onNext }) => {
  const [currentThumbIndex, setCurrentThumbIndex] = useState(0);
  const [visibleThumbs, setVisibleThumbs] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) setVisibleThumbs(2);
      else if (width < 640) setVisibleThumbs(2);
      else if (width < 768) setVisibleThumbs(3);
      else setVisibleThumbs(4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalThumbs = images.length;
  const maxIndex = Math.max(0, totalThumbs - visibleThumbs);

  useEffect(() => {
    setCurrentThumbIndex(prev => Math.min(prev, maxIndex));
  }, [visibleThumbs, maxIndex]);

  const handlePrevThumbs = () => {
    setCurrentThumbIndex(prev => Math.max(0, prev - 1));
  };

  const handleNextThumbs = () => {
    setCurrentThumbIndex(prev => Math.min(maxIndex, prev + 1));
  };

  const visibleImages = images.slice(currentThumbIndex, currentThumbIndex + visibleThumbs);

  return (
    <section
      className="relative w-full min-h-[100vh] flex items-center hero-transition"
      style={{
        backgroundImage: `linear-gradient(105deg, rgba(0, 30, 20, 0.65) 0%, rgba(0, 0, 0, 0.45) 60%, rgba(0, 50, 30, 0.55) 100%), url(${currentImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 28%',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-28 lg:py-32 z-10 w-full">
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight drop-shadow-xl">
            Physiotherapy <br /><span className="text-emerald-300">For Everyone</span>
          </h1>
          <p className="text-white/95 text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-6 max-w-xl backdrop-blur-sm bg-black/20 p-2 sm:p-3 rounded-2xl inline-block">
            Experienced staff is dedicated to improving our patients' physical health and enhancing their mobility.
          </p>
          <div className="mt-6 sm:mt-8">
            <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full shadow-xl transition transform hover:scale-105 flex items-center gap-2 text-sm sm:text-base">
              Get Started <i className="fas fa-arrow-right text-xs sm:text-sm"></i>
            </button>
          </div>
          <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-10 mt-8 sm:mt-12">
            <div>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-emerald-300">95%</span>
              <span className="text-white/90 block text-xs sm:text-sm font-semibold mt-1">Wellness Restored<br />Through Therapy</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-emerald-300">10+</span>
              <span className="text-white/90 block text-xs sm:text-sm font-semibold mt-1">Years of Successful<br />Work and Dedicated</span>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Thumbnail Strip - Bottom Right */}
      <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 z-20">
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-1 sm:gap-2 rounded-xl p-2 sm:p-3">
            <button
              onClick={handlePrevThumbs}
              disabled={currentThumbIndex === 0}
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition disabled:opacity-30 disabled:cursor-not-allowed text-xs sm:text-sm"
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            <div className="flex  overflow-hidden">
              {visibleImages.map((img, idx) => (
                <div
                  key={currentThumbIndex + idx}
                  onClick={() => onSelectImage(img)}
                  className={`cursor-pointer overflow-hidden  transition-all duration-200 hover:scale-95 ${currentImage === img ? ' scale-90' : 'opacity-80 hover:opacity-100'
                    }`}
                  style={{ width: 'clamp(45px, 12vw, 100px)', height: 'clamp(35px, 8vw, 70px)' }}
                >
                  <img src={img} alt={`thumbnail`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            <button
              onClick={handleNextThumbs}
              disabled={currentThumbIndex >= maxIndex}
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition disabled:opacity-30 disabled:cursor-not-allowed text-xs sm:text-sm"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          <div className="flex justify-center gap-1">
            {Array.from({ length: Math.ceil(totalThumbs / visibleThumbs) }).map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrentThumbIndex(i * visibleThumbs)}
                className={`h-1 rounded-full cursor-pointer transition-all ${Math.floor(currentThumbIndex / visibleThumbs) === i
                  ? 'w-3 sm:w-4 bg-emerald-400'
                  : 'w-1.5 sm:w-2 bg-white/50 hover:bg-white/70'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ----- Medical Service Section -----
const MedicalServicesSection = () => {
  const services = [
    {
      title: "Medical Service", number: "01", desc: "It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page.", svg: <svg width="70" height="70" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="90" height="90" rx="20" fill="#000000" /><circle cx="50" cy="50" r="18" fill="none" stroke="#FF0000" strokeWidth="4" /><rect x="48" y="20" width="4" height="10" fill="#FF0000" /><rect x="48" y="70" width="4" height="10" fill="#FF0000" /><rect x="20" y="48" width="10" height="4" fill="#FF0000" /><rect x="70" y="48" width="10" height="4" fill="#FF0000" /><rect x="46" y="40" width="8" height="20" fill="#FFFFFF" rx="2" /><rect x="40" y="46" width="20" height="8" fill="#FFFFFF" rx="2" /></svg>
    },
    {
      title: "24/7 Medicines", number: "02", desc: "It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page.", svg: <svg width="70" height="70" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" fill="#000000" />
        <rect x="43" y="25" width="14" height="50" fill="#FF0000" rx="3" />
        <rect x="25" y="43" width="50" height="14" fill="#FF0000" rx="3" />
        <polyline points="20,55 35,55 42,45 50,65 58,40 65,55 80,55"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round" />
      </svg>
    },
    {
      title: "Best Doctor", number: "03", desc: "It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content OF A Page.", svg: <svg width="70" height="70" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" fill="#000000" />
        <circle cx="50" cy="35" r="12" fill="#FFFFFF" />
        <rect x="30" y="48" width="40" height="28" rx="8" fill="#FFFFFF" />
        <line x1="50" y1="48" x2="50" y2="76" stroke="#000000" strokeWidth="2" />
        <path d="M38 55 C38 70, 62 70, 62 55" fill="none" stroke="#FF0000" strokeWidth="2" />
        <circle cx="62" cy="58" r="3" fill="#FF0000" />
        <rect x="46" y="58" width="8" height="16" fill="#FF0000" rx="1" />
        <rect x="42" y="62" width="16" height="8" fill="#FF0000" rx="1" />

      </svg>
    }
  ];
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-gray-50 rounded-2xl hover:bg-green-400  hover:text-white sm:rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold  ">{service.title}</h3>
              <div className=' w-full flex flex-row h-10 items-center gap-4'>
                <hr className='w-full' /> {service.svg}

              </div>
              <div className="text-4xl sm:text-5xl font-black  my-3 text-white">{service.number}</div>
              <p className=" leading-relaxed text-sm sm:text-base">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ----- ABOUT US Extended -----
const AboutUsExtended = () => {
  const allBullets = [
    "Post-Injury Rehabilitation",
    "Manual Therapy & Exercise",
    "Sports Physiotherapy",
    "Pain Management Programs",
    "Orthopedic Physiotherapy",
    "Home Visit Services",
    "Neurological Therapy",
    "Appointment & Consultation"
  ];

  // Image URLs you provided
  const aboutImages = [
    "https://clinicmaster.dexignzone.com/tailwind/physiotherapy/images/about/img1.webp",
    "https://clinicmaster.dexignzone.com/tailwind/physiotherapy/images/about/img2.webp",
    "https://clinicmaster.dexignzone.com/tailwind/physiotherapy/images/about/img3.webp"
  ];

  return (
    <section className="py-16 md:py-24 bg-[#f8fafe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column - Staggered Image Collage */}
          <div className="relative w-full aspect-square max-w-[550px] mx-auto lg:mx-0">
            {/* Main Large Image (Left) */}
            <img
              src={aboutImages[0]}
              alt="Physiotherapy stretching"
              className="absolute top-0 left-0 w-[62%] h-[80%] object-cover rounded-[2rem] shadow-sm"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/400x500?text=Image+1";
              }}
            />

            {/* Top Right Smaller Image */}
            <img
              src={aboutImages[1]}
              alt="Shoulder therapy"
              className="absolute top-0 right-0 w-[34%] h-[36%] object-cover rounded-[1.5rem] shadow-sm"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/200x200?text=Image+2";
              }}
            />

            {/* Bottom Right Overlapping Image (Cutout effect) */}
            <img
              src={aboutImages[2]}
              alt="Spine consultation"
              className="absolute bottom-[8%] right-0 w-[48%] h-[46%] object-cover rounded-[2rem] border-[12px] border-[#f8fafe] bg-[#f8fafe]"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/300x300?text=Image+3";
              }}
            />
          </div>

          {/* Right Column - Text Content */}
          <div className="max-w-2xl">
            <span className="text-blue-600 italic font-medium text-base md:text-lg block mb-3">
              About Us
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1f2937] leading-[1.2] mb-5">
              Start Your Healthy<br className="hidden sm:block" /> Life Today With Us
            </h2>

            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8">
              Our expert physiotherapists use advanced techniques and personalized
              care to relieve pain, restore movement, and help you recover faster for a
              healthier, active life.
            </p>

            {/* Bullet Points - 2 Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
              {allBullets.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-700">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-[22px] h-[22px] text-blue-600 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="4" ry="4"></rect>
                    <path d="M8 12l3 3 5-6"></path>
                  </svg>
                  <span className="font-medium text-[15px]">{item}</span>
                </div>
              ))}
            </div>

            {/* Read More Button */}
            <div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3.5 rounded-full shadow-sm transition duration-300">
                Read more
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// ----- Physiotherapy Services -----
const PhysioServices = () => {
  const scrollContainerRef = useRef(null);

  // Added image placeholders since the original code didn't have image URLs for this section
  const servicesList = [
    {
      name: "Manual Therapy",
      desc: "Consectetur adipiscing.",
      num: "01.",
      img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Acupuncture",
      desc: "Consectetur adipiscing.",
      num: "02.",
      img: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Pilates",
      desc: "Consectetur adipiscing.",
      num: "03.",
      img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Lymphtic Drainage",
      desc: "Consectetur adipiscing.",
      num: "04.",
      img: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Sports Therapy",
      desc: "Consectetur adipiscing.",
      num: "05.",
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Neurology Therapy",
      desc: "Consectetur adipiscing.",
      num: "06.",
      img: "https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&q=80&w=600"
    }
  ];

  // Auto-slide logic (Every 2 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;

        // If we reach the end of the scroll, instantly jump back to start, otherwise scroll by 1 card
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Find the width of one card + the gap (24px)
          const cardWidth = scrollContainerRef.current.children[0].clientWidth;
          scrollContainerRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
        }
      }
    }, 2000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-blue-600 italic font-medium text-lg block mb-3">
            Services
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#333333] leading-[1.2]">
            Our Expert <br className="hidden sm:block" />
            Physiotherapy Services
          </h2>
        </div>

        {/* Carousel / Slider Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {servicesList.map((srv, index) => (
            <div
              key={index}
              className="relative min-w-[85vw] sm:min-w-[45vw] lg:min-w-[320px] xl:min-w-[350px] h-[450px] rounded-[2rem] overflow-hidden flex-shrink-0 snap-start group cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={srv.img}
                alt={srv.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/80 transition-opacity duration-300"></div>

              {/* Card Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                {/* Top Number */}
                <span className="text-white text-xl font-medium tracking-wide">
                  {srv.num}
                </span>

                {/* Bottom Text */}
                <div className="transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                  <h4 className="text-white text-2xl sm:text-[28px] font-bold mb-2">
                    {srv.name}
                  </h4>
                  <p className="text-gray-200 text-[15px]">
                    {srv.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// ----- Banner: Providing excellent service -----
const ServiceBanner = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  // Play button click handle karne ke liye function
  const handlePlayClick = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <section className="bg-[#f8fafe] pt-16 md:pt-24 pb-12">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Text Section - Two Columns */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 mb-10 items-center max-w-7xl mx-auto">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1f2937] leading-[1.2]">
              Providing excellent <br className="hidden sm:block" />
              service to our patients
            </h2>
          </div>
          <div>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed md:max-w-xl">
              One-On-One Treatments Without The Use Of Gym Equipment,
              Thus Fully Utilizing The Hands On Time With The Therapist And
              Ensuring Greater Homecare Outcomes.
            </p>
          </div>
        </div>

        {/* Video Section with Interactive Play Button */}
        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[650px] overflow-hidden shadow-sm">

          <video
            ref={videoRef}
            src="https://res.cloudinary.com/dfiyubngf/video/upload/v1777199277/samples/cld-sample-video.mp4"
            /* Poster image video load hone se pehle dikhegi */
            poster="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1600"
            controls={isPlaying} // Controls sirf tab dikhenge jab video play hogi
            playsInline
            onPause={() => setIsPlaying(false)} // User pause kare toh button wapas layein
            onEnded={() => setIsPlaying(false)} // Video khatam ho toh button wapas layein
            className="w-full h-full object-cover object-top bg-gray-200"
          />

          {/* Play Button Overlay - Video play hone par hide ho jayega */}
          {!isPlaying && (
            <div
              className="absolute inset-0 flex items-center justify-center bg-black/5 cursor-pointer transition-colors duration-300 hover:bg-black/20"
              onClick={handlePlayClick}
            >
              {/* Halo ring effect */}
              <div className="bg-white/30 p-3 sm:p-4 rounded-full animate-pulse flex items-center justify-center">
                {/* Actual Play Button */}
                <button className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 ml-1 sm:ml-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  // Testimonial Data
  const testimonials = [
    {
      name: "Kenneth Fong",
      role: "Postgraduate Student",
      text: "Lorem Ipsum has been the industry standard dummy text ever since the 1500s, Lorem Ipsum has been the industry standard dummy text ever since the 1500s industry standard dummy text ever since the 1500s,",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
    },
    {
      name: "Jane Brown",
      role: "Patient",
      text: "Lorem Ipsum has been the industry standard dummy text ever since the 1500s, Lorem Ipsum has been the industry standard dummy text ever since the 1500s industry standard dummy text ever since the 1500s,",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
    },
    {
      name: "Kenneth Fong",
      role: "Postgraduate Student",
      text: "Lorem Ipsum has been the industry standard dummy text ever since the 1500s, Lorem Ipsum has been the industry standard dummy text ever since the 1500s industry standard dummy text ever since the 1500s,",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
    },
    {
      name: "Jane Brown",
      role: "Patient",
      text: "Lorem Ipsum has been the industry standard dummy text ever since the 1500s, Lorem Ipsum has been the industry standard dummy text ever since the 1500s industry standard dummy text ever since the 1500s,",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#f8fafe] overflow-hidden">
      <div className="max-w-[90rem] mx-auto">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <span className="text-blue-600 italic font-medium text-lg block mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1f2937] leading-[1.2]">
            Patient Stories & <br className="hidden sm:block" />
            Successes
          </h2>
        </div>

        {/* Scrolling Cards Container */}
        <div
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-4 sm:px-6 lg:px-8 pb-10 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="min-w-[85vw] sm:min-w-[380px] lg:min-w-[400px] bg-white rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between snap-center shadow-sm border border-gray-100/50"
            >
              {/* Top: Stars & Text */}
              <div>
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#ffc107]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-500 text-[15px] sm:text-base leading-relaxed mb-8">
                  {item.text}
                </p>
              </div>

              {/* Bottom: Profile & Play Button */}
              <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-auto">
                {/* Avatar & Name */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover bg-gray-200"
                  />
                  <div>
                    <h4 className="text-[#1f2937] font-semibold text-sm sm:text-[15px]">
                      {item.name}
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Blue Play Button */}
                <button className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1a56db] hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors flex-shrink-0 shadow-md">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-white ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// ----- Why Choose Us -----
const WhyChooseUsSection = () => {
  // Image mein sabhi cards par same blue checkmark hai, 
  // isliye maine alag-alag icons hata kar content update kar diya hai.
  const features = [
    {
      title: "More Experience",
      desc: "We offer a wide range of health services to meet all your needs."
    },
    {
      title: "Seamless care",
      desc: "We offer a wide range of health services to meet all your needs."
    },
    {
      title: "The right answers?",
      desc: "We offer a wide range of health services to meet all your needs."
    },
    {
      title: "Unparalleled expertise",
      desc: "We offer a wide range of health services to meet all your needs."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column - Large Image */}
          <div className="w-full h-[500px] lg:h-[700px]">
            <img
              src="https://clinicmaster.dexignzone.com/tailwind/physiotherapy/images/about/img4.webp"
              alt="Therapist helping patient"
              className="w-full h-full object-cover rounded-[2rem] shadow-sm"
              // Agar image fail ho jaye toh placeholder
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/800x1000?text=Healthcare+Image";
              }}
            />
          </div>

          {/* Right Column - Text & Feature Grid */}
          <div>
            <div className="mb-10 text-center lg:text-left">
              <span className="text-blue-600 italic font-medium text-base md:text-lg block mb-3">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1f2937] leading-[1.2]">
                Why Choose Us for Your <br className="hidden lg:block" /> Healthcare Needs
              </h2>
            </div>

            {/* 2x2 Features Grid */}
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300"
                >
                  {/* Blue Checkmark Circle */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#1a56db] rounded-full flex items-center justify-center mx-auto mb-5 shadow-md">
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  <h4 className="text-[#1f2937] text-lg sm:text-[19px] font-medium mb-3">
                    {f.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed px-2">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// ----- Meet Doctors -----
const MeetDoctors = () => (
  <section className="py-12 sm:py-16 md:py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-8 sm:mb-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Meet Our Expert Doctors</h2>
    </div>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-12 bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-md items-center">
      <div className="flex justify-center">
        <div className="bg-emerald-100 rounded-full p-6 sm:p-8 md:p-10 w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 flex items-center justify-center">
          <i className="fas fa-user-md text-emerald-700 text-4xl sm:text-5xl md:text-6xl"></i>
        </div>
      </div>
      <div className="text-center md:text-left">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Dr. Rachel Moore</h3>
        <p className="text-emerald-600 font-medium text-sm sm:text-base">Physiotherapist</p>
        <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base">Our expert physiotherapists are dedicated to restoring your movement, relieving pain, and improving overall physical health. They provide personalized care and advanced therapies.</p>
        <div className="flex justify-center md:justify-start gap-4 mt-4 sm:mt-6 text-gray-600 text-lg sm:text-xl">
          <i className="fab fa-linkedin-in hover:text-emerald-600 cursor-pointer"></i>
          <i className="fab fa-twitter hover:text-emerald-600 cursor-pointer"></i>
          <i className="fab fa-facebook-f hover:text-emerald-600 cursor-pointer"></i>
        </div>
        <button className="mt-4 sm:mt-6 bg-emerald-400 text-white px-5 sm:px-6 py-2 rounded-full shadow text-sm sm:text-base">Appointment</button>
      </div>
    </div>
  </section>
);



// ----- Conditions We Treat -----
const ConditionsTreat = () => {
  // 0 set kiya hai taaki page load par first item pehle se open rahe (image ki tarah)
  const [openIndex, setOpenIndex] = useState(0);

  // Data array jisme answers bhi shamil hain
  const faqData = [
    {
      question: "back , neek & Shoulder pain",
      answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"
    },
    {
      question: "Hip And Knee pain",
      answer: "Treatment options for hip and knee pain include physical therapy, targeted exercises, and personalized recovery plans to restore full mobility."
    },
    {
      question: "How do i book my appointment ?",
      answer: "You can easily book your appointment by calling our clinic, filling out the online form on our website, or visiting us directly."
    },
    {
      question: "What Should I Bring For My First Visit?",
      answer: "Please bring your medical history, any recent MRI/X-ray reports, comfortable clothing, and your identification documents."
    },
    {
      question: "Can i cancel my appointment",
      answer: "Yes, you can cancel or reschedule. We request a minimum of 24-hour notice so we can accommodate other patients who might need care."
    },
    {
      question: "Do I Need a Referral to Visit?",
      answer: "In most cases, a referral is not required to see our physiotherapists unless it is specifically mandated by your insurance provider."
    }
  ];

  const toggleAccordion = (index) => {
    // Agar same index pe click kiya toh close ho jayega, warna naya open hoga
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left Column - Heading & Accordion */}
          <div className="w-full">
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#1f2937] leading-[1.2] mb-10">
              Conditions we treat with <br className="hidden md:block" /> excellent care
            </h2>

            {/* Accordion List */}
            <div className="space-y-4">
              {faqData.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={index} className="flex flex-col">
                    {/* Accordion Header (Question) */}
                    <div
                      onClick={() => toggleAccordion(index)}
                      className={`w-full flex justify-between items-center p-5 rounded-2xl cursor-pointer transition-all duration-300 ${isOpen ? "bg-[#f8f9fc]" : "bg-[#f8fafe] hover:bg-[#f0f4f8]"
                        }`}
                    >
                      <span className="font-medium text-[#1f2937] text-base md:text-[17px]">
                        {item.question}
                      </span>

                      {/* Chevron Icon */}
                      <svg
                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-90" : ""
                          }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>

                    {/* Accordion Content (Answer) */}
                    {isOpen && (
                      <div className="mt-2 p-6 bg-[#fdfdfd] border border-gray-100 rounded-2xl shadow-sm animate-fadeIn">
                        <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Large Anatomy Image */}
          <div className="w-full h-[500px] lg:h-[800px] sticky top-10">
            <img
              // Yahan maine ek Unsplash placeholder lagaya hai jo similar medical feel deta hai. 
              // Aap ise apni body/anatomy wali image ke source (src) se replace kar lena.
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000"
              alt="Human anatomy back muscles"
              className="w-full h-full object-cover rounded-[2rem] shadow-md bg-gray-200"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

// ----- Blog Section -----
const BlogSection = () => {
  // Demo data for the blog cards
  const blogPosts = [
    {
      dateAuthor: "OCT 27, 2025 – ALEX",
      title: "Expert Insights on Medical Physiotherapy Wellness",
      // Unsplash placeholder matching the first image
      img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" 
    },
    {
      dateAuthor: "OCT 27, 2025 – ALEX",
      title: "Expert Insights on Medical Physiotherapy Wellness",
      // Unsplash placeholder matching the second image
      img: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#f8fafe]">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-blue-600 italic font-medium text-base md:text-lg block mb-3">
            Blog
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1f2937] leading-[1.2]">
            Your Health, Our Knowledge
          </h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <div 
              key={index} 
              className="relative w-full h-[350px] sm:h-[400px] lg:h-[450px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-md"
            >
              {/* Background Image */}
              <img 
                src={post.img} 
                alt={post.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Bottom Dark Gradient Overlay - Text ko readable banane ke liye */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 transition-opacity duration-300"></div>

              {/* Date & Author Blue Badge (Top Left) */}
              <div className="absolute top-6 left-6">
                <span className="bg-[#1a56db] text-white text-[13px] font-medium px-4 py-1.5 rounded-full shadow-sm">
                  {post.dateAuthor}
                </span>
              </div>

              {/* Blog Title (Bottom) */}
              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 md:p-10">
                <h4 className="text-white text-2xl sm:text-[28px] lg:text-[32px] font-bold leading-[1.3] md:pr-10">
                  {post.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ----- Muscle Spasm CTA -----
const MuscleSpasmCta = () => {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <img
        // Yahan aap apni original image ka URL daal sakte hain. 
        // Abhi ke liye maine ek high-quality Unsplash placeholder use kiya hai.
        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600"
        alt="Physiotherapists looking at camera"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      
      {/* Subtle Dark Overlay - Isse white text hamesha clearly padhne mein aayega */}
      <div className="absolute inset-0 bg-black/20 transition-opacity duration-300"></div>

      {/* Center Content */}
      <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto mt-10">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.2] mb-8 drop-shadow-lg">
          Delivering effective <br />
          muscle spasm <br />
          treatment
        </h2>
        
        {/* Blue Button */}
        <button className="bg-[#1a56db] hover:bg-blue-700 text-white font-medium text-base px-8 py-3.5 rounded-full shadow-lg transition-transform duration-300 hover:-translate-y-1">
          Book Appointment
        </button>
        
      </div>
      
    </section>
  );
};

// ----- Footer -----
const Footer = () => {
  return (
    <footer className="bg-white pt-16 md:pt-24 pb-8 border-t border-gray-100 overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Right Side Anatomy Background Image */}
        {/* Absolute position taaki ye footer content ke piche/right side par fix rahe */}
        <div className="absolute right-0 top-0 h-full opacity-40 pointer-events-none hidden lg:block">
          <img 
            src="https://clinicmaster.dexignzone.com/tailwind/physiotherapy/images/bone.png" 
            alt="Spine Anatomy" 
            className="h-[80%] object-contain mix-blend-multiply drop-shadow-sm translate-x-10 mt-10"
            onError={(e) => {
                e.target.onerror = null;
                // Fallback image in case the URL breaks
                e.target.src = "https://images.unsplash.com/photo-1530213786676-4189f1756920?auto=format&fit=crop&q=80&w=200&h=800";
            }}
          />
        </div>

        {/* Top Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16 relative z-10">
          
          {/* Logo & Description (Left Column - takes 4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              {/* Blue Cross Logo SVG */}
              <svg className="w-10 h-10 text-[#1a56db]" viewBox="0 0 40 40" fill="currentColor">
                <path d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm8.3 22.5h-5.8v5.8c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5v-5.8H11.7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5h5.8v-5.8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v5.8h5.8c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5z" />
              </svg>
              <div className="leading-tight">
                <span className="text-[#1a56db] text-2xl font-bold block">Clinic</span>
                <span className="text-gray-500 text-xl font-medium block">Master</span>
              </div>
            </div>
            
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4 text-gray-500">
              <a href="#" className="hover:text-blue-600 transition-colors"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-blue-600 transition-colors"><i className="fab fa-twitter"></i></a> {/* Assuming X logo is matched via fa-twitter or custom SVG */}
              <a href="#" className="hover:text-blue-600 transition-colors"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-blue-600 transition-colors"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="hover:text-blue-600 transition-colors"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          {/* Links Sections (Center - takes 2 cols each) */}
          <div className="lg:col-span-2">
            <h4 className="text-[#1f2937] font-semibold mb-6 text-lg">Product</h4>
            <ul className="space-y-4 text-gray-400 text-[15px]">
              <li><a href="#" className="hover:text-[#1a56db] transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-[#1a56db] transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-[#1a56db] transition-colors">Case studies</a></li>
              <li><a href="#" className="hover:text-[#1a56db] transition-colors">Reviews</a></li>
              <li><a href="#" className="hover:text-[#1a56db] transition-colors">Updates</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[#1f2937] font-semibold mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-gray-400 text-[15px]">
              <li><a href="#" className="hover:text-[#1a56db] transition-colors">About</a></li>
              <li><a href="#" className="hover:text-[#1a56db] transition-colors">Contact us</a></li>
              <li><a href="#" className="hover:text-[#1a56db] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#1a56db] transition-colors">Culture</a></li>
              <li><a href="#" className="hover:text-[#1a56db] transition-colors">Blog</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[#1f2937] font-semibold mb-6 text-lg">Support</h4>
            <ul className="space-y-4 text-gray-400 text-[15px]">
              <li><a href="#" className="hover:text-[#1a56db] transition-colors">Getting started</a></li>
              <li><a href="#" className="hover:text-[#1a56db] transition-colors">Help center</a></li>
              <li><a href="#" className="hover:text-[#1a56db] transition-colors">Server status</a></li>
              <li><a href="#" className="hover:text-[#1a56db] transition-colors">Report a bug</a></li>
              <li><a href="#" className="hover:text-[#1a56db] transition-colors">Chat support</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-gray-200 relative z-10 gap-6">
          <div>
            <h3 className="text-[#1f2937] text-2xl font-bold mb-2"></h3>
            <p className="text-gray-500 text-sm"></p>
          </div>
          
          <div className="w-full md:w-auto">
            {/* Unified Input + Button styling */}
            <div className="flex items-center bg-[#f4f7fa] rounded-full p-1.5 w-full md:w-[400px]">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-transparent outline-none px-4 py-2 w-full text-gray-700 text-sm placeholder-gray-400"
              />
              <button className="bg-[#1a56db] hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
          <p className="text-gray-500 text-sm">
            © Copyright 2026 By <span className="text-[#1a56db]">DexignZone</span>. All Rights Reserved.
          </p>
          
          {/* Google Ratings Badge */}
          <div className="flex items-center bg-[#f4f7fa] px-4 py-2 rounded-full gap-2">
            <span className="font-bold text-lg leading-none mr-1">
              <span className="text-[#4285F4]">G</span>
            </span>
            <div className="flex gap-1 text-[#FFC107] text-xs">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <span className="text-gray-700 font-bold text-sm ml-1">(4.8)</span>
            <span className="text-gray-400 text-xs ml-1">12k+ ratings on google</span>
          </div>
        </div>

      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 bg-[#1f2937] hover:bg-black text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:-translate-y-1"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>

    </footer>
  );
};

// ----- MAIN APP COMPONENT -----
const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeHeroImage, setActiveHeroImage] = useState(heroImageSet[0]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrevImage = () => {
    const currentIndex = heroImageSet.findIndex(img => img === activeHeroImage);
    const prevIndex = (currentIndex - 1 + heroImageSet.length) % heroImageSet.length;
    setActiveHeroImage(heroImageSet[prevIndex]);
  };

  const handleNextImage = () => {
    const currentIndex = heroImageSet.findIndex(img => img === activeHeroImage);
    const nextIndex = (currentIndex + 1) % heroImageSet.length;
    setActiveHeroImage(heroImageSet[nextIndex]);
  };

  return (
    <div className="overflow-x-hidden">
      <Navbar isScrolled={scrolled} />
      <HeroSection
        currentImage={activeHeroImage}
        images={heroImageSet}
        onSelectImage={setActiveHeroImage}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />
      <MedicalServicesSection />
      <AboutUsExtended />
      <PhysioServices />
      <ServiceBanner />
      <WhyChooseUsSection />
      <MeetDoctors />
      <ConditionsTreat />
      <BlogSection />
      <MuscleSpasmCta />
      <Footer />
    </div>
  );
};

export default App;