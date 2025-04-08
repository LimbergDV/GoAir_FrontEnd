import { Component, Input, OnInit } from '@angular/core';
import { Place } from '../../../core/admin/domain/place.model';
import { GetPlacesUser } from '../../../core/admin/useCases/getPlacesUser.useCase';

@Component({
  selector: 'app-active-places-cards',
  templateUrl: './active-places-cards.component.html',
  styleUrl: './active-places-cards.component.css',
})
export class ActivePlacesCardsComponent implements OnInit {
  @Input({ required: true }) id_user!: number;
  places: Place[] = [];

  constructor(private gp: GetPlacesUser) {}

  ngOnInit(): void {
    this.fetchPlaces();
  }

  selectedPlace: Place | null = null;

  private fetchPlaces() {
    this.gp.execute(this.id_user).subscribe({
      next: (res) => {
        this.places = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
        alert('Ocurrió un error al traer los datos');
      },
    });
  }

  openModal(place: Place): void {
    this.selectedPlace = place;
  }

  closeModal(): void {
    this.selectedPlace = null;
  }
}
