import { TestBed } from '@angular/core/testing';
import { AxiosResponse } from 'axios';
import { PostCompanyDto } from '../dto/company.dto';

import { CompanyService } from './company.service';

describe('CompanyService', () => {
  let service: CompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('Should post company', async () => {
    // setup
    const company: PostCompanyDto =
    {
      owner: 1,
      name: "victor company",
      type: "Retailer",
      adress: "sint odastraat 22",
      postCode: "6002BD",
    }
    // execution
    const response:AxiosResponse = await service.postCompany(company)
    expect(response.status).toBe(200);
  });

});
