const images = document.querySelectorAll(".image");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

let currentIndex = 0;
let isAnimating = false;

function updateCarousel(newIndex) {

    if (isAnimating) return;

    isAnimating = true;

    currentIndex = (newIndex + images.length) % images.length;

    images.forEach((image, i) => {

        const offset = (i - currentIndex + images.length) % images.length;

        // Reset classes
        image.className = "image";

        if (offset === 0) {
            image.classList.add("center");
        }
        else if (offset === 1) {
            image.classList.add("right-1");
        }
        else if (offset === 2) {
            image.classList.add("right-2");
        }
        else if (offset === images.length - 1) {
            image.classList.add("left-1");
        }
        else if (offset === images.length - 2) {
            image.classList.add("left-2");
        }
        else {
            image.classList.add("hidden");
        }

    });

    setTimeout(() => {
        isAnimating = false;
    }, 800);

}

// Left button
leftArrow.addEventListener("click", () => {
    updateCarousel(currentIndex - 1);
});

// Right button
rightArrow.addEventListener("click", () => {
    updateCarousel(currentIndex + 1);
});

// Click on image
images.forEach((image, i) => {

    image.addEventListener("click", () => {
        updateCarousel(i);
    });

});

// Keyboard
document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowLeft") {
        updateCarousel(currentIndex - 1);
    }

    if (e.key === "ArrowRight") {
        updateCarousel(currentIndex + 1);
    }

});

// Mobile Swipe
let touchStartX = 0;

document.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {

    const diff = touchStartX - e.changedTouches[0].screenX;

    if (Math.abs(diff) > 50) {

        if (diff > 0) {
            updateCarousel(currentIndex + 1);
        } else {
            updateCarousel(currentIndex - 1);
        }

    }

});

// Initial load
updateCarousel(0);


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