import {myDataSource} from '../appDataSource'
import { Product } from '../model/product.entity'
import { Iproduct } from '../interface/Iproduct'


const repository = myDataSource.getRepository("product");
export class ProductService implements Iproduct
{
     async  getAllProducts()
    {   
        return repository.find()
    }
    async getProduct(id: number)
    {
        return repository.findOneBy({id:id})
    }
     async postProduct(Product: Product)
    {
        console.log(Product)
        return repository.save(Product)
    }
     async putProduct(Product:Product)
    {
        return repository.save(Product)
    }
    async deleteProduct(id: number)
    {
        return repository.delete({id:id})
    }
}
