import { Component, OnInit } from '@angular/core';
import { GetAllApplications } from '../../../core/applications/useCases/getAllAplications.useCase';
import { Application } from '../../../core/applications/domain/application.model';
import { Router } from '@angular/router';
import { GetApplications } from '../../../core/applications/useCases/getApplication.useCase';

@Component({
  selector: 'app-admins-table',
  templateUrl: './admins-table.component.html',
  styleUrl: './admins-table.component.css',
})
export class AdminsTableComponent implements OnInit {
  applications: Application[] = [];

  constructor(
    private gaa: GetAllApplications,
    private ga: GetApplications,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getApps();
    this.getApp();
  }

  getApps() {
    this.gaa.execute().subscribe({
      next: (res) => {
        this.applications = res.map(
          (app) =>
            new Application(
              app.id_application,
              app.first_name,
              app.last_name,
              app.status_application,
              app.id_user
            )
        );
      },
      error: (err) => {
        alert('Ocurrió un error al traer los datos');
        console.log(err);
      },
    });
  }

  getApp() {
    this.ga.execute().subscribe({
      next: (res) => {
        console.log(res);

        let newApp = new Application(
          res.id_application,
          res.first_name,
          res.last_name,
          res.status_application,
          res.id_user
        );
        this.applications.push(newApp);
      },
      error: (err) => {
        alert('Ocurrió un error al traer los datos');
        console.log(err);
      },
    });
  }

  viewDetails(id_user: number, firts_name: string, last_name: string) {
    const name = firts_name + ' ' + last_name
    this.router.navigate(['/details', name], { queryParams: { id_user } });
  }
}
