'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.AcademicDepartmentValidation = void 0;
const zod_1 = require('zod');
// Create Zod Schema
const createDepartmentZodSchema = zod_1.z.object({
  body: zod_1.z.object({
    title: zod_1.z.string({
      required_error: 'Title is Required.',
    }),
    academicFaculty: zod_1.z.string({
      required_error: 'Academic Faculty is Required.',
    }),
  }),
});
// Update Zod Schema
const updateDepartmentZodSchema = zod_1.z.object({
  body: zod_1.z.object({
    title: zod_1.z.string().optional(),
    academicFaculty: zod_1.z.string().optional(),
  }),
});
exports.AcademicDepartmentValidation = {
  createDepartmentZodSchema,
  updateDepartmentZodSchema,
};
