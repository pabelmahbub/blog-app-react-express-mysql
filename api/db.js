import mysql from "mysql"

export const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"0000",
    database:"blog"


})