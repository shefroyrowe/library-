//book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.bookInfo = () => {
            return `"${this.title}, ${this.author}, ${this.pages}, ${this.read}"`;
        }
}