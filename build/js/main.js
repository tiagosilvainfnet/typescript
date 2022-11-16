"use strict";
class Conta {
    constructor(valor, nome) {
        this.valor = valor;
        this.nome = nome;
    }
    calculate() {
        return 10 * 20;
    }
    addValor(v) {
        if (this.valor) {
            this.valor += v;
        }
        else {
            this.valor = v;
        }
    }
    showValor() {
        console.log(this.valor);
    }
    removeValor(v) {
        if (this.valor) {
            if (v <= this.valor) {
                this.valor -= v;
                console.log(`Seu novo saldo é R$ ${this.valor}`);
            }
            else {
                console.log(`O valor que você deseja tirar é maior do que o permitido. Você possui R$ ${this.valor}.`);
            }
        }
    }
}
let c1 = new Conta(1000, "Tiago Silva");
c1.addValor(1000);
c1.removeValor(300);
