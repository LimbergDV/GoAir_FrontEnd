import { PlaceDTO } from './palce.dto';

export interface PlacesResponseDTO {
  links: {
    self: string;
  };
  places: PlaceDTO[];
  status: boolean;
}
