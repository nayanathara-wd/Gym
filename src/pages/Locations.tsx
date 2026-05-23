import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { MapPin, Users, Dumbbell, ArrowRight } from "lucide-react";
import { locationsData, locationsHero } from "../data/locations";

export function Locations() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="pt-28 pb-24 min-h-[90vh]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl uppercase tracking-tight text-white mb-6"
          >
            Our <span className="text-brand-green">Locations</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg md:text-xl"
          >
            Find a Go Go Fitness near you. Each of our branches offers premium equipment and a thriving community.
          </motion.p>
        </div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-full rounded-3xl overflow-hidden aspect-video md:aspect-[21/9] mb-24 relative border border-white/5"
        >
          <img 
            src={locationsHero} 
            alt="Go Go Locations" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/40 to-transparent" />
        </motion.div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {locationsData.map((loc, i) => (
            <motion.div 
              key={loc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-dark-surface rounded-3xl border border-white/5 overflow-hidden hover:border-brand-green/30 transition-colors flex flex-col"
            >
              <div className="aspect-video relative overflow-hidden">
                <img src={loc.image} alt={loc.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white">
                  <MapPin className="w-3.5 h-3.5 text-brand-green" />
                  {loc.city}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <h2 className="font-display text-3xl uppercase text-white mb-2">{loc.name}</h2>
                <p className="text-zinc-400 mb-8 flex-1">{loc.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                   <div className="bg-black p-4 rounded-xl border border-white/5 text-center">
                     <Users className="w-5 h-5 text-brand-green mx-auto mb-2" />
                     <div className="font-display text-2xl text-white mb-0.5">{loc.stats.members}</div>
                     <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Members</div>
                   </div>
                   <div className="bg-black p-4 rounded-xl border border-white/5 text-center">
                     <Dumbbell className="w-5 h-5 text-brand-green mx-auto mb-2" />
                     <div className="font-display text-2xl text-white mb-0.5">{loc.stats.machines}</div>
                     <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Machines</div>
                   </div>
                </div>

                <div className="flex gap-4">
                  <Link 
                    to={`/locations/${loc.id}`}
                    className="flex-1 bg-brand-green text-black text-center py-3.5 rounded text-sm font-bold uppercase tracking-wide hover:bg-brand-green-hover transition-colors"
                  >
                    View Details
                  </Link>
                  <a 
                    href={loc.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                  >
                    <ArrowRight className="w-5 h-5 -rotate-45" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
