import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { postCompanyDto } from '../dto/company.dto';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }

  public async postCompany(company: postCompanyDto)
  {
    let response;
    await axios.post(`${environment.apiBaseUrl}/company`,company)
      .then(data => response = data)
    return response;
  }
}
