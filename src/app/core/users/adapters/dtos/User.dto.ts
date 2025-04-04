export interface UserDTO {
  User: {
    Id_user: number;
    First_name: string;
    Last_name: string;
    Email: string;
    Password: string;
  };
  links: {
    self: string;
  };
  status: boolean;
}
