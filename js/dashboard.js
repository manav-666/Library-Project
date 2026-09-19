//Selection of Welcome Banner button Add new Book
const quickAddBookBtn = document.querySelector("#quickAddBook");

//selction of date of today
const currentDate = document.querySelector("#currentDate");
const today = new Date();

currentDate.textContent = `${today.toLocaleDateString('en-GB', { day: 'numeric', year: 'numeric', month: 'long' })}`


//Selection of Quick Action Buttons
const quickActionBtns = document.querySelectorAll(".quick-actions button");

quickActionBtns.forEach((btn) =>{
    btn.addEventListener("click", (ele) =>{
        ele.target.textContent = "Clicked";
    });
});

//Select Page Title
const pageTitle = document.querySelector("#pageTitle");



const body = document.querySelector("body");
const themeBtn = document.querySelector("#themeToggle")

themeBtn.addEventListener("click",() =>{
    body.classList.toggle("dark-mode");
})


