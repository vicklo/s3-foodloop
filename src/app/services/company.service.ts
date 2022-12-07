import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { environment } from 'src/environments/environment';
import { PostCompanyDto } from '../dto/company.dto';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private userService: UserService){}

  public async postCompany(company: PostCompanyDto): Promise<AxiosResponse>
  {
    if(!company.adress)
      return Promise.reject('Company adress must be filled')
    if(!company.name)
      return Promise.reject('Company name must be filled')
    if(!company.owner)
      return Promise.reject('Company owner must be filled')
    if(!company.postCode)
      return Promise.reject('Company postcode must be filled')
    if(!company.type)
      return Promise.reject('Company type must be filled')


    let response = {};
    await axios.post(`${environment.apiBaseUrl}/company`,company)
      .then(data => response = data)
      .catch(error => {return Promise.reject(error)})
    return response as AxiosResponse;
  }
}
