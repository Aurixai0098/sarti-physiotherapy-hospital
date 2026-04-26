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

// ----- NAVBAR -----
const Navbar = ({ isScrolled }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <i className={`fas fa-hand-holding-heart text-2xl ${isScrolled ? 'text-emerald-600' : 'text-white drop-shadow-md'}`}></i>
            <span className={`font-extrabold text-5xl tracking-tight ${isScrolled ? 'text-gray-800' : 'text-white drop-shadow-md'}`}>
            SARTI <span className="text-emerald-400">PHYSIOTHERAPY</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-7  bg-white p-3 rounded-full px-5  font-medium">
            {['Home', 'Pages', 'Services', 'Blogs', 'Contact Us'].map(item => (
              <a key={item} href="#" className={`${isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-black hover:text-emerald-200'} transition`}>{item}</a>
            ))}
          </div>
            <button className={`${isScrolled ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-emerald-500 hover:bg-emerald-600'} text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md transition`}>Appointment</button>
          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)} className={`${isScrolled ? 'text-gray-800' : 'text-white'} text-2xl`}>
              <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col space-y-3 bg-white/95 rounded-2xl p-5 shadow-xl backdrop-blur-sm">
            {['Home', 'Pages', 'Services', 'Blogs', 'Contact Us'].map(item => <a key={item} href="#" className="text-gray-800 font-medium hover:text-emerald-600">{item}</a>)}
            <button className="bg-emerald-600 text-white px-5 py-2 rounded-full w-fit">Appointment</button>
          </div>
        )}
      </div>
    </nav>
  );
};

