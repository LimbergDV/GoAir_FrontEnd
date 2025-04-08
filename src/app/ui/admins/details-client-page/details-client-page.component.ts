import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthSessions } from '../../../infrastructure/services/auth.sessions';

@Component({
  selector: 'app-details-client-page',
  templateUrl: './details-client-page.component.html',
  styleUrl: './details-client-page.component.css',
})
export class DetailsClientPageComponent {
  id_user!: number;
  name!: string;

  constructor(
    private route: ActivatedRoute,
    private auth: AuthSessions,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.validateToken();
    this.route.queryParams.subscribe((params) => {
      this.id_user = params['id_user'];
    });

    this.route.paramMap.subscribe((params) => {
      this.name = params.get('name')!;
    });
  }

  private validateToken() {
    this.auth.validateToken('admin').then((isValid) => {
      if (!isValid) {
        this.router.navigate(['/signInAdmins']);
      }
    });
  }

  
}
