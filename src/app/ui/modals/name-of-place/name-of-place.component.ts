import { Component } from '@angular/core';

@Component({
  selector: 'app-name-of-place',
  templateUrl: './name-of-place.component.html',
  styleUrl: './name-of-place.component.css',
})
export class NameOfPlaceComponent {
  visible: boolean = false;
  place: string = '';

  showDialog() {
    this.visible = true;
  }

  accept() {
    this.animateClose();
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
