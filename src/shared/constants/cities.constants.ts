export const CITIES = [
  {
    NAME: 'Paris',
    LATITUDE: 48.85661,
    LONGITUDE: 2.351499,
  },
  {
    NAME: 'Cologne',
    LATITUDE: 50.938361,
    LONGITUDE: 6.959974,
  },
  {
    NAME: 'Brussels',
    LATITUDE: 50.846557,
    LONGITUDE: 4.351697,
  },
  {
    NAME: 'Amsterdam',
    LATITUDE: 52.370216,
    LONGITUDE: 4.895168,
  },
  {
    NAME: 'Hamburg',
    LATITUDE: 53.550341,
    LONGITUDE: 10.000654,
  },
  {
    NAME: 'Dusseldorf',
    LATITUDE: 51.225402,
    LONGITUDE: 6.776314,
  },
] as const;

export type City = typeof CITIES[number];
