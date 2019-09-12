let sidenav = document.getElementById("sidenav");

let openSidenav = document.getElementById("openSidenav");

let closeSidenav = document.getElementsByClassName("sidenav__close")[0];

openSidenav.onclick = () => {
    if (window.screen.width >= 576) {
        sidenav.style.width = "375px";
    } else {
        sidenav.style.width = "100%";
    }
}

closeSidenav.onclick = () => sidenav.style.width = "0";