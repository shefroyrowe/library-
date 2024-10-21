const container = document.querySelector('#output');
const newBookButton = document.getElementById('new-book');
const dialog = document.getElementById('dialog');

const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
//read argument variable
let read = document.querySelectorAll('.read-button');

//======== is it read? form input value select ============================
const isRead = () => {
    read.forEach(input => input.addEventListener("click", (e) => {
        if (e.target.id === 'yes') {
            read = 'YES';
        } else if (e.target.id === 'no') {
            read = 'NO';
        }
    }));
};
isRead();
//======= end is it read ======================

//array to store books
const myLibrary = [];

//book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//create new book and push the new book to library array
function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

//insert books into dom
const populateDom = () => {
    //sanitizeDom - remove duplicates
    container.innerHTML = '';

    myLibrary.map((book, index) => {
        //append each new book to dom body
        container.innerHTML += `
        <div class="book-card" id="${index}">
            <h1>${book.title}</h1>
            <h3>${book.author}</h3>
            <span>Pages: ${book.pages}</span>
            <br>
            <span>Read book?: ${book.read}</span>
            <br>
            <input type="button" value="READ?" id="chane-read" onclick="changeReadStatus(${index})" />
            <input type="button" value="REMOVE" id="remove-book" onclick="removeBook(${index})" />

        </div>
    `;
    }
    );
    console.log(myLibrary);
    //clear form fields on each submit
    title.value = '';
    author.value = '';
    pages.value = '';
};

//remove book from library and dom
const removeBook = (index) => {
    myLibrary.splice(Number(index), 1);
    //call render function to append remaining books to dom
    populateDom();
}

//(change/update) book read status
const changeReadStatus = (index) => {
    if (myLibrary[Number(index)].read === 'YES') {
        myLibrary[Number(index)].read = 'NO';

        //call render function to append book with updated read status to dom
        populateDom();
    } else if (myLibrary[Number(index)].read === 'NO') {
        myLibrary[Number(index)].read = 'YES';
        //call render function to append book with updated read status to dom
        populateDom();
    }
}


//event listeners===================================================== //

//show/open modal form element
newBookButton.addEventListener("click", () => {
    dialog.showModal();
});

document.querySelector('form').addEventListener("submit", (e) => {
    //prevent default form submission
    e.preventDefault();
    //call add book to library function to create and save new book using form data
    addBookToLibrary(title.value, author.value, pages.value, read);
    //call render function to append books to dom
    populateDom();
    //close modal form element (not needed for modal; 
    //only used as a fallback method)
    dialog.close();
});