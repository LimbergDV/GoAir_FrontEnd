import { Application } from '../domain/application.model';
import { ApplicationListDTO } from '../dtos/appList.dto';

export class ApplicationMapper {
  static toDomain(dto: ApplicationListDTO): Application[] {
    return dto.data.map(
      (app) =>
        new Application(
          app.Id_application,
          app.First_name,
          app.Last_name,
          app.Status_application,
          app.Id_user
        )
    );
  }
}
