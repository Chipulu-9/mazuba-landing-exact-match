import type { Product, Package } from '../types';

const imgBase = '/assets/images/products/individual-images/';
const comboBase = '/assets/images/products/combo-images/';

export const singleProducts: Product[] = [
  {
    id: 'p1',
    name: '6kVA Inverter Felicity',
    price: 8500.00,
    image: imgBase + '6kVAFelicity inverter@2x-80.jpg',
    specs: ['6kVA', 'Felicity'],
  },
  {
    id: 'p2',
    name: '6kVA Inverter Must',
    price: 7500.00,
    image: '/assets/images/inverter.jpg',
    specs: ['6kVA', 'Must'],
  },
  {
    id: 'p3',
    name: '4kVA Inverter Felicity',
    price: 6500.00,
    image: '/assets/images/inverter.jpg',
    specs: ['4kVA', 'Felicity'],
  },
  {
    id: 'p4',
    name: '3kVA Hybrid Inverter Felicity',
    price: 6000.00,
    image: '/assets/images/inverter.jpg',
    specs: ['3kVA', 'Hybrid', 'Felicity'],
  },
  {
    id: 'p5',
    name: '1kVA Hybrid Inverter Felicity',
    price: 4000.00,
    image: imgBase + '1kVAFelicity inverter@2x-80.jpg',
    specs: ['1kVA', 'Hybrid', 'Felicity'],
  },
  {
    id: 'p6',
    name: '3kVA Esener Inverter',
    price: 6000.00,
    image: imgBase + '3kVAESENER inverter@2x-80.jpg',
    specs: ['3kVA', 'Esener'],
  },
  {
    id: 'p7',
    name: '10kVA Inverter Hanchu',
    price: 19500.00,
    image: '/assets/images/inverter.jpg',
    specs: ['10kVA', 'Hanchu'],
  },
  {
    id: 'p8',
    name: 'Hanchu 2.56kWh 24V Lithium Battery',
    price: 9750.00,
    image: '/assets/images/battery-storage.jpg',
    specs: ['2.56kWh', '24V', 'Lithium'],
  },
  {
    id: 'p9',
    name: '5kWh Felicity Lithium Battery 100Ah 51.2V',
    price: 15500.00,
    image: '/assets/images/battery-storage.jpg',
    specs: ['5kWh', '100Ah', '51.2V'],
  },
  {
    id: 'p10',
    name: '24V 100Ah Felicity Lithium Battery',
    price: 11000.00,
    image: '/assets/images/battery-storage.jpg',
    specs: ['24V', '100Ah', 'Lithium'],
  },
  {
    id: 'p11',
    name: '1.5kVA Fivestar Inverter',
    price: 5000.00,
    image: '/assets/images/inverter.jpg',
    specs: ['1.5kVA', 'Fivestar'],
  },
  {
    id: 'p12',
    name: '12V 150Ah Felicity Gel Battery',
    price: 3500.00,
    image: imgBase + '200Ah 12vFelicity gel battery@2x-80.jpg',
    specs: ['12V', '150Ah', 'Gel'],
  },
];

export const packageProducts: Package[] = [
  {
    id: 'pkg1',
    name: '1kVA Felicity Package',
    price: 15400.00,
    image: comboBase + '1kVA ComboInverter & 12V,150Ah Gel Battery@2x-80.jpg',
    description: 'Basic lighting, phone charging, and small appliances.',
    features: [
      '1kVA Felicity Inverter — K4,000',
      '2x 12V 150Ah Felicity Gel Battery — K7,000',
      '2x 585W Solar Panels — K4,400',
    ],
  },
  {
    id: 'pkg2',
    name: '1.5kVA Fivestar Package',
    price: 16400.00,
    image: '',
    description: 'Lights, TV, fan, and phone charging.',
    features: [
      '1.5kVA Fivestar Inverter — K5,000',
      '2x 12V 150Ah Felicity Gel Battery — K7,000',
      '2x 585W Solar Panels — K4,400',
    ],
  },
  {
    id: 'pkg3',
    name: '3kVA Felicity Package',
    price: 23600.00,
    image: comboBase + '3kVA ComboInverter & 24VLithium Battery @2x-80.jpg',
    description: 'Fridge, lights, TV, and entertainment system.',
    features: [
      '3kVA Felicity Inverter — K6,000',
      '24V 100Ah Felicity Lithium Battery — K11,000',
      '3x 585W Solar Panels — K6,600',
    ],
  },
  {
    id: 'pkg4',
    name: '3kVA Esener Package',
    price: 23600.00,
    image: '',
    description: 'Fridge, lights, TV, and entertainment system.',
    features: [
      '3kVA Esener Inverter — K6,000',
      '3x 585W Solar Panels — K6,600',
      '24V 100Ah Felicity Lithium Battery — K11,000',
    ],
  },
  {
    id: 'pkg5',
    name: '4kVA Felicity Package',
    price: 26300.00,
    image: '',
    description: 'Full home power — fridge, microwave, laptops, and more.',
    features: [
      '4kVA Felicity Inverter — K6,500',
      '4x 585W Solar Panels — K8,800',
      '24V 100Ah Felicity Lithium Battery — K11,000',
    ],
  },
  {
    id: 'pkg6',
    name: '6kVA Felicity Package',
    price: 37200.00,
    image: comboBase + '6kVA ComboInverter + 51.2VLithium Battery @2x-80.jpg',
    description: 'Large home or small business — AC, fridge, and office equipment.',
    features: [
      '6kVA Felicity Inverter — K8,500',
      '6x 585W Solar Panels — K13,200',
      '48V 100Ah Felicity Lithium Battery — K15,500',
    ],
  },
  {
    id: 'pkg7',
    name: '6kVA Must Package',
    price: 36200.00,
    image: '',
    description: 'Large home or small business — AC, fridge, and office equipment.',
    features: [
      '6kVA Must Inverter — K7,500',
      '6x 585W Solar Panels — K13,200',
      '48V 100Ah Felicity Lithium Battery — K15,500',
    ],
  },
  {
    id: 'pkg8',
    name: '8kVA Felicity Package',
    price: 70600.00,
    image: '',
    description: 'Heavy-duty power for large homes and commercial properties.',
    features: [
      '8kVA Felicity Inverter — K19,000',
      '8x 585W Solar Panels — K17,600',
      '51.2V 200Ah Felicity Lithium Battery — K34,000',
    ],
  },
  {
    id: 'pkg9',
    name: '10kVA Hanchu Package',
    price: 68300.00,
    image: comboBase + '10kVA ComboInverter + 51.2VLithium Battery @2x-80.jpg',
    description: 'Full commercial or industrial power solution.',
    features: [
      '10kVA Hanchu Inverter — K19,500',
      '9x 585W Solar Panels — K19,800',
      '51.2V 200Ah Hanchu Lithium Battery — K29,000',
    ],
  },
];
