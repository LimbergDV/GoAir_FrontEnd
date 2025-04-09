// Air Quality DTOs
export interface AirQuality24Dto {
  Hora: string; // ISO 8601 datetime
  Calidad_promedio: number;
}

export interface AirQualityAvgDto {
  Fecha: string; // ISO 8601 date
  Promedio_calidad_aire: number;
}

// Humidity DTO
export interface Humidity24Dto {
  Hora: string;
  Humedad_promedio: number;
}

// Temperature DTO
export interface Temperature24Dto {
  Hora: string;
  Temperatura_promedio: number;
}

// Main Response DTO
export interface AirDataResponseDto {
  AirQuality24: AirQuality24Dto[];
  AirQualityAVG: AirQualityAvgDto[];
  Humidity24: Humidity24Dto[];
  Temperature24: Temperature24Dto[];
}
