import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-client-page',
  templateUrl: './details-client-page.component.html',
  styleUrl: './details-client-page.component.css',
})
export class DetailsClientPageComponent {
  id_user!: number;
  name!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.id_user = params['id_user'];
      console.log(`ID Usuario: ${this.id_user}`);
    });

    this.route.paramMap.subscribe((params) => {
      this.name = params.get('name')!;
    });
  }
}
