import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Target, Users, Zap, ShieldCheck } from "lucide-react";
import aboutHeroImg from "../assets/images/about_hero_1779548883520.png";

export function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const values = [
    {
      icon: <Users className="w-6 h-6 text-brand-green" />,
      title: "Community First",
      desc: "We foster an inclusive, supportive environment where everyone from beginners to pros feels welcome."
    },
    {
      icon: <Target className="w-6 h-6 text-brand-green" />,
      title: "Results Driven",
      desc: "Our programs and facilities are designed with one goal in mind: helping you achieve measurable progress."
    },
    {
      icon: <Zap className="w-6 h-6 text-brand-green" />,
      title: "High Energy",
      desc: "From our playlists to our trainers, everything at Go Go Fitness is structured to fuel your motivation."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-green" />,
      title: "Expert Guidance",
      desc: "Our certified coaches provide world-class programming, technique correction, and nutritional advice."
    }
  ];

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
            About <span className="text-brand-green">Go Go Fitness</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg md:text-xl"
          >
            More than just a gym. We are a dedicated community of fitness enthusiasts pushing the boundaries of what's possible every single day.
          </motion.p>
        </div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-full rounded-3xl overflow-hidden aspect-video md:aspect-[21/9] mb-24 relative"
        >
          <img 
            src={aboutHeroImg} 
            alt="Go Go Fitness Team" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent" />
        </motion.div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="font-display text-3xl md:text-4xl uppercase text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-zinc-400 text-lg leading-relaxed">
              <p>
                Founded in 2020, Go Go Fitness started with a simple belief: fitness shouldn't be a solitary journey. It requires the right environment, the right equipment, and most importantly, the right people backing you up.
              </p>
              <p>
                We have built out our state-of-the-art facilities in Colombo and Kandy to offer unparalleled access to world-class equipment, intensive group classes, and personal training that gets results.
              </p>
              <p>
                 Whether you're picking up a barbell for the first time or training for your next competition, our team is committed to helping you elevate your standards.
              </p>
            </div>
            
            <Link 
              to="/packages" 
              className="inline-flex mt-8 items-center gap-2 bg-brand-green text-black px-8 py-4 rounded text-sm font-bold uppercase tracking-wider hover:bg-brand-green-hover transition-all hover:-translate-y-1"
            >
              Join The Club <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-4 hidden sm:grid">
            <div className="bg-dark-surface p-8 rounded-3xl border border-white/5 text-center">
              <div className="font-display text-5xl text-brand-green mb-2">3+</div>
              <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Years Active</div>
            </div>
            <div className="bg-dark-surface p-8 rounded-3xl border border-white/5 text-center mt-8">
              <div className="font-display text-5xl text-brand-green mb-2">2</div>
              <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Facilities</div>
            </div>
            <div className="bg-dark-surface p-8 rounded-3xl border border-white/5 text-center -mt-8">
              <div className="font-display text-5xl text-brand-green mb-2">50+</div>
              <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Trainers</div>
            </div>
            <div className="bg-dark-surface p-8 rounded-3xl border border-white/5 text-center">
              <div className="font-display text-5xl text-brand-green mb-2">2.5k</div>
              <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Members</div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h2 className="font-display text-3xl md:text-4xl uppercase text-white mb-10 text-center">Core Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-black p-8 rounded-2xl border border-white/5 border-t-brand-green/20"
              >
                <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center mb-6">
                  {v.icon}
                </div>
                <h3 className="font-display text-xl uppercase text-white mb-3">{v.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
