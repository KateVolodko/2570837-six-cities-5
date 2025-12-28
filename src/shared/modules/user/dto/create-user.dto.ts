import { IsString, IsEmail, IsEnum, MinLength, MaxLength, IsOptional, Matches } from 'class-validator';
import { USER_TYPES, UserType } from '../../../constants/index.js';
import { CreateUserValidationMessage } from './create-user.messages.js';

export class CreateUserDto {
  @IsString({ message: CreateUserValidationMessage.name.minLength })
  @MinLength(1, { message: CreateUserValidationMessage.name.minLength })
  @MaxLength(15, { message: CreateUserValidationMessage.name.maxLength })
  public name!: string;

  @IsEmail({}, { message: CreateUserValidationMessage.email.invalidFormat })
  public email!: string;

  @IsOptional()
  @IsString({ message: CreateUserValidationMessage.avatarUrl.invalidFormat })
  @Matches(/\.(jpg|png)$/i, { message: CreateUserValidationMessage.avatarUrl.invalidFormat })
  public avatarUrl?: string;

  @IsString({ message: CreateUserValidationMessage.password.minLength })
  @MinLength(6, { message: CreateUserValidationMessage.password.minLength })
  @MaxLength(12, { message: CreateUserValidationMessage.password.maxLength })
  public password!: string;

  @IsEnum(USER_TYPES, { message: CreateUserValidationMessage.type.invalid })
  public type!: UserType;
}
