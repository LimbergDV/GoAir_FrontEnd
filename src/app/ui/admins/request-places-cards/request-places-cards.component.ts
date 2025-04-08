import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { GetApp } from '../../../core/admin/useCases/getApp.useCase';
import { Application } from '../../../core/admin/domain/apps.model';
import { NameOfPlaceComponent } from '../../modals/name-of-place/name-of-place.component';
import { InformationPlaceSensorsComponent } from '../../modals/information-place-sensors/information-place-sensors.component';

@Component({
  selector: 'app-request-places-cards',
  templateUrl: './request-places-cards.component.html',
  styleUrl: './request-places-cards.component.css',
})
export class RequestPlacesCardsComponent implements OnInit {
  @Input({ required: true }) id_user!: number;
  @ViewChild(NameOfPlaceComponent) nameOfPlaceModal!: NameOfPlaceComponent;
  @ViewChild(InformationPlaceSensorsComponent) infoSensorsModal!: InformationPlaceSensorsComponent;

  applications: Application[] = [];

  constructor(private ga: GetApp) {}

  ngOnInit(): void {
    this.getAppsUser();
  }

  getAppsUser() {
    this.ga.execute(this.id_user).subscribe({
      next: (res) => {
        console.log(res);
        this.applications = res;
      },
      error: (err) => {
        console.log(err);
        alert('No se obtuvo datos de solicitudes');
      },
    });
  }

  // Traduce estado a texto legible
  getStatusLabel(status: string): string {
    switch (status) {
      case 'pending':
        return 'Pendiente';
      case 'requested':
        return 'Solicitado';
      default:
        return 'Desconocido';
    }
  }

  // Devuelve clase de color según estado
  getCardClass(status: string): string {
    switch (status) {
      case 'pending':
        return 'card pending';
      case 'requested':
        return 'card requested';
      default:
        return 'card';
    }
  }

  openModal(app: Application) {
    if (app.status_application === 'requested') {
      this.nameOfPlaceModal.showDialog();
    } else if (app.status_application === 'pending') {
      this.infoSensorsModal.showDialog();
    }
  }
}
