"use strict";
// interface ContaInterface{
//     valor: number | null,
//     nome: string | null,
//     addValor(v: number): void,
//     showValor(): void,
//     removeValor(v: number): void
// }
// class Conta implements ContaInterface{
//     // Visibilidades: public, private, protected
//     public valor: number | null;
//     public nome: string | null;
//     constructor(
//         valor: number | null, 
//         nome: string | null
//     ){
//         this.valor = valor;
//         this.nome = nome;
//     }
//     public addValor(v: number): void {
//         if(this.valor){
//             this.valor += v;
//         }else{
//             this.valor = v;
//         }
//     }
//     public showValor(): void{
//         console.log(this.valor);
//     }
//     public removeValor(v: number): void {
//         if(this.valor){
//             if(v <= this.valor){
//                 this.valor -= v;
//                 console.log(`Seu novo saldo é R$ ${this.valor}`)
//             }else{
//                 console.log(`O valor que você deseja tirar é maior do que o permitido. Você possui R$ ${this.valor}.`)
//             }
//         }
//     }
// }
// let c1 = new Conta(1000, "Tiago Silva");
// c1.addValor(1000);
// c1.removeValor(300);
