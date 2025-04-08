import { Device } from '../../domain/device.model';
import { Sensor } from '../../domain/sensor.model';
import { IDSDTO } from '../dtos/ids.dto';

export class IDS {
  public static map(raw: any): IDSDTO {
    const devices: Device[] = raw.Devices
      ? raw.Devices.map((d: any) => ({
          id_device: d.Id_device,
          id_place: d.Id_place,
        }))
      : [];

    const sensors: Sensor[] = raw.Sensors
      ? raw.Sensors.map((s: any) => ({
          id_sensor: s.Id_sensor,
          id_place: s.Id_place,
          sensor_type: s.Sensor_type,
          model: s.Model,
          installation_date: s.Installation_date,
        }))
      : [];

    return {
      devices,
      sensors,
      id_place: raw.id_place,
      links: raw.links,
      status: raw.status,
    };
  }
}
