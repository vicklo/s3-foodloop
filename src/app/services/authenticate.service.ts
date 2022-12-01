import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  public async getToken()
  {
    let token: string = "";
    const headers = {'content-type': 'application/json'}
    await axios.post("https://dev-txtbte1v.us.auth0.com/oauth/token",
      {
        "client_id":environment.ApiId,
        "client_secret":environment.apiSecret,
        "audience":"localhost:3000",
        "grant_type":"client_credentials"
      },
      {headers}).then(data =>
        {
          token = data.data
        })
    return token;
  }
}
