// class Poligono{
//     lados: Array<number> | null;

import { timeStamp } from "console";

//     constructor(lados: Array<number> | null = null){
//         this.lados = lados;
//     }

//     addLados(lados: Array<number>): void{
//         this.lados = lados;
//     }
//     calculateArea(): number | null{
//         if(this.lados) return this.lados[0] * this.lados[1];
//         return null;
//     }
// }

// class Retangulo extends Poligono{

// }

// class Quadrado extends Poligono{

// }

// const p1: Poligono = new Poligono()
// const r1: Poligono = new Retangulo();
// const q1: Poligono = new Quadrado();

class Pessoa{
    nome: string;
    telefone: string;
    birthday: Date;
    
    constructor(nome: string, telefone: string, birthday: Date){
        this.nome = nome;
        this.telefone = telefone;
        this.birthday = birthday;
    }
}

class Conta{
    saldo: number;
    titular: Pessoa;

    constructor(saldo: number | null, titular: Pessoa){
        if(saldo){
            this.saldo = saldo;
        }else{
            this.saldo = 0.0;
        }
        this.titular = titular;
    }

    depositar(v: number): void{
        this.saldo += v;
    }

    retirar(v: number):void{
        if(v < 0){
            this.saldo += v;
        }else{
            this.saldo -= v;
        }
    }

    showSaldo(): number{
        return this.saldo;
    }
}

class Corrente extends Conta{
    constructor(saldo: number | null, titular: Pessoa){
        super(saldo, titular);
    }
}

class Poupanca extends Conta{
    rendimento: number;

    constructor(saldo: number | null, titular: Pessoa, rendimento: number){
        super(saldo, titular);
        this.rendimento = rendimento;
    }

    calcularRendimento(): number{
        return this.saldo + (this.saldo * this.rendimento);
    }
}

class Conjunta extends Conta{
    titular2: Pessoa

    constructor(saldo: number | null, titular: Pessoa, titular2: Pessoa){
        super(saldo, titular);
        this.titular2 = titular2;
    }
}

class InicializarConta{
    conta: Conta;

    constructor(conta: Conta){
        this.conta = conta;
    }

    acaoConta(v: number): void{
        if(v < 0){
            this.conta.retirar(v);
        }else{
            this.conta.depositar(v);
        }
    }
}

const p1 = new Pessoa("Tiago Silva", "+5521989889438", new Date(1995, 6, 27, 11, 30, 0));
const p2 = new Pessoa("Brendha França", "+5521989889438", new Date(1997, 11, 24, 9, 10, 0));
const conjunta1 = new Conjunta(1000, p1, p2);

const inicializador = new InicializarConta(conjunta1);
inicializador.acaoConta(3000);

console.log(conjunta1.showSaldo());

