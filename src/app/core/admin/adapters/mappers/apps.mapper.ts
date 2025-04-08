import { Application } from '../../domain/apps.model';

export class ApplicationMapperRes {
  public static map(raw: any): Application[] {
    const data: Application[] = raw.data
      ? raw.data.map((item: any) => ({
          id_application: item.Id_application,
          status_application: item.Status_application,
          id_user: item.Id_user,
        }))
      : [];

    return data;
  }
}
