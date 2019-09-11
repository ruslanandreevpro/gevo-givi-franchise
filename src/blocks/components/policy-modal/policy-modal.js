// Get the modal
let modal2 = document.getElementById("policy-modal");

// Get the button that opens the modal
let btn4 = document.getElementById("policy_btn");

// Get the <span> element that closes the modal
let span2 = document.getElementsByClassName("policy-modal-close")[0];

// When the user clicks on the button, open the modal
btn4.onclick = event => {
    event.preventDefault();
    modal2.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span2.onclick = () => modal2.style.display = "none";

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", event => {
    if (event.target === modal2) {
        modal2.style.display = "none";
    }
});