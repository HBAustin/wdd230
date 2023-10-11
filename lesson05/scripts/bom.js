const input = document.querySelector('.user')
const button = document.querySelector('#button')
const list = document.querySelector('.list')

button.addEventListener("click", () => {
    myBook = input.value;
    input.value = "";

    let book = document.createElement('li')
    let text = document.createElement('span')
    let button = document.createElement('button')

    book.appendChild(text);
    text.textContent = myBook;
    book.appendChild(button);
    button.textContent = "X";
    list.appendChild(book)

    button.addEventListener('click', () => {
        list.removeChild(book)
    });
    
    input.focus();
})