let togglebtn = document.getElementById("toggle");
let containerright = document.getElementById("r-container");
let sidebar = document.getElementById("nav-bar");
let btmclk = document.getElementById("btm-clk");
togglebtn.addEventListener("click", function () {
    containerright.classList.toggle("containeropen");
    sidebar.classList.toggle("sidebarOpen");
});
btmclk.addEventListener("click", function () {
    window.location.href = "#about";
});

// Link Openeing Js Code

let yktech = document.getElementById("yktech");
yktech.addEventListener("click", function () {
    window.location.href = "https://shorturl.at/tHMR8";
});
let ybec = document.getElementById("ybec");
ybec.addEventListener("click", function () {
    window.location.href = "https://shorturl.at/gpKS2";
});
let digilab = document.getElementById("digilab");
digilab.addEventListener("click", function () {
    window.location.href = "#home";
});
let lclink = document.getElementById("lclink");
lclink.addEventListener("click", function () {
    window.location.href = "https://shorturl.at/pwxRV";
});
let sbjlink = document.getElementById("sbjlink");
sbjlink.addEventListener("click", function () {
    window.location.href = "https://shorturl.at/cowK8";
});
let hulk = document.getElementById("hulk");
hulk.addEventListener("click", function () {
    window.location.href = "https://shorturl.at/DNU37";
});
