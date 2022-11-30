import { TestBed } from '@angular/core/testing';
import { AuthModule } from '@auth0/auth0-angular';
import {environment as env} from '../../environments/environment'


import { UserService } from './user.service';

describe('ShoppingCartService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AuthModule.forRoot({
          ... env.auth,
        }),
      ],
    })
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
