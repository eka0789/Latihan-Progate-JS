class Animal {
  constructor(nama, usia) {
    this.name = nama;
    this.age = usia;
  }
  
  greet() {
    console.log("Halo");
  }
  
  // Tambahkan method info
  info() {
    console.log(`Nama saya adalah ${this.name}`);
    console.log(`Saya berusia ${this.age} tahun`);
  }
}

const animal = new Animal("Leo", 3);
animal.greet();

// Panggil method info menggunakan constant animal
animal.info();
