export interface Package {
  id: string;
  category: 'Couples' | 'Individuals' | 'Family';
  name: string;
  price: number;
  signupFee: number;
  features: string[];
}

export const packagesData: Package[] = [
  // Couples
  {
    id: 'c-2yr',
    category: 'Couples',
    name: '2 Year Membership',
    price: 230000,
    signupFee: 1000,
    features: ['24/7 Gym Access', 'Standard Equipment Access', 'Locker Room & Showers']
  },
  {
    id: 'c-ann',
    category: 'Couples',
    name: 'Annual Membership',
    price: 250000,
    signupFee: 1000,
    features: ['Access hours for Colombo', '4* access at Kandy location', 'Locker Room & Showers']
  },
  {
    id: 'c-6mo',
    category: 'Couples',
    name: '6 Month Membership',
    price: 150000,
    signupFee: 1000,
    features: ['24/7 Gym Access', 'Standard Equipment Access', 'Locker Room & Showers']
  },
  
  // Individuals
  {
    id: 'i-2yr',
    category: 'Individuals',
    name: '2 Year Membership',
    price: 144000,
    signupFee: 1000,
    features: ['24/7 Gym Access', 'Standard Equipment Access', 'Locker Room & Showers']
  },
  {
    id: 'i-ann',
    category: 'Individuals',
    name: 'Annual Membership',
    price: 90000,
    signupFee: 1000,
    features: ['24/7 Gym Access', 'Standard Equipment Access', 'Locker Room & Showers']
  },
  {
    id: 'i-6mo',
    category: 'Individuals',
    name: '6 Month Membership',
    price: 65000,
    signupFee: 1000,
    features: ['24/7 Gym Access', 'Standard Equipment Access', 'Locker Room & Showers']
  },

  // Family
  {
    id: 'f-ann',
    category: 'Family',
    name: 'Annual Membership',
    price: 400000,
    signupFee: 1000,
    features: ['2 adults + 2 under 18', 'Access hours for Colombo', '4* per month access at Kandy location']
  },
  {
    id: 'f-6mo',
    category: 'Family',
    name: '6 Month Membership',
    price: 280000,
    signupFee: 1000,
    features: ['2 adults + 2 under 18', '24/7 Gym Access', 'Standard Equipment Access']
  },
  {
    id: 'f-day',
    category: 'Family',
    name: 'Day Pass',
    price: 5000,
    signupFee: 0,
    features: ['Valid for 1 Day', 'Standard Equipment Access', 'Locker Room & Showers']
  }
];
