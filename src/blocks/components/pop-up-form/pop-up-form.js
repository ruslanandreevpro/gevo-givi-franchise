import IMask from "imask";
import validator from "validator";

let isFormValid = false;
let isPhoneValid = false;
let isEmailValid = false;
let isNameValid = false;
let isPolicyCheck = true;

let policyCheck = document.getElementById("policy-check");

let phoneMask = IMask(
    document.getElementById("popup-phone"), {
        mask: "+{7}(000)000-00-00"
    }
);

let emailMask = IMask(
    document.getElementById("popup-email"), {
        mask: /^\S*@?\S*$/
    }
);

document.getElementById("popup-name").addEventListener("keyup", event => {
    isNameValid = validator.isLength(event.target.value, {min: 3}) && validator.isAlpha(event.target.value.replace(/\s/g,""), ["ru-RU"]) || validator.isAlpha(event.target.value.replace(/\s/g,""), ["en-US"]);
    isFormValid = isNameValid && isPhoneValid && isEmailValid && isPolicyCheck;
    document.getElementById("popup_btn").disabled = !isFormValid;
});

document.getElementById("popup-phone").addEventListener("focus", () => phoneMask.updateOptions({
        lazy: false
    })
);

document.getElementById("popup-phone").addEventListener("keyup", event => {
    isPhoneValid = validator.isLength(event.target.value, {min: 16, max: 16});
    isFormValid = isNameValid && isPhoneValid && isEmailValid && isPolicyCheck;
    document.getElementById("popup_btn").disabled = !isFormValid;
});

document.getElementById("popup-email").addEventListener("keyup", event => {
    isEmailValid = validator.isEmail(event.target.value);
    isFormValid = isNameValid && isPhoneValid && isEmailValid && isPolicyCheck;
    document.getElementById("popup_btn").disabled = !isFormValid;
});

policyCheck.addEventListener("change", event => {
    isPolicyCheck = event.target.checked;
    isFormValid = isNameValid && isPhoneValid && isEmailValid && isPolicyCheck;
    document.getElementById("popup_btn").disabled = !isFormValid;
});

document.getElementById("popup_btn").addEventListener("click", event => {
    event.preventDefault();
    document.getElementById("popup_form").submit();
    document.getElementById("popup-name").value = "";
    document.getElementById("popup-phone").value = "";
    document.getElementById("popup-email").value = "";
    document.getElementById("popup_btn").disabled = true;
});