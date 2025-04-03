import { Component } from '@angular/core';
import { User } from '../../../core/user/domain/user.model';
import { SignIn } from '../../../core/user/useCases/sigIn.useCase';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})
export class FormLoginComponent {
  user = new User('', '');

    constructor(private SignIn: SignIn) {}

    login(): void {
      const user = new User(this.user.email, this.user.password);
      this.SignIn.execute(user).subscribe({
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
