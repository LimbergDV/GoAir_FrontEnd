import { Component, OnInit } from '@angular/core';
import { AuthSessions } from '../../../infrastructure/services/auth.sessions';
import { Router } from '@angular/router';
import { GetPlaces } from '../../../core/users/useCases/getPlaces.useCase';
import { MetricSocket } from '../../../infrastructure/socket/metrics.socketRepository';

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrl: './principal-page.component.css',
})
export class PrincipalPageComponent implements OnInit {
  constructor(
    private auth: AuthSessions,
    private router: Router,
    private gp: GetPlaces,
    private mt: MetricSocket
  ) {}

  ngOnInit(): void {
    this.validateToken();
    this.connectWS();
  }

  private validateToken() {
    this.auth.validateToken('user').then((isValid) => {
      if (!isValid) {
        this.router.navigate(['signIn']);
      }
    });
  }

  private connectWS() {
    this.gp.execute().subscribe({
      next: (res) => {
        this.mt.createConnection(res[0].id_place.toString());
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
