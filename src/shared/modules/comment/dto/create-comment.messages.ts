export const CreateCommentValidationMessage = {
  text: {
    minLength: 'Minimum comment length must be 5',
    maxLength: 'Maximum comment length must be 1024',
  },
  rating: {
    invalidFormat: 'Rating must be an integer',
    minValue: 'Minimum rating is 1',
    maxValue: 'Maximum rating is 5',
  },
  offerId: {
    invalidId: 'offerId field must be a valid id',
  },
  userId: {
    invalidId: 'userId field must be a valid id',
  },
} as const;
