import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'information-sensors',
  templateUrl: './information-sensors.component.html',
  styleUrl: './information-sensors.component.css',
})
export class InformationSensorsComponent {
  // Se reciben por parámetro el nombre y el id del lugar seleccionado
  @Input() placeName!: string;
  @Input() placeId!: number;
  optionDelete = false;

  // Permite notificar al componente padre que debe cerrar la modal
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

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
    this.optionDelete = false;
    this.closeModal.emit();
  }
}
