import { Component } from '@angular/core';

@Component({
  selector: 'app-information-place-sensors',
  templateUrl: './information-place-sensors.component.html',
  styleUrl: './information-place-sensors.component.css'
})
export class InformationPlaceSensorsComponent {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  accept() {
    console.log('Solicitud aceptada');
    this.visible = false;
  }

  confirmInstalation() {
    console.log('Instalación confirmada');
    this.visible = false;
  }
}
