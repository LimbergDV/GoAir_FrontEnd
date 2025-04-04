import { Place } from '../../domain/place.model';
import { PlaceDTO } from '../dtos/palce.dto';

export class PlaceMapper {
  static fromDTO(dto: PlaceDTO): Place {
    return new Place(dto.Id_place, dto.Id_user, dto.Name, dto.Create_at);
  }

  static fromDTOArray(dtos: PlaceDTO[]): Place[] {
    return dtos.map((dto) => this.fromDTO(dto));
  }
}
