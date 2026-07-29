export interface Product {
  id: number;
  name: string;
  slug: string;
  category:
    | "Immunity"
    | "Herbal"
    | "Supplements"
    | "Personal Care"
    | "Digestive"
    | "Women's Health";

  image: string;

  shortDescription: string;

  benefits: string[];

  badge?: "Best Seller" | "New" | "Popular";

  featured?: boolean;

  amazonUrl: string;
}

export const categories = [
  "All",
  "Immunity",
  "Herbal",
  "Supplements",
  "Personal Care",
  "Digestive",
  "Women's Health",
];

export const products: Product[] = [
  {
    id: 1,
    name: "Ashwagandha Capsules",
    slug: "ashwagandha-capsules",
    category: "Herbal",
    image: "https://picsum.photos/600/600?random=1",

    shortDescription:
      "Premium herbal formulation that helps manage stress and supports overall wellness.",

    benefits: [
      "Stress Support",
      "Natural Herbs",
      "Daily Wellness",
    ],

    badge: "Best Seller",

    featured: true,

    amazonUrl: "https://amazon.in/",
  },

  {
    id: 2,
    name: "Vitamin C Tablets",
    slug: "vitamin-c-tablets",
    category: "Immunity",
    image: "https://picsum.photos/600/600?random=2",

    shortDescription:
      "Daily immune support with high-quality Vitamin C for healthy living.",

    benefits: [
      "Immunity",
      "Antioxidant",
      "Daily Health",
    ],

    badge: "Popular",

    amazonUrl: "https://amazon.in/",
  },

  {
    id: 3,
    name: "Calcium + Vitamin D3",
    slug: "calcium-vitamin-d3",
    category: "Supplements",
    image: "https://picsum.photos/600/600?random=3",

    shortDescription:
      "Supports strong bones, muscles, and overall skeletal health.",

    benefits: [
      "Bone Health",
      "Vitamin D3",
      "Calcium",
    ],

    amazonUrl: "https://amazon.in/",
  },

  {
    id: 4,
    name: "Digestive Care",
    slug: "digestive-care",
    category: "Digestive",
    image: "https://picsum.photos/600/600?random=4",

    shortDescription:
      "Supports digestive comfort and promotes a healthy gut environment.",

    benefits: [
      "Gut Health",
      "Digestion",
      "Daily Support",
    ],

    badge: "New",

    amazonUrl: "https://amazon.in/",
  },

  {
    id: 5,
    name: "Women's Wellness",
    slug: "women-wellness",
    category: "Women's Health",
    image: "https://picsum.photos/600/600?random=5",

    shortDescription:
      "Specially formulated nutritional support for women's everyday wellness.",

    benefits: [
      "Women's Health",
      "Nutrition",
      "Daily Care",
    ],

    amazonUrl: "https://amazon.in/",
  },

  {
    id: 6,
    name: "Personal Care Kit",
    slug: "personal-care-kit",
    category: "Personal Care",
    image: "https://picsum.photos/600/600?random=6",

    shortDescription:
      "Premium personal care essentials designed for everyday hygiene and wellness.",

    benefits: [
      "Skin Care",
      "Personal Hygiene",
      "Daily Use",
    ],

    amazonUrl: "https://amazon.in/",
  },
];