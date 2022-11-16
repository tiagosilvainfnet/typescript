class Conta{
    valor: number | null;
    nome: string | null;

    constructor(
        valor: number | null, 
        nome: string | null
    ){
        this.valor = valor;
        this.nome = nome;
    }

    calculate(): number{
        return 10 * 20;
    }

    addValor(v: number): void {
        if(this.valor){
            this.valor += v;
        }else{
            this.valor = v;
        }
    }

    showValor(): void{
        console.log(this.valor);
    }

    removeValor(v: number): void {
        if(this.valor){
            if(v <= this.valor){
                this.valor -= v;
                console.log(`Seu novo saldo é R$ ${this.valor}`)
            }else{
                console.log(`O valor que você deseja tirar é maior do que o permitido. Você possui R$ ${this.valor}.`)
            }
        }
    }
}
