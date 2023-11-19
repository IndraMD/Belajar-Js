let fruits = ["anggur", "apel", "jeruk", "melon", "semangka"];
console.log("nama buah ini adalah:", fruits[0]);
console.log("nama buah ini adalah:", fruits[1]);
console.log("nama buah ini adalah:", fruits[2]);
console.log("nama buah ini adalah:", fruits[3]);
console.log("nama buah ini adalah:", fruits[4]);

let people = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genres: ["Fiction", "Classic"],
    details: {
      pages: 180,
      publisher: "Charles Scribner's Sons",
    },
    isBestseller: true,
  },
  {
    title: "The Great Gatsby 2",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genres: ["Fiction", "Classic"],
    details: {
      pages: 180,
      publisher: "Charles Scribner's Sons",
    },
    isBestseller: true,
    gender: {
      pria: "L",
      perempuan: "P",
    },
  },
  {
    title: "The Great Gatsby 3",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genres: ["Fiction", "Classic"],
    details: {
      pages: 180,
      publisher: "Charles Scribner's Sons",
    },
    isBestseller: true,
    gender: {
      pria: "L",
      perempuan: "P",
    },
    anak: {
      nama: ["Indra", "saka", "Wahyu"],
      adik: {
        punya: {
          1: "UNTUNG",
          2: "ARIL",
          3: "UDIN",
        },
      },
    },
  },
];
console.log("Array apa sih", people[0]);
console.log("Nama judul", people[0].title);
console.log("Nama halaman", people[0].details.pages);
console.log("Nama jenis", people[0].genres[1]);

console.log("Nama judul", people[1].title);
console.log("Nama jenis", people[1].genres[0]);
console.log("Jenis Kelamin", people[1].gender.perempuan);

console.log("Nama judul", people[2].title);

console.log("Nama ", people[2].anak.nama[2]);
console.log("Nama Adik", people[2].anak.adik.punya[1]);
console.log("Nama Adik", people[2].anak.adik.punya[3]);
console.log("Nama ", people[2].anak.nama[1]);

console.log("Total array ", people.length);
// console.log("Panggil array terakhir ", people[people.length-1]);
// console.log("Panggil array terakhir ", people[2]);

people.forEach(function(element) {
  console.log("Total semua", element.author,element.details.publisher);
});
