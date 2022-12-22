import { Expose } from "class-transformer";
import {IsNotEmpty } from "class-validator";

export class UserDto{
  @Expose()
  id: number

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  role: string;

  company: string;

  department: string;

  email: string;

  isActive: boolean;
}