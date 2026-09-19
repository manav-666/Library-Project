import * as toast from './toast.js';

//Selection of page header buttons
const importPageBtn = document.querySelector("#importBooksBtn");
const exportPageBtn = document.querySelector("#exportBooksBtn");
const bookPageAdder = document.querySelector("#addBookBtn");


const headerRight = document.querySelector(".hearder-right");

const books_toolbar = document.querySelectorAll(".books-toolbar select");

const books_Input_toolbar = document.querySelector("#bookSearch");

const book_stats = document.querySelectorAll(".books-stats article h3");

//Get the search bar input text
books_Input_toolbar.addEventListener("input", (inp) => {
    console.log(inp.target.value);
});


//books all select component value get.
books_toolbar.forEach((ele) => {
    ele.addEventListener("change", (val) => {
        console.log(ele.value)
    });
});

//giving the value to all card.
const totalbooks = 10;
const totalissued = 20;
const totalmembers = 3;
const totalfine = 102;

const values = [
    `${totalbooks}`,
    `${totalissued}`,
    `${totalmembers}`,
    `${totalfine}`,
]
//change the value of the card
book_stats.forEach((element, index) => {
    element.textContent = values[index];
});


// Drawer display:

const addBookBtn = document.querySelector("#addBookBtn");
const openDrawer = document.querySelector("#bookDrawer");
const closeDrawer = document.querySelector("#closeDrawer");
const cancelBook = document.querySelector("#cancelBook");
//const addBookCancel = document.querySelector("#addBookCancel")
const addBookCancel = document.querySelector(".addBookCancel");

const drawerTitle = document.querySelector("#drawerTitle");

//BooksDetailsDrawer Selection 
const booksDetailsDrawer = document.querySelector("#bookDetailsDrawer");
const closeDetailsDrawer = document.querySelector("#closeDetailsDrawer");
const booksRowDetails = document.querySelectorAll(".book-row");
const saveBookBtn = document.querySelector("#saveBook");

//When the user click on Add Book Button.
addBookBtn.addEventListener("click", () => {
    openDrawer.classList.remove("hidden");
    openDrawer.classList.add("open");
    drawerTitle.textContent = "Add New Book";
});

//When the user click on [X] button.
closeDrawer.addEventListener("click", () => {
    openDrawer.classList.remove("open");
    openDrawer.classList.add("hidden");
});

//When the user click on cancel button.
cancelBook.addEventListener("click", () => {
    openDrawer.classList.remove("open");
    openDrawer.classList.add("hidden");
    //toast.cancelBook();
    if (drawerTitle.textContent === "Edit Book Details") {
        toast.showToastMessage("warning", "Edit Cancelled", "Books changes were not saved.")
    }
    // }else if(drawerTitle.value === "Add New Book"){
    //     toast.showToastMessage("warning","Action Cancelled","Book Creation has been cancelled.");
    // }
    else {
        toast.showToastMessage("warning", "Action Cancelled", "Book Creation has been cancelled.");
    }

});

//When the user click on save button.
saveBookBtn.addEventListener("click", () => {
    openDrawer.classList.remove("open");
    openDrawer.classList.add("hidden");
    //toast.saveBook();
    toast.showToastMessage("warning", "New Book Added", "The book has been added successfully.")
});

// addBookCancel.addEventListener("click",()=>{
//     openDrawer.classList.remove("open");
//     openDrawer.classList.add("hidden");
//     //toast.addBookCancel();
//     toast.showToastMessage("warning","Action Cancelled","Book Creation has been cancelled.")
// })

//When user click on it book details close.
closeDetailsDrawer.addEventListener("click", () => {
    booksDetailsDrawer.classList.add("hidden");
    booksDetailsDrawer.classList.remove("add");
})


const viewBtn = document.querySelectorAll(".bookpage-view-btn");
const editBtn = document.querySelectorAll(".bookpage-edit-btn");
const delBtn = document.querySelectorAll(".bookpage-delete-btn");

viewBtn.forEach((ele) => {
    ele.addEventListener("click", (value) => {
        booksDetailsDrawer.classList.add("open");
        booksDetailsDrawer.classList.remove("hidden");
    })
})


editBtn.forEach((ele) => {
    ele.addEventListener("click", () => {
        openDrawer.classList.remove("hidden");
        openDrawer.classList.add("open");
        drawerTitle.textContent = "Edit Book Details";
    })
});

//Open the Delete modal:
const delModal = document.querySelector("#deleteModal");

delBtn.forEach((ele) => {
    ele.addEventListener("click", () => {
        delModal.classList.remove("hidden");
        delModal.classList.add("open");
    })
});



//Add Book Form
const bookForm = document.querySelector("#bookForm");

const bookAddFromInputs = document.querySelectorAll("#bookForm input");
const bookAddFormCategory = document.querySelector("#bookForm select");
bookForm.addEventListener("submit", (ele) => {

    ele.preventDefault();
    // console.log(bookAddFormCategory.value)
    // bookAddFromInputs.forEach((input) => {
    //     console.log(input.value);
    // });
    const coverURL = document.querySelector("#bookCover");
    const bookURL = coverURL.value.trim();
    // coverURL.addEventListener("input",(ele)=>{
    //     console.log(ele.value);
    // });

    const bookTitle = document.querySelector("#bookTitle");
    const bookTit = bookTitle.value.trim();
    // bookTitle.addEventListener("input",(ele)=>{
    //     console.log(ele.value);
    // })

    const bookAuthor = document.querySelector("#bookSubtitle");
    const bookAuth = bookAuthor.value.trim();


    const bookPublisher = document.querySelector("#bookPublisher");
    const bookPul = bookPublisher.value.trim();


    const bookISBN = document.querySelector("#bookISBN");
    const bookIS = bookISBN.value.trim();


    const bookCategory = document.querySelector("#bookCategory");
    const bookCat = bookCategory.value.trim();


    const bookShelf = document.querySelector("#bookShelf");
    const bookShe = bookShelf.value.trim();


    const bookPrice = document.querySelector("#bookPrice");
    const bookPri = bookPrice.value.trim();


    const bookCopies = document.querySelector("#bookCopies");
    const bookCop = bookCopies.value.trim();


    const bookDescription = document.querySelector("#bookDescription");
    const bookDes = bookDescription.value.trim();


    saveToLocalStorage({
        bookURL,
        bookTit,
        bookAuth,
        bookPul,
        bookIS,
        bookCat,
        bookShe,
        bookPri,
        bookCop,
        bookDes
    })

    bookForm.reset();
    showRow();
});

function saveToLocalStorage(obj) {
    if (localStorage.getItem("details") === null) {
        let Books = [];
        Books.push(obj);
        localStorage.setItem("details", JSON.stringify(Books));
    } else {
        let Books = localStorage.getItem("details");
        Books = JSON.parse(Books);
        Books.push(obj);
        localStorage.setItem("details", JSON.stringify(Books));
    }

}


function showRow() {
    let bookDetails = JSON.parse(localStorage.getItem("details"));

    bookDetails.forEach(function (detail) {

        const bookRow = document.createElement("div");
        bookRow.classList.add("book-row");
        
        const bookPhoto = document.createElement("div");
        bookPhoto.classList.add("book-photo");

        const bookImg = document.createElement("img");
        bookImg.src = detail.bookURL;
        bookImg.alt = "Cover";

        const 

    })
}










