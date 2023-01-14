import { CompanyDto } from "./company.dto"
import { ProductShop } from "./productShop.dto"
import { UserDto } from "./user.dto"

export interface  OrderDto{
    status: string
    price: number
    user: UserDto
    company: CompanyDto
    timeOrdered: string
    products:ProductShop[]
    totalPrice:number
}