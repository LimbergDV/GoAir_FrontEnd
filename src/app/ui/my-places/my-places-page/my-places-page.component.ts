import { Component } from '@angular/core';
import { CreateApp } from '../../../core/users/useCases/createApp.useCase';

@Component({
  selector: 'app-my-places-page',
  templateUrl: './my-places-page.component.html',
  styleUrl: './my-places-page.component.css',
})
export class MyPlacesPageComponent {
  constructor(private ca: CreateApp) {}

  newApp() {
    this.ca.execute().subscribe({
      next: (res) => {
        console.log(res);
        alert('La petición ha sido enviada con éxito');
      },
      error: (err) => {
        console.log(err);
        alert('Ocurrió un error');
      },
    });
  }
}
