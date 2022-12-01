import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { UserDto } from 'src/app/dto/user.dto';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  constructor(private auth: AuthService, private comapnyService:CompanyService) { }
  public userInfo: UserDto = {}
  public companyForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    adress: new FormControl(''),
    postcode: new FormControl(''),
    subscription: new FormControl('Free'),
  })
  private userSubscription = this.auth.user$.subscribe(
    (user) => this.userInfo = user as UserDto
  )

  ngOnDestroy()
  {
    this.userSubscription.unsubscribe()
  }



}
