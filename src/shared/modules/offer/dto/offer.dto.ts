import { City, HousingType, Good } from '../../../constants/index.js';
import { UserDto } from '../../user/dto/user.dto.js';

export class OfferDto {
  public id!: string;
  public title!: string;
  public description!: string;
  public date!: Date;
  public city!: City;
  public previewPhoto!: string;
  public photoes!: string[];
  public isPremium!: boolean;
  public isFavorite!: boolean;
  public rate!: number;
  public type!: HousingType;
  public goods!: Good[];
  public bedroomsCount!: number;
  public maxAdults!: number;
  public rentCost!: number;
  public author!: UserDto;
  public commentsCount!: number;
  public location!: {
    latitude: number;
    longitude: number;
  };
}
