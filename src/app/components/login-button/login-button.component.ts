import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { UserDto } from 'src/app/dto/user.dto';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent {

  constructor(public auth: AuthService) { }

  loginWithRedirect(): void{
    this.auth.loginWithRedirect();
  }

  logoutWithRedirect(): void{
    sessionStorage.clear();
    this.auth.logout();
  }

}
