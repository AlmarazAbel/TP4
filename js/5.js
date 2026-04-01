/**5- Crea un objeto “persona” que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna
 propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo 
característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones.:......
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.

*/

class Persona {//creamos la clase persona
    constructor(nombre, edad, sexo, peso, altura, anioNacimiento) {//método especial que se ejecuta acuando creas una nueva persona.

//Sirve para recibir los datos que le pasas al objeto.
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioNacimiento = anioNacimiento;
        this.DNI = this.generaDNI();
    }

    // Método para mostrar generación
    mostrarGeneracion() {
        let generacion = "";
        let rasgo = "";

        if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
            generacion = "Generación Z";
            rasgo = "irreverencia";
        } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
            generacion = "Generación Y (Millennials)";
            rasgo = "Frustracion";
        } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
            generacion = "Generación X";
            rasgo = "Obsecion por el exito";
        } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
            generacion = "Baby Boom";
            rasgo = "Ambición ";
        } else if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
            generacion = "Silent Generation";
            rasgo = "Austeridad";
        } else {
            generacion = "Fuera de rango";
            rasgo = "No definido";
        }

        console.log(`${this.nombre} pertenece a la ${generacion} y su rasgo característico es: ${rasgo}`);
    }

    // Método mayor de edad
    esMayorDeEdad() {
        if (this.edad >= 18) {
            console.log(`${this.nombre} es mayor de edad`);
        } else {
            console.log(`${this.nombre} es menor de edad`);
        }
    }

    // Mostrar datos
    mostrarDatos() {
        console.log("------Datos de la persona------");
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`DNI: ${this.DNI}`);
        console.log(`Sexo: ${this.sexo}`);
        console.log(`Peso: ${this.peso} kg`);
        console.log(`Altura: ${this.altura} m`);
        console.log(`Año de nacimiento: ${this.anioNacimiento}`);
    }

    // Generar DNI
    generaDNI() {
        return Math.floor(10000000 + Math.random() * 90000000);// return Math.floor(10000000 + Math.random() * 90000000);
    }
}

//pedir datos al usuario
// 🔹 PEDIR DATOS AL USUARIO
let nombre = prompt("Ingrese su nombre:");
let edad = parseInt(prompt("Ingrese su edad:"));
let sexo = prompt("Ingrese su sexo (H/M):");
let peso = parseFloat(prompt("Ingrese su peso:"));
let altura = parseFloat(prompt("Ingrese su altura:"));
let anioNacimiento = parseInt(prompt("Ingrese su año de nacimiento:"));

// 🔹 CREAR OBJETO
const persona1 = new Persona(nombre, edad, sexo, peso, altura, anioNacimiento);


persona1.mostrarGeneracion();
persona1.esMayorDeEdad();
persona1.mostrarDatos();