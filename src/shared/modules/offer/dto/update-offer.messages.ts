export const UpdateOfferValidationMessage = {
  title: {
    minLength: 'Minimum title length must be 10',
    maxLength: 'Maximum title length must be 100',
  },
  description: {
    minLength: 'Minimum description length must be 20',
    maxLength: 'Maximum description length must be 1024',
  },
  city: {
    invalidFormat: 'City must be a valid object',
  },
  previewImage: {
    invalidFormat: 'Preview image must be a string',
  },
  images: {
    invalidFormat: 'Images must be an array',
    minSize: 'Images must contain exactly 6 items',
    maxSize: 'Images must contain exactly 6 items',
    invalidItemFormat: 'Each image must be a string',
  },
  isPremium: {
    invalidFormat: 'isPremium must be a boolean',
  },
  type: {
    invalid: 'Invalid housing type',
  },
  bedrooms: {
    invalidFormat: 'Bedrooms must be an integer',
    minValue: 'Bedrooms must be at least 1',
    maxValue: 'Bedrooms must be at most 8',
  },
  maxAdults: {
    invalidFormat: 'Max adults must be an integer',
    minValue: 'Max adults must be at least 1',
    maxValue: 'Max adults must be at most 10',
  },
  price: {
    invalidFormat: 'Price must be an integer',
    minValue: 'Minimum price is 100',
    maxValue: 'Maximum price is 100000',
  },
  goods: {
    invalidFormat: 'Goods must be an array',
    minSize: 'At least one amenity is required',
    invalidItem: 'Invalid amenity',
  },
  location: {
    invalidFormat: 'Location must be a valid object',
  },
} as const;
