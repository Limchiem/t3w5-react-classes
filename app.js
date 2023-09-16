// import book and library
// module.exports = {Book}
const {Book} = require("./Book");

// module.exports = Library
const Library = require("./Library");

// make a library
let newLibrary = new Library();

// make some books
let coolProgrammingBook = new Book("Cool JS things in 2023");
let coolPokemonBook = new Book("How to catch them all 2023");

// put books in library
newLibrary.book.push(coolPokemonBook, coolProgrammingBook);

console.log(newLibrary.book);

let {Media} = require("./Media");
console.log(Media.count);