import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GoAir-FrontEnd';

  showNavbar: boolean = true;

  private hiddenRoutes: string[] = ['/login', '/signUp']; // Rutas sin navbar

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.showNavbar = !this.hiddenRoutes.includes(this.router.url);
    });
  }
}
