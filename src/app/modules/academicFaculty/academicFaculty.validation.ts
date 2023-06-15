import { z } from 'zod';

// Create Zod Schema
const createFacultyZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is Required.',
    }),
  }),
});
// Update Zod Schema
const updateFacultyZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is Required.',
    }),
  }),
});

export const AcademicFacultyValidation = {
  createFacultyZodSchema,
  updateFacultyZodSchema,
};
