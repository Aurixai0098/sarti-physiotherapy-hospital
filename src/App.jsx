import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';

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

// Service images mapping
const serviceImages = {
  "Orthopedic Physiotherapy": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600",
  "Sports Injury Rehabilitation": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600",
  "Neurological Rehabilitation": "https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&q=80&w=600",
  "Post-Surgical & Fracture Rehabilitation": "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=600",
  "Pediatric Physiotherapy": "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=600",
  "Geriatric Physiotherapy": "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600",
  "Electrotherapy Services": "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=600",
  "Manual Therapy": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600",
  "Exercise Therapy": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600",
  "Cupping Therapy": "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=600",
  "Advanced Pain Management": "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=600",
  "Lifestyle & Wellness": "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600",
  "Home Care Services": "https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&q=80&w=600"
};

// Service video URLs (placeholder - replace with actual videos)
const serviceVideos = {
  "Orthopedic Physiotherapy": "https://res.cloudinary.com/dfiyubngf/video/upload/v1777199277/samples/cld-sample-video.mp4",
  "Sports Injury Rehabilitation": "https://res.cloudinary.com/dfiyubngf/video/upload/v1777199277/samples/cld-sample-video.mp4",
  "Neurological Rehabilitation": "https://res.cloudinary.com/dfiyubngf/video/upload/v1777199277/samples/cld-sample-video.mp4",
  "Post-Surgical & Fracture Rehabilitation": "https://res.cloudinary.com/dfiyubngf/video/upload/v1777199277/samples/cld-sample-video.mp4",
  "Pediatric Physiotherapy": "https://res.cloudinary.com/dfiyubngf/video/upload/v1777199277/samples/cld-sample-video.mp4",
  "Geriatric Physiotherapy": "https://res.cloudinary.com/dfiyubngf/video/upload/v1777199277/samples/cld-sample-video.mp4",
  "Electrotherapy Services": "https://res.cloudinary.com/dfiyubngf/video/upload/v1777199277/samples/cld-sample-video.mp4",
  "Manual Therapy": "https://res.cloudinary.com/dfiyubngf/video/upload/v1777199277/samples/cld-sample-video.mp4",
  "Exercise Therapy": "https://res.cloudinary.com/dfiyubngf/video/upload/v1777199277/samples/cld-sample-video.mp4",
  "Cupping Therapy": "https://res.cloudinary.com/dfiyubngf/video/upload/v1777199277/samples/cld-sample-video.mp4",
  "Advanced Pain Management": "https://res.cloudinary.com/dfiyubngf/video/upload/v1777199277/samples/cld-sample-video.mp4",
  "Lifestyle & Wellness": "https://res.cloudinary.com/dfiyubngf/video/upload/v1777199277/samples/cld-sample-video.mp4",
  "Home Care Services": "https://res.cloudinary.com/dfiyubngf/video/upload/v1777199277/samples/cld-sample-video.mp4"
};

// ----- VIDEO MODAL COMPONENT -----
const VideoModal = ({ showVideo, setShowVideo, videoUrl, videoTitle }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.play();
    }
  }, [showVideo]);

  if (!showVideo) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black bg-opacity-80 p-4">
      <div className="bg-black rounded-2xl max-w-4xl w-full relative overflow-hidden">
        <button 
          onClick={() => {
            if (videoRef.current) videoRef.current.pause();
            setShowVideo(false);
          }} 
          className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 text-2xl bg-black/50 w-10 h-10 rounded-full flex items-center justify-center"
        >
          ✕
        </button>
        <div className="p-2">
          <h3 className="text-white text-lg font-semibold mb-2 px-2">{videoTitle}</h3>
          <video 
            ref={videoRef}
            src={videoUrl} 
            controls 
            className="w-full rounded-xl"
            playsInline
          />
        </div>
      </div>
    </div>
  );
};

