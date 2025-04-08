import { Component } from '@angular/core';

@Component({
  selector: 'app-confirm-instalation',
  templateUrl: './confirm-instalation.component.html',
  styleUrl: './confirm-instalation.component.css'
})
export class ConfirmInstalationComponent {
  visible: boolean = false;
  isClosing: boolean = false;

  showDialog() {
    this.visible = true;
    this.isClosing = false;
  }

  closeModal() {
    this.isClosing = true;
    setTimeout(() => {
      this.visible = false;
    }, 300);
  }

  cancel() {
    this.closeModal();
  }

  confirm() {
    this.closeModal();
  }
}
