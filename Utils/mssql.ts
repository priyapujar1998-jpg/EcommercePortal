import {sql} from 'mssql';
import { defineConfig } from 'playwright/test';

const dbConfifg=({
    server :'10.20.10.105',
    user :'sa',
    password:'test@123'
})

export async function connectToDataBase(query:string){
const pool= await sql.connect(dbConfifg);
const result=await pool.request().query(query)
return result.recordset;

}