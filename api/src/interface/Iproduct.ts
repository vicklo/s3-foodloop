import {Product} from "../model/product.entity"

export interface Iproduct
{
    getAllProducts: () => Promise<any>;
    getProduct: (id: number) => Promise<any>;
    postProduct: (Product: Product) => Promise<any>;
    putProduct: (Product: Product) => Promise<any>;
    deleteProduct: (id: number) => Promise<any>;
}


