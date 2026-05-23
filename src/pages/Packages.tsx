import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { packagesData } from "../data/packages";

export function Packages() {
  const [activeTab, setActiveTab] = useState<'Couples' | 'Individuals' | 'Family'>('Individuals');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const tabs = ['Individuals', 'Couples', 'Family'] as const;

  const filteredPackages = packagesData.filter(p => p.category === activeTab);

  return (
    <div className="pt-28 pb-24 min-h-[90vh]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-display text-4xl md:text-5xl uppercase tracking-tight text-white mb-4">Membership Packages</h1>
          <p className="text-zinc-400 text-lg">Select the best plan that fits your goals. Upgrade or switch at any time.</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/5 p-1 rounded-lg border border-white/10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 text-sm font-bold uppercase tracking-wide rounded-md transition-all ${
                  activeTab === tab
                    ? 'bg-brand-green text-black'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {filteredPackages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-dark-surface rounded-3xl p-8 border border-white/5 hover:border-brand-green/30 transition-colors flex flex-col"
            >
              <h3 className="font-display text-2xl uppercase text-white mb-2">{pkg.name}</h3>
              <p className="text-sm text-zinc-400 mb-6 min-h-[20px]">
                {pkg.category} Package
              </p>

              <div className="mb-6 border-b border-white/5 pb-6">
                <span className="font-display text-4xl text-white">Rs. {pkg.price.toLocaleString()}</span>
                {pkg.signupFee > 0 && (
                  <div className="text-zinc-500 font-medium text-sm mt-2">
                    + Rs. {pkg.signupFee.toLocaleString()} Signup Fee
                  </div>
                )}
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {pkg.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-zinc-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={`/checkout/${pkg.id}`}
                className="block text-center w-full py-4 rounded text-sm font-bold uppercase tracking-wide transition-all bg-brand-green text-black hover:bg-brand-green-hover"
              >
                Select Package
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
