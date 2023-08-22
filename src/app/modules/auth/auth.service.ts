import httpStatus from 'http-status';
import { User } from '../users/user.model';
import ApiError from '../../../errors/ApiError';
import {
  IChangePassword,
  ILoginUser,
  ILoginUserResponse,
  IRefreshTokenResponse,
} from './auth.interface';
import { JwtPayload, Secret } from 'jsonwebtoken';
import config from '../../../config';
import { jwtHelpers } from '../../../helpers/jwtHelpers';

const loginUser = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
  const { id, password } = payload;
  const isUserExist = await User.isUserExist(id);

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User Dose Not Exist');
  }
  // Match Password
  if (
    isUserExist.password &&
    !(await User.isPasswordMatched(password, isUserExist?.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password Is Incorrect');
  }
  // Create Access Token & Refresh Token
  const { id: userId, role, needsPasswordChange } = isUserExist;
  const accessToken = jwtHelpers.createToken(
    { userId, role },
    config.jwt.secret as Secret,
    config.jwt.expries_in as string
  );
  const refreshToken = jwtHelpers.createToken(
    { userId, role },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
    needsPasswordChange,
  };
};

const refreshToken = async (token: string): Promise<IRefreshTokenResponse> => {
  let verifiedToken = null;
  try {
    verifiedToken = jwtHelpers.verifyToken(
      token,
      config.jwt.refresh_secret as Secret
    );
  } catch (error) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Invalid Refresh Token');
  }
  const { userId } = verifiedToken;
  const isUserExist = await User.isUserExist(userId);
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User Dose Not Exist');
  }
  // Generate New Access Token
  const newAccessToken = jwtHelpers.createToken(
    { id: isUserExist.id, role: isUserExist.role },
    config.jwt.secret as Secret,
    config.jwt.expries_in as string
  );
  return {
    accessToken: newAccessToken,
  };
};

const changePassword = async (
  user: JwtPayload | null,
  payload: IChangePassword
): Promise<void> => {
  const { oldPassword, newPassword } = payload;
  // Alternative Way
  const isUserExist = await User.findOne({ id: user?.userId }).select(
    '+password'
  );
  // const isUserExist = User.isUserExist(user?.userId);
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User Dose Not Exist');
  }
  if (
    isUserExist.password &&
    !(await User.isPasswordMatched(oldPassword, isUserExist?.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Old Password Is Incorrect');
  }
  // Update Password Using Save Method
  isUserExist.password = newPassword;
  isUserExist.needsPasswordChange = false;
  isUserExist.save();
  // // Password Hasing
  // const newHasehedPassword = await bcrypt.hash(
  //   newPassword,
  //   Number(config.bycrypt_salt_rounds)
  // );

  // // Update Password
  // const query = { id: user?.userId };
  // const updatedData = {
  //   password: newHasehedPassword,
  //   needsPasswordChange: false,
  //   passwordChangeAT: new Date(),
  // };
  // await User.findOneAndUpdate(query, updatedData);
  // return {};
};

export const AuthService = {
  loginUser,
  refreshToken,
  changePassword,
};
