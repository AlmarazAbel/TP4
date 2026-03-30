/**3-Escribe un programa para que permita crear objetos “rectángulos”, 
 * con las propiedades de alto y ancho, mas los métodos necesarios para
 *  modificar y mostrar sus propiedades, calcular el perímetro y el área
 */
// Crear objeto rectángulo
const rectangulo = {
    ancho: 0,
    alto: 0,

    // Método modificar
    modificar: function(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    },

    // Calcular área
    area: function() {
        return this.ancho * this.alto;
    },

    // Calcular perímetro
    perimetro: function() {
        return 2 * (this.ancho + this.alto);
    },

    // Mostrar datos
    mostrar: function() {
        return `Ancho: ${this.ancho} <br>
                Alto: ${this.alto} <br>
                Área: ${this.area()} <br>
                Perímetro: ${this.perimetro()} <br>`;
    }
};

let pantalla = document.getElementById("pantalla");

// Pedir datos con prompt
let ancho = parseFloat(prompt("Ingrese el ancho en cm:"));
let alto = parseFloat(prompt("Ingrese el alto en cm :"));

// Modificar rectángulo
rectangulo.modificar(ancho, alto);

// Mostrar resultados
pantalla.innerHTML = "<b>Datos del rectángulo:</b><br>" + rectangulo.mostrar();