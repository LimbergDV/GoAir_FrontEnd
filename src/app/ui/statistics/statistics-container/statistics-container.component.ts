import { Component, OnInit } from '@angular/core';
import { GetGraphics } from '../../../core/sensors/useCases/getGraphics.useCase';
import {
  AirQuality24Dto,
  AirQualityAvgDto,
  Humidity24Dto,
  Temperature24Dto,
} from '../../../core/sensors/domain/graphics.models';

@Component({
  selector: 'app-statistics-container',
  templateUrl: './statistics-container.component.html',
  styleUrl: './statistics-container.component.css',
})
export class StatisticsContainerComponent implements OnInit {
  constructor(private gg: GetGraphics) {}
  id_place = parseInt(localStorage.getItem('id_place') || '0');
  airq24!: AirQuality24Dto[];
  tem24!: Temperature24Dto[];
  humi!: Humidity24Dto[];
  ariqA!: AirQualityAvgDto[];

  ngOnInit(): void {
    this.getGraphics();
  }

  getGraphics() {
    this.gg.execute(this.id_place).subscribe({
      next: (res) => {
        console.log(res);
        this.airq24 = res.AirQuality24;
        this.tem24 = res.Temperature24;
        this.humi = res.Humidity24;
        this.ariqA = res.AirQualityAVG;
      },
      error: (err) => {
        console.log(err);
        alert('No se pudo obtener la información');
      },
    });
  }
}
