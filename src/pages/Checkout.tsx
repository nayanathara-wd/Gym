import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { CreditCard, CheckCircle2 } from "lucide-react";
import { packagesData } from "../data/packages";

export function Checkout() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const pkg = packagesData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
    cardType: 'mastercard'
  });

  if (!pkg) {
    return (
      <div className="pt-28 pb-24 text-center">
        <h2 className="text-2xl text-white">Package not found</h2>
        <button onClick={() => navigate('/packages')} className="mt-4 text-brand-green">Go back to packages</button>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate payment processing...
    setTimeout(() => {
      navigate('/success', { state: { package: pkg, user: formData } });
    }, 1500);
  };

  const total = pkg.price + pkg.signupFee;

  return (
    <div className="pt-28 pb-24 min-h-[90vh]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl uppercase tracking-tight text-white mb-2">Checkout</h1>
          <p className="text-zinc-400">Complete your {pkg.name.toLowerCase()} membership.</p>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Order Summary */}
          <div className="md:col-span-5 bg-dark-surface p-8 rounded-3xl border border-white/5 order-2 md:order-1">
            <h2 className="font-display text-2xl uppercase tracking-tight text-white mb-6">Order Summary</h2>
            
            <div className="flex justify-between items-center mb-4">
              <div>
                <div className="text-white font-medium">{pkg.name}</div>
                <div className="text-zinc-500 text-sm">{pkg.category}</div>
              </div>
              <div className="text-white font-mono">Rs. {pkg.price.toLocaleString()}</div>
            </div>

            {pkg.signupFee > 0 && (
              <div className="flex justify-between items-center mb-4 text-zinc-400">
                <div>Signup Fee</div>
                <div className="font-mono">Rs. {pkg.signupFee.toLocaleString()}</div>
              </div>
            )}

            <div className="border-t border-white/10 my-6 pt-6 flex justify-between items-center">
              <div className="text-lg font-bold text-white uppercase tracking-wider">Total</div>
              <div className="font-display text-3xl text-brand-green">Rs. {total.toLocaleString()}</div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 text-zinc-400 text-sm">
                <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" />
                <span>Instant access upon successful payment.</span>
              </div>
              <div className="flex items-start gap-3 text-zinc-400 text-sm">
                <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" />
                <span>Secure 256-bit SSL encryption.</span>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="md:col-span-7 bg-dark-surface p-8 rounded-3xl border border-white/5 order-1 md:order-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="font-display text-2xl uppercase tracking-tight text-white mb-6">Personal Details</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Full Name</label>
                  <input required name="name" onChange={handleInputChange} type="text" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-green focus:outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Email Address</label>
                  <input required name="email" onChange={handleInputChange} type="email" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-green focus:outline-none transition-colors" placeholder="john@example.com" />
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                 <h2 className="font-display text-2xl uppercase tracking-tight text-white mb-6">Payment Method</h2>
                 
                 <div className="mb-6">
                   <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Card Type</label>
                   <select name="cardType" onChange={handleInputChange} className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-green focus:outline-none appearance-none">
                     <option value="mastercard">MasterCard</option>
                     <option value="visa">Visa</option>
                     <option value="amex">American Express</option>
                     <option value="discover">Discover</option>
                   </select>
                 </div>

                 <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Card Number</label>
                      <div className="relative">
                        <input required name="cardNumber" onChange={handleInputChange} type="text" className="w-full bg-black border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white focus:border-brand-green focus:outline-none transition-colors font-mono" placeholder="0000 0000 0000 0000" />
                        <CreditCard className="w-5 h-5 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Expiry Date</label>
                        <input required name="expiry" onChange={handleInputChange} type="text" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-green focus:outline-none transition-colors font-mono" placeholder="MM/YY" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">CVC</label>
                        <input required name="cvc" onChange={handleInputChange} type="text" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-green focus:outline-none transition-colors font-mono" placeholder="123" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Name on Card</label>
                      <input required name="cardName" onChange={handleInputChange} type="text" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-green focus:outline-none transition-colors" placeholder="JOHN DOE" />
                    </div>
                 </div>
              </div>

              <button type="submit" className="w-full bg-brand-green text-black px-8 py-5 rounded-lg text-base font-bold uppercase tracking-wider hover:bg-brand-green-hover transition-all flex items-center justify-center gap-2 mt-8">
                <CreditCard className="w-5 h-5" />
                Pay Rs. {total.toLocaleString()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
