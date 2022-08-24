class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = [];
      this.mascotas = [];
    }
    getFullName() {
      return `${this.nombre} ${this.apellido}`;
    }
    addMascota(mascota) {
      this.mascotas.push(mascota);
    }
    countMascotas() {
      return this.mascotas.length;
    }
    addBook(nombre, autor) {
      this.libros.push({ nombre, autor });
    }
    getBooks() {
      return this.libros.map((libro) => `${libro.nombre} `);
    }
  }
  
  const user = new Usuario("Lautaro", "Perez", [], []);
  
  const user2 = new Usuario("Matias", "Perez", [], []);
  
  console.log(user.getFullName());
  user.addMascota("pez");
  console.log(user.countMascotas());
  user.addBook("El señor de los Anillos", "J.R.R Tolkien");
  console.log(user.getBooks());
  
  console.log(user2.getFullName());
  user2.addMascota("Nemo");
  console.log(user.mascotas);
  console.log(user2.countMascotas());
  user2.addBook("El señor de los Anillos", "J.R.R Tolkien");
  user2.addBook("Cien años de soledad", "Garcia Marquez");
  console.log(user2.getBooks());
