import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import contactHeroImg from "../assets/images/contact_hero_1779550403648.png";

export function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            Get In <span className="text-brand-green">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg md:text-xl"
          >
            Have questions about our memberships, facilities, or personal training? Our team is here to help you start your fitness journey.
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
            src={contactHeroImg} 
            alt="Contact Go Go Fitness" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/20 to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="font-display text-3xl uppercase text-white mb-6">Contact Information</h2>
              <p className="text-zinc-400 leading-relaxed">
                Fill out the form and our team will get back to you within 24 hours. For immediate assistance, feel free to call our front desk directly.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <div className="text-white font-bold uppercase tracking-wider text-sm mb-1">Phone</div>
                  <div className="text-zinc-400">+94 715 413 567</div>
                  <div className="text-zinc-500 text-sm mt-1">Mon-Sat: 5:00 AM - 10:00 PM</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <div className="text-white font-bold uppercase tracking-wider text-sm mb-1">Email</div>
                  <div className="text-zinc-400">info@gogofitness.lk</div>
                  <div className="text-zinc-500 text-sm mt-1">Online support 24/7</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <div className="text-white font-bold uppercase tracking-wider text-sm mb-1">Headquarters</div>
                  <div className="text-zinc-400">123 Fitness Blvd, Colombo 00100</div>
                  <div className="text-brand-green hover:underline cursor-pointer text-sm font-medium mt-1 inline-block">See all locations</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-dark-surface p-8 md:p-10 rounded-3xl border border-white/5">
            <h3 className="font-display text-2xl uppercase tracking-tight text-white mb-8">Send Us A Message</h3>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-brand-green/10 border border-brand-green/20 rounded-xl p-8 flex flex-col items-center justify-center text-center h-full min-h-[300px]"
              >
                <CheckCircle2 className="w-16 h-16 text-brand-green mb-4" />
                <h4 className="font-display text-2xl uppercase text-white mb-2">Message Sent!</h4>
                <p className="text-zinc-400">Thank you for reaching out. A member of our team will be in touch shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Full Name</label>
                    <input 
                      required 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange} 
                      type="text" 
                      className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-green focus:outline-none transition-colors" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Email Address</label>
                    <input 
                      required 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange} 
                      type="email" 
                      className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-green focus:outline-none transition-colors" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Phone Number</label>
                    <input 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange} 
                      type="tel" 
                      className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-green focus:outline-none transition-colors" 
                      placeholder="+94 7X XXX XXXX" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Subject</label>
                    <select 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange} 
                      className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-green focus:outline-none appearance-none"
                    >
                      <option value="" disabled>Select an option</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="pt">Personal Training</option>
                      <option value="feedback">Feedback / Suggestions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Message</label>
                  <textarea 
                    required 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange} 
                    rows={5} 
                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-green focus:outline-none transition-colors resize-none" 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-brand-green text-black px-8 py-4 rounded text-sm font-bold uppercase tracking-wide hover:bg-brand-green-hover transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
