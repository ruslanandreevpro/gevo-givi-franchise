import disableScroll from "disable-scroll";

let sidenav = document.getElementById("sidenav");

let openSidenav = document.getElementById("openSidenav");

let closeSidenav = document.getElementsByClassName("sidenav__close")[0];

const links = document.querySelectorAll(".link");

openSidenav.onclick = () => {
    if (window.screen.width >= 576) {
        sidenav.style.width = "375px";
    } else {
        sidenav.style.width = "100%";
    }
    disableScroll.on();
    sidenav.classList.add("open");
};

closeSidenav.onclick = () => {
    sidenav.style.width = "0";
    disableScroll.off();
    sidenav.classList.remove("open");
};

links.forEach(each => (
    each.onclick = () => {
        if(sidenav.classList.contains("open")) {
            sidenav.style.width = "0";
            disableScroll.off();
            sidenav.classList.remove("open");
        }
    }
));