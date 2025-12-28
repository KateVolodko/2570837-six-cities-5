import {CITIES, City } from '../constants/cities.constants.js';
import { Good, HousingType } from '../constants/housing.constants.js';
import { User } from './user.type.js';

export function isKey<T extends string>(str: string, array: Readonly<Array<T>>): T | undefined {
  return array.find((val) => val === str);
}

export function findCity(cityName: string): City | undefined {
  return CITIES.find((city) => city.NAME === cityName);
}

export interface Offer {
  title: string;
  description: string;
  date: Date;
  city: City;
  previewPhoto: string;
  photoes: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rate: number;
  type: HousingType;
  goods: Good[];
  bedroomsCount: number;
  maxAdults: number;
  rentCost: number;
  author: User;
  commentsCount: number;
  location: {
    latitude: number;
    longitude: number;
  };
}
