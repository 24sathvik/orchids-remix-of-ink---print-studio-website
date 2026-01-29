export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  minQuantity: number;
  category: 'wedding-cards' | 'visiting-cards' | 'photo-frames' | 'albums';
  images: string[];
  featured?: boolean;
  bestseller?: boolean;
}

export const products: Product[] = [
  {
    id: 'wc-001',
    title: 'Royal Elegance Wedding Card',
    description: 'Luxurious wedding invitation with gold foil accents and intricate floral patterns. Perfect for grand celebrations.',
    price: 85,
    minQuantity: 50,
    category: 'wedding-cards',
    images: ['https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?w=800'],
    featured: true,
    bestseller: true
  },
  {
    id: 'wc-002',
    title: 'Blush Romance Collection',
    description: 'Soft pastel wedding cards with delicate lace textures and romantic typography.',
    price: 65,
    minQuantity: 50,
    category: 'wedding-cards',
    images: ['https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800'],
    featured: true
  },
  {
    id: 'wc-003',
    title: 'Classic Ivory Suite',
    description: 'Timeless ivory wedding invitations with embossed details and satin ribbon.',
    price: 95,
    minQuantity: 50,
    category: 'wedding-cards',
    images: ['https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800'],
    featured: true
  },
  {
    id: 'wc-004',
    title: 'Modern Minimalist',
    description: 'Clean, contemporary wedding cards with subtle gold accents for the modern couple.',
    price: 55,
    minQuantity: 50,
    category: 'wedding-cards',
    images: ['https://images.unsplash.com/photo-1595407660626-db35dcd16609?w=800']
  },
  {
    id: 'wc-005',
    title: 'Vintage Charm',
    description: 'Vintage-inspired wedding invitations with antique patterns and calligraphy.',
    price: 75,
    minQuantity: 50,
    category: 'wedding-cards',
    images: ['https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800'],
    bestseller: true
  },
  {
    id: 'wc-006',
    title: 'Floral Garden Suite',
    description: 'Beautiful botanical wedding cards featuring hand-painted floral illustrations.',
    price: 80,
    minQuantity: 50,
    category: 'wedding-cards',
    images: ['https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800']
  },
  {
    id: 'vc-001',
    title: 'Executive Gold',
    description: 'Premium visiting cards with gold foil embossing on luxury cardstock.',
    price: 15,
    minQuantity: 100,
    category: 'visiting-cards',
    images: ['https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800'],
    featured: true
  },
  {
    id: 'vc-002',
    title: 'Classic Professional',
    description: 'Clean and professional business cards with matte finish.',
    price: 8,
    minQuantity: 100,
    category: 'visiting-cards',
    images: ['https://images.unsplash.com/photo-1589041127168-9b1915731dc3?w=800']
  },
  {
    id: 'vc-003',
    title: 'Creative Studio',
    description: 'Artistic business cards with unique textures and creative designs.',
    price: 12,
    minQuantity: 100,
    category: 'visiting-cards',
    images: ['https://images.unsplash.com/photo-1572502742759-efb9c283a5db?w=800']
  },
  {
    id: 'pf-001',
    title: 'Ornate Gold Frame',
    description: 'Elegant photo frame with intricate gold detailing. Perfect for wedding photos.',
    price: 450,
    minQuantity: 1,
    category: 'photo-frames',
    images: ['https://images.unsplash.com/photo-1582053433976-25c00369fc93?w=800'],
    featured: true
  },
  {
    id: 'pf-002',
    title: 'Vintage Wooden Frame',
    description: 'Rustic wooden photo frame with distressed finish.',
    price: 350,
    minQuantity: 1,
    category: 'photo-frames',
    images: ['https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=800']
  },
  {
    id: 'pf-003',
    title: 'Modern Acrylic Frame',
    description: 'Contemporary clear acrylic frame for a minimalist look.',
    price: 280,
    minQuantity: 1,
    category: 'photo-frames',
    images: ['https://images.unsplash.com/photo-1581404917879-53e19259fdda?w=800']
  },
  {
    id: 'al-001',
    title: 'Premium Wedding Album',
    description: 'Luxurious leather-bound wedding album with lay-flat pages. 50 pages included.',
    price: 2500,
    minQuantity: 1,
    category: 'albums',
    images: ['https://images.unsplash.com/photo-1519741497674-611481863552?w=800'],
    featured: true,
    bestseller: true
  },
  {
    id: 'al-002',
    title: 'Classic Photo Album',
    description: 'Traditional photo album with acid-free pages. 30 pages included.',
    price: 1200,
    minQuantity: 1,
    category: 'albums',
    images: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800']
  },
  {
    id: 'al-003',
    title: 'Mini Memory Book',
    description: 'Compact photo album perfect for engagement or pre-wedding shoots.',
    price: 800,
    minQuantity: 1,
    category: 'albums',
    images: ['https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=800']
  }
];

export const categories = [
  { id: 'wedding-cards', name: 'Wedding Cards', description: 'Elegant invitations for your special day' },
  { id: 'visiting-cards', name: 'Visiting Cards', description: 'Professional business cards' },
  { id: 'photo-frames', name: 'Photo Frames', description: 'Beautiful frames for precious memories' },
  { id: 'albums', name: 'Albums', description: 'Premium photo albums' }
];

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured);
}

export function getBestsellers(): Product[] {
  return products.filter(p => p.bestseller);
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}
