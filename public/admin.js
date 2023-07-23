
// Your Code Here

async function getBookList() {

    let response = await fetch('http://localhost:3001/listBooks')
    let bookUnit = await response.json()
    console.log(bookUnit)
    bookUnit.forEach(bookAdmin)
}


function bookAdmin(book) {

    let bookEntry = document.createElement("div")
    let bookTitle = document.createTextNode(`${book.title}`)
    bookEntry.append(bookTitle)
    
    let bookInput = document.createElement("input")
    bookInput.setAttribute('type', 'number')
    bookInput.value = `${book.quantity}`
    bookEntry.append(bookInput)
   
    let submit = document.createElement("button");
    submit.setAttribute('id', 'submitButton');
    let text = document.createTextNode("Submit");
    submit.appendChild(text);

    submit.addEventListener('click', patchIt)
    async function patchIt() {
        let response = await fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                "id": book.id,
                "quantity": `${bookInput.value}`
            })
        });

        await response.json()
        alert(`${book.quantity}`)
    }
    bookEntry.append(submit)

    document.body.append(bookEntry)

}

getBookList()