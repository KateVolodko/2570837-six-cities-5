export const CreateUserValidationMessage = {
  name: {
    minLength: 'Minimum name length must be 1',
    maxLength: 'Maximum name length must be 15',
  },
  email: {
    invalidFormat: 'Email must be a valid address',
  },
  avatarUrl: {
    invalidFormat: 'Avatar must be a JPG or PNG image',
  },
  password: {
    minLength: 'Minimum password length is 6',
    maxLength: 'Maximum password length is 12',
  },
  type: {
    invalid: 'Invalid user type',
  },
} as const;
