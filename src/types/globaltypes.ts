 export interface FoodNutrients {
  unit?: string;

  calories?: number;
  protein_g?: number;
  fat_g?: number;
  carbs_g?: number;
  fiber_g?: number;
  sugar_g?: number;

  saturated_fat_g?: number;
  monounsaturated_fat_g?: number;
  polyunsaturated_fat_g?: number;
  cholesterol_mg?: number;
  omega_3_g?: number;

  calcium_mg?: number;
  iron_mg?: number;
  magnesium_mg?: number;
  phosphorus_mg?: number;
  potassium_mg?: number;
  sodium_mg?: number;
  zinc_mg?: number;
  copper_mg?: number;
  manganese_mg?: number;
  selenium_mcg?: number;

  vitamin_a_mcg?: number;
  vitamin_a_iu?: number;
  vitamin_c_mg?: number;
  vitamin_d_mcg?: number;
  vitamin_e_mg?: number;
  vitamin_k_mcg?: number;
  vitamin_b1_mg?: number;
  vitamin_b3_mg?: number;
  vitamin_b6_mg?: number;
  vitamin_b12_mcg?: number;
  riboflavin_mg?: number;
  folate_mcg?: number;

  choline_mg?: number;
  niacin_mg?: number;
}

export interface SearchResult {
  name:string;
  values :FoodNutrients 

}