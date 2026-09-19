import * as toast from './toast.js';

const delModal = document.querySelector("#deleteModal");
const cancelDel = document.querySelector("#cancelDelete")
const delBtn = document.querySelectorAll(".bookpage-delete-btn");
const confirmDelBtn = document.querySelector("#confirmDelete")

//All rows delete button
delBtn.forEach((ele)=>{
    ele.addEventListener("click",()=>{
        delModal.classList.remove("hidden");
        delModal.classList.add("open");
    });
});


//Delete modal cancel Button
cancelDel.addEventListener("click",()=>{
    delModal.classList.add("hidden");
    delModal.classList.remove("open");
    //toast.cancelDel();
    toast.showToastMessage("warning","Deletion Cancelled","The Book was not deleted.");
});

//Delete modal Delete confirm Button
confirmDelBtn.addEventListener("click",()=>{
    delModal.classList.add("hidden");
    delModal.classList.remove("open");
    //toast.confirmDel();
    toast.showToastMessage("success","Book Deleted","The book has deleted successfully.")
})