import Users from './IUsers';

export default interface UsersModel {
  findOne(email: Users['email']): Promise<Users | null>
}
