import { IRoleType } from './type-role.enum';

export class StaffDTO {
  dni: string;
  name: string;
  lastname: string;
  username: string;
  role: IRoleType;
  age: number;
  phone: string;
  province: string;
  canton: string;
  district: string;
  other_signs: string;
  start_date: Date;
}