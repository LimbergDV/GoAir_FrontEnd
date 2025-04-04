import { Component } from '@angular/core';
import { User } from '../../../core/users/domain/user.model';
import { SignUp } from '../../../core/users/useCases/createUser.useCase';
import { AuthSessions } from '../../../infrastructure/services/auth.sessions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css'
})
export class FormRegisterComponent {
  user = new User('','','','')

  constructor(private SignUp: SignUp,
        private auth: AuthSessions,
        private router: Router) {}

      signUp(): void {
        if (!this.user.email.trim() ||
      !this.user.password.trim() ||
      !this.user.first_name.trim() ||
      !this.user.last_name.trim()) {
    alert('Todos los campos son obligatorios.');
    return;
  }
        const user = new User(this.user.email, this.user.password, this.user.first_name, this.user.last_name);
        this.SignUp.execute(user).subscribe({
          next:(res) =>{
            this.auth.saveSession(res.token, 'user') //lo guarda en ls
            this.router.navigate(['/signIn'])
          },
          error(err) {
            alert(`Ha ocurrido un error: ${err}`);
            console.log(err);
          },
        });
      }
}
