import { Component } from '@angular/core';
import { SignIn } from '../../../core/admin/useCases/signIn.useCase';
import { Admin } from '../../../core/admin/domain/admin.model';
import { AuthSessions } from '../../../infrastructure/services/auth.sessions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login-admins',
  templateUrl: './form-login-admins.component.html',
  styleUrl: './form-login-admins.component.css',
})
export class FormLoginAdminsComponent {
  admin = new Admin('', '');

  constructor(
    private signIn: SignIn,
    private auth: AuthSessions,
    private router: Router
  ) {}

  login(): void {
    const admin = new Admin(this.admin.email, this.admin.password);
    this.signIn.execute(admin).subscribe({
      next: (res) => {
        this.auth.saveSession(res.token, 'admin'); // Guardar en el localStogare
        this.router.navigate(['/manage']);
      },
      error(err) {
        alert(`Ha ocurrido un erro: ${err}`); //Cambiar por alertas bien bonitas
        console.log(err);
      },
    });
  }
}
