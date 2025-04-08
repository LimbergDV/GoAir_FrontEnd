import { Component } from '@angular/core';
import { Application } from '../../../core/admin/domain/apps.model';
import { CreatePlace } from '../../../core/admin/useCases/createPalce.useCase';
import { NewPlace } from '../../../core/admin/domain/newPlace.model';

@Component({
  selector: 'app-name-of-place',
  templateUrl: './name-of-place.component.html',
  styleUrl: './name-of-place.component.css',
})
export class NameOfPlaceComponent {
  visible: boolean = false;
  place: string = '';
  app!: Application;

  constructor(private cp: CreatePlace) {}

  showDialog(app: Application) {
    this.visible = true;
    this.app = app;
  }

  accept() {
    const newPlace = new NewPlace(
      this.app.id_user,
      this.app.id_application,
      this.place
    );

    this.cp.execute(newPlace).subscribe({
      next: (res) => {
        console.log(res);
        alert('Espacio creado correctamente');
        this.animateClose();
      },
      error: (err) => {
        console.log(err);
        alert('Ocurrió un error al crear el nuevo espacio');
        this.animateClose();
      },
    });
  }

  cancel() {
    this.animateClose();
  }

  animateClose() {
    const overlay = document.querySelector('.modal-overlay');
    const container = document.querySelector('.modal-container');

    if (overlay && container) {
      overlay.classList.add('closing');
      container.classList.add('closing');

      setTimeout(() => {
        this.visible = false;
        overlay.classList.remove('closing');
        container.classList.remove('closing');
      }, 200);
    }
  }
}
