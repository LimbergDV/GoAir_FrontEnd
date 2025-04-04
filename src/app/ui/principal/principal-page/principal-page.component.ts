import { Component, OnInit } from '@angular/core';
import { AuthSessions } from '../../../infrastructure/services/auth.sessions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrl: './principal-page.component.css'
})
export class PrincipalPageComponent implements OnInit{
  constructor(private auth: AuthSessions, private router: Router){}

  ngOnInit(): void {
      this.validateToken();
  }

  private validateToken(){
    this.auth.validateToken('user').then((isValid) => {
      if(!isValid){
        this.router.navigate(['signIn'])
      }
    })
  }
}
