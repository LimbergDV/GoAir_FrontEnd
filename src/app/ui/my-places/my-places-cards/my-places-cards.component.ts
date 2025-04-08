import { Component, OnInit } from '@angular/core';
import { Place } from '../../../core/users/domain/place.model';
import { GetPlaces } from '../../../core/users/useCases/getPlaces.useCase';
import { ConfirmHandler } from '../../../infrastructure/socket/confirInstallation';

@Component({
  selector: 'app-my-places-cards',
  templateUrl: './my-places-cards.component.html',
  styleUrl: './my-places-cards.component.css',
})
export class MyPlacesCardsComponent implements OnInit {
  places!: Place[];

  constructor(private GetPlaces: GetPlaces, private wsC: ConfirmHandler) {}
  ngOnInit(): void {
    this.getPlaces();
  }

  getPlaces(): void {
    this.GetPlaces.execute().subscribe({
      next: (res) => {
        console.log(res);
        this.places = res;
        this.initWS(res[0].id_user);
      },
      error: (err) => {
        console.log(err);
        alert('No se pudieron obtener los datos');
      },
    });
  }

  initWS(id_user: number) {
    this.wsC.createConnection(id_user);
  }
}