// ----- APPOINTMENT MODAL COMPONENT -----
const AppointmentModal = ({ showModal, setShowModal, showQR, setShowQR, prefillHospital = "" }) => {
  const [formData, setFormData] = useState({
    name: "", age: "", gender: "", address: "", hospital: prefillHospital,
    homeVisit: false, services: [], date: "", time: "", paymentMethod: "offline",
  });

  // Update hospital when prefill changes
  useEffect(() => {
    if (prefillHospital) {
      setFormData(prev => ({ ...prev, hospital: prefillHospital }));
    }
  }, [prefillHospital]);

  const serviceOptions = [
    "Neurological Rehabilitation", "Manual Therapy (COMT)", "MET (Muscle Energy Technique)",
    "MFR (Myofascial Release)", "PNF (Proprioceptive Neuromuscular Facilitation)",
    "Sports Taping", "Voodoo Flossing", "Osteopathy (UK)", "Trigger Point Therapy",
    "Dry Needling", "Cupping Therapy", "Post-surgical Rehab", "Sports Injury Management",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleServiceChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service) ? prev.services.filter((s) => s !== service) : [...prev.services, service],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.paymentMethod === "offline") {
      sendWhatsAppMessage();
    } else {
      setShowQR(true);
    }
  };

  const sendWhatsAppMessage = () => {
    const doctorNumber = "919672569151";
    const message = `New Appointment Request%0A%0A*Patient Details*%0AName: ${formData.name}%0AAge: ${formData.age}%0AGender: ${formData.gender}%0AAddress: ${formData.address}%0AHospital: ${formData.hospital}%0AHome Visit: ${formData.homeVisit ? "Yes" : "No"}%0A%0A*Services Requested*%0A${formData.services.join(", ")}%0A%0A*Appointment Time*%0ADate: ${formData.date}%0ATime: ${formData.time}%0A%0APayment Method: Offline (at clinic/home)`;
    window.open(`https://wa.me/${doctorNumber}?text=${message}`, "_blank");
    setShowModal(false);
    resetForm();
  };

  const resetForm = () => {
    setFormData({ name: "", age: "", gender: "", address: "", hospital: prefillHospital || "", homeVisit: false, services: [], date: "", time: "", paymentMethod: "offline" });
    setShowQR(false);
  };

  if (!showModal && !showQR) return null;

  return (
    <>
      {showModal && !showQR && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-xl relative">
            <button onClick={() => { setShowModal(false); resetForm(); }} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
            <h3 className="text-2xl font-bold mb-4 text-center">Book Appointment</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
                <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
                <select name="gender" value={formData.gender} onChange={handleChange} required className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-emerald-400">
                  <option value="">Select Gender</option><option value="Male">Male</option><option value="Female">Female</option><option value="Other">Other</option>
                </select>
                <input type="text" name="hospital" placeholder="Hospital/Clinic Name" value={formData.hospital} onChange={handleChange} readOnly={!!prefillHospital} className={`border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 ${prefillHospital ? 'bg-gray-100' : ''}`} />
              </div>
              <textarea name="address" placeholder="Full Address" value={formData.address} onChange={handleChange} required rows="2" className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-emerald-400" />
              <div className="flex items-center gap-2">
                <input type="checkbox" name="homeVisit" checked={formData.homeVisit} onChange={handleChange} id="homeVisit" />
                <label htmlFor="homeVisit">I want the doctor to come to my home</label>
              </div>
              <div>
                <label className="block font-medium mb-2">Select Services (multiple)</label>
                <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto border rounded-lg p-2">
                  {serviceOptions.map((service) => (
                    <label key={service} className="flex items-center gap-2 text-sm">
                      <input type="checkbox" checked={formData.services.includes(service)} onChange={() => handleServiceChange(service)} />{service}
                    </label>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="date" name="date" value={formData.date} onChange={handleChange} required className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
                <input type="time" name="time" value={formData.time} onChange={handleChange} required className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
              </div>
              <div>
                <label className="block font-medium mb-2">Payment Method</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2"><input type="radio" name="paymentMethod" value="offline" checked={formData.paymentMethod === "offline"} onChange={handleChange} />Offline (Cash / Card at clinic or home)</label>
                  <label className="flex items-center gap-2"><input type="radio" name="paymentMethod" value="online" checked={formData.paymentMethod === "online"} onChange={handleChange} />Online (UPI / QR)</label>
                </div>
              </div>
              <button type="submit" className="w-full bg-emerald-500 text-white py-2 rounded-full hover:bg-emerald-600 transition font-semibold">
                {formData.paymentMethod === "offline" ? "Submit & Send to WhatsApp" : "Proceed to Payment"}
              </button>
            </form>
          </div>
        </div>
      )}
      {showQR && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 text-center relative">
            <button onClick={() => { setShowQR(false); setShowModal(false); resetForm(); }} className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
            <h3 className="text-xl font-bold mb-3">Scan to Pay Online</h3>
            <div className="flex justify-center mb-4">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=hospital@upi&pn=City%20Hospital&am=500&cu=INR" alt="Hospital Payment QR Code" className="w-48 h-48" />
            </div>
            <p className="text-gray-600 text-sm">Scan this QR code with any UPI app (Google Pay, PhonePe, Paytm) to pay the consultation fee.<br />After successful payment, our team will confirm your appointment.</p>
            <button onClick={() => { setShowQR(false); setShowModal(false); resetForm(); }} className="mt-4 bg-emerald-500 text-white px-5 py-2 rounded-full">Done</button>
          </div>
        </div>
      )}
    </>
  );
};
// ----- NAVBAR -----
const Navbar = ({ isScrolled, onOpenAppointment }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setMobileMenuOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) { document.body.style.overflow = 'hidden'; } else { document.body.style.overflow = 'unset'; }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  useEffect(() => { setMobileMenuOpen(false); }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <i className={`fas fa-hand-holding-heart text-xl sm:text-2xl ${isScrolled ? 'text-emerald-600' : 'text-white drop-shadow-md'}`}></i>
              <span className={`font-extrabold text-2xl md:text-4xl tracking-tight ${isScrolled ? 'text-gray-800' : 'text-white drop-shadow-md'}`}>
                SARTI <span className="text-emerald-400">PHYSIOTHERAPY</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-2 lg:space-x-4 bg-white/90 backdrop-blur-sm p-1.5 rounded-full px-2 lg:px-3 font-medium">
              {navLinks.map(item => (
                <NavLink key={item.path} to={item.path} className={({ isActive }) =>
                  `transition text-sm lg:text-base whitespace-nowrap px-4 py-2.5 rounded-full ${isActive ? 'bg-emerald-500 text-white' : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'}`
                }>
                  {item.name}
                </NavLink>
              ))}
            </div>

            <button onClick={onOpenAppointment} className={`hidden md:block ${isScrolled ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-emerald-500 hover:bg-emerald-600'} text-white px-5 lg:px-6 py-3 rounded-full text-sm font-semibold shadow-md transition whitespace-nowrap`}>
              Appointment
            </button>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`md:hidden relative z-50 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${mobileMenuOpen ? 'bg-white/20 backdrop-blur-sm' : ''}`} aria-label="Toggle menu">
              <div className="relative w-6 h-5">
                <span className={`absolute left-0 top-0 w-full h-0.5 rounded-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 top-2 bg-white' : isScrolled ? 'bg-gray-800' : 'bg-white'}`}></span>
                <span className={`absolute left-0 top-2 w-full h-0.5 rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : isScrolled ? 'bg-gray-800' : 'bg-white'}`}></span>
                <span className={`absolute left-0 bottom-0 w-full h-0.5 rounded-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 top-2 bg-white' : isScrolled ? 'bg-gray-800' : 'bg-white'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300 md:hidden ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setMobileMenuOpen(false)} />

      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transition-transform duration-300 ease-out md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-5 pb-6 px-6">
          <div onClick={() => setMobileMenuOpen(false)} className='w-full flex justify-end cursor-pointer text-3xl text-gray-500 hover:text-gray-800'>✕</div>
          <div className="flex items-center gap-2 mb-8 pb-4 border-b border-gray-100">
            <i className="fas fa-hand-holding-heart text-emerald-600 text-2xl"></i>
            <span className="font-extrabold text-xl tracking-tight text-gray-800">SARTI <span className="text-emerald-600">PHYSIOTHERAPY</span></span>
          </div>
          <div className="flex flex-col space-y-1">
            {navLinks.map(item => (
              <NavLink key={item.path} to={item.path} onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `px-4 py-3 rounded-xl transition-all duration-200 text-base font-medium ${isActive ? 'bg-emerald-500 text-white' : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'}`}>
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100">
            <button onClick={() => { setMobileMenuOpen(false); onOpenAppointment(); }} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition transform hover:scale-105">Appointment</button>
          </div>
          <div className="mt-auto pt-8">
            <div className="flex justify-center gap-5 text-gray-400 text-xl">
              <i className="fab fa-facebook-f hover:text-emerald-600 cursor-pointer transition"></i>
              <i className="fab fa-twitter hover:text-emerald-600 cursor-pointer transition"></i>
              <i className="fab fa-instagram hover:text-emerald-600 cursor-pointer transition"></i>
              <i className="fab fa-linkedin-in hover:text-emerald-600 cursor-pointer transition"></i>
            </div>
            <p className="text-center text-xs text-gray-400 mt-4">© 2026 SARTI PHYSIOTHERAPY</p>
          </div>
        </div>
      </div>
    </>
  );
};

