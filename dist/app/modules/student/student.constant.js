'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.studentFilterableFields =
  exports.studentSearchableFields =
  exports.studentBloods =
  exports.studentGenders =
    void 0;
exports.studentGenders = ['male', 'female'];
exports.studentBloods = ['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'];
exports.studentSearchableFields = [
  'id',
  'email',
  'contactNo',
  'name.firstName',
  'name.middletName',
  'name.lastName',
];
exports.studentFilterableFields = [
  'searchTerm',
  'id',
  'name',
  'email',
  'contactNo',
  'bloodGroup',
  'emergencyContactNo',
];
