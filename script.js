const myLibrary = [];

function Book(title, author, pages, read, index) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = index;
    myLibrary.push(this);
}

myLibrary[0] = new Book ('Welcome to your library', '03tb', 142, true, 0);
myLibrary[1] = new Book ('Game of Thrones', 'George R.R. Martin', 782, false, 0);
displayBook(myLibrary);

// Add book button

const addBook = document.querySelector('.addBook');
const bookName = document.querySelector('#bookName');
const bookAuthor = document.querySelector('#bookAuthor');
const bookPages = document.querySelector('#bookPages');
const hasRead = document.querySelector('#hasRead');

addBook.addEventListener('click', (event) => {
    event.preventDefault();
    if (hasRead.checked === true) {
        new Book(bookName.value, bookAuthor.value, bookPages.value, true, myLibrary.length)
    } else {
        new Book(bookName.value, bookAuthor.value,  bookPages.value, false, myLibrary.length)
    }
    bookName.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
    clearRadio();

    console.log(myLibrary);
    displayBook(myLibrary);
})

function clearRadio() {
    let radio = document.getElementById("hasRead");
    radio.checked = false;
}


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
        
        const numPages = document.createElement('h3');
        numPages.className = 'number-pages';

        const addTitle = document.createElement('h3');


        const readStatus = document.createElement('h3');
        readStatus.className = 'read-status';

        const buttonDiv = document.createElement('div');
        buttonDiv.className = 'button-div';

        const innerWrapper = document.createElement('div');
        innerWrapper.className = 'inner-wrapper';

        const readBookBtn = document.createElement('button');
        readBookBtn.className = 'read-book';
        readBookBtn.textContent = 'Read / Unread';

        const removeBook = document.createElement('button');
        removeBook.className = 'remove-book';
        removeBook.textContent = 'Remove book'

        bookName.textContent = `${myLibrary[i].title}`;
        authorName.textContent = `By: ${myLibrary[i].author}`;
        numPages.textContent = `Pages: ${myLibrary[i].pages}`;

        if (myLibrary[i].read != false) {
            readBookBtn.textContent = 'Set to unread';
            readStatus.textContent = 'Read'
            readStatus.setAttribute('style', 'color: green')
        } else {
            readBookBtn.textContent = 'Set to read';
            readStatus.textContent = 'Not read';
            readStatus.setAttribute('style', 'color: red')
        }

        bookWrapper.appendChild(bookContainer);
        innerWrapper.appendChild(bookName);
        innerWrapper.appendChild(authorName);
        innerWrapper.appendChild(numPages);
        innerWrapper.appendChild(readStatus);

        buttonDiv.appendChild(readBookBtn);
        buttonDiv.appendChild(removeBook)
        bookContainer.appendChild(innerWrapper);
        bookContainer.appendChild(buttonDiv);

        removeBook.addEventListener('click', () => removeBookHandler(i));

        bookWrapper.appendChild(bookContainer);

        readBookBtn.addEventListener('click', () => {
            if (myLibrary[i].read) {
                myLibrary[i].read = false;
                console.log('button pressed');
                console.log(myLibrary[i].read);
                displayBook(myLibrary); 
            } else {
                myLibrary[i].read = true;
                console.log('button unpressed');
                displayBook(myLibrary); 
            }
        });
        
        
    }

}

function removeBookHandler(index) {
    console.log('Remove book button pressed for book at index', index);
    myLibrary.splice(index, 1);
    console.log(myLibrary);
    displayBook(myLibrary); 
}

