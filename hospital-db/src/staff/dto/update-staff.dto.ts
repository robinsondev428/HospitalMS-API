import { IRoleType } from './type-role.enum';
export class UpdateStaffDTO {
  name: string;
  lastname: string;
  username: string;
  role: IRoleType;
  phone: string;
}