import express from 'express';
import { UserRoutes } from '../modules/users/user.route';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
const router = express.Router();

// Store Route
const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
];

// Declare Router.Use
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
