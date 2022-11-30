import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import axios from 'axios';
import { BehaviorSubject, Observable, of} from 'rxjs';
import { environment } from 'src/environments/environment';
import { userDto } from '../dto/user.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _currentUser = new BehaviorSubject<userDto>({});
  public currentUser$ = this._currentUser.asObservable();
  get currentUser() { return this._currentUser.value; }

  
  constructor(private auth: AuthService, private router: Router) 
  {}
  private autchUserSubscription = this.auth.user$.subscribe(
      async (user) => 
      {
        const u: userDto = user as userDto;
        if(u != null)
        {
          // set roles needed for now make them for prototype
          u.roles = ['seeProducts','editPostProducts','seeCompany','seeOrder']
          const userDB: userDto = await this.getUserInfo(u.sub as string)
          u.CompanyId = userDB.CompanyId
          if(!userDB)
          {
            //this.router.navigateByUrl("register")
            // await this.postUser({
              
            // })
          }
          console.log(u)
          this.setCurrentUser(u);
        }
        else
        {
        }
      }
    );

   ngOnDestroy() {
    this.autchUserSubscription.unsubscribe()
  }

  private setCurrentUser(user: userDto) 
  { 
    this._currentUser.next(user);
    localStorage.setItem('user',JSON.stringify(user))
  }

  private async getUserInfo(authId: string)
  {
    let userinfo = {}
    await axios.get(`${environment.apiBaseUrl}/user/${authId}`)
      .then(data => userinfo = data.data)
    return userinfo
  }

  private async postUser()
  {

  }
}
