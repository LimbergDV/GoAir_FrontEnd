import { Component } from '@angular/core';
import { Place } from '../../../core/users/domain/place.model';
import { GetPlaces } from '../../../core/users/useCases/getPlaces.useCase';
import { AuthSessions } from '../../../infrastructure/services/auth.sessions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-places-cards',
  templateUrl: './my-places-cards.component.html',
  styleUrl: './my-places-cards.component.css'
})
export class MyPlacesCardsComponent {
  place = new Place (0,0, '','')

  constructor(private GetPlaces: GetPlaces,
    private auth: AuthSessions,
    private router: Router
  ){}

  getPlaces(): void{
    const place = new Place (this.place.id_place, this.place.id_user, this.place.name, this.place.creat_at)
    this.GetPlaces.execute(place).subscribe({
      next:(res) =>{
        this.auth.saveSession(res.token, 'user')
      },
      error(err){
         alert(`Ha ocurrido un error: ${err}`);
            console.log(err);
      }
    })

  }
}
