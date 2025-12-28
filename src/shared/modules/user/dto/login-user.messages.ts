export const LoginUserValidationMessage = {
  email: {
    invalidFormat: 'Email must be a valid address',
  },
  password: {
    minLength: 'Minimum password length is 6',
    maxLength: 'Maximum password length is 12',
  },
} as const;
