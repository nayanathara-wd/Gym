import locationsHero from '../assets/images/locations_hero_1779549806389.png';
import branchColombo from '../assets/images/branch_colombo_1779549824330.png';
import branchKandy from '../assets/images/branch_kandy_1779549842989.png';

export const locationsData = [
  {
    id: 'colombo',
    name: 'Go Go Fitness Leisure Hub',
    city: 'Colombo',
    address: '123 Fitness Blvd, Colombo 00100',
    mapLink: 'https://maps.app.goo.gl/7KLeA6RritaUDGTC6?g_st=ic',
    embedMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58585978135!2d79.77380315480287!3d6.92183864448558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1716487777123!5m2!1sen!2sus',
    image: branchColombo,
    description: 'Our flagship Leisure Hub in the heart of Colombo. A massive, multi-level fitness sanctuary designed for ultimate performance and recovery.',
    stats: {
      staff: '35+',
      members: '1800+',
      size: '25,000 sqft',
      machines: '100+'
    },
    features: ['Olympic Weightlifting Zone', 'Indoor functional turf', 'Rooftop Yoga Studio', 'Premium Cafe & Lounge', 'Sauna & Ice Baths', 'Dedicated Parking']
  },
  {
    id: 'kandy',
    name: 'Go Go Fitness Studio',
    city: 'Kandy',
    address: '45 Hilltop Road, Kandy 20000',
    mapLink: 'https://maps.app.goo.gl/mRQUA2Q33AdVRun57?g_st=ic',
    embedMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63286.08985149454!2d80.59011933096684!3d7.2946282869929845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae366266498acd3%3A0x41120cd49da59d80!2sKandy%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1716487814567!5m2!1sen!2sus',
    image: branchKandy,
    description: 'A boutique fitness studio nestled in the scenic hills of Kandy. Focused on specialized group classes and elite personal training with a view.',
    stats: {
      staff: '15+',
      members: '700+',
      size: '12,000 sqft',
      machines: '50+'
    },
    features: ['Mountain-view cardio deck', 'Boutique Pilate Studio', 'TRX Suspension Rigs', 'Outdoor Training Area', 'Smoothie Bar', 'Luxury Locker Rooms']
  }
];

export { locationsHero };
