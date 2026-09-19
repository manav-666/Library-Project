const stat_card = document.querySelectorAll("stat-card");

//Sidebar Elements
const menuItems = document.querySelectorAll("nav li");
const menuToggle = document.querySelector("#menuToggle");
const page = document.querySelectorAll(".page");
const sidebar = document.querySelector(".sidebar");

menuToggle.addEventListener("click",()=>{
    sidebar.classList.toggle("add");
})


//Dashboard Elements
const total_books = document.getElementById("totalBooks");
const total_members = document.getElementById("issuedBooks");
const total_issued_books = document.getElementById("totalMembers");
const total_Fines = document.getElementById("totalFine");

// console.log(total_books, total_members, total_issued_books, total_Fines);


// Section Element Selection
const mainSection = document.querySelectorAll("section");

//Select Page Title
const pageTitle = document.querySelector("#pageTitle");

total_books.innerText = 100;
total_members.innerText = 50;
total_issued_books.innerText = 20;
total_Fines.innerText = 500;

//console.log(menuItems);

page.forEach((ele) => {
    //console.dir(ele)
})
menuItems.forEach((item) => {

    item.addEventListener("click", (ele) => {
        menuItems.forEach((li) => {
            li.classList.remove("active");
        });

        item.classList.add("active");
        pageTitle.textContent = `${item.childNodes[2].previousSibling.innerText}`

    });

});

//Pages
const dashboardPage = document.querySelector("#dashboardPage");
const membersPage = document.querySelector("#membersPage");
const booksPage = document.querySelector("#booksPage");



//Side bar Buttons:
const dashboardBtn = document.querySelector("#dashboardBtn");
const booksBtn = document.querySelector("#booksBtn");
const membersBtn = document.querySelector("#membersBtn");
const issueBtn = document.querySelector("#issueBtn");
const returnBtn = document.querySelector("#returnBtn");
const reservationBtn = document.querySelector("#reservationBtn");
const reportsBtn = document.querySelector("#reportsBtn");
const settingsBtn = document.querySelector("#settingsBtn");



//Code for going from one page to another page
dashboardBtn.addEventListener("click", () => {
    page.forEach((ele) => {
        ele.classList.add("hidden");
    });
    dashboardPage.classList.remove("hidden");
});

booksBtn.addEventListener("click", () => {
    page.forEach((ele) => {
        ele.classList.add("hidden");
    });
    booksPage.classList.remove("hidden");
});

membersBtn.addEventListener("click", () => {
    page.forEach((ele) => {
        ele.classList.add("hidden");
    });
    membersPage.classList.remove("hidden");
});

// issueBtn.addEventListener("click", () => {
//     page.forEach((ele) => {
//         ele.classList.add("hidden");
//     });
//     issuePage.classList.remove("hidden");
// });

// returnBtn.addEventListener("click", () => {
//     page.forEach((ele) => {
//         ele.classList.add("hidden");
//     });
//     returnPage.classList.remove("hidden");
// });

// reservationBtn.addEventListener("click", () => {
//     page.forEach((ele) => {
//         ele.classList.add("hidden");
//     });
//     reservationPage.classList.remove("hidden");
// });

// reportsBtn.addEventListener("click", () => {
//     page.forEach((ele) => {
//         ele.classList.add("hidden");
//     });
//     reportsPage.classList.remove("hidden");
// });

// settingsBtn.addEventListener("click", () => {
//     page.forEach((ele) => {
//         ele.classList.add("hidden");
//     });
//     settingsPage.classList.remove("hidden");
// });








