import dayjs from 'dayjs';
import { OfferGenerator } from './offer-generator.interface.js';
import { MockServerData } from '../../types/index.js';
import {
  generateRandomValue,
  getRandomItem,
  getRandomItems,
  getRandomBoolean,
  generateRandomCoordinate,
  shortenName
} from '../../helpers/index.js';
import {
  CITIES,
  GOODS,
  HOUSING_TYPES,
  USER_TYPES,
  PRICE_LIMITS,
  RATING_LIMITS,
  ROOM_LIMITS,
  GUEST_LIMITS,
  COMMENT_LIMITS,
  WEEK_DAYS
} from '../../constants/index.js';

export class TSVOfferGenerator implements OfferGenerator {
  constructor(private readonly mockData: MockServerData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles).toString();
    const description = getRandomItem<string>(this.mockData.descriptions).toString();
    const randomCity = getRandomItem([...CITIES]);
    const city = randomCity.NAME.toString();
    const previewPhoto = getRandomItem<string>(this.mockData.images).toString();
    const photoesCount = generateRandomValue(3, 6);
    const photoes = Array.from(
      { length: photoesCount },
      () => getRandomItem<string>(this.mockData.images)
    ).join(';');
    const isPremium = getRandomBoolean().toString();
    const isFavorite = getRandomBoolean().toString();
    const rate = generateRandomValue(RATING_LIMITS.MIN, RATING_LIMITS.MAX, 1).toString();
    const type = getRandomItem([...HOUSING_TYPES]).toString();
    const bedroomsCount = generateRandomValue(ROOM_LIMITS.MIN, ROOM_LIMITS.MAX).toString();
    const maxAdults = generateRandomValue(GUEST_LIMITS.MIN, GUEST_LIMITS.MAX).toString();
    const rentCost = generateRandomValue(PRICE_LIMITS.MIN, PRICE_LIMITS.MAX).toString();
    const selectedGoods = getRandomItems([...GOODS]).join(';');
    const authorName = shortenName(getRandomItem<string>(this.mockData.names).toString());
    const authorEmail = getRandomItem<string>(this.mockData.emails).toString();
    const authorAvatar = getRandomItem<string>(this.mockData.avatarPaths).toString();
    const authorType = getRandomItem([...USER_TYPES]).toString();
    const commentsCount = generateRandomValue(COMMENT_LIMITS.MIN, COMMENT_LIMITS.MAX).toString();
    const randomCoordinates = generateRandomCoordinate(city);
    const coordinates = { latitude: randomCoordinates.latitude.toString(), longitude: randomCoordinates.longitude.toString() };
    const createdDate = dayjs()
      .subtract(generateRandomValue(WEEK_DAYS.FIRST, WEEK_DAYS.LAST), 'day')
      .toISOString();

    return [
      title,
      description,
      createdDate,
      city,
      previewPhoto,
      photoes,
      isPremium,
      isFavorite,
      rate,
      type,
      bedroomsCount,
      maxAdults,
      rentCost,
      selectedGoods,
      authorName,
      authorEmail,
      authorAvatar,
      authorType,
      commentsCount,
      coordinates.latitude,
      coordinates.longitude,
    ].join('\t');
  }
}
