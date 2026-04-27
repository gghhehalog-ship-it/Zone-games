export type Category = 'Action' | 'Racing' | 'Puzzle' | 'Multiplayer' | 'Sports' | 'Adventure';

export interface Game {
  id: string;
  title: string;
  category: Category;
  thumbnail: string;
  embedUrl: string;
  description: string;
  playCount: string;
  rating: number;
}

export const GAMES: Game[] = [
  {
    id: '1',
    title: 'Neon Racer',
    category: 'Racing',
    thumbnail: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&q=80&w=400',
    embedUrl: 'https://itch.io/embed-upload/1651871?color=333333',
    description: 'High-speed racing in a futuristic neon world. Compete for the best time!',
    playCount: '1.2M',
    rating: 4.8
  },
  {
    id: '2',
    title: 'Block Breaker',
    category: 'Puzzle',
    thumbnail: 'https://images.unsplash.com/photo-1614027164847-1b2809eb189d?auto=format&fit=crop&q=80&w=400',
    embedUrl: 'https://itch.io/embed-upload/2451871?color=333333',
    description: 'Classic block-breaking action with modern physics and power-ups.',
    playCount: '850K',
    rating: 4.5
  },
  {
    id: '3',
    title: 'Shadow Archer',
    category: 'Action',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400',
    embedUrl: 'https://itch.io/embed-upload/3451871?color=333333',
    description: 'Master the art of the bow in this stealthy action game.',
    playCount: '2.1M',
    rating: 4.9
  },
  {
    id: '4',
    title: 'Galaxy Strike',
    category: 'Multiplayer',
    thumbnail: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&q=80&w=400',
    embedUrl: 'https://itch.io/embed-upload/4451871?color=333333',
    description: 'Battle players from around the world in epic space combat.',
    playCount: '5.4M',
    rating: 4.7
  },
  {
    id: '5',
    title: 'Urban Soccer',
    category: 'Sports',
    thumbnail: 'https://images.unsplash.com/photo-1431324155629-1a6eda1eedbc?auto=format&fit=crop&q=80&w=400',
    embedUrl: 'https://itch.io/embed-upload/5451871?color=333333',
    description: 'Street-style soccer with intense matches and trick shots.',
    playCount: '3.2M',
    rating: 4.6
  },
  {
    id: '6',
    title: 'Canyon Quest',
    category: 'Adventure',
    thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=400',
    embedUrl: 'https://itch.io/embed-upload/6451871?color=333333',
    description: 'Explore dangerous canyons and find hidden treasures.',
    playCount: '1.5M',
    rating: 4.4
  },
  {
    id: 'bazarci-sim',
    title: 'Bazarcı Sim',
    category: 'Action',
    thumbnail: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400',
    embedUrl: '/games/bazarci-sim.html',
    description: 'Öz bazarını idarə et, müştərilərlə bazarlıq et və ən zəngin satıcı ol! Azərbaycan dilində ilk bazar simulyatoru.',
    playCount: 'New',
    rating: 5.0
  },
  {
    id: 'turbo-rush',
    title: 'Turbo Rush',
    category: 'Racing',
    thumbnail: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=400',
    embedUrl: '/games/turbo-rush.html',
    description: 'Yüksək sürətli yarış həyəcanı! Rəqibləri geridə qoy, nitro istifadə et və finişə birinci çat.',
    playCount: 'Hot',
    rating: 4.9
  }
];

export const CATEGORIES: Category[] = [
  'Multiplayer',
  'Action',
  'Racing',
  'Puzzle',
  'Sports',
  'Adventure'
];