// ----- HERO SECTION with Thumbnail Strip inside (bottom right) + navigation buttons -----
const HeroSection = ({ currentImage, images, onSelectImage, onPrev, onNext }) => {
  const [currentThumbIndex, setCurrentThumbIndex] = useState(0);
  
  // Number of thumbnails to show at once (for horizontal scroll/slide)
  const visibleThumbs = 4;
  const totalThumbs = images.length;
  const maxIndex = Math.max(0, totalThumbs - visibleThumbs);
  
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
      {/* <div className="absolute left-6 md:left-12 bottom-8 md:bottom-12 text-white/30 font-black text-7xl md:text-9xl select-none pointer-events-none z-0">01</div>
      <div className="absolute right-6 md:right-12 top-24 md:top-32 text-white/20 font-black text-7xl md:text-9xl select-none pointer-events-none z-0">08</div> */}
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32 z-10 w-full">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-xl">
            Physiotherapy <br/><span className="text-emerald-300">For Everyone</span>
          </h1>
          <p className="text-white/95 text-lg md:text-xl mt-6 max-w-xl backdrop-blur-sm bg-black/20 p-3 rounded-2xl inline-block">
            Experienced staff is dedicated to improving our patients' physical health and enhancing their mobility.
          </p>
          <div className="mt-8">
            <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-8 py-3 rounded-full shadow-xl transition transform hover:scale-105 flex items-center gap-2">
              Get Started <i className="fas fa-arrow-right text-sm"></i>
            </button>
          </div>
          <div className="flex flex-wrap gap-10 mt-12">
            <div>
              <span className="text-4xl md:text-5xl font-black text-emerald-300">95%</span>
              <span className="text-white/90 block text-sm font-semibold mt-1">Wellness Restored<br/>Through Therapy</span>
            </div>
            <div>
              <span className="text-4xl md:text-5xl font-black text-emerald-300">10+</span>
              <span className="text-white/90 block text-sm font-semibold mt-1">Years of Successful<br/>Work and Dedicated</span>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail Strip - Bottom Right inside Hero Section */}
      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-20   rounded-2xl p-3  ">
        <div className="flex items-center gap-2">
          {/* Previous Button */}
          <button 
            onClick={handlePrevThumbs}
            disabled={currentThumbIndex === 0}
            className={`w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition disabled:opacity-30 disabled:cursor-not-allowed`}
          >
            <i className="fas fa-chevron-left text-sm"></i>
          </button>
          
          {/* Thumbnail Images */}
          <div className="flex gap-2 overflow-hidden">
            {visibleImages.map((img, idx) => (
              <div 
                key={currentThumbIndex + idx}
                onClick={() => onSelectImage(img)}
                className={`cursor-pointer   overflow-hidden w-32 h-32 md:w-40 md:h-20 transition-all duration-200 hover:scale-95    ${
                  currentImage === img ? '  scale-105' : 'opacity-80 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`thumbnail ${currentThumbIndex + idx + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          
          {/* Next Button */}
          <button 
            onClick={handleNextThumbs}
            disabled={currentThumbIndex >= maxIndex}
            className={`w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition disabled:opacity-30 disabled:cursor-not-allowed`}
          >
            <i className="fas fa-chevron-right text-sm"></i>
          </button>
        </div>
        
        {/* Slide indicator dots */}
        <div className="flex justify-center gap-1 mt-2">
          {Array.from({ length: Math.ceil(totalThumbs / visibleThumbs) }).map((_, i) => (
            <div 
              key={i}
              onClick={() => setCurrentThumbIndex(i * visibleThumbs)}
              className={`h-1 rounded-full cursor-pointer transition-all ${
                Math.floor(currentThumbIndex / visibleThumbs) === i 
                  ? 'w-4 bg-emerald-400' 
                  : 'w-2 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// ----- Medical Service, 24/7 Medicines, Best Doctor -----
const MedicalServicesSection = () => {
  const services = [
    { title: "Medical Service", number: "01", desc: "It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page." },
    { title: "24/7 Medicines", number: "02", desc: "It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page." },
    { title: "Best Doctor", number: "03", desc: "It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content OF A Page." }
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-gray-50 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 group">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{service.title}</h3>
              <div className="text-5xl font-black text-emerald-200 my-3">{service.number}</div>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-emerald-600 font-bold uppercase text-sm tracking-wide">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-gray-900 leading-tight">Start Your Healthy Life Today With Us</h2>
            <p className="text-gray-600 mt-5 text-lg leading-relaxed">
              Our expert physiotherapists use advanced techniques and personalized care to relieve pain, restore movement, and help you recover faster for a healthier, active life.
            </p>
            <div className="mt-8">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-7 py-3 rounded-full shadow transition">Read more →</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              {leftBullets.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700"><i className="fas fa-check-circle text-emerald-500"></i><span>{item}</span></li>
              ))}
            </ul>
            <ul className="space-y-3">
              {rightBullets.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700"><i className="fas fa-check-circle text-emerald-500"></i><span>{item}</span></li>
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className=" font-semibold uppercase tracking-wider text-sm">Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-gray-900">Our Expert <br/><span className="text-emerald-600">Physiotherapy Services</span></h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-5 rounded-full"></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {servicesList.map((srv) => (
            <div key={srv.num} className="bg-gray-50 rounded-2xl p-7 shadow-md hover:shadow-xl transition-all border-l-4 border-emerald-500">
              <div className="text-4xl font-black text-emerald-200">{srv.num}</div>
              <h4 className="text-xl font-bold mt-3 text-gray-800">{srv.name}</h4>
              <p className="text-gray-500 mt-2">{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ----- Banner: Providing excellent service -----
const ServiceBanner = () => (
  <section className="  text-white py-20">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-5">Providing excellent service to our patients</h2>
      <p className="text-emerald-100 text-lg max-w-3xl mx-auto leading-relaxed">
        One-On-One Treatments Without The Use Of Gym Equipment, Thus Fully Utilizing The Hands On Time With The Therapist And Ensuring Greater Homecare Outcomes.
      </p>
      <button className="mt-9 bg-white text-emerald-800 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition transform hover:scale-105">Learn More →</button>
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <span className="  font-bold uppercase text-sm">Why Choose Us</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 text-gray-900">Why Choose Us for Your <br/>Healthcare Needs</h2>
        <div className="w-20 h-1  mx-auto mt-4 rounded-full"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-7">
        {features.map((f,i) => (
          <div key={i} className="bg-white rounded-xl p-7 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="text-emerald-600 text-4xl mb-4"><i className={f.icon}></i></div>
            <h4 className="text-xl font-bold text-gray-800">{f.title}</h4>
            <p className="text-gray-500 text-sm mt-3">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// ----- Meet Doctors -----
const MeetDoctors = () => (
  <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-6 text-center mb-10"><h2 className="text-3xl md:text-4xl font-bold">Meet Our Expert Doctors</h2></div>
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 bg-gray-50 rounded-3xl p-8 shadow-md items-center">
      <div className="flex justify-center"><div className="bg-emerald-100 rounded-full p-10 w-60 h-60 flex items-center justify-center"><i className="fas fa-user-md text-emerald-700 text-6xl"></i></div></div>
      <div><h3 className="text-2xl font-bold text-gray-800">Dr. Rachel Moore</h3><p className="text-emerald-600 font-medium">Physiotherapist</p><p className="text-gray-600 mt-4">Our expert physiotherapists are dedicated to restoring your movement, relieving pain, and improving overall physical health. They provide personalized care and advanced therapies.</p><div className="flex gap-4 mt-6 text-gray-600 text-xl"><i className="fab fa-linkedin-in hover:text-emerald-600 cursor-pointer"></i><i className="fab fa-twitter hover:text-emerald-600 cursor-pointer"></i><i className="fab fa-facebook-f hover:text-emerald-600 cursor-pointer"></i></div><button className="mt-6 bg-emerald-600 text-white px-6 py-2 rounded-full shadow">Appointment</button></div>
    </div>
  </section>
);

// ----- Conditions We Treat -----
const ConditionsTreat = () => {
  const items = ["back, neck & Shoulder pain", "Hip And Knee pain", "How do i book my appointment ?", "What Should I Bring For My First Visit?", "Can i cancel my appointment"];
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6"><h2 className="text-3xl font-bold text-center mb-10">Conditions we treat with excellent care</h2><div className="space-y-4">{items.map((item,i)=>(<div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex justify-between items-center hover:bg-gray-100 transition"><span className="font-medium text-gray-800">{item}</span><i className="fas fa-chevron-right text-emerald-500"></i></div>))}</div></div>
    </section>
  );
};

// ----- Blog Section -----
const BlogSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto text-center"><h2 className="text-4xl font-bold">Your Health, Our Knowledge</h2><div className="w-16 h-0.5 bg-emerald-500 mx-auto my-4"></div><div className="grid md:grid-cols-2 gap-8 mt-12 px-6"><div className="rounded-2xl overflow-hidden shadow-lg bg-gray-50"><div className="h-48 bg-emerald-200 flex items-center justify-center"><i className="fas fa-newspaper text-5xl text-emerald-700"></i></div><div className="p-6"><p className="text-emerald-600 text-sm font-semibold">OCT 27, 2025 - ALEX</p><h4 className="text-xl font-bold mt-2">Expert Insights on Medical Physiotherapy Wellness</h4></div></div><div className="rounded-2xl overflow-hidden shadow-lg bg-gray-50"><div className="h-48 bg-teal-200 flex items-center justify-center"><i className="fas fa-brain text-5xl text-teal-700"></i></div><div className="p-6"><p className="text-emerald-600 text-sm font-semibold">OCT 27, 2025 - ALEX</p><h4 className="text-xl font-bold mt-2">Expert Insights on Medical Physiotherapy Wellness</h4></div></div></div></div>
  </section>
);

// ----- Muscle Spasm CTA -----
const MuscleSpasmCta = () => (
  <section className="py-20 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white text-center">
    <h2 className="text-4xl font-bold mb-4">Delivering effective <br/>muscle spasm treatment</h2>
    <button className="bg-white text-emerald-800 font-bold px-8 py-3 rounded-full shadow-xl hover:scale-105 transition">Book Appointment →</button>
  </section>
);

// ----- Footer -----
const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">
      <div><div className="flex items-center gap-2 text-white text-2xl font-bold"><i className="fas fa-hand-holding-heart text-emerald-500"></i>Clinic Master</div><p className="text-sm mt-3">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam.</p><div className="flex gap-4 mt-4 text-white text-xl"><i className="fab fa-twitter hover:text-emerald-400 cursor-pointer"></i><i className="fab fa-linkedin-in hover:text-emerald-400"></i><i className="fab fa-instagram hover:text-emerald-400"></i></div></div>
      <div><h4 className="text-white font-semibold mb-3">Product</h4><ul className="space-y-2 text-sm"><li>Features</li><li>Pricing</li><li>Case studies</li><li>Reviews</li><li>Updates</li></ul></div>
      <div><h4 className="text-white font-semibold mb-3">Company</h4><ul className="space-y-2 text-sm"><li>About</li><li>Contact us</li><li>Careers</li><li>Culture</li><li>Blog</li></ul></div>
      <div><h4 className="text-white font-semibold mb-3">Support</h4><ul className="space-y-2 text-sm"><li>Getting started</li><li>Help center</li><li>Server status</li><li>Report a bug</li><li>Chat support</li></ul></div>
      <div><h4 className="text-white font-semibold mb-3">Important Updates</h4><p className="text-sm">Get our latest contents right into your inbox</p><div className="flex mt-3 flex-wrap gap-2"><input type="email" placeholder="Enter your email address" className="px-4 py-2 rounded-full text-gray-800 w-full text-sm" /><button className="bg-emerald-600 px-5 py-2 rounded-full text-sm font-semibold">Subscribe Now</button></div></div>
    </div>
    <div className="border-t border-gray-800 mt-12 pt-6 flex flex-wrap justify-between items-center text-sm max-w-7xl mx-auto px-6"><span>© Copyright 2026 By DexignZone. All Rights Reserved.</span><div className="flex items-center gap-1 text-yellow-400"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><span className="text-gray-400 ml-2">(4.8) 12k+ ratings on google</span></div></div>
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

  // Helper functions for prev/next (optional for main hero, but included)
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