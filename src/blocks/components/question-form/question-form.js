import IMask from "imask";
import validator from "validator";

let isFormValid1 = false;
let isPhoneValid1 = false;
let isEmailValid1 = false;
let isNameValid1 = false;

let phoneMask1 = IMask(
    document.getElementById("question-phone"), {
        mask: "+{7}(000)000-00-00"
    }
);

let emailMask1 = IMask(
    document.getElementById("question-email"), {
        mask: /^\S*@?\S*$/
    }
);

document.getElementById("question-name").addEventListener("keyup", event => {
    isNameValid1 = validator.isLength(event.target.value, {min: 3}) && validator.isAlpha(event.target.value);
    isFormValid1 = isNameValid1 && isPhoneValid1 && isEmailValid1;
    document.getElementById("question_btn").disabled = !isFormValid1;
});

document.getElementById("question-phone").addEventListener("keyup", event => {
    isPhoneValid1 = validator.isLength(event.target.value, {min: 16, max: 16});
    isFormValid1 = isNameValid1 && isPhoneValid1 && isEmailValid1;
    document.getElementById("question_btn").disabled = !isFormValid1;
});

document.getElementById("question-email").addEventListener("keyup", event => {
    isEmailValid1 = validator.isEmail(event.target.value);
    isFormValid1 = isNameValid1 && isPhoneValid1 && isEmailValid1;
    document.getElementById("question_btn").disabled = !isFormValid1;
});