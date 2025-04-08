import { Component } from '@angular/core';
import { Application } from '../../../core/admin/domain/apps.model';
import { ConfirmApp } from '../../../core/admin/useCases/confirmApp.useCase';

@Component({
  selector: 'app-confirm-instalation',
  templateUrl: './confirm-instalation.component.html',
  styleUrl: './confirm-instalation.component.css',
})
export class ConfirmInstalationComponent {
  visible: boolean = false;
  isClosing: boolean = false;
  app!: Application;

  constructor(private ci: ConfirmApp) {}

  showDialog(app: Application) {
    this.app = app;
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
    this.ci.execute(this.app.id_application).subscribe({
      next: (res) => {
        console.log(res);
        alert('Confirmación hecha');
        this.closeModal();
      },
      error: (err) => {
        console.log(err);
        alert('Ocurrió un error inesperado');
        this.closeModal();
      },
    });
  }
}
