import { SessionUser } from "../../domain/session.model";
import { SessionUserDTO } from "../dtos/session.dto";


export class SessionUserMapper {
  static fromDTOU(dto: SessionUserDTO): SessionUser {
    return new SessionUser(dto.token);
  }

  static toDTOU(session: SessionUser): SessionUserDTO {
    return {
      links: { self: '' },
      status: true,
      token: session.token,
    };
  }
}
