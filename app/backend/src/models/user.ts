import User from '../Interfaces/IUsers';
import UserModelInterface from '../Interfaces/IUserModel';
import UserModel from '../database/models/User';
import Login from '../Interfaces/ILogin';

class UserModelT implements UserModelInterface {
  private userModel = UserModel;

  async findOne(email: Login['email']): Promise<User | null> {
    const data = await this.userModel.findOne({ where: { email } });
    if (data === null) {
      return null;
    }
    return data;
  }
}

export default UserModelT;
