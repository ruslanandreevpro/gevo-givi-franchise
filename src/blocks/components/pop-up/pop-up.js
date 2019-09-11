// Get the modal
let modal1 = document.getElementById("modal");

// Get the button that opens the modal
let btn1 = document.getElementById("download_btn");
let btn2 = document.getElementById("reservation_btn");
let btn3 = document.getElementById("calculator_btn");

// Get the <span> element that closes the modal
let span1 = document.getElementsByClassName("modal-close")[0];

// When the user clicks on the button, open the modal
btn1.onclick = () => modal1.style.display = "block";
btn2.onclick = () => modal1.style.display = "block";
btn3.onclick = () => modal1.style.display = "block";

// When the user clicks on <span> (x), close the modal
span1.onclick = () => modal1.style.display = "none";

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", event => {
    if (event.target === modal1) {
        modal1.style.display = "none";
    }
});