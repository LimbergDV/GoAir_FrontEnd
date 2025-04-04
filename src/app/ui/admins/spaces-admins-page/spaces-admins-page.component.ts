import { Component, OnInit } from '@angular/core';
import { AuthSessions } from '../../../infrastructure/services/auth.sessions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spaces-admins-page',
  templateUrl: './spaces-admins-page.component.html',
  styleUrl: './spaces-admins-page.component.css',
})
export class SpacesAdminsPageComponent implements OnInit {
  constructor(private auth: AuthSessions, private router: Router) {}

  ngOnInit(): void {
    this.validateToken();
  }

  private validateToken() {
    this.auth.validateToken('admin').then((isValid) => {
      if (!isValid) {
        this.router.navigate(['/signInAdmins']);
      } 
    });
  }
}
