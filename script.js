const myLibrary = [];



function Book(author, title, pages, genre, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.genre = genre,
    this.read = read
}

Book.prototype.addBookToLibary = function() {
    myLibrary.push(this)
}

let defaultOne = new Book('A Tale of Two Cities', 'Charles Dickens', 448, 'Historical Fiction', false);
let defaultTwo = new Book('To Kill a Mockingbird', 'Harper Lee', 281, 'Southern Gothic', true);
let defaultThree = new Book('Death of a Salesman', 'Arthur Miller', 281, 'Drama', true);
defaultOne.addBookToLibary();
defaultTwo.addBookToLibary();
defaultThree.addBookToLibary();


let library = document.querySelector('.library');
    myLibrary.forEach(Book => {
        let newDiv = document.createElement('div');
        newDiv.className = 'book'
        newDiv.textContent = `${Book.author} ${Book.title} ${Book.pages} ${Book.genre} ${Book.read} `;
        library.appendChild(newDiv);
    });