// Example from Excersise

function makeBook(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function () {
		return `The ${title} by ${author} , ${pages} pages, ${read}`;
	};
}

const theHobbit = new makeBook(
	"The Hobbit",
	"J. R. R. Tolkien",
	295,
	"Not read yet"
);
const atomicHabits = new makeBook(
	"Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
	"James Clear",
	321,
	"You\ve read this book!"
);
console.log(theHobbit.info());
console.log(atomicHabits.info());

// Knowledge Check 1

function character(name, age, skill) {
	this.name = name;
	this.age = age;
	this.skill = skill;
	this.information = function () {
		return `${name} is ${age} years old and the is a ${skill}.`;
	};
}

const tj = new character("Tyron Brooks Jr", 4, "brainiac");
console.log(tj.information());

// Knowledge Check 2

// a prototype is an object that is able to access all of another's objects  methods and properties.

// Knowledge Check 3

// prototypical inheritence is a feauture in JS that is only accessible to objet and null datatypes. This allows developers
// to set an object to a value in one piece of code and easily be able to reference, reuse, and extend that object's property in another piece of
// code. As a result you do not have to rewrite code and it makes your code dry.

// Knowledge Check 4

// Do
// Use Object.Create to set a prototype of an object

// Don't
// Dont use write/delete operations unless you want work directly sith the object.

// Knowledge Check 5

// Object.Create allows you to create a new object and uses an existing object as the prototype of the new object

// Knowledge Check 6
