import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { UserDto } from 'src/app/dto/user.dto';
import { CompanyService } from 'src/app/services/company.service';
import { UserService } from 'src/app/services/user.service';
import { PostCompanyDto } from '../../dto/company.dto';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  constructor(private auth: AuthService,
    private comapnyService:CompanyService,
    private router: Router,
    private userSercvice: UserService) { }
  public userInfo: UserDto = {}
  public companyForm: FormGroup = new FormGroup({

    name: new FormControl(''),
    adress: new FormControl(''),
    postCode: new FormControl(''),
    type: new FormControl('Free'),
  })
  private userSubscription = this.auth.user$.subscribe(
    (user) => {
      this.userInfo = user as UserDto;
      this.companyForm.addControl("owner",new FormControl(user?.sub))
    }
  )

  ngOnDestroy()
  {
    this.userSubscription.unsubscribe()
  }

  async postProduct()
  {
    await this.auth.isAuthenticated$;
    const response =  await this.comapnyService.postCompany(this.companyForm.value as PostCompanyDto)
    if(response.status === 200)
    {
      await this.userSercvice.postUser({
        firstName: this.userSercvice.currentUser.given_name || "john",
        lastName:this.userSercvice.currentUser.family_name || "doe",
        authId:this.userSercvice.currentUser.sub,
        company: response.data.id
      })
      .then(userResponse =>
        {
          this.router.navigateByUrl("products")
        })
        .catch(error => Promise.reject(error))
    }
  }
}
