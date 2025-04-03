import { SessionUser } from "../../domain/session.model";
import { SessionUserDTO } from "../dtos/session.dto";


export class SessionUserMapper {
  static fromDTO(dto: SessionUserDTO): SessionUser {
    return new SessionUser(dto.token);
  }

  static toDTO(session: SessionUser): SessionUserDTO {
    return {
      links: { self: '' },
      status: true,
      token: session.token,
    };
  }
}
