/**2-Escribe un programa que cree un objeto "cuenta" con las siguientes
 *  propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
 */

const cuenta ={
    //propiedad
    titular:"Alex",
    saldo: 0,

    //metodos
    ingresar : function(cantidad){
        this.saldo +=cantidad; // lo mismo que this.saldo = this.saldo + cantidad;
    },
    extraer : function(cantidad){
        if (cantidad > this.saldo) {
        return "Fondos insuficientes";
    } else {
        this.saldo -= cantidad;
    }
    },
    informar: function() {
        return `Titular:  ${this.titular} <br>Saldo: $ ${this.saldo}<br>-------`;
    }

}

let pantalla = document.getElementById("pantalla");

pantalla.innerHTML = "<b>Estado inicial:</b><br>" + cuenta.informar();

let opcion;

while (opcion !== "salir") {

    opcion = prompt("¿Qué desea hacer? (ingresar / extraer / salir)");

    if (opcion === "ingresar") {
        let monto = parseFloat(prompt("Ingrese el monto:"));
        cuenta.ingresar(monto);
        pantalla.innerHTML += `-----------<br>Ingresó $${monto}<br>`;

    } else if (opcion === "extraer") {
        let monto = parseFloat(prompt("Ingrese el monto:"));
        let resultado = cuenta.extraer(monto);

        if (resultado) {
            pantalla.innerHTML += resultado + "<br>";
        } else {
            pantalla.innerHTML += `Extrajo $${monto}<br>`;
        }

    } else if (opcion === "salir") {
        pantalla.innerHTML += "<br><b>Operación finalizada</b><br>";

    } else {
        pantalla.innerHTML += "Opción no válida<br>";
    }
}

// Mostrar estado final
pantalla.innerHTML += "<br><b>Estado final:</b><br>" + cuenta.informar();