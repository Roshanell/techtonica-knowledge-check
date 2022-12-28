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
