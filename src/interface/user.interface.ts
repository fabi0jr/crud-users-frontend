export interface User {
  user_isActive: any;
  user_matricula: any;
  user_email: any;
  user_name: any;
  user_id: any;
  id: string;
  name: string;
  email: string;
  matricula: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}


export interface CreateUserData {
  name: string
  email: string
  matricula: string
  password: string
}

export interface UpdateUserData {
  name?: string
  email?: string
  matricula?: string
  password?: string
}
