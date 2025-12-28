import {
  IsString,
  IsBoolean,
  IsInt,
  IsArray,
  IsEnum,
  Min,
  Max,
  MinLength,
  MaxLength,
  ArrayMinSize,
  ArrayMaxSize,
  ValidateNested,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';
import { HousingType, HOUSING_TYPES, Good, GOODS} from '../../../constants/housing.constants.js';
import { CreateOfferValidationMessage } from './create-offer.messages.js';

class CityDto {
  @IsString({ message: CreateOfferValidationMessage.city.invalidFormat })
  public name!: string;

  @IsNumber({}, { message: CreateOfferValidationMessage.city.invalidFormat })
  @Min(-90, { message: CreateOfferValidationMessage.city.invalidFormat })
  @Max(90, { message: CreateOfferValidationMessage.city.invalidFormat })
  public latitude!: number;

  @IsNumber({}, { message: CreateOfferValidationMessage.city.invalidFormat })
  @Min(-180, { message: CreateOfferValidationMessage.city.invalidFormat })
  @Max(180, { message: CreateOfferValidationMessage.city.invalidFormat })
  public longitude!: number;
}

class LocationDto {
  @IsNumber({}, { message: CreateOfferValidationMessage.location.invalidFormat })
  @Min(-90, { message: CreateOfferValidationMessage.location.invalidFormat })
  @Max(90, { message: CreateOfferValidationMessage.location.invalidFormat })
  public latitude!: number;

  @IsNumber({}, { message: CreateOfferValidationMessage.location.invalidFormat })
  @Min(-180, { message: CreateOfferValidationMessage.location.invalidFormat })
  @Max(180, { message: CreateOfferValidationMessage.location.invalidFormat })
  public longitude!: number;
}

export class CreateOfferDto {
  @IsString({ message: CreateOfferValidationMessage.title.minLength })
  @MinLength(10, { message: CreateOfferValidationMessage.title.minLength })
  @MaxLength(100, { message: CreateOfferValidationMessage.title.maxLength })
  public title!: string;

  @IsString({ message: CreateOfferValidationMessage.description.minLength })
  @MinLength(20, { message: CreateOfferValidationMessage.description.minLength })
  @MaxLength(1024, { message: CreateOfferValidationMessage.description.maxLength })
  public description!: string;

  @ValidateNested({ message: CreateOfferValidationMessage.city.invalidFormat })
  @Type(() => CityDto)
  public city!: CityDto;

  @IsString({ message: CreateOfferValidationMessage.previewImage.invalidFormat })
  public previewPhoto!: string;

  @IsArray({ message: CreateOfferValidationMessage.images.invalidFormat })
  @ArrayMinSize(6, { message: CreateOfferValidationMessage.images.minSize })
  @ArrayMaxSize(6, { message: CreateOfferValidationMessage.images.maxSize })
  @IsString({ each: true, message: CreateOfferValidationMessage.images.invalidItemFormat })
  public photoes!: string[];

  @IsBoolean({ message: CreateOfferValidationMessage.isPremium.invalidFormat })
  public isPremium!: boolean;

  @IsEnum(HOUSING_TYPES, { message: CreateOfferValidationMessage.type.invalid })
  public type!: HousingType;

  @IsInt({ message: CreateOfferValidationMessage.bedrooms.invalidFormat })
  @Min(1, { message: CreateOfferValidationMessage.bedrooms.minValue })
  @Max(8, { message: CreateOfferValidationMessage.bedrooms.maxValue })
  public bedroomsCount!: number;

  @IsInt({ message: CreateOfferValidationMessage.maxAdults.invalidFormat })
  @Min(1, { message: CreateOfferValidationMessage.maxAdults.minValue })
  @Max(10, { message: CreateOfferValidationMessage.maxAdults.maxValue })
  public maxAdults!: number;

  @IsInt({ message: CreateOfferValidationMessage.price.invalidFormat })
  @Min(100, { message: CreateOfferValidationMessage.price.minValue })
  @Max(100000, { message: CreateOfferValidationMessage.price.maxValue })
  public rentCost!: number;

  @IsArray({ message: CreateOfferValidationMessage.goods.invalidFormat })
  @IsEnum(GOODS, { each: true, message: CreateOfferValidationMessage.goods.invalidItem })
  @ArrayMinSize(1, { message: CreateOfferValidationMessage.goods.minSize })
  public goods!: Good[];

  public authorId?: string;

  @ValidateNested({ message: CreateOfferValidationMessage.location.invalidFormat })
  @Type(() => LocationDto)
  public location!: LocationDto;
}
