/*1- Crea un objeto llamado auto que tenga algunas características como el 
color, marca, modelo y si está encendido o apagado. Crea los métodos 
 necesarios para permitir encender y apagar el auto.
Output:

objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó */

// Crear el objeto auto
const auto = {
    //propiedades
    color: "gris oscuro",
    marca: "Ford",
    modelo: "Focus",
    encendido: false,
//metodos
    encender: function() {
        this.encendido = true;
        document.getElementById("pantalla").innerHTML += "auto encendido";
    },

    apagar: function() {
        this.encendido = false;
        document.getElementById("pantalla").innerHTML += "<br>el auto se apagò";
    }
};

// Uso de los métodos
auto.encender();
auto.apagar();

