/*Escribe un programa para crear objetos ”producto”. Estos objetos, 
deben presentar las propiedades código, nombre y precio, además del método
 imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Crea tres objetos “producto” y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos.
*/ 

//funcion constructora 
function Producto(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
//metodo
    this.imprimeDatos = function() {
        return `Código: ${this.codigo} <br>
                Nombre: ${this.nombre} <br>
                Precio: $${this.precio} <br>
                ******************<br>`;
    };
}

// Crear 3 productos
const producto1 = new Producto(101, "SSD Kingston 1 TB", 200000);
const producto2 = new Producto(102, "Mouse logitech", 100000);
const producto3 = new Producto(103, "Monitor 24 ", 150000);
//const por que no voy a reasignar la variable

// Guardar
const productos = [producto1, producto2, producto3];

// Mostrar en pantalla
let pantalla = document.getElementById("pantalla");

for (let i = 0; i < productos.length; i++) {
    pantalla.innerHTML += productos[i].imprimeDatos();
}