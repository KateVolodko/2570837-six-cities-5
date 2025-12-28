export const HOUSING_TYPES = ['apartment', 'house', 'room', 'hotel'] as const;
export type HousingType = typeof HOUSING_TYPES[number];

export const GOODS = [
  'Breakfast',
  'Air conditioning',
  'Laptop friendly workspace',
  'Baby seat',
  'Washer',
  'Towels',
  'Fridge',
] as const;
export type Good = typeof GOODS[number];
