import type { FoodItem, Total } from "@/types/globaltypes";

export const foodItems: FoodItem[] = [
  {
    id: "egg",
    name: "Egg",
    macros: {
      calories: 72,
      protein_g: 6.5,
      fat_g: 5.0,
      carbs_g: 0.5,
    },
    micros: {
      sugar_g: 0.2,
      calcium_mg: 56,
      iron_mg: 1.0,
      magnesium_mg: 6,
      phosphorus_mg: 99,
      potassium_mg: 69,
      sodium_mg: 71,
      zinc_mg: 0.5,
      selenium_mcg: 15.5,
      vitamin_a_mcg: 80,
      vitamin_c_mg: 0,
      vitamin_d_mcg: 1,
      vitamin_e_mg: 0.5,
      vitamin_b12_mcg: 0.54,
      folate_mcg: 23.5,
      choline_mg: 147,
    }
  },
  {
    id: "peanut",
    name: "Peanut",
    macros: {
      calories: 567,
      protein_g: 25.8,
      fat_g: 49.2,
      carbs_g: 16,
    },
    micros: {
      fiber_g: 8.5,
      sugar_g: 4.7,
      calcium_mg: 92,
      iron_mg: 4.58,
      magnesium_mg: 168,
      phosphorus_mg: 376,
      potassium_mg: 705,
      sodium_mg: 18,
      zinc_mg: 3.3,
      copper_mg: 1.1,
      manganese_mg: 1.9,
      selenium_mcg: 7.2,
      vitamin_e_mg: 8.3,
      vitamin_b1_mg: 0.64,
      vitamin_b3_mg: 12,
      folate_mcg: 240,
    }
  },
  {
    id: "soya_chunks",
    name: "Soya Chunks",
    macros: {
      calories: 345,
      protein_g: 52,
      fat_g: 0.5,
      carbs_g: 33,
    },
    micros: {
      fiber_g: 13,
      sugar_g: 33,
      calcium_mg: 350,
      iron_mg: 20,
    }
  },
  {
    id: "paneer",
    name: "Paneer",
    macros: {
      calories: 265,
      protein_g: 20,
      fat_g: 20,
      carbs_g: 3.5,
    },
    micros: {
      sugar_g: 2.8,
      calcium_mg: 600,
      iron_mg: 0.5,
      phosphorus_mg: 252,
    }
  },
  {
    id: "milk",
    name: "Milk",
    macros: {
      calories: 61,
      protein_g: 3.2,
      fat_g: 3.3,
      carbs_g: 4.8,
    },
    micros: {
      sugar_g: 4.8,
      calcium_mg: 113,
      iron_mg: 0.05,
      magnesium_mg: 10,
      phosphorus_mg: 95,
      potassium_mg: 138,
      sodium_mg: 49,
      zinc_mg: 0.37,
    }
  },
  {
    id: "roti",
    name: "Roti",
    macros: {
      calories: 299,
      protein_g: 7.85,
      fat_g: 9.2,
      carbs_g: 46.13,
    },
    micros: {
      fiber_g: 9.7,
      sugar_g: 2.9,
      calcium_mg: 36,
      iron_mg: 2.2,
      magnesium_mg: 56,
      phosphorus_mg: 158,
      potassium_mg: 196,
      sodium_mg: 298,
      manganese_mg: 1.7,
      zinc_mg: 1.5,
    }
  },
  {
    id: "moong_daal",
    name: "Moong Daal",
    macros: {
      calories: 330,
      protein_g: 24,
      fat_g: 1,
      carbs_g: 60,
    },
    micros: {
      fiber_g: 16,
      iron_mg: 6.5,
      magnesium_mg: 120,
      potassium_mg: 1250,
    }
  },
  {
    id: "gram_flour",
    name: "Gram Flour",
    macros: {
      calories: 313,
      protein_g: 22,
      fat_g: 5.4,
      carbs_g: 49.6,
    },
    micros: {}
  },
  {
    id: "black_chickpeas",
    name: "Black Chickpeas",
    macros: {
      calories: 164,
      protein_g: 20,
      fat_g: 2.6,
      carbs_g: 27,
    },
    micros: {
      fiber_g: 7.6,
      sugar_g: 4.8,
      potassium_mg: 291,
    }
  },
  {
    id: "soyabeans",
    name: "Soyabeans",
    macros: {
      calories: 446,
      protein_g: 36.5,
      fat_g: 19.9,
      carbs_g: 30.2,
    },
    micros: {
      fiber_g: 9.3,
      calcium_mg: 102,
      iron_mg: 5.1,
      zinc_mg: 1.2,
      copper_mg: 0.41,
      manganese_mg: 0.82,
      phosphorus_mg: 245,
    }
  },
  {
    id: "oats",
    name: "Oats",
    macros: {
      calories: 401,
      protein_g: 10.9,
      fat_g: 7.5,
      carbs_g: 72.4,
    },
    micros: {}
  },
  {
    id: "almonds",
    name: "Almonds",
    macros: {
      calories: 579,
      protein_g: 21,
      fat_g: 50,
      carbs_g: 22,
    },
    micros: {
      fiber_g: 13,
      sugar_g: 4,
      calcium_mg: 269,
      iron_mg: 4,
      magnesium_mg: 270,
      phosphorus_mg: 481,
      potassium_mg: 733,
      sodium_mg: 1,
      zinc_mg: 3,
      copper_mg: 1,
      manganese_mg: 2,
      vitamin_e_mg: 26,
      riboflavin_mg: 1,
    }
  },
  {
    id: "walnuts",
    name: "Walnuts",
    macros: {
      calories: 654,
      protein_g: 15.2,
      fat_g: 65.2,
      carbs_g: 13.71,
    },
    micros: {
      fiber_g: 6.7,
      sugar_g: 2.6,
      calcium_mg: 98,
      iron_mg: 2.9,
      magnesium_mg: 158,
      phosphorus_mg: 346,
      potassium_mg: 441,
      sodium_mg: 2,
      zinc_mg: 3.1,
      copper_mg: 1.6,
      manganese_mg: 3.4,
      selenium_mcg: 4.9,
    }
  },
  {
    id: "curd",
    name: "Curd",
    macros: {
      calories: 38,
      protein_g: 3.2,
      fat_g: 0.5,
      carbs_g: 4.4,
    },
    micros: {
      sugar_g: 4.4,
      calcium_mg: 120,
      sodium_mg: 50,
    }
  },
  {
    id: "tofu",
    name: "Tofu",
    macros: {
      calories: 76,
      protein_g: 8,
      fat_g: 5,
      carbs_g: 2,
    },
    micros: {
      fiber_g: 0.3,
      calcium_mg: 350,
      iron_mg: 5,
      magnesium_mg: 30,
      phosphorus_mg: 97,
      potassium_mg: 121,
      sodium_mg: 7,
      zinc_mg: 1,
      copper_mg: 0.2,
      manganese_mg: 1,
      selenium_mcg: 9,
    }
  },
  {
    id: "chia",
    name: "Chia Seeds",
    macros: {
      calories: 486,
      protein_g: 17,
      fat_g: 31,
      carbs_g: 42,
    },
    micros: {
      fiber_g: 34,
      calcium_mg: 631,
      iron_mg: 8,
      magnesium_mg: 335,
      phosphorus_mg: 860,
      potassium_mg: 407,
      sodium_mg: 16,
      zinc_mg: 5,
      copper_mg: 1,
      manganese_mg: 3,
      selenium_mcg: 55,
      omega_3_g: 18,
    }
  },
  {
    id: "flax",
    name: "Flax Seeds",
    macros: {
      calories: 534,
      protein_g: 18,
      fat_g: 42,
      carbs_g: 29,
    },
    micros: {
      fiber_g: 27,
      sugar_g: 2,
      calcium_mg: 255,
      iron_mg: 6,
      magnesium_mg: 392,
      phosphorus_mg: 642,
      potassium_mg: 813,
      sodium_mg: 30,
      zinc_mg: 4,
      copper_mg: 1,
      manganese_mg: 2,
      selenium_mcg: 25,
      vitamin_b1_mg: 2,
    }
  },
  {
    id: "pumpkin_seeds",
    name: "Pumpkin Seeds",
    macros: {
      calories: 446,
      protein_g: 19,
      fat_g: 19,
      carbs_g: 54,
    },
    micros: {
      fiber_g: 18,
      calcium_mg: 55,
      iron_mg: 3.3,
      magnesium_mg: 262,
      phosphorus_mg: 92,
      potassium_mg: 919,
      sodium_mg: 18,
      zinc_mg: 10,
      copper_mg: 0.69,
      manganese_mg: 0.5,
    }
  },
  {
    id: "sunflower_seeds",
    name: "Sunflower Seeds",
    macros: {
      calories: 584,
      protein_g: 21,
      fat_g: 51,
      carbs_g: 20,
    },
    micros: {
      fiber_g: 8.6,
      sugar_g: 2.6,
      calcium_mg: 78,
      iron_mg: 5.3,
      magnesium_mg: 325,
      phosphorus_mg: 660,
      potassium_mg: 645,
      sodium_mg: 9,
      zinc_mg: 5,
      copper_mg: 1.8,
      manganese_mg: 2,
      selenium_mcg: 53,
      vitamin_e_mg: 35,
      vitamin_b1_mg: 1.5,
      vitamin_b6_mg: 1.3,
    }
  },
  {
    id: "watermelon",
    name: "Watermelon",
    macros: {
      calories: 30,
      protein_g: 0.61,
      fat_g: 0.15,
      carbs_g: 7.6,
    },
    micros: {
      fiber_g: 0.4,
      sugar_g: 6.2,
      calcium_mg: 7,
      iron_mg: 0.24,
      magnesium_mg: 10,
      phosphorus_mg: 11,
      potassium_mg: 112,
      sodium_mg: 1,
      zinc_mg: 0.1,
      vitamin_a_mcg: 28,
      vitamin_c_mg: 8.1,
    }
  },
  {
    id: "hemp_seeds",
    name: "Hemp Seeds",
    macros: {
      calories: 553,
      protein_g: 31.56,
      fat_g: 48.8,
      carbs_g: 8.7,
    },
    micros: {
      fiber_g: 4,
      sugar_g: 1.5,
      calcium_mg: 70,
      iron_mg: 8,
      magnesium_mg: 700,
      phosphorus_mg: 1650,
      potassium_mg: 1200,
      sodium_mg: 5,
      zinc_mg: 9.9,
      copper_mg: 1.6,
      manganese_mg: 7.6,
      vitamin_b1_mg: 1.3,
      vitamin_b6_mg: 0.6,
    }
  },
  {
    id: "ghee",
    name: "Ghee",
    macros: {
      calories: 876,
      protein_g: 0,
      fat_g: 99.8,
      carbs_g: 0,
    },
    micros: {
      monounsaturated_fat_g: 28.7,
      cholesterol_mg: 256,
      saturated_fat_g: 62.4,
      vitamin_a_mcg: 3069,
      polyunsaturated_fat_g: 3.7,
      vitamin_d_mcg: 1.3,
      vitamin_e_mg: 2.8,
      vitamin_k_mcg: 8.6,
    }
  },
  {
    id: "mustard_oil",
    name: "Mustard Oil",
    macros: {
      calories: 884,
      protein_g: 0,
      fat_g: 100,
      carbs_g: 0,
    },
    micros: {
      cholesterol_mg: 0,
      saturated_fat_g: 12,
      monounsaturated_fat_g: 59,
      polyunsaturated_fat_g: 21,
      vitamin_e_mg: 0.4,
    }
  },
  {
    id: "rice",
    name: "Rice",
    macros: {
      calories: 365,
      protein_g: 7.1,
      fat_g: 0.66,
      carbs_g: 80,
    },
    micros: {
      fiber_g: 1.3,
      sugar_g: 0.12,
      calcium_mg: 28,
      iron_mg: 4.3,
      magnesium_mg: 25,
      potassium_mg: 115,
    }
  },
  {
    id: "rajma",
    name: "Rajma (Kidney Beans)",
    macros: {
      calories: 337,
      protein_g: 23,
      fat_g: 1.0,
      carbs_g: 61,
    },
    micros: {
      fiber_g: 15,
      sugar_g: 2,
      sodium_mg: 12,
      potassium_mg: 1359,
      calcium_mg: 83,
      iron_mg: 7,
      magnesium_mg: 138,
      phosphorus_mg: 406,
      zinc_mg: 3,
    }
  },
  {
    id: "chickpeas",
    name: "Chickpeas",
    macros: {
      calories: 378,
      protein_g: 20,
      fat_g: 6,
      carbs_g: 63,
    },
    micros: {
      fiber_g: 12,
      sugar_g: 11,
      calcium_mg: 57,
      iron_mg: 4.3,
      magnesium_mg: 79,
      phosphorus_mg: 252,
      potassium_mg: 718,
      sodium_mg: 24,
      zinc_mg: 2.8,
      copper_mg: 0.66,
      manganese_mg: 21,
      folate_mcg: 557,
    }
  },
  {
    id: "chicken",
    name: "Chicken Breast",
    macros: {
      calories: 120,
      protein_g: 23,
      fat_g: 2.6,
      carbs_g: 0,
    },
    micros: {
      calcium_mg: 6,
      iron_mg: 0.4,
      magnesium_mg: 31,
      phosphorus_mg: 246,
      potassium_mg: 276,
      sodium_mg: 79,
      zinc_mg: 1.1,
      selenium_mcg: 26,
      niacin_mg: 15,
      vitamin_b6_mg: 0.64,
      vitamin_b12_mcg: 0.37,
      choline_mg: 96,
    }
  },
  {
    id: "apple",
    name: "Apple",
    macros: {
      calories: 52,
      protein_g: 0.26,
      fat_g: 0.17,
      carbs_g: 14,
    },
    micros: {
      fiber_g: 2.4,
      sugar_g: 10,
      calcium_mg: 6,
      iron_mg: 0.12,
      magnesium_mg: 5,
      phosphorus_mg: 11,
      potassium_mg: 107,
      sodium_mg: 1,
      zinc_mg: 0.04,
      vitamin_c_mg: 4.6,
      vitamin_b6_mg: 0.04,
    }
  },
  {
    id: "banana",
    name: "Banana",
    macros: {
      calories: 89,
      protein_g: 1.1,
      fat_g: 0.33,
      carbs_g: 23,
    },
    micros: {
      fiber_g: 2.6,
      sugar_g: 12,
      calcium_mg: 5,
      iron_mg: 0.26,
      magnesium_mg: 27,
      phosphorus_mg: 22,
      potassium_mg: 358,
      sodium_mg: 1,
      zinc_mg: 0.15,
      vitamin_b6_mg: 0.37,
      vitamin_c_mg: 8.7,
      manganese_mg: 0.27,
    }
  },
  {
    id: "cashews",
    name: "Cashews",
    macros: {
      calories: 553,
      protein_g: 18,
      fat_g: 44,
      carbs_g: 30,
    },
    micros: {
      fiber_g: 3.3,
      calcium_mg: 37,
      iron_mg: 6.68,
    }
  },
  {
    id: "raisins",
    name: "Raisins",
    macros: {
      calories: 299,
      protein_g: 3.1,
      fat_g: 0.46,
      carbs_g: 79,
    },
    micros: {
      fiber_g: 3.7,
      sugar_g: 59,
      calcium_mg: 50,
      iron_mg: 1.9,
      magnesium_mg: 32,
      phosphorus_mg: 101,
      potassium_mg: 749,
      sodium_mg: 11,
      zinc_mg: 0.22,
      copper_mg: 0.32,
      manganese_mg: 0.3,
    }
  },
  {
    id: "spinach",
    name: "Spinach",
    macros: {
      calories: 23,
      protein_g: 2.86,
      fat_g: 0.39,
      carbs_g: 3.63,
    },
    micros: {
      fiber_g: 2.2,
      sugar_g: 0.4,
      calcium_mg: 30,
      iron_mg: 0.8,
      magnesium_mg: 25,
      potassium_mg: 170,
      sodium_mg: 24,
      zinc_mg: 0.2,
      folate_mcg: 60,
      vitamin_a_mcg: 840,
      vitamin_c_mg: 8,
      vitamin_k_mcg: 145,
    }
  },
  {
    id:"amla",
    name: "Amla",
    macros: {
    calories: 44,              // ~44 kcal per 100 g :contentReference[oaicite:0]{index=0}  
    protein_g: 0.9,            // ~0.9 g :contentReference[oaicite:1]{index=1}  
    carbs_g: 10.2,             // ~10.2 g :contentReference[oaicite:2]{index=2}  
    fat_g: 0.58,               // ~0.58 g :contentReference[oaicite:3]{index=3}  
  },
  micros: {
    calcium_mg: 25,            // ~25 mg :contentReference[oaicite:6]{index=6}  
    iron_mg: 0.9,              // ~0.9 mg :contentReference[oaicite:7]{index=7}  
    sugar_g: 4.4    ,           // ~4.4g sugar (per Indian Express) :contentReference[oaicite:5]{index=5}  
    magnesium_mg: 10, 
        fiber_g: 4.3,              // ~4.3 g :contentReference[oaicite:4]{index=4}  
         // ~10 mg :contentReference[oaicite:8]{index=8}  
    phosphorus_mg: 21,         // ~21 mg :contentReference[oaicite:9]{index=9}  
    potassium_mg: 198,         // ~198 mg :contentReference[oaicite:10]{index=10}  
    sodium_mg: 13,             // ~13 mg :contentReference[oaicite:11]{index=11}  
    copper_mg: 0.1,             // ~0.1 mg :contentReference[oaicite:12]{index=12}  
    manganese_mg: 0.1,         // ~0.1 mg :contentReference[oaicite:13]{index=13}  
    zinc_mg: 0.12,              // ~0.12 mg :contentReference[oaicite:14]{index=14}  
    selenium_mcg: 0.6,         // ~0.6 µg :contentReference[oaicite:15]{index=15}  

    vitamin_a_mcg: 15 / 0.3,   // Different sources: ~15 mcg or 290 IU (≈ 87 mcg); using lower bound :contentReference[oaicite:16]{index=16}  
    vitamin_a_iu: 290,         // ~290 IU :contentReference[oaicite:17]{index=17}  

    vitamin_c_mg: 478,         // ~478 mg (varies widely) :contentReference[oaicite:18]{index=18}  
    vitamin_d_mcg: 0,          // none / negligible in fresh amla :contentReference[oaicite:19]{index=19}  
    vitamin_e_mg: 0.16,         // ~0.16 mg α-tocopherol :contentReference[oaicite:20]{index=20}  
    vitamin_k_mcg: 1.6,         // ~1.6 µg :contentReference[oaicite:21]{index=21}  

    vitamin_b1_mg: 0.1,         // ~0.1 mg (thiamine) :contentReference[oaicite:22]{index=22}  
    vitamin_b2_mg: 0.04,        // ~0.04 mg (riboflavin) :contentReference[oaicite:23]{index=23}  
    niacin_mg: 0.5,             // ~0.5 mg (B3 / niacin) :contentReference[oaicite:24]{index=24}  
    vitamin_b5_mg: 0.3,         // ~0.3 mg (pantothenic acid) :contentReference[oaicite:25]{index=25}  
    vitamin_b6_mg: 0.06,        // ~0.06 mg :contentReference[oaicite:26]{index=26}  
    vitamin_b7_mcg: 0,          // biotin not reported or negligible :contentReference[oaicite:27]{index=27}  
    vitamin_b9_mcg: 3,          // ~3 µg folate :contentReference[oaicite:28]{index=28}  
    vitamin_b12_mcg: 0,         // none / negligible :contentReference[oaicite:29]{index=29}  

    choline_mg: 4,              // ~4 mg :contentReference[oaicite:30]{index=30}  
    cholesterol_mg: 0,          // 0 mg (plant fruit) :contentReference[oaicite:31]{index=31}  

    omega_3_g: 0.048 / 0.000048, // ~48 mg (~0.048 g) omega-3 (ALA) :contentReference[oaicite:32]{index=32}  
  }
  }
];

