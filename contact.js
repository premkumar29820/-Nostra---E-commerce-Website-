// selecting Side Navbar, Menuicon

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav =document.getElementById("closenav")

menuicon.addEventListener( "click", function(){
    sidenav.style.right="0%"
}

)

closenav.addEventListener("click", function(){
    sidenav.style.right="-60%"
})

//Scroll Topbtn
//Scroll Topbtn

var scrollBtn = document.getElementById("scrollTopBtn");

// Show button when scrolling
window.onscroll = function () {

    if (document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }

};

// Scroll to top when clicked
scrollBtn.onclick = function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};