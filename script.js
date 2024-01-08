const myLibrary = [];

function Book(title, author, pages, read, index) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = index;
    myLibrary.push(this);
}


// Add book button

const addBook = document.querySelector('.addBook');
const bookName = document.querySelector('#bookName');
const bookAuthor = document.querySelector('#bookAuthor');
const bookPages = document.querySelector('#bookPages');
const hasRead = document.querySelector('#hasRead');

addBook.addEventListener('click', (event) => {
    event.preventDefault();
    if (hasRead.checked === true) {
        new Book(bookName.value, bookAuthor.value, bookPages.value, 'Read', myLibrary.length)
    } else {
        new Book(bookName.value, bookAuthor.value,  bookPages.value, 'Not read', myLibrary.length)
    }
    console.log(myLibrary);
    displayBook(myLibrary);
})


// Logic to display books

function displayBook(myLibrary) {

    const bookWrapper = document.querySelector('.book-wrapper');
    bookWrapper.textContent = "";

    for (let i = 0; i < myLibrary.length; i++) {


        const bookContainer = document.createElement('div');
        bookContainer.className = 'book-container';

        const bookName = document.createElement('h2');
        bookName.className = 'book-name';

        const authorName = document.createElement('h3');
        authorName.className = 'author-name';
        
        const numPages = document.createElement('span');
        numPages.className = 'number-pages';

        const addTitle = document.createElement('h3');


        const readStatus = document.createElement('h3');
        readStatus.className = 'read-status';

        bookName.textContent = `${myLibrary[i].title}`;
        authorName.textContent = `${myLibrary[i].author}`;
        numPages.textContent = `${myLibrary[i].pages}`;
        readStatus.textContent = `${myLibrary[i].read}`;

        bookWrapper.appendChild(bookContainer);
        bookContainer.appendChild(bookName);
        bookContainer.appendChild(authorName);
        bookContainer.appendChild(numPages);
        bookContainer.appendChild(readStatus);

        const removeBook = document.createElement('button');
        removeBook.className = 'remove-book';
        removeBook.textContent = 'Remove book'
        bookContainer.appendChild(removeBook)

        removeBook.addEventListener('click', () => removeBookHandler(i));

        bookContainer.appendChild(removeBook);
        bookWrapper.appendChild(bookContainer);


    }

}

function removeBookHandler(index) {
    console.log('Remove book button pressed for book at index', index);
    myLibrary.splice(index, 1);
    console.log(myLibrary);
    displayBook(myLibrary); 
}