// ----- HERO SECTION -----
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

  useEffect(() => { setCurrentThumbIndex(prev => Math.min(prev, maxIndex)); }, [visibleThumbs, maxIndex]);

  const handlePrevThumbs = () => setCurrentThumbIndex(prev => Math.max(0, prev - 1));
  const handleNextThumbs = () => setCurrentThumbIndex(prev => Math.min(maxIndex, prev + 1));
  const visibleImages = images.slice(currentThumbIndex, currentThumbIndex + visibleThumbs);

  return (
    <section className="relative w-full min-h-[100vh] flex items-center hero-transition"
      style={{ backgroundImage: `linear-gradient(105deg, rgba(0, 30, 20, 0.65) 0%, rgba(0, 0, 0, 0.45) 60%, rgba(0, 50, 30, 0.55) 100%), url(${currentImage})`, backgroundSize: 'cover', backgroundPosition: 'center 28%', backgroundRepeat: 'no-repeat' }}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-28 lg:py-32 z-10 w-full">
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight drop-shadow-xl">Physiotherapy <br /><span className="text-emerald-300">For Everyone</span></h1>
          <p className="text-white/95 text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-6 max-w-xl backdrop-blur-sm bg-black/20 p-2 sm:p-3 rounded-2xl inline-block">Experienced staff is dedicated to improving our patients physical health and enhancing their mobility.</p>
          <div className="mt-6 sm:mt-8">
            <Link to="/services" className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full shadow-xl transition transform hover:scale-105 flex items-center gap-2 text-sm sm:text-base inline-flex">Get Started <i className="fas fa-arrow-right text-xs sm:text-sm"></i></Link>
          </div>
          <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-10 mt-8 sm:mt-12">
            <div><span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-emerald-300">95%</span><span className="text-white/90 block text-xs sm:text-sm font-semibold mt-1">Wellness Restored<br />Through Therapy</span></div>
            <div><span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-emerald-300">10+</span><span className="text-white/90 block text-xs sm:text-sm font-semibold mt-1">Years of Successful<br />Work and Dedicated</span></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 z-20">
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-1 sm:gap-2 rounded-xl p-2 sm:p-3">
            <button onClick={handlePrevThumbs} disabled={currentThumbIndex === 0} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition disabled:opacity-30 disabled:cursor-not-allowed text-xs sm:text-sm"><i className="fas fa-chevron-left"></i></button>
            <div className="flex overflow-hidden">
              {visibleImages.map((img, idx) => (
                <div key={currentThumbIndex + idx} onClick={() => onSelectImage(img)} className={`cursor-pointer overflow-hidden transition-all duration-200 hover:scale-95 ${currentImage === img ? 'scale-90' : 'opacity-80 hover:opacity-100'}`} style={{ width: 'clamp(45px, 12vw, 100px)', height: 'clamp(35px, 8vw, 70px)' }}>
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <button onClick={handleNextThumbs} disabled={currentThumbIndex >= maxIndex} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition disabled:opacity-30 disabled:cursor-not-allowed text-xs sm:text-sm"><i className="fas fa-chevron-right"></i></button>
          </div>
          <div className="flex justify-center gap-1">
            {Array.from({ length: Math.ceil(totalThumbs / visibleThumbs) }).map((_, i) => (
              <div key={i} onClick={() => setCurrentThumbIndex(i * visibleThumbs)} className={`h-1 rounded-full cursor-pointer transition-all ${Math.floor(currentThumbIndex / visibleThumbs) === i ? 'w-3 sm:w-4 bg-emerald-400' : 'w-1.5 sm:w-2 bg-white/50 hover:bg-white/70'}`} />
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
    { title: "Medical Service", number: "01", desc: "Comprehensive medical care with advanced diagnostic tools and personalized treatment plans for optimal recovery.", svg: <svg width="70" height="70" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="90" height="90" rx="20" fill="#000000" /><circle cx="50" cy="50" r="18" fill="none" stroke="#FF0000" strokeWidth="4" /><rect x="48" y="20" width="4" height="10" fill="#FF0000" /><rect x="48" y="70" width="4" height="10" fill="#FF0000" /><rect x="20" y="48" width="10" height="4" fill="#FF0000" /><rect x="70" y="48" width="10" height="4" fill="#FF0000" /><rect x="46" y="40" width="8" height="20" fill="#FFFFFF" rx="2" /><rect x="40" y="46" width="20" height="8" fill="#FFFFFF" rx="2" /></svg> },
    { title: "PHYSIOTHERAPY", number: "02", desc: "Expert physiotherapy treatments using modern techniques to restore movement, reduce pain, and improve quality of life.", svg: <svg width="70" height="70" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="45" fill="#000000" /><rect x="43" y="25" width="14" height="50" fill="#FF0000" rx="3" /><rect x="25" y="43" width="50" height="14" fill="#FF0000" rx="3" /><polyline points="20,55 35,55 42,45 50,65 58,40 65,55 80,55" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" /></svg> },
    { title: "Best Doctor", number: "03", desc: "Our highly qualified doctors provide compassionate care with years of experience in physiotherapy and rehabilitation.", svg: <svg width="70" height="70" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="45" fill="#000000" /><circle cx="50" cy="35" r="12" fill="#FFFFFF" /><rect x="30" y="48" width="40" height="28" rx="8" fill="#FFFFFF" /><line x1="50" y1="48" x2="50" y2="76" stroke="#000000" strokeWidth="2" /><path d="M38 55 C38 70, 62 70, 62 55" fill="none" stroke="#FF0000" strokeWidth="2" /><circle cx="62" cy="58" r="3" fill="#FF0000" /><rect x="46" y="58" width="8" height="16" fill="#FF0000" rx="1" /><rect x="42" y="62" width="16" height="8" fill="#FF0000" rx="1" /></svg> }
  ];
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-gray-50 rounded-2xl hover:bg-emerald-500 hover:text-white sm:rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 duration-300 group">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">{service.title}</h3>
              <div className="w-full flex flex-row h-10 items-center gap-4"><hr className="w-full border-gray-300 group-hover:border-white/50" />{service.svg}</div>
              <div className="text-4xl sm:text-5xl font-black my-3 text-gray-200 group-hover:text-white/30">{service.number}</div>
              <p className="leading-relaxed text-sm sm:text-base text-gray-600 group-hover:text-white/90">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ----- ABOUT US Extended -----
const AboutUsExtended = () => {
  const allBullets = ["Post-Injury Rehabilitation", "Manual Therapy & Exercise", "Sports Physiotherapy", "Pain Management Programs", "Orthopedic Physiotherapy", "Home Visit Services", "Neurological Therapy", "Appointment & Consultation"];
  const aboutImages = ["https://clinicmaster.dexignzone.com/tailwind/physiotherapy/images/about/img1.webp", "https://clinicmaster.dexignzone.com/tailwind/physiotherapy/images/about/img2.webp", "https://clinicmaster.dexignzone.com/tailwind/physiotherapy/images/about/img3.webp"];

  return (
    <section className="py-16 md:py-24 bg-[#f8fafe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative w-full aspect-square max-w-[550px] mx-auto lg:mx-0">
            <img src={aboutImages[0]} alt="Physiotherapy stretching" className="absolute top-0 left-0 w-[62%] h-[80%] object-cover rounded-[2rem] shadow-sm" onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/400x500?text=Image+1"; }} />
            <img src={aboutImages[1]} alt="Shoulder therapy" className="absolute top-0 right-0 w-[34%] h-[36%] object-cover rounded-[1.5rem] shadow-sm" onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/200x200?text=Image+2"; }} />
            <img src={aboutImages[2]} alt="Spine consultation" className="absolute bottom-[8%] right-0 w-[48%] h-[46%] object-cover rounded-[2rem] border-[12px] border-[#f8fafe] bg-[#f8fafe]" onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/300x300?text=Image+3"; }} />
          </div>
          <div className="max-w-2xl">
            <span className="text-blue-600 italic font-medium text-base md:text-lg block mb-3">About Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1f2937] leading-[1.2] mb-5">Start Your Healthy<br className="hidden sm:block" /> Life Today With Us</h2>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8">Our expert physiotherapists use advanced techniques and personalized care to relieve pain, restore movement, and help you recover faster for a healthier, active life.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
              {allBullets.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-700">
                  <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="4" ry="4"></rect><path d="M8 12l3 3 5-6"></path></svg>
                  <span className="font-medium text-[15px]">{item}</span>
                </div>
              ))}
            </div>
            <Link to="/services" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3.5 rounded-full shadow-sm transition duration-300 inline-block">Explore Services</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// ----- Physiotherapy Services -----
const PhysioServices = () => {
  const scrollContainerRef = useRef(null);
  const servicesList = [
    { name: "Manual Therapy", desc: "Hands-on techniques to mobilize joints and soft tissues.", num: "01.", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600" },
    { name: "Acupuncture", desc: "Traditional needle therapy for pain relief and healing.", num: "02.", img: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=600" },
    { name: "Pilates", desc: "Core strengthening exercises for better posture and flexibility.", num: "03.", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600" },
    { name: "Lymphatic Drainage", desc: "Gentle massage to improve lymph flow and reduce swelling.", num: "04.", img: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=600" },
    { name: "Sports Therapy", desc: "Specialized care for athletes and sports injuries.", num: "05.", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600" },
    { name: "Neurology Therapy", desc: "Rehabilitation for neurological conditions and disorders.", num: "06.", img: "https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&q=80&w=600" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) { scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' }); }
        else { const cardWidth = scrollContainerRef.current.children[0].clientWidth; scrollContainerRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' }); }
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-blue-600 italic font-medium text-lg block mb-3">Services</span>
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#333333] leading-[1.2]">Our Expert <br className="hidden sm:block" />Physiotherapy Services</h2>
        </div>
        <div ref={scrollContainerRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {servicesList.map((srv, index) => (
            <div key={index} className="relative min-w-[85vw] sm:min-w-[45vw] lg:min-w-[320px] xl:min-w-[350px] h-[450px] rounded-[2rem] overflow-hidden flex-shrink-0 snap-start group cursor-pointer">
              <img src={srv.img} alt={srv.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/80 transition-opacity duration-300"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <span className="text-white text-xl font-medium tracking-wide">{srv.num}</span>
                <div className="transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                  <h4 className="text-white text-2xl sm:text-[28px] font-bold mb-2">{srv.name}</h4>
                  <p className="text-gray-200 text-[15px]">{srv.desc}</p>
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
  const handlePlayClick = () => { setIsPlaying(true); if (videoRef.current) videoRef.current.play(); };

  return (
    <section className="bg-[#f8fafe] pt-16 md:pt-24 pb-12">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 mb-10 items-center max-w-7xl mx-auto">
          <div><h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1f2937] leading-[1.2]">Providing excellent <br className="hidden sm:block" />service to our patients</h2></div>
          <div><p className="text-gray-500 text-base md:text-lg leading-relaxed md:max-w-xl">One-On-One Treatments Without The Use Of Gym Equipment, Thus Fully Utilizing The Hands On Time With The Therapist And Ensuring Greater Homecare Outcomes.</p></div>
        </div>
        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[650px] overflow-hidden shadow-sm rounded-[2rem]">
          <video ref={videoRef} src="https://res.cloudinary.com/dfiyubngf/video/upload/v1777199277/samples/cld-sample-video.mp4" poster="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1600" controls={isPlaying} playsInline onPause={() => setIsPlaying(false)} onEnded={() => setIsPlaying(false)} className="w-full h-full object-cover object-top bg-gray-200" />
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/5 cursor-pointer transition-colors duration-300 hover:bg-black/20" onClick={handlePlayClick}>
              <div className="bg-white/30 p-3 sm:p-4 rounded-full animate-pulse flex items-center justify-center">
                <button className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform duration-300">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 ml-1 sm:ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
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
  const testimonials = [
    { name: "Kenneth Fong", role: "Postgraduate Student", text: "The physiotherapy sessions at SARTI have been life-changing. After months of back pain, I can now move freely and enjoy my daily activities without discomfort.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" },
    { name: "Jane Brown", role: "Patient", text: "Dr. Anil and his team provided exceptional care during my post-surgery rehabilitation. Their expertise and dedication helped me recover faster than expected.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150" },
    { name: "Rahul Sharma", role: "Sports Athlete", text: "As a professional athlete, I needed specialized sports rehabilitation. SARTI Physiotherapy delivered outstanding results and got me back on the field.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150" },
    { name: "Priya Patel", role: "Senior Citizen", text: "The geriatric physiotherapy program has significantly improved my mobility and balance. I feel more confident and independent in my daily life.", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150" }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#f8fafe] overflow-hidden">
      <div className="max-w-[90rem] mx-auto">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <span className="text-blue-600 italic font-medium text-lg block mb-3">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1f2937] leading-[1.2]">Patient Stories & <br className="hidden sm:block" />Successes</h2>
        </div>
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-4 sm:px-6 lg:px-8 pb-10" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {testimonials.map((item, index) => (
            <div key={index} className="min-w-[85vw] sm:min-w-[380px] lg:min-w-[400px] bg-white rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between snap-center shadow-sm border border-gray-100/50">
              <div>
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (<svg key={i} className="w-5 h-5 text-[#ffc107]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}
                </div>
                <p className="text-gray-500 text-[15px] sm:text-base leading-relaxed mb-8">{item.text}</p>
              </div>
              <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3 sm:gap-4">
                  <img src={item.avatar} alt={item.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover bg-gray-200" />
                  <div><h4 className="text-[#1f2937] font-semibold text-sm sm:text-[15px]">{item.name}</h4><p className="text-gray-500 text-xs sm:text-sm mt-0.5">{item.role}</p></div>
                </div>
                <button className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1a56db] hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors flex-shrink-0 shadow-md">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
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
  const features = [
    { title: "More Experience", desc: "Over 10 years of dedicated physiotherapy practice with thousands of successful patient recoveries across all age groups and conditions." },
    { title: "Seamless Care", desc: "End-to-end treatment journey from initial assessment to full recovery with personalized care plans and continuous progress monitoring." },
    { title: "The Right Answers", desc: "Accurate diagnosis using advanced assessment techniques and evidence-based treatment protocols for effective results." },
    { title: "Unparalleled Expertise", desc: "Certified specialists in manual therapy, neurological rehab, sports medicine, and advanced pain management techniques." }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="w-full h-[500px] lg:h-[700px]">
            <img src="https://clinicmaster.dexignzone.com/tailwind/physiotherapy/images/about/img4.webp" alt="Therapist helping patient" className="w-full h-full object-cover rounded-[2rem] shadow-sm" onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/800x1000?text=Healthcare+Image"; }} />
          </div>
          <div>
            <div className="mb-10 text-center lg:text-left">
              <span className="text-blue-600 italic font-medium text-base md:text-lg block mb-3">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1f2937] leading-[1.2]">Why Choose Us for Your <br className="hidden lg:block" /> Healthcare Needs</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
              {features.map((f, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#1a56db] rounded-full flex items-center justify-center mx-auto mb-5 shadow-md">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h4 className="text-[#1f2937] text-lg sm:text-[19px] font-medium mb-3">{f.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed px-2">{f.desc}</p>
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
const DoctorSection = ({ onOpenAppointment }) => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-8 sm:mb-10">
        <span className="text-blue-600 italic font-medium text-lg block mb-3">Our Team</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Meet Our Expert Doctors</h2>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-12 bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-md items-center">
        <div className="flex justify-center">
          <div className="bg-emerald-100 rounded-full p-1 w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 flex items-center justify-center overflow-hidden shadow-lg">
            <img src="https://res.cloudinary.com/djtvxmttf/image/upload/v1780554651/a7753008-a126-4b1a-96f3-de961a2bb51a.png" alt="Dr. Anil Dhankar" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Dr. Anil Dhankar</h3>
          <p className="text-emerald-600 font-medium text-sm sm:text-base">Senior Physiotherapist</p>
          <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base whitespace-pre-line leading-relaxed">
            BPT, MPT (Neurology)
            Federation of Indian Manual Therapist
            COMT, C/MET, C/MFR, C/PNF, C/SPORTS TAPPING
            C/VOODOO FLOSSING TECHNIQUES
            D- OSTEOPATHY (U.K)
            D- TRIGGER POINT THERAPY
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-4 sm:mt-6 text-gray-600 text-lg sm:text-xl">
            <i className="fab fa-linkedin-in hover:text-emerald-600 cursor-pointer transition"></i>
            <i className="fab fa-twitter hover:text-emerald-600 cursor-pointer transition"></i>
            <i className="fab fa-facebook-f hover:text-emerald-600 cursor-pointer transition"></i>
          </div>
          <button onClick={onOpenAppointment} className="mt-4 sm:mt-6 bg-emerald-500 text-white px-6 sm:px-8 py-2.5 rounded-full shadow text-sm sm:text-base hover:bg-emerald-600 transition font-semibold">Book Appointment</button>
        </div>
      </div>
    </section>
  );
};

// ----- Conditions We Treat -----
const ConditionsTreat = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const faqData = [
    { question: "Back, Neck & Shoulder Pain", answer: "Our specialized treatment programs address chronic and acute pain in the back, neck, and shoulders through manual therapy, exercise prescription, and posture correction techniques." },
    { question: "Hip And Knee Pain", answer: "Treatment options for hip and knee pain include physical therapy, targeted exercises, joint mobilization, and personalized recovery plans to restore full mobility and function." },
    { question: "How do I book my appointment?", answer: "You can easily book your appointment by clicking the Appointment button, calling our clinic directly, filling out the online form, or visiting us in person." },
    { question: "What Should I Bring For My First Visit?", answer: "Please bring your medical history, any recent MRI/X-ray reports, comfortable clothing, your identification documents, and a list of current medications." },
    { question: "Can I cancel my appointment?", answer: "Yes, you can cancel or reschedule. We request a minimum of 24-hour notice so we can accommodate other patients who might need care." },
    { question: "Do I Need a Referral to Visit?", answer: "In most cases, a referral is not required to see our physiotherapists unless it is specifically mandated by your insurance provider." }
  ];

  const toggleAccordion = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="w-full">
            <span className="text-blue-600 italic font-medium text-lg block mb-3">FAQ</span>
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#1f2937] leading-[1.2] mb-10">Conditions we treat with <br className="hidden md:block" /> excellent care</h2>
            <div className="space-y-4">
              {faqData.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="flex flex-col">
                    <div onClick={() => toggleAccordion(index)} className={`w-full flex justify-between items-center p-5 rounded-2xl cursor-pointer transition-all duration-300 ${isOpen ? "bg-[#f8f9fc]" : "bg-[#f8fafe] hover:bg-[#f0f4f8]"}`}>
                      <span className="font-medium text-[#1f2937] text-base md:text-[17px] pr-4">{item.question}</span>
                      <svg className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    </div>
                    {isOpen && (<div className="mt-2 p-6 bg-[#fdfdfd] border border-gray-100 rounded-2xl shadow-sm"><p className="text-gray-500 text-sm md:text-[15px] leading-relaxed">{item.answer}</p></div>)}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full h-[500px] lg:h-[800px] sticky top-10 hidden lg:block">
            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000" alt="Human anatomy back muscles" className="w-full h-full object-cover rounded-[2rem] shadow-md bg-gray-200" />
          </div>
        </div>
      </div>
    </section>
  );
};

// ----- Blog Section -----
const BlogSection = () => {
  const blogPosts = [
    { dateAuthor: "OCT 27, 2025 – DR. ANIL", title: "Understanding Back Pain: Causes and Effective Physiotherapy Solutions", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800", excerpt: "Learn about the common causes of back pain and how targeted physiotherapy can provide lasting relief." },
    { dateAuthor: "NOV 15, 2025 – DR. ANIL", title: "Sports Injury Prevention: Tips Every Athlete Should Know", img: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800", excerpt: "Discover essential strategies to prevent sports injuries and maintain peak performance." }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#f8fafe]">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-blue-600 italic font-medium text-base md:text-lg block mb-3">Blog</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1f2937] leading-[1.2]">Your Health, Our Knowledge</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <div key={index} className="relative w-full h-[350px] sm:h-[400px] lg:h-[450px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-md">
              <img src={post.img} alt={post.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 transition-opacity duration-300"></div>
              <div className="absolute top-6 left-6">
                <span className="bg-[#1a56db] text-white text-[13px] font-medium px-4 py-1.5 rounded-full shadow-sm">{post.dateAuthor}</span>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 md:p-10">
                <h4 className="text-white text-2xl sm:text-[28px] lg:text-[32px] font-bold leading-[1.3] md:pr-10">{post.title}</h4>
                <p className="text-gray-300 text-sm mt-2 hidden sm:block">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----- Muscle Spasm CTA -----
const MuscleSpasmCta = ({ onOpenAppointment }) => {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
      <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600" alt="Physiotherapists looking at camera" className="absolute inset-0 w-full h-full object-cover object-top" />
      <div className="absolute inset-0 bg-black/40 transition-opacity duration-300"></div>
      <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.2] mb-8 drop-shadow-lg">Delivering effective <br />muscle spasm <br />treatment</h2>
        <button onClick={onOpenAppointment} className="bg-[#1a56db] hover:bg-blue-700 text-white font-medium text-base px-8 py-3.5 rounded-full shadow-lg transition-transform duration-300 hover:-translate-y-1">Book Appointment</button>
      </div>
    </section>
  );
};

// ----- Footer -----
const Footer = () => {
  return (
    <footer className="bg-white pt-16 md:pt-24 pb-8 border-t border-gray-100 overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute right-0 top-0 h-full opacity-40 pointer-events-none hidden lg:block">
          <img src="https://clinicmaster.dexignzone.com/tailwind/physiotherapy/images/bone.png" alt="Spine Anatomy" className="h-[80%] object-contain mix-blend-multiply drop-shadow-sm translate-x-10 mt-10" onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1530213786676-4189f1756920?auto=format&fit=crop&q=80&w=200&h=800"; }} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16 relative z-10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-extrabold text-3xl text-gray-800">SARTI <span className="text-emerald-500">PHYSIOTHERAPY</span></span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">Providing world-class physiotherapy services with compassion and expertise. Your recovery is our mission.</p>
            <div className="flex gap-4 text-gray-500">
              <a href="#" className="hover:text-blue-600 transition-colors"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-blue-600 transition-colors"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-blue-600 transition-colors"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-blue-600 transition-colors"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="hover:text-blue-600 transition-colors"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h4 className="text-[#1f2937] font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-[15px]">
              <li><Link to="/" className="hover:text-[#1a56db] transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-[#1a56db] transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-[#1a56db] transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-[#1a56db] transition-colors">About</a></li>
              <li><a href="#" className="hover:text-[#1a56db] transition-colors">Blog</a></li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h4 className="text-[#1f2937] font-semibold mb-6 text-lg">Services</h4>
            <ul className="space-y-4 text-gray-400 text-[15px]">
              <li><span className="hover:text-[#1a56db] transition-colors cursor-pointer">Orthopedic Physiotherapy</span></li>
              <li><span className="hover:text-[#1a56db] transition-colors cursor-pointer">Neurological Rehabilitation</span></li>
              <li><span className="hover:text-[#1a56db] transition-colors cursor-pointer">Sports Injury Rehab</span></li>
              <li><span className="hover:text-[#1a56db] transition-colors cursor-pointer">Post-Surgical Rehab</span></li>
              <li><span className="hover:text-[#1a56db] transition-colors cursor-pointer">Home Care Services</span></li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h4 className="text-[#1f2937] font-semibold mb-6 text-lg">Contact Info</h4>
            <ul className="space-y-4 text-gray-400 text-[15px]">
              <li className="flex items-start gap-3"><i className="fas fa-map-marker-alt text-emerald-500 mt-1"></i><span>Bhoomika Plaza, Near Sandeep Eye Hospital, Paota, Viratnagar</span></li>
              <li className="flex items-center gap-3"><i className="fas fa-phone text-emerald-500"></i><span>+91 96725 69151</span></li>
              <li className="flex items-center gap-3"><i className="fas fa-envelope text-emerald-500"></i><span>sartiphysiotherapy@gmail.com</span></li>
              <li className="flex items-center gap-3"><i className="fas fa-clock text-emerald-500"></i><span>Mon - Sat: 9:00 AM - 8:00 PM</span></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-gray-200 relative z-10 gap-6">
          <div>
            <h3 className="text-[#1f2937] text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-gray-500 text-sm">Get health tips and updates delivered to your inbox.</p>
          </div>
          <div className="w-full md:w-auto">
            <div className="flex items-center bg-[#f4f7fa] rounded-full p-1.5 w-full md:w-[400px]">
              <input type="email" placeholder="Enter your email address" className="bg-transparent outline-none px-4 py-2 w-full text-gray-700 text-sm placeholder-gray-400" />
              <button className="bg-[#1a56db] hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap">Subscribe Now</button>
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
          <p className="text-gray-500 text-sm">© Copyright 2026 By <span className="text-[#1a56db]">SARTI Physiotherapy</span>. All Rights Reserved.</p>
          <div className="flex items-center bg-[#f4f7fa] px-4 py-2 rounded-full gap-2">
            <span className="font-bold text-lg leading-none mr-1"><span className="text-[#4285F4]">G</span></span>
            <div className="flex gap-1 text-[#FFC107] text-xs">
              <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
            </div>
            <span className="text-gray-700 font-bold text-sm ml-1">(4.8)</span>
            <span className="text-gray-400 text-xs ml-1">12k+ ratings on google</span>
          </div>
        </div>
      </div>
      <div className="fixed bottom-8 right-8 z-50">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-12 h-12 bg-[#1f2937] hover:bg-black text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:-translate-y-1">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
        </button>
      </div>
    </footer>
  );
};
// ===== SERVICES PAGE =====
const ServicesPage = ({ onOpenAppointment }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [currentVideo, setCurrentVideo] = useState({ url: "", title: "" });
  const [prefillHospital, setPrefillHospital] = useState("");

  const mainServices = [
    {
      title: "Orthopedic Physiotherapy",
      desc: "Treatment for back pain, neck pain, knee pain, shoulder pain, arthritis, sciatica, slip disc, and other musculoskeletal conditions. Focuses on pain relief, improving mobility, restoring function, and helping patients return to daily activities safely.",
      subs: ["Back Pain", "Neck Pain", "Knee Pain", "Shoulder Pain", "Arthritis", "Frozen Shoulder", "Tennis Elbow", "Heel Pain", "Sciatica", "Slip Disc", "Cervical & Lumbar Spondylosis"],
      color: "from-blue-500 to-blue-700",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600",
      video: "https://res.cloudinary.com/dfiyubngf/video/upload/v1777199277/samples/cld-sample-video.mp4"
    },
    {
      title: "Sports Injury Rehabilitation",
      desc: "Specialized rehabilitation for sports-related injuries such as ligament tears, muscle strains, ankle sprains, and ACL injuries. Helps athletes recover faster, improve strength and flexibility, and safely return to sports activities.",
      subs: ["Ligament Injuries", "Muscle Strain", "Ankle Sprain", "ACL Rehabilitation", "Sports Performance Training"],
      color: "from-orange-500 to-red-600",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600",
      video: "https://res.cloudinary.com/dfiyubngf/video/upload/v1777199277/samples/cld-sample-video.mp4"
    },
    {
      title: "Neurological Rehabilitation",
      desc: "Designed for patients with stroke, paralysis, facial palsy, Parkinson's disease, and spinal cord injuries. Aims to improve balance, coordination, strength, mobility, and independence in daily life.",
      subs: ["Stroke Rehabilitation", "Paralysis Rehabilitation", "Facial Palsy", "Parkinson's Disease", "Spinal Cord Injury", "Balance & Coordination Training"],
      color: "from-purple-500 to-purple-700",
      image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&q=80&w=600",
      video: "https://res.cloudinary.com/dfiyubngf/video/upload/v1777199277/samples/cld-sample-video.mp4"
    },
    {
      title: "Post-Surgical & Fracture Rehabilitation",
      desc: "Comprehensive rehabilitation after fractures, joint replacements, and surgeries. Focuses on reducing pain, restoring joint movement, rebuilding muscle strength, and accelerating recovery.",
      subs: ["Joint Replacement Rehabilitation", "Fracture Rehabilitation", "Spine Surgery Rehabilitation", "Arthroscopy Rehabilitation"],
      color: "from-emerald-500 to-emerald-700",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=600",
      video: "https://res.cloudinary.com/dfiyubngf/video/upload/v1777199277/samples/cld-sample-video.mp4"
    },
    {
      title: "Pediatric Physiotherapy",
      desc: "Provides therapy for children with developmental delays, cerebral palsy, neurological disorders, and movement difficulties. Enhances motor skills, balance, coordination, and physical development.",
      subs: ["Cerebral Palsy", "Developmental Delay", "Pediatric Neurological Conditions", "Gait Training"],
      color: "from-pink-500 to-pink-700",
      image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=600",
      video: "https://res.cloudinary.com/dfiyubngf/video/upload/v1777199277/samples/cld-sample-video.mp4"
    },
    {
      title: "Geriatric Physiotherapy",
      desc: "Dedicated care for elderly individuals experiencing joint pain, balance problems, weakness, or mobility limitations. Promotes independence, improves strength, and reduces the risk of falls.",
      subs: ["Elderly Care Rehabilitation", "Fall Prevention", "Balance Training", "Age-Related Joint Problems"],
      color: "from-amber-500 to-amber-700",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600",
      video: "https://res.cloudinary.com/dfiyubngf/video/upload/v1777199277/samples/cld-sample-video.mp4"
    },
    {
      title: "Electrotherapy Services",
      desc: "Advanced modalities including IFT, TENS, Ultrasound, EMS, and Laser Therapy. Helps reduce pain, inflammation, muscle spasm, and supports faster healing and recovery.",
      subs: ["IFT Therapy", "TENS Therapy", "Ultrasound Therapy", "EMS Therapy", "Laser Therapy"],
      color: "from-cyan-500 to-cyan-700",
      image: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=600",
      video: "https://res.cloudinary.com/dfiyubngf/video/upload/v1777199277/samples/cld-sample-video.mp4"
    },
    {
      title: "Manual Therapy",
      desc: "Hands-on treatment techniques including joint mobilization and soft tissue release. Effective for reducing pain, improving flexibility, restoring movement, and treating musculoskeletal dysfunctions.",
      subs: ["Joint Mobilization", "Soft Tissue Mobilization", "Myofascial Release", "Trigger Point Therapy", "Capsular Stretching"],
      color: "from-indigo-500 to-indigo-700",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600",
      video: "https://res.cloudinary.com/dfiyubngf/video/upload/v1777199277/samples/cld-sample-video.mp4"
    },
    {
      title: "Exercise Therapy",
      desc: "Customized exercise programs focused on strengthening muscles, improving flexibility, correcting posture, enhancing balance, and preventing future injuries.",
      subs: ["Strengthening Exercises", "Stretching Exercises", "Postural Correction", "Functional Training", "Balance & Gait Training"],
      color: "from-rose-500 to-rose-700",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600",
      video: "https://res.cloudinary.com/dfiyubngf/video/upload/v1777199277/samples/cld-sample-video.mp4"
    },
    {
      title: "Cupping Therapy",
      desc: "A therapeutic technique using suction cups to improve blood circulation, relieve muscle tension, reduce pain, promote relaxation, and support natural healing.",
      subs: ["Dry Cupping Therapy", "Wet Cupping Therapy (Hijama)", "Pain Relief Cupping", "Muscle Recovery Cupping"],
      color: "from-teal-500 to-teal-700",
      image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=600",
      video: "https://res.cloudinary.com/dfiyubngf/video/upload/v1777199277/samples/cld-sample-video.mp4"
    },
    {
      title: "Advanced Pain Management",
      desc: "Includes Dry Needling, Kinesio Taping, Trigger Point Therapy, and Myofascial Release. Provides effective relief from chronic pain, muscle tightness, and movement restrictions.",
      subs: ["Dry Needling", "Kinesio Taping", "Chronic Pain Management", "Postural Dysfunction Correction"],
      color: "from-red-500 to-red-700",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=600",
      video: "https://res.cloudinary.com/dfiyubngf/video/upload/v1777199277/samples/cld-sample-video.mp4"
    },
    {
      title: "Lifestyle & Wellness",
      desc: "Programs designed to improve overall health through fitness rehabilitation, weight management, posture correction, and ergonomic education for a healthier lifestyle.",
      subs: ["Weight Loss Programs", "Fitness Rehabilitation", "Ergonomic Assessment", "Workplace Posture Training"],
      color: "from-green-500 to-green-700",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600",
      video: "https://res.cloudinary.com/dfiyubngf/video/upload/v1777199277/samples/cld-sample-video.mp4"
    },
    {
      title: "Home Care Services",
      desc: "Professional physiotherapy treatment delivered at home for patients with mobility limitations, post-surgical conditions, neurological disorders, or those requiring convenient rehabilitation services.",
      subs: ["Home Physiotherapy", "Home Rehabilitation Programs", "Post-Operative Home Care"],
      color: "from-violet-500 to-violet-700",
      image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&q=80&w=600",
      video: "https://res.cloudinary.com/dfiyubngf/video/upload/v1777199277/samples/cld-sample-video.mp4"
    }
  ];

  const handleBookService = (serviceTitle) => {
    setPrefillHospital("SARTI Physiotherapy - " + serviceTitle);
    onOpenAppointment();
  };

  const handlePlayVideo = (service) => {
    setCurrentVideo({ url: service.video, title: service.title });
    setShowVideo(true);
  };

  return (
    <div className="pt-20">
      <VideoModal showVideo={showVideo} setShowVideo={setShowVideo} videoUrl={currentVideo.url} videoTitle={currentVideo.title} />

      {/* Hero Banner */}
      <section className="relative w-full py-20 md:py-28 bg-gradient-to-br from-emerald-600 to-teal-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-emerald-200 italic font-medium text-lg block mb-3">What We Offer</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">Our Professional <br /><span className="text-emerald-200">Services</span></h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">Comprehensive physiotherapy and rehabilitation services tailored to your unique needs for optimal recovery and wellness.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {mainServices.map((service, idx) => (
              <div key={idx} className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>

                {/* Service Image with Video Play Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button 
                      onClick={() => handlePlayVideo(service)}
                      className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                    >
                      <svg className="w-6 h-6 text-emerald-600 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </button>
                  </div>
                  <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    Watch Video
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1f2937] mb-3">{service.title}</h3>
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-5">{service.desc}</p>

                  {/* Sub-services */}
                  <div className="mb-5">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Sub Services</p>
                    <div className="flex flex-wrap gap-2">
                      {service.subs.map((sub, sidx) => (
                        <span key={sidx} className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full">{sub}</span>
                      ))}
                    </div>
                  </div>

                  {/* Book Service Button */}
                  <button 
                    onClick={() => handleBookService(service.title)}
                    className={`w-full bg-gradient-to-r ${service.color} text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2`}
                  >
                    <i className="fas fa-calendar-check"></i>
                    Book Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#f8fafe]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1f2937] leading-[1.2] mb-6">Ready to Start Your Recovery?</h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">Book an appointment today and take the first step towards a pain-free, healthier life with our expert physiotherapy team.</p>
          <button onClick={() => handleBookService("General Appointment")} className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg transition transform hover:scale-105 text-lg">Book Appointment Now</button>
        </div>
      </section>
    </div>
  );
};

// ===== CONTACT PAGE =====
const ContactPage = ({ onOpenAppointment }) => {
  const [formStatus, setFormStatus] = useState(null);
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");

    // Send to WhatsApp
    const doctorNumber = "919672569151";
    const message = `New Contact Form Submission%0A%0A*Contact Details*%0AName: ${contactForm.name}%0AEmail: ${contactForm.email}%0APhone: ${contactForm.phone}%0ASubject: ${contactForm.subject}%0A%0A*Message*%0A${contactForm.message}%0A%0ASent from SARTI Physiotherapy Website`;

    setTimeout(() => {
      window.open(`https://wa.me/${doctorNumber}?text=${message}`, "_blank");
      setFormStatus("sent");
      setContactForm({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setFormStatus(null), 3000);
    }, 1500);
  };

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative w-full py-20 md:py-28 bg-gradient-to-br from-blue-600 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="contactGrid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#contactGrid)" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-200 italic font-medium text-lg block mb-3">Get In Touch</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">Contact <span className="text-blue-200">Us</span></h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">We are here to help you on your journey to recovery. Reach out to us for appointments, inquiries, or any questions.</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "fas fa-map-marker-alt", title: "Visit Us", info: "Bhoomika Plaza, Near Sandeep Eye Hospital, Paota, Viratnagar", color: "bg-emerald-100 text-emerald-600" },
              { icon: "fas fa-phone", title: "Call Us", info: "+91 96725 69151", color: "bg-blue-100 text-blue-600" },
              { icon: "fas fa-envelope", title: "Email Us", info: "sartiphysiotherapy@gmail.com", color: "bg-purple-100 text-purple-600" },
              { icon: "fas fa-clock", title: "Working Hours", info: "Mon - Sat: 9:00 AM - 8:00 PM", color: "bg-amber-100 text-amber-600" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 text-center">
                <div className={`w-14 h-14 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${item.icon} text-xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-[#1f2937] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="py-16 md:py-24 bg-[#f8fafe]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-gray-100">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2937] mb-2">Send us a Message</h2>
              <p className="text-gray-500 mb-6">Fill out the form below and we will get back to you within 24 hours.</p>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" name="name" placeholder="Your Name" value={contactForm.name} onChange={handleContactChange} required className="border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm" />
                  <input type="email" name="email" placeholder="Email Address" value={contactForm.email} onChange={handleContactChange} required className="border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="tel" name="phone" placeholder="Phone Number" value={contactForm.phone} onChange={handleContactChange} className="border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm" />
                  <input type="text" name="subject" placeholder="Subject" value={contactForm.subject} onChange={handleContactChange} required className="border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm" />
                </div>
                <textarea name="message" placeholder="Your Message" value={contactForm.message} onChange={handleContactChange} required rows="5" className="border border-gray-200 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm resize-none"></textarea>
                <button type="submit" disabled={formStatus === "sending"} className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-400 text-white py-3 rounded-xl transition font-semibold text-sm">
                  {formStatus === "sending" ? "Sending..." : formStatus === "sent" ? "Sent to WhatsApp!" : "Send Message via WhatsApp"}
                </button>
              </form>
            </div>

            {/* Map + Quick Actions */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 h-[300px] lg:h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d264.67663347206775!2d76.07509521517719!3d27.579532593279193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d1595643c0891%3A0x2ca68318fad27749!2sSarti%20Physiotherapy%20Hospital%20(Dr%20Anil%20Dhankar)!5e0!3m2!1sen!2sin!4v1780598899141!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SARTI Physiotherapy Location"
                ></iframe>
              </div>
              <div className="bg-emerald-500 rounded-3xl p-6 sm:p-8 text-white text-center">
                <h3 className="text-xl font-bold mb-2">Need Immediate Assistance?</h3>
                <p className="text-white/80 text-sm mb-4">Book an appointment now and our team will reach out to you.</p>
                <button onClick={onOpenAppointment} className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold px-6 py-2.5 rounded-full transition text-sm">Book Appointment</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 italic font-medium text-lg block mb-3">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1f2937]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "How do I book an appointment?", a: "You can book an appointment by clicking the Book Appointment button, calling us at +91 96725 69151, or filling out the contact form above." },
              { q: "Do I need a doctor's referral?", a: "No, in most cases you do not need a referral. You can directly book an appointment with our physiotherapists." },
              { q: "What should I bring for my first visit?", a: "Please bring any recent medical reports, X-rays, or MRI scans, along with a list of current medications and comfortable clothing." },
              { q: "Do you offer home visit services?", a: "Yes, we offer professional home physiotherapy services for patients who have mobility limitations or prefer treatment at home." },
              { q: "How long does a typical session last?", a: "A typical physiotherapy session lasts between 45 minutes to 1 hour, depending on the treatment plan." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-5 sm:p-6">
                <h4 className="font-bold text-[#1f2937] text-base sm:text-lg mb-2">{faq.q}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// ===== HOME PAGE =====
const HomePage = ({ scrolled, activeHeroImage, setActiveHeroImage, handlePrevImage, handleNextImage, onOpenAppointment }) => {
  return (
    <>
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
      <TestimonialsSection />
      <WhyChooseUsSection />
      <DoctorSection onOpenAppointment={onOpenAppointment} />
      <ConditionsTreat />
      <BlogSection />
      <MuscleSpasmCta onOpenAppointment={onOpenAppointment} />
    </>
  );
};

// ===== MAIN APP COMPONENT =====
const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeHeroImage, setActiveHeroImage] = useState(heroImageSet[0]);
  const [showModal, setShowModal] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [prefillHospital, setPrefillHospital] = useState("");

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

  const openAppointment = (hospitalName = "") => {
    if (hospitalName) {
      setPrefillHospital(hospitalName);
    } else {
      setPrefillHospital("");
    }
    setShowModal(true);
  };

  return (
    <BrowserRouter>
      <div className="overflow-x-hidden">
        <Navbar isScrolled={scrolled} onOpenAppointment={() => openAppointment()} />
        <Routes>
          <Route path="/" element={
            <HomePage
              scrolled={scrolled}
              activeHeroImage={activeHeroImage}
              setActiveHeroImage={setActiveHeroImage}
              handlePrevImage={handlePrevImage}
              handleNextImage={handleNextImage}
              onOpenAppointment={() => openAppointment()}
            />
          } />
          <Route path="/services" element={<ServicesPage onOpenAppointment={openAppointment} />} />
          <Route path="/contact" element={<ContactPage onOpenAppointment={() => openAppointment()} />} />
        </Routes>
        <Footer />
        <AppointmentModal 
          showModal={showModal} 
          setShowModal={setShowModal} 
          showQR={showQR} 
          setShowQR={setShowQR} 
          prefillHospital={prefillHospital}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
