import { Component, OnInit } from '@angular/core';
import { Place } from '../../../core/users/domain/place.model';
import { GetPlaces } from '../../../core/users/useCases/getPlaces.useCase';

@Component({
  selector: 'app-my-places-cards',
  templateUrl: './my-places-cards.component.html',
  styleUrl: './my-places-cards.component.css',
})
export class MyPlacesCardsComponent implements OnInit {
  places!: Place[];

  constructor(private GetPlaces: GetPlaces) {}
  ngOnInit(): void {
    this.getPlaces();
  }

  getPlaces(): void {
    this.GetPlaces.execute().subscribe({
      next: (res) => {
        console.log(res);
        this.places = res;
      },
      error: (err) => {
        console.log(err);
        alert('No se pudieron obtener los datos');
      },
    });
  }
}
