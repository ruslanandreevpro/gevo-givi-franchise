// import Powerange from "abpetkov-powerange";
import wNumb from "wnumb";

let sales = 10000;
let check = 350;
let area = 100;
let income = 3500000;
let cost = 3228000;
let profit = 272000;
let salesLast = 10000;
let checkLast = 350;
let areaLast = 100;
let incomeLast = income;
let costLast = cost;
let profitLast = profit;

let salesNumber = wNumb({
    thousand: " "
});

let incomeNumber = wNumb({
    thousand: " "
});

let costNumber = wNumb({
    thousand: " "
});

let profitNumber = wNumb({
    thousand: " "
});

const salesChange = data => {
    sales = data.from_value;
    console.log(sales);
    document.getElementById("qty").innerHTML = salesNumber.to(sales);
    income = sales * check;
    document.getElementById("income").innerHTML = incomeNumber.to(income) + " руб.";
    if ((sales > salesLast) && (salesLast !== 14000)) {
        cost = costLast + 50700;
    } else if ((sales < salesLast) && (salesLast !== 10000)) {
        cost = costLast - 50700;
    }
    if ((sales === 10000) && (check === 350) && (area === 100)) {
        cost = 3228000;
    }
    if ((sales === 10000) && (check === 350) && (area === 200)) {
        cost = 3228000 + 120500;
    }
    if ((sales === 10000) && (check === 350) && (area === 350)) {
        cost = 3228000 + 180500;
    }
    if ((sales === 14000) && (check === 350)) {
        cost = 4242000;
    }
    salesLast = sales;
    costLast = cost;
    document.getElementById("cost").innerHTML = costNumber.to(cost) + " руб.";
    profit = income - cost;
    document.getElementById("profit").innerHTML = profitNumber.to(profit) + " руб.";
}

$(".sales-slider").ionRangeSlider({
    values: [
        10000,
        10200,
        10400,
        10600,
        10800,
        11000,
        11200,
        11400,
        11600,
        11800,
        12000,
        12200,
        12400,
        12600,
        12800,
        13000,
        13200,
        13400,
        13600,
        13800,
        14000
    ],
    // min: 10000,
    // max: 14000,
    // step: 200,
    hide_min_max: true,
    hide_from_to: true,
    // from_min: 10000,
    // from_max: 14000,
    // force_edges: true,
    onChange: salesChange
});

$(".check-slider").ionRangeSlider({
    min: 350,
    max: 950,
    step: 50,
    hide_min_max: true,
    hide_from_to: true,
    from_min: 350,
    from_max: 950,
    onChange: data => {
        check = data.from;
        document.getElementById("check").innerHTML = check + " руб.";
        income = sales * check;
        document.getElementById("income").innerHTML = incomeNumber.to(income) + " руб.";
        if (check > checkLast) {
            cost = cost + 370000;
        } else if ((check < checkLast) && (checkLast !== 350)) {
            cost = cost - 370000;
        }
        if ((sales === 10000) && (check === 350) && (area === 100)) {
            cost = 3228000;
        }
        if ((sales === 10000) && (check === 350) && (area === 200)) {
            cost = 3228000 + 120500;
        }
        if ((sales === 10000) && (check === 350) && (area === 350)) {
            cost = 3228000 + 180500;
        }
        if ((check === 950) && (sales === 10000)) {
            cost = 7668000;
        }
        checkLast = check;
        document.getElementById("cost").innerHTML = costNumber.to(cost) + " руб.";
        profit = income - cost;
        document.getElementById("profit").innerHTML = profitNumber.to(profit) + " руб.";
    }
});

$(".area-slider").ionRangeSlider({
    values: [100, 200, 350],
    hide_min_max: true,
    hide_from_to: true,
    onChange: data => {
        area = data.from_value;
        document.getElementById("area").innerHTML = area + " м2";
        income = sales * check;
        document.getElementById("income").innerHTML = incomeNumber.to(income) + " руб.";
        if ((area === 200) && (areaLast === 100)) {
            cost = cost + 120500;
        }
        if ((area === 350) && (areaLast === 200)) {
            cost = cost + 180500;
        }
        if ((area === 200) && (areaLast === 350)) {
            cost = cost - 180500;
        }
        if ((area === 100) && (areaLast === 200)) {
            cost = cost - 120500;
        }
        areaLast = area;
        document.getElementById("cost").innerHTML = costNumber.to(cost) + " руб.";
        profit = income - cost;
        document.getElementById("profit").innerHTML = profitNumber.to(profit) + " руб.";
    }
});
// let sales = document.querySelector(".sales-range");
// let initSales = new Powerange(sales, { min: 10000, max: 14000, start: 10000, step: 200, hideRange: true });
// let changeInputSales = document.querySelector(".sales-range");
// changeInputSales.onchange = () => {
//     document.getElementById("qty").innerHTML = changeInputSales.value;
//     let income = changeInputSales.value * changeInputCheck.value;
//     if(changeInputSales.value > salesLast) {
//         cost = cost + 50700;
//         salesLast = changeInputSales.value;
//     } else {
//         cost = cost - 50700;
//         salesLast = changeInputSales.value;
//     }
//     document.getElementById("income").innerHTML = income + " руб.";
//     document.getElementById("cost").innerHTML = cost + " руб.";
//     document.getElementById("profit").innerHTML = income - cost + " руб.";
// }
//
// let check = document.querySelector(".check-range");
// let initCheck = new Powerange(check, { min: 350, max: 950, start: 350, step: 10, hideRange: true });
// let changeInputCheck = document.querySelector(".check-range");
// changeInputCheck.onchange = () => {
//     document.getElementById("check").innerHTML = changeInputCheck.value + " руб.";
//     let income = changeInputSales.value * changeInputCheck.value;
//     if(changeInputCheck.value > checkLast) {
//         cost = cost + 73800;
//         checkLast = changeInputCheck.value;
//     } else {
//         cost = cost - 73800;
//         checkLast = changeInputCheck.value;
//     }
//     document.getElementById("income").innerHTML = income + " руб.";
//     document.getElementById("cost").innerHTML = cost + " руб.";
//     document.getElementById("profit").innerHTML = income - cost + " руб.";
// }
//
// let area = document.querySelector(".area-range");
// let initArea = new Powerange(area, { min: 100, max: 350, start: 100, step: 50, hideRange: true });
// let changeInputArea = document.querySelector(".area-range");
// changeInputArea.onchange = () => {
//     document.getElementById("area").innerHTML = changeInputArea.value + " м2";
//     if(changeInputArea.value > areaLast) {
//         cost = cost + 120500;
//         areaLast = changeInputArea.value;
//     } else {
//         cost = cost - 120500;
//         areaLast = changeInputArea.value;
//     }
//     document.getElementById("income").innerHTML = income + " руб.";
//     document.getElementById("cost").innerHTML = cost + " руб.";
//     document.getElementById("profit").innerHTML = income - cost + " руб.";
// }

document.getElementById("income").innerHTML = incomeNumber.to(income) + " руб.";
document.getElementById("cost").innerHTML = costNumber.to(cost) + " руб.";
document.getElementById("profit").innerHTML = profitNumber.to(profit) + " руб.";
