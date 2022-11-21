const mysql = require('mysql2/promise');
const util = require("util");

class Model{
    conn: any;
    name: string;

    constructor(name: string){
        this.name = name;
        this.conn = null;
    }

    public async openConnection(): Promise<any>{
        this.conn = await mysql.createConnection({
            host: 'localhost',
            user: "root",
            password: "12345678",
            database: "modulo_mysql"
        })
    }

    public async save(fields: string, values: string): Promise<any>{
        await this.openConnection();
        if(this.conn){
             await this.conn.execute(`INSERT INTO ${this.name} (${fields}) VALUES (${values})`);
        }
    }
    public update(id: number): void{
        console.log("Atualizando o dado no banco de dados")
    }
    public delete(id: number): void{
        console.log("Deletando dado no banco de dados")
    }
    public async find(): Promise<any>{
        await this.openConnection();
        if(this.conn){
            const [rows, fields] = await this.conn.execute(`SELECT * FROM ${this.name};`);
            return rows;
        }
        return null;
    }
    public sync(): void{
        console.log("Sincronizando o database.")
    }
}

class User extends Model{
    constructor(){
        super("users")
    }
}

async function rodar(){
    let user = new User();
    await user.save("name, username, email, password, birthday, createdAt, updatedAt", '"novo item2", "novoitem2", "novo2@gmail.com", "123456", "2022-01-01", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP')
    let result = await user.find();
    console.log(result)
}
rodar();
// const m = new Model();