let btn = document.querySelector(".hi-trigger");
let sidebar = document.querySelector(".sidebar");

btn.onclick = function() {
    sidebar.classList.toggle("active");
}

var sidenav = document.querySelectorAll(".sidenav");

for (var i=0; i < sidenav.length; i++) {
    sidenav[i].onclick = function() {
        sidebar.classList.remove("active");
    };
}

