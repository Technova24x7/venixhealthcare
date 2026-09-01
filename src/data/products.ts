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
  "Respiratory",
];

export const products: Product[] = [
  {
    id: 1,
    name: "VENIX VENILAX Laxative Powder",
    slug: "venix-venilax-laxative-powder",
    category: "Herbal",
    image: "https://m.media-amazon.com/images/I/619F+WNMkHL._SL1500_.jpg",

    shortDescription:
      "Natural And Herbal Digestion Powder With ISABGOL Base | Helps in Constipation and Indigestion | Promotes Digestive Health",

    benefits: [
      "Promotes Digestive Health",
      "Natural Herbs",
      "Daily Wellness",
    ],

    badge: "Best Seller",

    featured: true,

    amazonUrl: "https://www.amazon.in/VENIX-VENILAX-Laxative-Powder-Constipation/dp/B0D1N8DGTD/ref=sr_1_7?dib=eyJ2IjoiMSJ9.6SmS3zSZh1Ga2Q-WH_hDSuKtXuMtAUQ-Tr6OzxL8xi6_8GAr9YcshuXx7Q1gq7iVMc1agCWeWJ5TPmJ1M6HslHI8RsNNeg9JnJdckvtjNkkIrQVXo8dZeVbH8YfHX3XbrLHw2ES6DM15RNmcu7SwLQ.RuxC0f0n086U7M65Cy3jFFKLdn9Q9XYqP7CdtxXTjUk&dib_tag=se&keywords=VENIX&qid=1788248748&sr=8-7",
  },

  {
    id: 2,
    name: "VENIX VENIGESIC Oil",
    slug: "venix-venigesic-oil",
    category: "Immunity",
    image: "https://m.media-amazon.com/images/I/71ZaRnlVvvL._SL1484_.jpg",

    shortDescription:
      "Massage Oil For Joint and Back Pain | Herbal Pain Relief Oil with No Side Effects",

    benefits: [
      "Massage Oil",
      "Joint Pain Relief",
      "Herbal Pain Relief",
    ],

    badge: "Popular",

    amazonUrl: "https://www.amazon.in/VENIX-VENIGESIC-Oil-Massage-Effects/dp/B0CYSX3NKS/ref=sr_1_3?dib=eyJ2IjoiMSJ9.6SmS3zSZh1Ga2Q-WH_hDSuKtXuMtAUQ-Tr6OzxL8xi6_8GAr9YcshuXx7Q1gq7iVMc1agCWeWJ5TPmJ1M6HslHI8RsNNeg9JnJdckvtjNkkIrQVXo8dZeVbH8YfHX3XbrLHw2ES6DM15RNmcu7SwLQ.JKBpFdNz4Eo5CiQjJ1F7jHVt_CU9k9aF6SzrjZel3u8&dib_tag=se&keywords=VENIX&qid=1788249040&sr=8-3",
  },

  {
    id: 3,
    name: "VENIX URINIX Tablets",
    slug: "venix-urinix-tablets",
    category: "Supplements",
    image: "https://m.media-amazon.com/images/I/71KuAchzLmL._SL1500_.jpg",

    shortDescription:
      "100% Natural and Herbal Tablets | Helps In Maintaining the Uric Acid Level | Helpful for Redness & Swelling",

    benefits: [
      "Uric Acid Support",
      "Herbal Formula",
      "100% Natural Ingredients",
    ],

    amazonUrl: "https://www.amazon.in/VENIX-URINIX-Tablets-Maintaining-Swelling/dp/B0D1N8QZBN/ref=sr_1_1?dib=eyJ2IjoiMSJ9.6SmS3zSZh1Ga2Q-WH_hDSuKtXuMtAUQ-Tr6OzxL8xi6_8GAr9YcshuXx7Q1gq7iVMc1agCWeWJ5TPmJ1M6HslHI8RsNNeg9JnJdckvtjNkkIrQVXo8dZeVbH8YfHX3XbrLHw2ES6DM15RNmcu7SwLQ.JKBpFdNz4Eo5CiQjJ1F7jHVt_CU9k9aF6SzrjZel3u8&dib_tag=se&keywords=VENIX&qid=1788249040&sr=8-1",
  },

  {
    id: 4,
    name: "VENIX Heptoguard Syrup",
    slug: "venix-heptoguard-syrup",
    category: "Digestive",
    image: "https://m.media-amazon.com/images/I/41IRpQ5GI5L.jpg",

    shortDescription:
      " A Liver Tonic That Helps For Weak Liver and loss of appetite| Herbal Tonic For Health Support",

    benefits: [
      "Gut Health",
      "Digestion",
      "Daily Support",
    ],

    badge: "New",

    amazonUrl: "https://www.amazon.in/VENIX-Heptoguard-Syrup-Alcoholic-Support/dp/B0CYT4Z3D5/ref=sr_1_5?dib=eyJ2IjoiMSJ9.6SmS3zSZh1Ga2Q-WH_hDSuKtXuMtAUQ-Tr6OzxL8xi6_8GAr9YcshuXx7Q1gq7iVMc1agCWeWJ5TPmJ1M6HslHI8RsNNeg9JnJdckvtjNkkIrQVXo8dZeVbH8YfHX3XbrLHw2ES6DM15RNmcu7SwLQ.JKBpFdNz4Eo5CiQjJ1F7jHVt_CU9k9aF6SzrjZel3u8&dib_tag=se&keywords=VENIX&qid=1788249040&sr=8-5",
  },

  {
    id: 5,
    name: "VENIX TUFF TUSS Syrup",
    slug: "venix-tuff-tuss-syrup",
    category: "Personal Care",
    image: "https://m.media-amazon.com/images/I/616ke1IHD9L._SL1500_.jpg",

    shortDescription:
      "Herbal Cough Syrup With The Goodness Of Honey, Vasakha,Tulsi and Ginger | Helpful in Dry Cough & Sour Throat | Provides Soothing Effect",

    benefits: [
      "Respiratory Health",
      "Herbal Formula",
      "Soothing Effect",
    ],

    amazonUrl: "https://www.amazon.in/VENIX-TUFF-TUSS-Syrup-Goodness/dp/B0CYT41QQQ/ref=sr_1_7?dib=eyJ2IjoiMSJ9.6SmS3zSZh1Ga2Q-WH_hDSuKtXuMtAUQ-Tr6OzxL8xi6_8GAr9YcshuXx7Q1gq7iVMc1agCWeWJ5TPmJ1M6HslHI8RsNNeg9JnJdckvtjNkkIrQVXo8dZeVbH8YfHX3XbrLHw2ES6DM15RNmcu7SwLQ.JKBpFdNz4Eo5CiQjJ1F7jHVt_CU9k9aF6SzrjZel3u8&dib_tag=se&keywords=VENIX&qid=1788249040&sr=8-7",
  },

  {
    id: 6,
    name: "VENIX VENIPLEX Syrup",
    slug: "venix-veniplex-syrup",
    category: "Personal Care",
    image: "https://m.media-amazon.com/images/I/71EP+SUr6DL._SL1500_.jpg",

    shortDescription:
      " A Herbal Digestive Enzyme | Helps In Better Digestion and Increases Metabolism",

    benefits: [
      "Skin Care",
      "Personal Hygiene",
      "Daily Use",
    ],

    amazonUrl: "https://www.amazon.in/VENIX-VENIPLEX-Syrup-Digestive-Metabolism/dp/B0CYT3CZ79/ref=sr_1_8?dib=eyJ2IjoiMSJ9.6SmS3zSZh1Ga2Q-WH_hDSuKtXuMtAUQ-Tr6OzxL8xi6_8GAr9YcshuXx7Q1gq7iVMc1agCWeWJ5TPmJ1M6HslHI8RsNNeg9JnJdckvtjNkkIrQVXo8dZeVbH8YfHX3XbrLHw2ES6DM15RNmcu7SwLQ.JKBpFdNz4Eo5CiQjJ1F7jHVt_CU9k9aF6SzrjZel3u8&dib_tag=se&keywords=VENIX&qid=1788249040&sr=8-8",
  },
];