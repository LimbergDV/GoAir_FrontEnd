export class Metric {
  constructor(
    public id_sensor: string[],
    public air_quality: number,
    public temperature: number,
    public humidity: number,
    public id_device: string,
    public ventilador: string,
    public id_place: number
  ) {}
}
