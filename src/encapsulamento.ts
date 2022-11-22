class Livro{
    private titulo: string | null;
    private autor: string | null;
    private editora: string | null;
    private ano: number | null;
    private preco: number | null;

    constructor(titulo: string, autor: string, editora: string, ano: number, preco: number){
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.ano = ano;
        this.preco = preco;
    }

    public getTitulo(): string | null{
        return this.titulo;
    }

    public getAno(): number | null{
        return this.ano;
    }

    public getAutor(): string | null{
        return this.autor;
    }

    public getEditora(): string | null{
        return this.editora;
    }

    public getPreco(): number | null{
        return this.preco;
    }
    public setPreco(preco: number | null):void{
        this.preco = preco;
    }
}

const livro1 = new Livro("Python de A a Z", "Tiago Silva", "Clube de Autores", 2019, 49.99);
console.log(livro1.getTitulo());
console.log(livro1.getAno());
console.log(livro1.getAutor());
console.log(livro1.getEditora());
console.log(livro1.getPreco());

livro1.setPreco(69.99)

console.log(livro1.getPreco());
