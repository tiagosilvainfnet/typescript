"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const mysql = require('mysql2/promise');
const util = require("util");
class Model {
    constructor(name) {
        this.name = name;
        this.conn = null;
    }
    openConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            this.conn = yield mysql.createConnection({
                host: 'localhost',
                user: "root",
                password: "12345678",
                database: "modulo_mysql"
            });
        });
    }
    save(fields, values) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.openConnection();
            if (this.conn) {
                yield this.conn.execute(`INSERT INTO ${this.name} (${fields}) VALUES (${values})`);
            }
        });
    }
    update(id) {
        console.log("Atualizando o dado no banco de dados");
    }
    delete(id) {
        console.log("Deletando dado no banco de dados");
    }
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.openConnection();
            if (this.conn) {
                const [rows, fields] = yield this.conn.execute(`SELECT * FROM ${this.name};`);
                return rows;
            }
            return null;
        });
    }
    sync() {
        console.log("Sincronizando o database.");
    }
}
class User extends Model {
    constructor() {
        super("users");
    }
}
function rodar() {
    return __awaiter(this, void 0, void 0, function* () {
        let user = new User();
        yield user.save("name, username, email, password, birthday, createdAt, updatedAt", '"novo item2", "novoitem2", "novo2@gmail.com", "123456", "2022-01-01", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP');
        let result = yield user.find();
        console.log(result);
    });
}
rodar();
// const m = new Model();
