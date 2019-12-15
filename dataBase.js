var readline = require('readline-sync');
var book = [
    { id: 1, name: 'Truyen1', content: 'xyz', namXb: '03/06/1997' },
    { id: 2, name: 'Truyen2', content: 'xyz', namXb: '03/06/1997' },
    { id: 3, name: 'Truyen3', content: 'xyz', namXb: '03/06/1997' },
    { id: 4, name: 'Truyen4', content: 'xyz', namXb: '03/06/1997' },
    { id: 5, name: 'Truyen5', content: 'xyz', namXb: '03/06/1997' },
    { id: 6, name: 'Truyen6', content: 'xyz', namXb: '03/06/1997' }
];
var borrowers = [
    { id: 1, name: 'Khoa', dateBorrow: '12/03/2019', book: [1, 3] },
    { id: 2, name: 'Huynh', dateBorrow: '12/12/2019', book: [1, 3] },
    { id: 3, name: 'Truong', dateBorrow: '12/19/2019', book: [2, 3] },
    { id: 4, name: 'Cong', dateBorrow: '12/22/2019', book: [2, 3] },
    { id: 5, name: 'Nigga', dateBorrow: '12/03/2019', book: [2, 3] },
    { id: 6, name: 'Nhat', dateBorrow: '12/03/2019', book: [4, 3] },
    { id: 7, name: 'Dang', dateBorrow: '03/12/2019', book: [4, 2] }
];
function findBook() {
    var nameBook = readline.question('Name of book: ');
    var bookObj = book.find((x) => {
        return x.name === nameBook;
    });
    return 'content:' + bookObj.content;
}
function findLate(){
    var now = new Date();
    var late = borrowers.filter(x=>{
        var day = new Date(x.dateBorrow);
        return now.getDate() > day.getDate();
    });
    return late;
}
function bookBorrowed() {
    var nameBorrow = readline.question('Name of borrower: ');
    var filterBorrows = borrowers.find((x) => {
        return x.name === nameBorrow;
    });
    var arr = [];
    if (!filterBorrows) {
        return 'The name was wrong!!!';
    } else {
        for (var i = 0; i < filterBorrows.book.length; i++) {
            arr[i] = book[i];
        }
    }
    return arr;
}
function chosingOne() {
    var option = readline.question('Chose your option by press number of option above:');
    switch (option) {
        case '1': console.log(bookBorrowed()); chosingOne(); break;
        case '2': console.log(findBook()); chosingOne(); break;
        case '3': console.log(findLate()); chosingOne(); break;
        default: console.log('U chosing wrong option or option not exist in the menu');
    }
}
function main() {
    console.log("Book:\n")
    for (var values of book) {
        console.log('name of book: ' + values.name + "\n");
    }
    console.log("Borrower:\n");
    for (var values of borrowers) {
        console.log("name of borrower: " + values.name + ",\n");
    }
    console.log('*---------------------Menu-----------------------*');
    console.log('Option 1: Find the book by type borrower name.');
    console.log('Option 2: Find the book.');
    console.log('Option 3: Find person who is late for return the book.');
    console.log('want to exit? press any key other option number to exit.');
    console.log('*------------------------------------------------*');
    chosingOne();
}
main();