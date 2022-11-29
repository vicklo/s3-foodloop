import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { userDto } from 'src/app/dto/user.dto';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  loginWithRedirect(): void{
    this.auth.loginWithRedirect();
  }

  logoutWithRedirect(): void{
    sessionStorage.clear();  
    this.auth.logout();
  }

}
