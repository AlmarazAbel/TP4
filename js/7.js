/*7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un
 contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se 
podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño
 por defecto (10).

Las acciones que se pueden realizar con la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no 
puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se 
ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando 
un prompt, las salidas de las operaciones seleccionadas por el usuario 
se pueden mostrar en pantalla y/o  por consola.
*/

//clase contacto
// ----- Clase contacto -----
function Contacto(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
}

// ----- clase Agenda -----
function Agenda(tamanio = 10) {
    this.contactos = [];
    this.tamanio = tamanio;

    this.aniadirContacto = function(contacto) {
        if (this.agendaLlena()) return "La agenda está llena";
        if (this.existeContacto(contacto.nombre)) return "El contacto ya existe";

        this.contactos.push(contacto);
        return "Contacto agregado";
    };

    this.existeContacto = function(nombre) {
        return this.contactos.some(c => // some:¿Hay al menos uno que cumpla esto?
            c.nombre.toLowerCase() === nombre.toLowerCase()//convierte texto a min para comparar
        );
    };

    this.listarContactos = function() {
        if (this.contactos.length === 0) return "No hay contactos";

        return this.contactos.map(c => //Recorre el array contactos y crea un nuevo array transformado.
            `Nombre: ${c.nombre} - Tel: ${c.telefono}`
        ).join("\n");
    };

    this.buscarContacto = function(nombre) {
        let c = this.contactos.find(c => //Busca el primer elemento que cumpla la condición y devuelve un objeto
            c.nombre.toLowerCase() === nombre.toLowerCase()
        );
        return c ? `Teléfono de ${c.nombre}: ${c.telefono}` : "No encontrado";
    };

    this.eliminarContacto = function(nombre) {
        let index = this.contactos.findIndex(c => //Busca la posición (índice) del contacto en el array
            c.nombre.toLowerCase() === nombre.toLowerCase()
        );

        if (index !== -1) {// pregunta si se econtro el elemento
            this.contactos.splice(index, 1);// borra el elemento posiscion index y cantidad 1
            return "Contacto eliminado";
        }
        return "No existe el contacto";
    };

    this.agendaLlena = function() {
        return this.contactos.length >= this.tamanio;
    };

    this.huecosLibres = function() {
        return this.tamanio - this.contactos.length;
    };
}

// ----- Crear agenda -----
const agenda = new Agenda();

console.log("AGENDA TELEFÓNICA");

let opcion;
let nombre;
let telefono;

// ----- Menú -----
while (opcion !== "7") {

    opcion = prompt(
        "1. Añadir contacto\n" +
        "2. Existe contacto\n" +
        "3. Listar contactos\n" +
        "4. Buscar contacto\n" +
        "5. Eliminar contacto\n" +
        "6. Huecos libres\n" +
        "7. Salir"
    );

    switch (opcion) {

        case "1":
            nombre = prompt("Nombre:");
            telefono = prompt("Teléfono:");
            let nuevo = new Contacto(nombre, telefono);
            console.log(agenda.aniadirContacto(nuevo));
            break;

        case "2":
            nombre = prompt("Nombre a buscar:");
            console.log(agenda.existeContacto(nombre) ? "Existe" : "No existe");
            break;

        case "3":
            console.log("Contactos:\n" + agenda.listarContactos());
            break;

        case "4":
            nombre = prompt("Nombre a buscar:");
            console.log(agenda.buscarContacto(nombre));
            break;

        case "5":
            nombre = prompt("Nombre a eliminar:");
            console.log(agenda.eliminarContacto(nombre));
            break;

        case "6":
            console.log("Huecos libres: " + agenda.huecosLibres());
            break;

        case "7":
            console.log("Programa finalizado");
            break;

        default:
            console.log("Opción inválida");
    }
}