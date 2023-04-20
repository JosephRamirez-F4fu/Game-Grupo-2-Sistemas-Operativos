
import { createPool } from "mysql2/promise";
export const pool = new createPool({
    host: "database-upc.cenpkg3wuuox.us-east-1.rds.amazonaws.com",
    user: "admin",
    port: 3306,
    password: "ThOl76muxdtyDfWyl3pZ",
    database: "Game_e"
});
