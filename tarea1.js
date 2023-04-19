console.log("Ejercicio 1");
// 1) Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta ese numero.
function piramide(num) {
    let str 
    for (let i = 1; i <= num; i++) {     
        if (str == undefined) {
            str = String(i);
        }else{
            str += String(i);
        }
        console.log(str);
    }
}
entrada = prompt("Ejercicio1 ---> Ingrese un numero: ");
piramide(entrada);

console.log("Ejercicio 2");
// 2) Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos.
function itemIguales(array1,array2,resultado) {
    for (let i = 0; i < array1.length; i++) {
        let item_A1 = array1[i];
        for (let k = 0; k < array2.length; k++) {
            let item_A2 = array2[k];
            if ((item_A1===item_A2)&&(resultado.indexOf(item_A1)=== -1)) {
                resultado.push(item_A2);
            }
        }
    }
    console.log(resultado);
}
// 1er Ejemplo: 
const array1=['rojo', 'azul', 'amarillo', '1'];
const array2=['blanco', 'negro', 'rojo'];
const items = [];
itemIguales(array1,array2,items);

// 2do ejemplo:
const array3 = [4, 3, true, 'manzana'];
const array4 = ['pera', 3, false, true, 3, true];
const items2 = [];
itemIguales(array3,array4,items2);

console.log("Ejercicio 3");
// 3) Dado el siguiente objeto:
let carrito1 = {
    montoTotal: 10,
    productos: ["Leche"]
}
// 3.1) Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.
// 3.2) Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal.
class Carrito {
    montoTotal;
    productos = [];

    constructor(productos,montoTotal,precio) {
        this.productos.push(productos);
        this.montoTotal = montoTotal;     
    }
    agregarProducto(nombre,precio,unidades){
        try {
            if ((this.productos.indexOf(nombre)) !== -1) {
                throw ("Ya existe "+ nombre +" con "+ unidades +" unidades.");
            }
            this.productos.push(nombre);
            this.montoTotal = this.montoTotal + (precio * unidades);
        } catch (error) {
            console.log(error)
        }
    }
}
// 3.3)Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir un mensaje si el item ya existe:
// “ya existe xxx con yyy unidades”
const Carrito_ejemplo = new Carrito('Leche',10,1);
Carrito_ejemplo.agregarProducto('Azucar',5,2);
Carrito_ejemplo.agregarProducto('Leche',10,2);
Carrito_ejemplo.agregarProducto('Arroz',3,2);
console.log(Carrito_ejemplo);





