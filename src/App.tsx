import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Clock, Dumbbell, MapPin, Menu, Phone, Play, Star, X } from "lucide-react";
import { useState, useEffect } from "react";

import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import { Packages } from "./pages/Packages";
import { Checkout } from "./pages/Checkout";
import { Success } from "./pages/Success";
import { About } from "./pages/About";
import { Locations } from "./pages/Locations";
import { LocationDetails } from "./pages/LocationDetails";
import { Contact } from "./pages/Contact";

// Image Paths
import heroBg from "./assets/images/hero_bodybuilder_1779548489878.png";
import classStrength from "./assets/images/class_strength_1779523524047.png";
import classCardio from "./assets/images/class_cardio_1779523541434.png";
import classYoga from "./assets/images/class_yoga_1779523557530.png";

// COMPONENTS
function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <Stats />
      <Features />
      <Classes />
      <Pricing />
    </main>
  );
}

function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/94715413567" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] transition-all flex items-center justify-center cursor-pointer"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

export function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-zinc-300 font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/locations/:id" element={<LocationDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-dark-bg/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Dumbbell className="text-brand-green w-8 h-8" />
            <span className="font-display text-2xl tracking-wide text-white uppercase">Go Go Fitness</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-sm font-medium hover:text-brand-green transition-colors">About</Link>
            <Link to="/locations" className="text-sm font-medium hover:text-brand-green transition-colors">Locations</Link>
            <Link to="/#features" className="text-sm font-medium hover:text-brand-green transition-colors">Features</Link>
            <Link to="/#classes" className="text-sm font-medium hover:text-brand-green transition-colors">Classes</Link>
            <Link to="/packages" className="text-sm font-medium hover:text-brand-green transition-colors">Packages</Link>
            <Link to="/contact" className="text-sm font-medium hover:text-brand-green transition-colors">Contact</Link>
            <Link to="/packages" className="bg-brand-green text-black px-5 py-2.5 rounded text-sm font-bold uppercase tracking-wide hover:bg-brand-green-hover transition-colors">
              Join Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex flex-col justify-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-300 hover:text-white p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-surface border-b border-white/5">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-white hover:bg-white/5 rounded-md">About</Link>
            <Link to="/locations" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-white hover:bg-white/5 rounded-md">Locations</Link>
            <Link to="/#features" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-white hover:bg-white/5 rounded-md">Features</Link>
            <Link to="/#classes" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-white hover:bg-white/5 rounded-md">Classes</Link>
            <Link to="/packages" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-white hover:bg-white/5 rounded-md">Packages</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-white hover:bg-white/5 rounded-md">Contact</Link>
            <div className="pt-2">
              <Link to="/packages" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center bg-brand-green text-black px-5 py-3 rounded text-sm font-bold uppercase tracking-wide">
                Join Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Gym Background" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-brand-green text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              New Facility Open
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-[1.1] mb-6">
              Push Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400">Limits</span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-lg leading-relaxed">
              State-of-the-art equipment, elite personal trainers, and high-intensity classes designed to transform your body and mind.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/packages" className="flex items-center justify-center gap-2 bg-brand-green text-black px-8 py-4 px-10 rounded text-base font-bold uppercase tracking-wider hover:bg-brand-green-hover transition-all hover:scale-105 active:scale-95 group">
                View Packages
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="https://youtu.be/tUykoP30Gb0?si=hinizat1pDJu11Z1" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded text-base font-medium hover:bg-white/10 transition-all">
                <Play className="w-5 h-5 text-brand-green fill-brand-green" />
                Watch Video
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-6 text-sm text-zinc-500 font-medium">
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-dark-bg bg-zinc-800 flex items-center justify-center overflow-hidden">
                     <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Member" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p>Join <span className="text-white font-bold">2,500+</span> active members</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { label: "Premium Machines", value: "150+" },
    { label: "Expert Trainers", value: "25+" },
    { label: "Active Members", value: "2,500+" }
  ];

  return (
    <section className="py-16 bg-black border-y border-white/5 relative z-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-green/5 via-transparent to-brand-green/5" />
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x divide-white/10 relative">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center px-4"
            >
              <div className="font-display text-4xl md:text-5xl text-brand-green mb-3">{stat.value}</div>
              <div className="text-zinc-400 text-sm font-bold uppercase tracking-[0.2em]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-brand-green" />,
      title: "24/7 Access",
      desc: "Train on your schedule. Our doors are always open for members with secure keycard entry."
    },
    {
      icon: <Dumbbell className="w-8 h-8 text-brand-green" />,
      title: "Elite Equipment",
      desc: "Train with the best. We feature top-of-the-line machines, free weights, and functional training rigs."
    },
    {
      icon: <Star className="w-8 h-8 text-brand-green" />,
      title: "Expert Coaching",
      desc: "Our certified personal trainers are here to guide your form, program your workouts, and push you."
    }
  ];

  return (
    <section id="features" className="py-24 bg-dark-bg relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-dark-surface p-8 rounded-2xl border border-white/5 hover:border-brand-green/30 transition-colors group"
            >
              <div className="w-16 h-16 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-display uppercase tracking-wide text-white mb-3">{f.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Classes() {
  const classes = [
    {
      title: "Strength & Conditioning",
      image: classStrength,
      time: "Mon, Wed, Fri • 6:00 PM",
      instructor: "Alex Chen"
    },
    {
      title: "HIIT Cardio",
      image: classCardio,
      time: "Tue, Thu • 7:00 AM",
      instructor: "Sarah Jenkins"
    },
    {
      title: "Power Yoga",
      image: classYoga,
      time: "Sat, Sun • 9:00 AM",
      instructor: "David Reed"
    }
  ];

  return (
    <section id="classes" className="py-24 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight text-white mb-4">Our Classes</h2>
            <p className="text-zinc-400 text-lg">Group training designed to maximize output, build community, and crush plateaus regardless of your fitness level.</p>
          </div>
          <button className="shrink-0 font-bold uppercase tracking-widest text-brand-green text-sm flex items-center gap-2 hover:gap-3 transition-all">
            View Schedule <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {classes.map((c, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-zinc-900 border border-white/5"
            >
              <img src={c.image} alt={c.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-6 flex flex-col justify-end">
                <h3 className="font-display text-2xl uppercase text-white mb-2">{c.title}</h3>
                <div className="flex items-center gap-4 text-sm text-zinc-300">
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-brand-green" /> {c.time}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$29",
      period: "/mo",
      desc: "Perfect for those who just want to lift.",
      features: ["24/7 Gym Access", "Standard Equipment Access", "Locker Room & Showers"],
      popular: false
    },
    {
      name: "Pro",
      price: "$59",
      period: "/mo",
      desc: "Our most popular membership.",
      features: ["24/7 Gym Access", "All Premium Equipment", "Unlimited Group Classes", "Guest Pass (2/mo)", "Access to sauna"],
      popular: true
    },
    {
      name: "Elite",
      price: "$99",
      period: "/mo",
      desc: "For those who demand the best.",
      features: ["24/7 Gym Access", "Unlimited Group Classes", "Unlimited Guest Passes", "2 PT Sessions/mo", "Nutrition Consultation"],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-dark-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight text-white mb-4">Choose Your Plan</h2>
          <p className="text-zinc-400 text-lg">No hidden fees, no long-term commitments. Upgrade or cancel anytime.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`bg-dark-surface rounded-3xl p-8 border ${p.popular ? 'border-brand-green shadow-[0_0_40px_rgba(204,255,0,0.1)] relative' : 'border-white/5'}`}
            >
              {p.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-green text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <h3 className="font-display text-2xl uppercase text-white mb-2">{p.name}</h3>
              <p className="text-sm text-zinc-400 mb-6 min-h-[40px]">{p.desc}</p>
              
              <div className="mb-8 border-b border-white/5 pb-8">
                <span className="font-display text-5xl text-white">{p.price}</span>
                <span className="text-zinc-500 font-medium">{p.period}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {p.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-zinc-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/packages" className={`block text-center w-full py-4 rounded text-sm font-bold uppercase tracking-wide transition-all ${
                p.popular 
                  ? 'bg-brand-green text-black hover:bg-brand-green-hover' 
                  : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
              }`}>
                View Packages
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Dumbbell className="text-brand-green w-8 h-8" />
              <span className="font-display text-2xl tracking-wide text-white uppercase">Go Go Fitness</span>
            </div>
            <p className="text-zinc-400 max-w-sm mb-6">
              A premium fitness destination dedicated to helping you achieve your physical peak through expert coaching, top-tier equipment, and community support.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-green hover:text-black transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-green hover:text-black transition-colors cursor-pointer">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-display uppercase text-white mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm text-zinc-400 hover:text-brand-green transition-colors">About Us</Link></li>
              <li><Link to="/locations" className="text-sm text-zinc-400 hover:text-brand-green transition-colors">Locations</Link></li>
              <li><Link to="/#classes" className="text-sm text-zinc-400 hover:text-brand-green transition-colors">Classes</Link></li>
              <li><Link to="/packages" className="text-sm text-zinc-400 hover:text-brand-green transition-colors">Packages</Link></li>
              <li><Link to="/#features" className="text-sm text-zinc-400 hover:text-brand-green transition-colors">Facilities</Link></li>
              <li><Link to="/contact" className="text-sm text-zinc-400 hover:text-brand-green transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display uppercase text-white mb-6 tracking-wide">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-zinc-400">
                <MapPin className="w-5 h-5 text-brand-green shrink-0" />
                <span>123 Fitness Blvd,<br/>Kasbawa, Colombo 10001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-400">
                <Phone className="w-5 h-5 text-brand-green shrink-0" />
                <span>+94715 413 567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">© {new Date().getFullYear()} Go Go Fitness. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-zinc-600">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
