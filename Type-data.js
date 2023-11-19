const umur = 17;
console.log("type data umur adalah:",typeof umur,umur);

let namaBuah = "Pepaya";
namaBuah = "Anggur"
console.log("type data nama buah adalah:",typeof namaBuah,namaBuah);

var hoax = true;
hoax = false
console.log("type data hoax adalah",typeof hoax,hoax);

var array = [];
array = "**"
console.log("type data array adalah",typeof array,array);

var varBaru = false;
console.log("type data baru",typeof varBaru,varBaru);

var NamaObject = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    genres: ['Fiction', 'Classic'],
    details: {
      pages: 180,
      publisher: 'Charles Scribner\'s Sons'
    },
    isBestseller: true,
};

console.log(NamaObject.title); // Output: 'John'
console.log(NamaObject.author); // Output: 30
console.log(NamaObject.details.pages); // Output: 30
console.log(NamaObject.details.publisher); // Output: 30
console.log(NamaObject.isBestseller); // Output: 30


