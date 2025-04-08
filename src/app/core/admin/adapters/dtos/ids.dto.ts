import { Device } from "../../domain/device.model";
import { Sensor } from "../../domain/sensor.model";

export interface IDSDTO {
    devices: Device[];
    sensors: Sensor[];
    id_place: number;
    links: {
      self: string;
    };
    status: boolean;
  }