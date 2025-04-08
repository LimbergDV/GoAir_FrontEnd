import { Application } from '../../domain/apps.model';

export interface ApplicationsResponseDTO {
  data: Application[];
  links: {
    self: string;
  };
  status: boolean;
}
