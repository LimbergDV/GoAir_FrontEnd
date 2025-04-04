import { User } from "../../domain/user.model";
import { UserDTO } from "../dtos/User.dto";

export class UserMapper {
  static fromDTO(dto: UserDTO): User {
    const u = dto.User;
    return new User(u.Id_user, u.First_name, u.Last_name, u.Email, u.Password);
  }
}
