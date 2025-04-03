import { Component } from '@angular/core';
import { SignIn } from '../../../core/admin/useCases/signIn.useCase';
import { Admin } from '../../../core/admin/domain/admin.model';

@Component({
  selector: 'app-form-login-admins',
  templateUrl: './form-login-admins.component.html',
  styleUrl: './form-login-admins.component.css',
})
export class FormLoginAdminsComponent {
  admin = new Admin('', '');

  constructor(private signIn: SignIn) {}

  login(): void {
    const admin = new Admin(this.admin.email, this.admin.password);
    this.signIn.execute(admin).subscribe({
      next(res) {
        alert(`Este es el token de la sessión: ${res.token}`);
      },
      error(err) {
        alert(`Ha ocurrido un erro: ${err}`);
        console.log(err);
      },
    });
  }
}
