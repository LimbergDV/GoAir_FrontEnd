import {
  AirQuality24Dto,
  AirQualityAvgDto,
  Humidity24Dto,
  Temperature24Dto,
  AirDataResponseDto,
} from '../domain/graphics.models';

// Air Quality Mapper
export function mapAirQuality24(data: any[]): AirQuality24Dto[] {
  return data.map((item) => ({
    Hora: item.Hora,
    Calidad_promedio: item.Calidad_promedio,
  }));
}

export function mapAirQualityAvg(data: any[]): AirQualityAvgDto[] {
  return data.map((item) => ({
    Fecha: item.Fecha,
    Promedio_calidad_aire: item.Promedio_calidad_aire,
  }));
}

// Humidity Mapper
export function mapHumidity24(data: any[]): Humidity24Dto[] {
  return data.map((item) => ({
    Hora: item.Hora,
    Humedad_promedio: item.Humedad_promedio,
  }));
}

// Temperature Mapper
export function mapTemperature24(data: any[]): Temperature24Dto[] {
  return data.map((item) => ({
    Hora: item.Hora,
    Temperatura_promedio: item.Temperatura_promedio,
  }));
}

// Main Mapper
export function mapAirDataResponse(data: any): AirDataResponseDto {
  return {
    AirQuality24: mapAirQuality24(data.AirQuality24),
    AirQualityAVG: mapAirQualityAvg(data.AirQualityAVG),
    Humidity24: mapHumidity24(data.Humidity24),
    Temperature24: mapTemperature24(data.Temperature24),
  };
}
