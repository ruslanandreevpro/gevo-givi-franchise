let Powerange = require("abpetkov-powerange");

let sales = document.querySelector(".sales-range");
let initSales = new Powerange(sales, { min: 10000, max: 14000, start: 10000, step: 200, hideRange: true });
let changeInputSales = document.querySelector(".sales-range");
changeInputSales.onchange = () => {
    document.getElementById("qty").innerHTML = changeInputSales.value;
    document.getElementById("income").innerHTML = changeInputSales.value * changeInputCheck.value + " руб.";
}

let check = document.querySelector(".check-range");
let initCheck = new Powerange(check, { min: 350, max: 950, start: 350, step: 10, hideRange: true });
let changeInputCheck = document.querySelector(".check-range");
changeInputCheck.onchange = () => {
    document.getElementById("check").innerHTML = changeInputCheck.value + " руб.";
    document.getElementById("income").innerHTML = changeInputSales.value * changeInputCheck.value + " руб.";
}

let area = document.querySelector(".area-range");
let initArea = new Powerange(area, { min: 100, max: 350, start: 100, step: 50, hideRange: true });
let changeInputArea = document.querySelector(".area-range");
changeInputArea.onchange = () => document.getElementById("area").innerHTML = changeInputArea.value + " м2";

document.getElementById("income").innerHTML = changeInputSales.value * changeInputCheck.value + " руб.";