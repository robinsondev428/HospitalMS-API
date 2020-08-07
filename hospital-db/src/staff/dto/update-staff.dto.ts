import { IRoleType } from './type-role.enum';
import { IsOptional } from 'class-validator';
export class UpdateStaffDTO {
  name: string;
  lastname: string;
  @IsOptional()
  username: string;
  role: IRoleType;
  phone: string;
}