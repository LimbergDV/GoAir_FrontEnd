import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GetIDS } from '../../../core/admin/useCases/getIDS.useCase';
import { IDS } from '../../../core/admin/adapters/mappers/ids.mapper';
import { Device } from '../../../core/admin/domain/device.model';
import { Sensor } from '../../../core/admin/domain/sensor.model';
import { DeletePalce } from '../../../core/admin/useCases/deletePlace.useCase';

@Component({
  selector: 'information-sensors',
  templateUrl: './information-sensors.component.html',
  styleUrl: './information-sensors.component.css',
})
export class InformationSensorsComponent implements OnInit {
  // Se reciben por parámetro el nombre y el id del lugar seleccionado
  @Input() placeName!: string;
  @Input() placeId!: number;
  optionDelete = false;
  devices!: Device[];
  sensors!: Sensor[];

  // Permite notificar al componente padre que debe cerrar la modal
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  constructor(private gids: GetIDS, private dp: DeletePalce) {}

  ngOnInit(): void {
    this.getIDS();
  }

  getIDS() {
    this.gids.execute(this.placeId).subscribe({
      next: (res) => {
        console.log(res);
        this.devices = res.devices;
        this.sensors = res.sensors;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  accept(): void {
    console.log('Solicitud aceptada para lugar:', this.placeId);
    this.closeModal.emit();
  }

  openModal(): void {
    this.optionDelete = true;
  }

  closeModalD(): void {
    this.optionDelete = false;
  }

  deletePlace(id_palce: number) {
    this.dp.execute(id_palce).subscribe({
      next: (res) => {
        console.log(res);
        alert('Lugar eliminado correctamente');
        this.optionDelete = false;
        this.closeModal.emit();
      },
      error: (err) => {
        console.log(err);
        alert('Ocurrió un error al intentar eliminar el lugar');
        this.optionDelete = false;
        this.closeModal.emit();
      },
    });
  }
}
