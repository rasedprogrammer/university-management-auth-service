import { IStudentBloods, IStudentGenders } from './student.interface';

export const studentGenders: IStudentGenders[] = ['male', 'female'];

export const studentBloods: IStudentBloods[] = [
  'A+',
  'A-',
  'AB+',
  'AB-',
  'B+',
  'B-',
  'O+',
  'O-',
];

export const studentSearchableFields = [
  'id',
  'email',
  'contactNo',
  'name.firstName',
  'name.middletName',
  'name.lastName',
];

export const studentFilterableFields = [
  'searchTerm',
  'id',
  'name',
  'email',
  'contactNo',
  'bloodGroup',
  'emergencyContactNo',
];
