const showToast = document.querySelector("#toast");
const toastTitle = document.querySelector("#toastTitle");
const toastMessage = document.querySelector("#toastMessage");

// {
//     //This is my apporoach
// export function saveBook() {
//     showToast.classList.add("show","success")
//     toastTitle.textContent = "Book Added";
//     toastMessage.textContent = "The Book has been added successfully." 
//     setTimeout(() => {
//         showToast.classList.remove("show","success");
//     }, 1000);
// }
// export function addBookCancel(){
//     showToast.classList.add("show","warning");
//     toastTitle.textContent = "Action Cancelled";
//     toastMessage.textContent = "Book creation has been cancelled.";
//     setTimeout(() => {
//         showToast.classList.remove("show","success");
//     }, 1000);
// }

// export function cancelBook(){
//     showToast.classList.add("show","warning");
//     toastTitle.textContent = "Edit Cancelled";
//     toastMessage.textContent = "Book changes were not saved."
//     setTimeout(() => {
//         showToast.classList.remove("show","warning");
//     }, 1000);
// }

// export function confirmDel(){
//     showToast.classList.add("show","success");
//     toastTitle.textContent = "Book Deleted";
//     toastMessage.textContent = "The book has been deleted successfully."
//     setTimeout(() => {
//         showToast.classList.remove("show","success");
//     }, 1000);
// }

// export function cancelDel(){
//     showToast.classList.add("show","warning");
//     toastTitle.textContent = "Deletion Cancelled";
//     toastMessage.textContent = "The book was not deleted."
//     setTimeout(() => {
//         showToast.classList.remove("show","warning");
//     }, 1000);
// }
// }



export function showToastMessage(type,title,message){
    showToast.classList.add("show",type);

    toastTitle.textContent = title;
    toastMessage.textContent = message;
    setTimeout(() => {
        showToast.classList.remove("show",type);
    }, 5000);
}
