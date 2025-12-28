export const TEXT_LIMITS = {
  MIN_TITLE_LENGTH: 10,
  MAX_TITLE_LENGTH: 100,
  MIN_DESCRIPTION_LENGTH: 20,
  MAX_DESCRIPTION_LENGTH: 1024,
  MIN_NAME_LENGTH: 1,
  MAX_NAME_LENGTH: 15,
} as const;

export const COORDINATE_LIMITS = {
  MIN_LATITUDE: -90,
  MAX_LATITUDE: 90,
  MIN_LONGITUDE: -180,
  MAX_LONGITUDE: 180,
} as const;

export const PRICE_LIMITS = {
  MIN: 100,
  MAX: 100000,
} as const;

export const RATING_LIMITS = {
  MIN: 1,
  MAX: 5,
} as const;

export const ROOM_LIMITS = {
  MIN: 1,
  MAX: 8,
} as const;

export const GUEST_LIMITS = {
  MIN: 1,
  MAX: 10,
} as const;

export const COMMENT_LIMITS = {
  MIN: 0,
  MAX: 20,
} as const;

export const WEEK_DAYS = {
  FIRST: 1,
  LAST: 7,
} as const;
