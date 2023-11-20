const myLibrary = [];

function Book(title, author, pages, genre, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.genre = genre,
    this.read = read
}

Book.prototype.addBookToLibary = function() {
    myLibrary.push(this)
}

function addDefaultBooks()
{
    let defaultOne = new Book('A Tale of Two Cities', 'Charles Dickens', 448, 'Historical Fiction', false);
    let defaultTwo = new Book('To Kill a Mockingbird', 'Harper Lee', 281, 'Southern Gothic', true);
    let defaultThree = new Book('Death of a Salesman', 'Arthur Miller', 281, 'Drama', true);
    defaultOne.addBookToLibary();
    defaultTwo.addBookToLibary();
    defaultThree.addBookToLibary();
}

let library = document.querySelector('.library');

document.querySelector('button').addEventListener('click', () =>{
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let genre = document.querySelector('#genre').value;
    let read = document.querySelector('#read').checked;
    let newBook = new Book(title, author, pages, genre, read);
    newBook.addBookToLibary();
})

function renderLibrary() {
    myLibrary.forEach(Book => {
        let card = document.createElement('div.card')
        for (key in Book) {
            if (Book.hasOwnProperty(key)) {
                let heading = document.createElement('h2');
                heading.textContent = key;
                let info = document.createElement('p');
                info.textContent = Book[key];
                let row = document.createElement('div.row')
                row.appendChild(heading);
                row.appendChild(info);
                card.appendChild(row);
            }
        }
        library.appendChild(card);
    });
    
}



addDefaultBooks()

let openFormButton = document.querySelector('#open-form');
openFormButton.addEventListener('click', ()=> {
let form = document.querySelector('dialog');
form.setAttribute('open', '');
})