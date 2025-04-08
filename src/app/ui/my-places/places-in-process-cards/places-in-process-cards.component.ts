import { Component, OnInit } from '@angular/core';
import { Application } from '../../../core/admin/domain/apps.model';
import { GetAppUser } from '../../../core/users/useCases/getAppUser.useCase';

@Component({
  selector: 'app-places-in-process-cards',
  templateUrl: './places-in-process-cards.component.html',
  styleUrl: './places-in-process-cards.component.css',
})
export class PlacesInProcessCardsComponent implements OnInit {
  apps!: Application[];
  constructor(private gau: GetAppUser) {}

  ngOnInit(): void {
    this.getApps();
  }

  getApps() {
    this.gau.execute().subscribe({
      next: (res) => {
        console.log(res);
        this.apps = res;
      },
      error: (err) => {
        console.log(err);
        alert('No se obtuvieron lugares solicitados');
      },
    });
  }
}
