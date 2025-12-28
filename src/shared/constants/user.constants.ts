export const USER_TYPES = ['обычный', 'pro'] as const;
export type UserType = typeof USER_TYPES[number];
