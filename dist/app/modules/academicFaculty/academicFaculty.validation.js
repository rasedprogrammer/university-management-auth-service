'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.AcademicFacultyValidation = void 0;
const zod_1 = require('zod');
// Create Zod Schema
const createFacultyZodSchema = zod_1.z.object({
  body: zod_1.z.object({
    title: zod_1.z.string({
      required_error: 'Title is Required.',
    }),
  }),
});
// Update Zod Schema
const updateFacultyZodSchema = zod_1.z.object({
  body: zod_1.z.object({
    title: zod_1.z.string({
      required_error: 'Title is Required.',
    }),
  }),
});
exports.AcademicFacultyValidation = {
  createFacultyZodSchema,
  updateFacultyZodSchema,
};
