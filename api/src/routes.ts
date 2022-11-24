import { Express, Handler } from "express";
import { ProductController } from "./controller/product.controller";
import { CompanyController } from "./controller/company.controller";
import { OrderController } from "./controller/order.controller";
import { RoleController } from "./controller/role.controller";
import { UserController } from "./controller/user.controller";

export default function (app: Express, jwt : Handler)
{
    const companyCon = new CompanyController();

    app.get("/companys",companyCon.getAllCompanys);
    app.get("/company/:id",companyCon.getCompany);
    app.post("/company",companyCon.postCompany);
    app.put("/company",companyCon.putCompany);
    app.delete("/company/:id",companyCon.deleteCompany);

    const productCon = new ProductController();

    app.get("/products",productCon.getAllProducts);
    app.get("/product/:id",productCon.getProduct);
    app.post("/product",productCon.postProduct);
    app.put("/product",productCon.putProduct);
    app.delete("/product/:id",productCon.deleteProduct);

    const OrderCon = new OrderController();

    app.get("/orders",OrderCon.getAllOrders);
    app.get("/order/:id",OrderCon.getOrder);
    app.post("/order",OrderCon.postOrder);
    app.put("/order",OrderCon.putOrder);
    app.delete("/order/:id",OrderCon.deleteOrder);

    const roleCon = new RoleController();

    app.get("/roles",roleCon.getAllRoles);
    app.get("/role/:id",roleCon.getRole);
    app.post("/role",roleCon.postRole);
    app.put("/role",roleCon.putRole);
    app.delete("/role/:id",roleCon.deleteRole);

    const userCon = new UserController();

    app.get("/users",userCon.getAllUsers);
    app.get("/user/:id",userCon.getUser);
    app.post("/user",userCon.postUser);
    app.put("/user",userCon.putUser);
    app.delete("/user/:id",userCon.deleteUser);
}