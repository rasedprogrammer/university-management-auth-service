import { z } from 'zod';

// Create Zod Schema
const createDepartmentZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is Required.',
    }),
    academicFaculty: z.string({
      required_error: 'Academic Faculty is Required.',
    }),
  }),
});
// Update Zod Schema
const updateDepartmentZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    academicFaculty: z.string().optional(),
  }),
});

export const AcademicDepartmentValidation = {
  createDepartmentZodSchema,
  updateDepartmentZodSchema,
};
