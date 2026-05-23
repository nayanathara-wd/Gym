import { useLocation, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function Success() {
  const location = useLocation();
  const state = location.state as any;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  if (!state || !state.package) {
    return <Navigate to="/packages" />;
  }

  const { package: pkg, user } = state;
  const membershipId = `GGF-${Math.floor(100000 + Math.random() * 900000)}`;
  const total = pkg.price + pkg.signupFee;

  return (
    <div className="pt-28 pb-24 min-h-[90vh] flex items-center">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-dark-surface p-10 md:p-14 rounded-3xl border border-white/5 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-brand-green" />
          
          <div className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-brand-green" />
          </div>

          <h1 className="font-display text-4xl md:text-5xl uppercase tracking-tight text-white mb-4">
            Payment Successful!
          </h1>
          
          <p className="text-zinc-400 text-lg mb-8 max-w-lg mx-auto">
            Thank you for joining Go Go Fitness, {user.name}! Your membership is now active, and we can't wait to see you at the gym.
          </p>

          <div className="bg-black rounded-2xl border border-white/10 p-6 md:p-8 text-left max-w-xl mx-auto mb-10">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
              <div>
                <div className="text-zinc-500 text-sm font-bold uppercase tracking-wider mb-1">Membership ID</div>
                <div className="text-white font-mono text-xl">{membershipId}</div>
              </div>
              <div className="text-right">
                <div className="text-zinc-500 text-sm font-bold uppercase tracking-wider mb-1">Amount Paid</div>
                <div className="text-brand-green font-mono text-xl">Rs. {total.toLocaleString()}</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-400">Package</span>
                <span className="text-white font-medium">{pkg.name} ({pkg.category})</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-400">Email Address</span>
                <span className="text-white font-medium">{user.email}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded text-sm font-bold uppercase tracking-wide hover:bg-white/10 transition-colors"
            >
              Return Home
            </Link>
            <Link
              to="/#classes"
              className="bg-brand-green text-black px-8 py-4 rounded text-sm font-bold uppercase tracking-wide hover:bg-brand-green-hover transition-colors flex items-center justify-center gap-2"
            >
              View Schedule <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
