import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { MapPin, Users, Dumbbell, Maximize, Activity, ArrowRight } from "lucide-react";
import { locationsData } from "../data/locations";

import facilityEquipment from "../assets/images/facility_equipment_1779549865682.png";
import facilityLocker from "../assets/images/facility_locker_1779549881101.png";

export function LocationDetails() {
  const { id } = useParams<{ id: string }>();
  const location = locationsData.find(loc => loc.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [id]);

  if (!location) {
    return <Navigate to="/locations" />;
  }

  return (
    <div className="pt-20 lg:pt-28 pb-24 min-h-[90vh]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-8">
           <Link to="/locations" className="text-zinc-500 hover:text-brand-green text-sm font-medium uppercase tracking-widest flex items-center gap-2 transition-colors">
              <ArrowRight className="w-4 h-4 rotate-180" /> Back to Locations
           </Link>
        </div>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-brand-green text-xs font-bold uppercase tracking-widest mb-6">
              <MapPin className="w-3.5 h-3.5" />
              {location.city} Branch
            </div>
            <h1 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-white mb-6">
              {location.name}
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              {location.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/packages"
                className="bg-brand-green text-black px-8 py-4 rounded text-sm font-bold uppercase tracking-wide hover:bg-brand-green-hover transition-colors text-center"
              >
                Join Now
              </Link>
              <a 
                href={location.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded text-sm font-bold uppercase tracking-wide hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4" /> Open in Maps
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/5"
          >
             <img src={location.image} alt={location.name} className="w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {[
            { label: "Members", icon: <Users />, value: location.stats.members },
            { label: "Trainers & Staff", icon: <Activity />, value: location.stats.staff },
            { label: "Floor Space", icon: <Maximize />, value: location.stats.size },
            { label: "Premium Machines", icon: <Dumbbell />, value: location.stats.machines },
          ].map((stat, i) => (
             <div key={i} className="bg-dark-surface p-6 md:p-8 rounded-2xl border border-white/5 text-center">
                <div className="text-brand-green w-6 h-6 mx-auto mb-3 opacity-80">{stat.icon}</div>
                <div className="font-display text-3xl md:text-4xl text-white mb-2">{stat.value}</div>
                <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
             </div>
          ))}
        </div>

        {/* Facilities & Map */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <div>
            <h2 className="font-display text-3xl uppercase text-white mb-8">Branch Facilities</h2>
            <ul className="space-y-4 mb-8">
              {location.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 bg-black p-4 rounded-xl border border-white/5">
                  <div className="w-2 h-2 rounded-full bg-brand-green shrink-0" />
                  <span className="text-zinc-300 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
             <div className="grid grid-cols-2 gap-4">
                <img src={facilityEquipment} alt="Equipment" className="w-full aspect-[4/3] object-cover rounded-xl border border-white/5" />
                <img src={facilityLocker} alt="Locker Room" className="w-full aspect-[4/3] object-cover rounded-xl border border-white/5" />
             </div>
          </div>

          <div>
             <h2 className="font-display text-3xl uppercase text-white mb-8">Find Us</h2>
             <div className="w-full h-full min-h-[400px] rounded-3xl overflow-hidden border border-white/5 bg-dark-surface relative">
                {/* Embedded Map */}
                <iframe 
                  src={location.embedMap}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, position: 'absolute', inset: 0 }} 
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
