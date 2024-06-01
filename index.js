document.querySelector(".menuIcon a").addEventListener("click", openMenu);
document.querySelector(".closebtn").addEventListener("click", closeMenu)

function openMenu(){
    document.getElementById("mySidenav").style.width = "250px";
}

function closeMenu(){
    document.getElementById("mySidenav").style.width = "0px";
}