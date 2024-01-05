let togglebtn = document.getElementById("toggle");
let containerright = document.getElementById("r-container");
let sidebar = document.getElementById("nav-bar");
togglebtn.addEventListener("click", function () {
    containerright.classList.toggle("containeropen");
    sidebar.classList.toggle("sidebarOpen");
});