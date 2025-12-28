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
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';
import { HousingType, HOUSING_TYPES, Good, GOODS} from '../../../constants/housing.constants.js';
import { UpdateOfferValidationMessage } from './update-offer.messages.js';

class CityDto {
  @IsString({ message: UpdateOfferValidationMessage.city.invalidFormat })
  public name!: string;

  @IsNumber({}, { message: UpdateOfferValidationMessage.city.invalidFormat })
  @Min(-90, { message: UpdateOfferValidationMessage.city.invalidFormat })
  @Max(90, { message: UpdateOfferValidationMessage.city.invalidFormat })
  public latitude!: number;

  @IsNumber({}, { message: UpdateOfferValidationMessage.city.invalidFormat })
  @Min(-180, { message: UpdateOfferValidationMessage.city.invalidFormat })
  @Max(180, { message: UpdateOfferValidationMessage.city.invalidFormat })
  public longitude!: number;
}

class LocationDto {
  @IsNumber({}, { message: UpdateOfferValidationMessage.location.invalidFormat })
  @Min(-90, { message: UpdateOfferValidationMessage.location.invalidFormat })
  @Max(90, { message: UpdateOfferValidationMessage.location.invalidFormat })
  public latitude!: number;

  @IsNumber({}, { message: UpdateOfferValidationMessage.location.invalidFormat })
  @Min(-180, { message: UpdateOfferValidationMessage.location.invalidFormat })
  @Max(180, { message: UpdateOfferValidationMessage.location.invalidFormat })
  public longitude!: number;
}

export class UpdateOfferDto {
  @IsOptional()
  @IsString({ message: UpdateOfferValidationMessage.title.minLength })
  @MinLength(10, { message: UpdateOfferValidationMessage.title.minLength })
  @MaxLength(100, { message: UpdateOfferValidationMessage.title.maxLength })
  public title?: string;

  @IsOptional()
  @IsString({ message: UpdateOfferValidationMessage.description.minLength })
  @MinLength(20, { message: UpdateOfferValidationMessage.description.minLength })
  @MaxLength(1024, { message: UpdateOfferValidationMessage.description.maxLength })
  public description?: string;

  @IsOptional()
  @ValidateNested({ message: UpdateOfferValidationMessage.city.invalidFormat })
  @Type(() => CityDto)
  public city?: CityDto;

  @IsOptional()
  @IsString({ message: UpdateOfferValidationMessage.previewImage.invalidFormat })
  public previewImage?: string;

  @IsOptional()
  @IsArray({ message: UpdateOfferValidationMessage.images.invalidFormat })
  @ArrayMinSize(6, { message: UpdateOfferValidationMessage.images.minSize })
  @ArrayMaxSize(6, { message: UpdateOfferValidationMessage.images.maxSize })
  @IsString({ each: true, message: UpdateOfferValidationMessage.images.invalidItemFormat })
  public images?: string[];

  @IsOptional()
  @IsBoolean({ message: UpdateOfferValidationMessage.isPremium.invalidFormat })
  public isPremium?: boolean;

  @IsOptional()
  @IsEnum(HOUSING_TYPES, { message: UpdateOfferValidationMessage.type.invalid })
  public type?: HousingType;

  @IsOptional()
  @IsInt({ message: UpdateOfferValidationMessage.bedrooms.invalidFormat })
  @Min(1, { message: UpdateOfferValidationMessage.bedrooms.minValue })
  @Max(8, { message: UpdateOfferValidationMessage.bedrooms.maxValue })
  public bedrooms?: number;

  @IsOptional()
  @IsInt({ message: UpdateOfferValidationMessage.maxAdults.invalidFormat })
  @Min(1, { message: UpdateOfferValidationMessage.maxAdults.minValue })
  @Max(10, { message: UpdateOfferValidationMessage.maxAdults.maxValue })
  public maxAdults?: number;

  @IsOptional()
  @IsInt({ message: UpdateOfferValidationMessage.price.invalidFormat })
  @Min(100, { message: UpdateOfferValidationMessage.price.minValue })
  @Max(100000, { message: UpdateOfferValidationMessage.price.maxValue })
  public price?: number;

  @IsOptional()
  @IsArray({ message: UpdateOfferValidationMessage.goods.invalidFormat })
  @IsEnum(GOODS, { each: true, message: UpdateOfferValidationMessage.goods.invalidItem })
  @ArrayMinSize(1, { message: UpdateOfferValidationMessage.goods.minSize })
  public goods?: Good[];

  @IsOptional()
  @ValidateNested({ message: UpdateOfferValidationMessage.location.invalidFormat })
  @Type(() => LocationDto)
  public location?: LocationDto;
}