export const dailyRequirements :Total= {
  macros: {
    calories: 2000,
    protein_g: 50,
    carbs_g: 275,
    fat_g: 70,
  },
  micros: {
    calcium_mg: 1000,
  iron_mg: 18,
  zinc_mg: 11,
  magnesium_mg: 400,
  phosphorus_mg: 700,
  potassium_mg: 4700,
  sodium_mg: 1500,
  copper_mg: 0.9,
  manganese_mg: 2.3,

  fiber_g: 28,
  sugar_g: 25, // upper limit, not RDA
  saturated_fat_g: 20, // recommended max
  monounsaturated_fat_g: 30, // typical target range
  polyunsaturated_fat_g: 17, // typical target range
  omega_3_g: 1.6, // ALA requirement

  selenium_mcg: 55,
  vitamin_a_mcg: 900,
  vitamin_a_iu: 3000, // converted equivalent

  vitamin_c_mg: 90,
  vitamin_d_mcg: 15,
  vitamin_e_mg: 15,
  vitamin_k_mcg: 120,

  vitamin_b1_mg: 1.2,
  vitamin_b2_mg: 1.3,
  riboflavin_mg: 1.3, // same as B2, keeping consistent
  vitamin_b3_mg: 16,
  niacin_mg: 16, // same nutrient as B3
  vitamin_b5_mg: 5,
  vitamin_b6_mg: 1.3,
  vitamin_b7_mcg: 30, // biotin
  vitamin_b9_mcg: 400,
  folate_mcg: 400, // same nutrient as B9
  vitamin_b12_mcg: 2.4,

  choline_mg: 550,
  cholesterol_mg: 300
  }
} as const;
