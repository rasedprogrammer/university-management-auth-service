"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const student_constant_1 = require("../student/student.constant");
// Create Zod Schema
const createUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        password: zod_1.z.string().optional(),
        student: zod_1.z.object({
            name: zod_1.z.object({
                firstName: zod_1.z.string({
                    required_error: 'First Name is required',
                }),
                middleName: zod_1.z
                    .string({
                    required_error: 'Middle Name is required',
                })
                    .optional(),
                lastName: zod_1.z.string({
                    required_error: 'Last Name is required',
                }),
            }),
            gender: zod_1.z.enum([...student_constant_1.studentGenders], {
                required_error: 'Gender is required',
            }),
            dateOfBirth: zod_1.z.string({
                required_error: 'Date of Birth is required',
            }),
            email: zod_1.z
                .string({
                required_error: 'Email is required',
            })
                .email(),
            contactNo: zod_1.z.string({
                required_error: 'Contact Number is required',
            }),
            emergencyContactNo: zod_1.z.string({
                required_error: 'Emergency Number is required',
            }),
            presentAddress: zod_1.z.string({
                required_error: 'Present Address is required',
            }),
            permanentAddress: zod_1.z.string({
                required_error: 'Permanent Address is required',
            }),
            bloodGroup: zod_1.z
                .enum([...student_constant_1.studentBloods], {
                required_error: 'Blood Group is required',
            })
                .optional(),
            guardian: zod_1.z.object({
                fatherName: zod_1.z.string({
                    required_error: 'Father Name is required',
                }),
                fatherOccupation: zod_1.z.string({
                    required_error: 'Father Occupation is required',
                }),
                fatherContactNo: zod_1.z.string({
                    required_error: 'Father Contact No is required',
                }),
                motherName: zod_1.z.string({
                    required_error: 'Mother Name is required',
                }),
                motherOccupation: zod_1.z.string({
                    required_error: 'Mother Occupation is required',
                }),
                motherContactNo: zod_1.z.string({
                    required_error: 'Mother Contact No is required',
                }),
                address: zod_1.z.string({
                    required_error: 'Guardian Address is required',
                }),
            }),
            localGuardian: zod_1.z.object({
                name: zod_1.z.string({
                    required_error: 'Local Guardian Name is required',
                }),
                occupation: zod_1.z.string({
                    required_error: 'Local Guardian Occupation is required',
                }),
                contactNo: zod_1.z.string({
                    required_error: 'Local Guardian ContactNo is required',
                }),
                address: zod_1.z.string({
                    required_error: 'Local Guardian Address is required',
                }),
            }),
            profileImage: zod_1.z.string().optional(),
            // academicSemester: z.string({
            //   required_error: 'Academic Semester is required',
            // }),
            // academicDepartment: z.string({
            //   required_error: 'Academic Department is required',
            // }),
            // academicFaculty: z.string({
            //   required_error: 'Academic Faculty is required',
            // }),
        }),
    }),
});
exports.UserValidation = {
    createUserZodSchema,
};
