// // class Retangulo{
// //     public width: number;
// //     public height: number;

// //     constructor(width: number, height: number){
// //         this.width = width;
// //         this.height = height;
// //     }
// // }

// // class Circulo{
// //     public radius: number;

// //     constructor(radius: number){
// //         this.radius = radius;
// //     }
// // }

// // class Calculadora{
// //     public calcularAreaRetangulo(retangulo: Retangulo): number{
// //         return retangulo.width * retangulo.height;
// //     }

// //     public calculateCircleArea(circle: Circulo): number{
// //         return Math.PI * (circle.radius * circle.radius) 
// //     }
// // }

// interface Shape{
//     calculateArea(): number
// }

// class Retangulo implements Shape{
//     public width: number;
//     public height: number;

//     constructor(width: number, height: number){
//         this.width = width;
//         this.height = height;
//     }

//     public calculateArea(): number {
//         return this.width * this.height;
//     }
// }

// class Circulo implements Shape{
//     radius: number;

//     constructor(radius: number){
//         this.radius = radius;
//     }

//     public calculateArea(): number {
//         return Math.PI * (this.radius * this.radius);
//     }
// }

// class Triangulo implements Shape{
//     lado: number;

//     constructor(lado: number){
//         this.lado = lado;
//     }

//     calculateArea(): number{
//         return 0.0;
//     }
// }

// class Calculadora{
//     public calculateArea(shape: Shape): number | string{
//         let value = shape.calculateArea();
//         if(value){
//             value *= 2
//             return value.toFixed(2);
//         }
//         return 0.0;
//     }
// }

// class Decagono implements Shape{
//     lados: number;

//     constructor(lados: number){
//         this.lados = lados;
//     }

//     calculateArea(): number {
//         return 10.0
//     }
// }

// const circ1: Shape = new Circulo(12);
// const ret1: Shape = new Retangulo(10, 20);
// const tri1: Shape = new Triangulo(10);
// const dec1: Shape =  new Decagono(20);

// const calculadora = new Calculadora();

// console.log(calculadora.calculateArea(circ1))
// console.log(calculadora.calculateArea(ret1))
// console.log(calculadora.calculateArea(tri1))
// console.log(calculadora.calculateArea(dec1))
