import { Component } from '@angular/core';
import { User } from '../../../core/users/domain/user.model';
import { SignIn } from '../../../core/admin/useCases/signIn.useCase';
import { AuthSessions } from '../../../infrastructure/services/auth.sessions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css',
})
export class FormLoginComponent {
  user = new User(0, '', '', '', '');

  constructor(
    private SigIn: SignIn,
    private auth: AuthSessions,
    private router: Router
  ) {}

  login(): void {
    const user = new User(0, '', '', this.user.email, this.user.password);
    this.SigIn.execute(user).subscribe({
      next: (res) => {
        this.auth.saveSession(res.token, 'user'); //lo guarda en ls
        this.router.navigate(['/home']);
      },
      error(err) {
        alert(`Ha ocurrido un erro: ${err}`);
        console.log(err);
      },
    });
  }
}
