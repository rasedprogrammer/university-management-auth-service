"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicFacultyRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const academicFaculty_validation_1 = require("./academicFaculty.validation");
const academicFaculty_controller_1 = require("./academicFaculty.controller");
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.post('/create-faculty', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SUPER_ADMIN), (0, validateRequest_1.default)(academicFaculty_validation_1.AcademicFacultyValidation.createFacultyZodSchema), academicFaculty_controller_1.AcademicFacultyController.createFaculty);
router.get('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.FACULTY, user_1.ENUM_USER_ROLE.STUDENT, user_1.ENUM_USER_ROLE.SUPER_ADMIN), academicFaculty_controller_1.AcademicFacultyController.getSingleFaculty);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SUPER_ADMIN), (0, validateRequest_1.default)(academicFaculty_validation_1.AcademicFacultyValidation.updateFacultyZodSchema), academicFaculty_controller_1.AcademicFacultyController.updateFaculty);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SUPER_ADMIN), academicFaculty_controller_1.AcademicFacultyController.deleteFaculty);
router.get('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.FACULTY, user_1.ENUM_USER_ROLE.STUDENT, user_1.ENUM_USER_ROLE.SUPER_ADMIN), academicFaculty_controller_1.AcademicFacultyController.getAllFaculty);
exports.AcademicFacultyRoutes = router;
