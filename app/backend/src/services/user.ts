import * as bcrypt from 'bcryptjs';
import UserModelT from '../models/user';
import Login from '../Interfaces/ILogin';
import jwt from '../utils/jwt';

class UserService {
  constructor(private userModel = new UserModelT()) {}

  public async verifyLogin(login: Login) {
    if (!login.email || !login.password) {
      return {
        status: 'INVALID_DATA',
        data: { message: 'All fields must be filled' },
      };
    }
    const user = await this.userModel.findOne(login.email);
    const valid = user && bcrypt.compareSync(login.password, user.password);
    if (!valid) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }
    const { email } = user;
    const token = jwt.sign({ email });
    return { status: 'SUCCESSFUL', data: { token } };
  }

  public async findEmail(email: Login['email']) {
    const user = await this.userModel.findOne(email);
    if (!user) {
      return { status: 'UNAUTHORIZED', data: { message: 'User not found' } };
    }
    return { status: 'SUCCESSFUL', data: user };
  }
}

export default UserService;
