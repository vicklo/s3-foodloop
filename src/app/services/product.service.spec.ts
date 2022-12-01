import { TestBed } from '@angular/core/testing';
import { AuthModule } from '@auth0/auth0-angular';
import { AxiosResponse } from 'axios';
import {environment as env} from '../../environments/environment'
import { PostProductDto } from '../dto/postproduct.dto';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AuthModule.forRoot({
          ... env.auth,
        }),
      ],
    })
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should say company is missing', async () => {
    // setup
    const product: PostProductDto =
    {
      name:"test product",
      url: "www.test.nl",
      description:"Heel mooi product",
      // company:1,
    }

    // execution
    let response = "";
    await service.PostProduct(product).catch(error => response = error)
    expect(response).toBe('Company must be filled');
  });

  it('Should say name is missing', async () => {
    // setup
    const product: PostProductDto =
    {
      // name:"test product",
      url: "www.test.nl",
      description:"Heel mooi product",
      company:1,
    }

    // execution
    let response = "";
    await service.PostProduct(product).catch(error => response = error)
    expect(response).toBe('Name must be filled');
  });

  it('Should say description is missing', async () => {
    // setup
    const product: PostProductDto =
    {
      name:"test product",
      url: "www.test.nl",
      // description:"Heel mooi product",
      company:1,
    }

    // execution
    let response = "";
    await service.PostProduct(product).catch(error => response = error)
    expect(response).toBe('Description must be filled');
  });

  it('Should say url is missing', async () => {
    // setup
    const product: PostProductDto =
    {
      name:"test product",
      // url: "www.test.nl",
      description:"Heel mooi product",
      company:1,
    }

    // execution
    let response = "";
    await service.PostProduct(product).catch(error => response = error)
    expect(response).toBe('Url must be filled');
  });

  it('Should post product', async () => {
    // setup
    const product: PostProductDto =
    {
      name:"test product",
      url: "www.test.nl",
      description:"Heel mooi product",
      company:1,
    }
    // execution
    const response:AxiosResponse = await service.PostProduct(product)
    expect(response.status).toBe(200);
  });

  it('Should post product', async () => {
    // setup
    const product: PostProductDto =
    {
      name:"test product",
      url: "www.test.nl",
      description:"Heel mooi product",
      company:1,
    }
    // execution
    const response:AxiosResponse = await service.PostProduct(product)
    expect(response.status).toBe(200);
  });

  it('Should delete product', async () => {
    // setup
    const product: PostProductDto =
    {
      name:"test product",
      url: "www.test.nl",
      description:"Heel mooi product",
      company:1,
    }
    // execution
    const productresponse = await (await service.PostProduct(product)).data
    const response:AxiosResponse = await service.DeleteProduct(productresponse.id)
    expect(response.status).toBe(200);
  });
});
