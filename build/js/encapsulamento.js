"use strict";
class Livro {
    constructor(titulo, autor, editora, ano, preco) {
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.ano = ano;
        this.preco = preco;
    }
    getTitulo() {
        return this.titulo;
    }
    getAno() {
        return this.ano;
    }
    getAutor() {
        return this.autor;
    }
    getEditora() {
        return this.editora;
    }
    getPreco() {
        return this.preco;
    }
    setPreco(preco) {
        this.preco = preco;
    }
}
const livro1 = new Livro("Python de A a Z", "Tiago Silva", "Clube de Autores", 2019, 49.99);
console.log(livro1.getTitulo());
console.log(livro1.getAno());
console.log(livro1.getAutor());
console.log(livro1.getEditora());
console.log(livro1.getPreco());
livro1.setPreco(69.99);
console.log(livro1.getPreco());
