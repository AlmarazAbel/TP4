/*6- Crear un objeto “libro” que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.*/

// Función constructora
function Libro(isbn, titulo, autor, paginas) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;

    this.mostrarLibro = function() {
        return `<br> El libro : ${this.titulo} <br>
                ISBN :${this.isbn} <br>
                autor :${this.autor} <br>
                tiene páginas: ${this.paginas}<br>-----------------`;
    };
}

// Crear 
const libro1 = new Libro("111", "JavaScript Básico", "Juan Pérez", 150);
const libro2 = new Libro("222", "Programación Avanzada", "Ana Gómez", 300);


let pantalla = document.getElementById("pantalla");

// Mostrar 
pantalla.innerHTML += libro1.mostrarLibro();
pantalla.innerHTML += libro2.mostrarLibro();

// Comparar pag.
if (libro1.paginas > libro2.paginas) {
    pantalla.innerHTML += `<br>El libro con más páginas es: ${libro1.titulo}`;
} else if (libro2.paginas > libro1.paginas) {
    pantalla.innerHTML += `<br>El libro con más páginas es: ${libro2.titulo}`;
} else {
    pantalla.innerHTML += "<br>Ambos libros tienen la misma cantidad de páginas";
}
