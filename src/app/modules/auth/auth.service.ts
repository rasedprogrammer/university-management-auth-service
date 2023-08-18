import httpStatus from 'http-status';
import { User } from '../users/user.model';
import ApiError from '../../../errors/ApiError';
import { ILoginUser } from './auth.interface';

const loginUser = async (payload: ILoginUser) => {
  const { id, password } = payload;
  // creating instance of User
  // const user = new User();
  //  // access to our instance methods
  //   const isUserExist = await user.isUserExist(id);

  const isUserExist = await User.isUserExist(id);

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User Dose Not Exist');
  }
  // Match Password
  if (
    isUserExist.password &&
    (await User.isPasswordMatched(password, isUserExist.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password Is Incorrect');
  }
  // Create Access Token
  return {};
};

export const AuthService = {
  loginUser,
};
