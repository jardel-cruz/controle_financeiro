export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface IRegisterUser extends IUser {}

export interface ICreateUser extends Partial<IUser> {}

export interface IFindUser extends ICreateUser {}
