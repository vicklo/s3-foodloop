import { DataSource } from "typeorm"
import config from '../settings';

const host = config.dbHost
const port = config.dbPort

export const myDataSource = new DataSource({
    type: "mysql",
    host: host,
    port: port,
    username: "root",
    password: "",
    database: "foodloop",
    entities: ["src/model/*.ts"],
    logging: true,
    synchronize: true,
})


