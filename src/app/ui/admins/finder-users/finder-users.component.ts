import { Component } from '@angular/core';
import { SearchUser } from '../../../core/admin/useCases/searchUser.useCase';
import { User } from '../../../core/users/domain/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finder-users',
  templateUrl: './finder-users.component.html',
  styleUrl: './finder-users.component.css',
})
export class FinderUsersComponent {
  last_name = '';
  oppen = false;
  user: User | null = null;

  constructor(private su: SearchUser, private r: Router) {}

  find() {
    if (this.last_name == '' || this.last_name == ' ') {
      return;
    }
    this.su.execute(this.last_name).subscribe({
      next: (res) => {
        this.user = res;
        if (this.user.email != '') {
          this.oppen = true;
        } else {
          alert('No hubo resultados');
        }
      },
      error: (err) => {
        alert('No hubo éxito en la búsqueda');
        console.log(err);
      },
    });
  }

  viewDetails(id_user: number, firts_name: string, last_name: string) {
    const name = firts_name + ' ' + last_name
    // Navegar al detalle del usuario (puedes cambiar la ruta según sea necesario)
    this.r.navigate(['/details', name], { queryParams: { id_user } });
  }
}
