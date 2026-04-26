import React, { useState, useEffect } from 'react';

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
                <a key={item} href="#" className={`${isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-black hover:text-emerald-600'} transition text-sm lg:text-base whitespace-nowrap ${item === "Home" ? 'bg-green-400  rounded-full p-4 px-6 text-white':''}`  }>
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
      title: "Medical Service", number: "01", desc: "It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page.", svg: <svg width="70" height="70" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="90" height="90" rx="20" fill="#000000" /><circle cx="50" cy="50" r="18" fill="none" stroke="#FF0000" stroke-width="4" /><rect x="48" y="20" width="4" height="10" fill="#FF0000" /><rect x="48" y="70" width="4" height="10" fill="#FF0000" /><rect x="20" y="48" width="10" height="4" fill="#FF0000" /><rect x="70" y="48" width="10" height="4" fill="#FF0000" /><rect x="46" y="40" width="8" height="20" fill="#FFFFFF" rx="2" /><rect x="40" y="46" width="20" height="8" fill="#FFFFFF" rx="2" /></svg>
    },
    {
      title: "24/7 Medicines", number: "02", desc: "It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page.", svg: <svg width="70" height="70" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" fill="#000000" />
        <rect x="43" y="25" width="14" height="50" fill="#FF0000" rx="3" />
        <rect x="25" y="43" width="50" height="14" fill="#FF0000" rx="3" />
        <polyline points="20,55 35,55 42,45 50,65 58,40 65,55 80,55"
          fill="none"
          stroke="#FFFFFF"
          stroke-width="2"
          stroke-linejoin="round"
          stroke-linecap="round" />
      </svg>
    },
    {
      title: "Best Doctor", number: "03", desc: "It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content OF A Page.", svg: <svg width="70" height="70" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" fill="#000000" />
        <circle cx="50" cy="35" r="12" fill="#FFFFFF" />
        <rect x="30" y="48" width="40" height="28" rx="8" fill="#FFFFFF" />
        <line x1="50" y1="48" x2="50" y2="76" stroke="#000000" stroke-width="2" />
        <path d="M38 55 C38 70, 62 70, 62 55" fill="none" stroke="#FF0000" stroke-width="2" />
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
  const leftBullets = ["Post-Injury Rehabilitation", "Sports Physiotherapy", "Orthopedic Physiotherapy", "Neurological Therapy"];
  const rightBullets = ["Manual Therapy & Exercise", "Pain Management Programs", "Home Visit Services", "Appointment & Consultation"];
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <span className="text-emerald-600 font-bold uppercase text-xs sm:text-sm tracking-wide">About Us</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 text-gray-900 leading-tight">Start Your Healthy Life Today With Us</h2>
            <p className="text-gray-600 mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed">
              Our expert physiotherapists use advanced techniques and personalized care to relieve pain, restore movement, and help you recover faster for a healthier, active life.
            </p>
            <div className="mt-6 sm:mt-8">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 sm:px-7 py-2 sm:py-3 rounded-full shadow transition text-sm sm:text-base">Read more →</button>
            </div>
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6">
            <ul className="space-y-2 sm:space-y-3">
              {leftBullets.map((item, i) => (
                <li key={i} className="flex items-center gap-2 sm:gap-3 text-gray-700 text-sm sm:text-base"><i className="fas fa-check-circle text-emerald-500 text-sm sm:text-base"></i><span>{item}</span></li>
              ))}
            </ul>
            <ul className="space-y-2 sm:space-y-3">
              {rightBullets.map((item, i) => (
                <li key={i} className="flex items-center gap-2 sm:gap-3 text-gray-700 text-sm sm:text-base"><i className="fas fa-check-circle text-emerald-500 text-sm sm:text-base"></i><span>{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// ----- Physiotherapy Services -----
const PhysioServices = () => {
  const servicesList = [
    { name: "Manual Therapy", desc: "Consectetur adipiscing.", num: "01" },
    { name: "Acupuncture", desc: "Consectetur adipiscing.", num: "02" },
    { name: "Pilates", desc: "Consectetur adipiscing.", num: "03" },
    { name: "Lymphtic Drainage", desc: "Consectetur adipiscing.", num: "04" }
  ];
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <span className="font-semibold uppercase tracking-wider text-xs sm:text-sm">Services</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-gray-900">Our Expert <br /><span className="text-emerald-600">Physiotherapy Services</span></h2>
          <div className="w-16 sm:w-24 h-1 bg-emerald-500 mx-auto mt-4 sm:mt-5 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7">
          {servicesList.map((srv) => (
            <div key={srv.num} className="bg-gray-50 rounded-xl sm:rounded-2xl p-5 sm:p-7 shadow-md hover:shadow-xl transition-all border-l-4 border-emerald-500">
              <div className="text-3xl sm:text-4xl font-black text-emerald-200">{srv.num}</div>
              <h4 className="text-lg sm:text-xl font-bold mt-3 text-gray-800">{srv.name}</h4>
              <p className="text-gray-500 mt-2 text-sm sm:text-base">{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ----- Banner: Providing excellent service -----
const ServiceBanner = () => (
  <section className="bg-gradient-to-r from-emerald-700 to-teal-600 text-white py-12 sm:py-16 md:py-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-5">Providing excellent service to our patients</h2>
      <p className="text-emerald-100 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4">
        One-On-One Treatments Without The Use Of Gym Equipment, Thus Fully Utilizing The Hands On Time With The Therapist And Ensuring Greater Homecare Outcomes.
      </p>
      <button className="mt-6 sm:mt-9 bg-white text-emerald-800 font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg hover:bg-gray-100 transition transform hover:scale-105 text-sm sm:text-base">Learn More →</button>
    </div>
  </section>
);

// ----- Why Choose Us -----
const WhyChooseUsSection = () => {
  const features = [
    { title: "More Experience", desc: "We offer a wide range of health services to meet all your needs.", icon: "fas fa-chart-line" },
    { title: "Seamless care", desc: "We offer a wide range of health services to meet all your needs.", icon: "fas fa-hands-helping" },
    { title: "The right answers?", desc: "We offer a wide range of health services to meet all your needs.", icon: "fas fa-question-circle" },
    { title: "Unparalleled expertise", desc: "We offer a wide range of health services to meet all your needs.", icon: "fas fa-microscope" }
  ];
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-12">
        <span className="font-bold uppercase text-xs sm:text-sm">Why Choose Us</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-gray-900">Why Choose Us for Your <br />Healthcare Needs</h2>
        <div className="w-16 sm:w-20 h-1 bg-emerald-500 mx-auto mt-3 sm:mt-4 rounded-full"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7">
        {features.map((f, i) => (
          <div key={i} className="bg-white rounded-xl p-5 sm:p-7 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="text-emerald-600 text-3xl sm:text-4xl mb-3 sm:mb-4"><i className={f.icon}></i></div>
            <h4 className="text-lg sm:text-xl font-bold text-gray-800">{f.title}</h4>
            <p className="text-gray-500 text-xs sm:text-sm mt-2 sm:mt-3">{f.desc}</p>
          </div>
        ))}
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
  const items = ["back, neck & Shoulder pain", "Hip And Knee pain", "How do i book my appointment ?", "What Should I Bring For My First Visit?", "Can i cancel my appointment"];
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">Conditions we treat with excellent care</h2>
        <div className="space-y-3 sm:space-y-4">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 flex justify-between items-center hover:bg-gray-100 transition">
              <span className="font-medium text-gray-800 text-sm sm:text-base">{item}</span>
              <i className="fas fa-chevron-right text-emerald-500 text-sm sm:text-base"></i>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ----- Blog Section -----
const BlogSection = () => (
  <section className="py-12 sm:py-16 md:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Your Health, Our Knowledge</h2>
      <div className="w-16 h-0.5 bg-emerald-500 mx-auto my-3 sm:my-4"></div>
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
        <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg bg-gray-50">
          <div className="h-36 sm:h-48 bg-emerald-200 flex items-center justify-center">
            <i className="fas fa-newspaper text-4xl sm:text-5xl text-emerald-700"></i>
          </div>
          <div className="p-5 sm:p-6">
            <p className="text-emerald-600 text-xs sm:text-sm font-semibold">OCT 27, 2025 - ALEX</p>
            <h4 className="text-base sm:text-lg md:text-xl font-bold mt-2">Expert Insights on Medical Physiotherapy Wellness</h4>
          </div>
        </div>
        <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg bg-gray-50">
          <div className="h-36 sm:h-48 bg-teal-200 flex items-center justify-center">
            <i className="fas fa-brain text-4xl sm:text-5xl text-teal-700"></i>
          </div>
          <div className="p-5 sm:p-6">
            <p className="text-emerald-600 text-xs sm:text-sm font-semibold">OCT 27, 2025 - ALEX</p>
            <h4 className="text-base sm:text-lg md:text-xl font-bold mt-2">Expert Insights on Medical Physiotherapy Wellness</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ----- Muscle Spasm CTA -----
const MuscleSpasmCta = () => (
  <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white text-center">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Delivering effective <br />muscle spasm treatment</h2>
    <button className="bg-white text-emerald-800 font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-xl hover:scale-105 transition text-sm sm:text-base">Book Appointment →</button>
  </section>
);

// ----- Footer -----
const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 pt-12 sm:pt-16 pb-6 sm:pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
      <div className="col-span-1 sm:col-span-2 lg:col-span-1">
        <div className="flex items-center gap-2 text-white text-xl sm:text-2xl font-bold">
          <i className="fas fa-hand-holding-heart text-emerald-500"></i>
          <span>Clinic Master</span>
        </div>
        <p className="text-xs sm:text-sm mt-3">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam.</p>
        <div className="flex gap-3 sm:gap-4 mt-4 text-white text-lg sm:text-xl">
          <i className="fab fa-twitter hover:text-emerald-400 cursor-pointer"></i>
          <i className="fab fa-linkedin-in hover:text-emerald-400 cursor-pointer"></i>
          <i className="fab fa-instagram hover:text-emerald-400 cursor-pointer"></i>
        </div>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-3 text-base sm:text-lg">Product</h4>
        <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
          <li className="hover:text-white cursor-pointer">Features</li>
          <li className="hover:text-white cursor-pointer">Pricing</li>
          <li className="hover:text-white cursor-pointer">Case studies</li>
          <li className="hover:text-white cursor-pointer">Reviews</li>
          <li className="hover:text-white cursor-pointer">Updates</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-3 text-base sm:text-lg">Company</h4>
        <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Contact us</li>
          <li className="hover:text-white cursor-pointer">Careers</li>
          <li className="hover:text-white cursor-pointer">Culture</li>
          <li className="hover:text-white cursor-pointer">Blog</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-3 text-base sm:text-lg">Support</h4>
        <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
          <li className="hover:text-white cursor-pointer">Getting started</li>
          <li className="hover:text-white cursor-pointer">Help center</li>
          <li className="hover:text-white cursor-pointer">Server status</li>
          <li className="hover:text-white cursor-pointer">Report a bug</li>
          <li className="hover:text-white cursor-pointer">Chat support</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-3 text-base sm:text-lg">Important Updates</h4>
        <p className="text-xs sm:text-sm">Get our latest contents right into your inbox</p>
        <div className="flex mt-3 flex-wrap gap-2">
          <input type="email" placeholder="Enter your email" className="px-3 sm:px-4 py-2 rounded-full text-gray-800 w-full text-xs sm:text-sm" />
          <button className="bg-emerald-600 px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap">Subscribe Now</button>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 flex flex-wrap justify-between items-center text-xs sm:text-sm max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-3">
      <span>© Copyright 2026 By DexignZone. All Rights Reserved.</span>
      <div className="flex items-center gap-1">
        <i className="fas fa-star text-yellow-400 text-xs sm:text-sm"></i>
        <i className="fas fa-star text-yellow-400 text-xs sm:text-sm"></i>
        <i className="fas fa-star text-yellow-400 text-xs sm:text-sm"></i>
        <i className="fas fa-star text-yellow-400 text-xs sm:text-sm"></i>
        <i className="fas fa-star-half-alt text-yellow-400 text-xs sm:text-sm"></i>
        <span className="text-gray-400 ml-2 text-xs sm:text-sm">(4.8) 12k+ ratings on google</span>
      </div>
    </div>
  </footer>
);

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