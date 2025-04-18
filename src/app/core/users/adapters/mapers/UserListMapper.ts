import { User } from "../../domain/user.model";
import { UserListDTO } from "../dtos/usersList.dto";

export class UserMapper {
  static fromDTO(dto: UserListDTO): User[] {
    return dto.data.map(
      (item) =>
        new User(
          item.Id_user,
          item.First_name,
          item.Last_name,
          item.Email,
          item.Password
        )
    );
  }
}
