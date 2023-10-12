const input = document.querySelector('#favchap')
const button = document.querySelector('#button')
const list = document.querySelector('.list')

button.addEventListener("click", () => {

    const myBook = input.value;
    if (myBook.trim() == "") {
        alert("Please add a book and chapter before adding.");
        return
    }

    input.value = "";

    let book = document.createElement('li');
    let text = document.createElement('span');
    let removeButton = document.createElement('button');

    book.appendChild(text);
    text.textContent = myBook;
    book.appendChild(removeButton);
    removeButton.textContent = "X";
    list.appendChild(book);

    removeButton.addEventListener('click', () => {
        list.removeChild(book);
    });

    input.focus();
})