import { SessionAdmin } from '../../domain/session.model';
import { SessionAdminDTO } from '../dtos/session.dto';

export class SessionAdminMapper {
  static fromDTO(dto: SessionAdminDTO): SessionAdmin {
    return new SessionAdmin(dto.token);
  }

  static toDTO(session: SessionAdmin): SessionAdminDTO {
    return {
      links: { self: '' },
      status: true, 
      token: session.token,
    };
  }
}
