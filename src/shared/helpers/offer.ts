import { Offer } from '../types/index.js';
import { CITIES, GOODS, HOUSING_TYPES, USER_TYPES } from '../constants/index.js';
import { isKey, findCity } from '../types/offer.type.js';

export function createOffer(offerData: string): Offer {
  const [
    title,
    description,
    postDate,
    cityName,
    previewImage,
    images,
    isPremium,
    isFavorite,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    authorName,
    authorEmail,
    authorAvatar,
    authorType,
    commentsCount,
    latitude,
    longitude
  ] = offerData.replace('\r\n', '').split('\t');

  const city = findCity(cityName) ?? CITIES[0];

  return {
    title,
    description,
    date: new Date(postDate),
    city,
    previewPhoto: previewImage,
    photoes: images.split(';'),
    isPremium: isPremium === 'true',
    isFavorite: isFavorite === 'true',
    rate: parseFloat(rating),
    type: isKey(type, HOUSING_TYPES) ?? HOUSING_TYPES[0],
    bedroomsCount: parseInt(bedrooms, 10),
    maxAdults: parseInt(maxAdults, 10),
    rentCost: parseInt(price, 10),
    goods: goods.split(';')
      .map((g) => isKey(g, GOODS))
      .filter((item): item is typeof GOODS[number] => item !== undefined),
    author: {
      name: authorName,
      email: authorEmail,
      avatarUrl: authorAvatar,
      password: '',
      type: isKey(authorType, USER_TYPES) ?? USER_TYPES[0]
    },
    commentsCount: parseInt(commentsCount, 10),
    location: {
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
    },
  };
}
