// Product Search Functionality
var productcontainer=document.querySelector(".collection-container")
var search=document.querySelector(".navbar-s2 input")
var productlist = productcontainer.querySelectorAll("div")
var notFound = document.getElementById("not-found");
 
search.addEventListener("keyup",function(event){
    var enteredvalue =event.target.value.toUpperCase()
     var matchCount = 0;
    for(count=0; count<productlist.length; count=count+1)
    {
        var productname = productlist[count].querySelector("p").textContent

        if (productname.toUpperCase().indexOf(enteredvalue)<0){
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
             matchCount++;

        }
    }

    if(matchCount === 0){
        notFound.style.display = "block";
    }
    else{
        notFound.style.display = "none";
    }
})

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



// Cart-Count

var quickAddBtns = document.querySelectorAll(".add");

var cartCount = document.getElementById("count");

var count = 0;

quickAddBtns.forEach(function(button){

    button.addEventListener("click", function(){

        count++;

        cartCount.textContent = count;
        cartCount.style.display="block";

    });

});
 var quickAddBtns = document.querySelectorAll(".sub");

var cartCount = document.getElementById("count");

var count = 0;

quickAddBtns.forEach(function(button){

    button.addEventListener("click", function(){

    if(count > 0){

        count--;

        cartCount.textContent = count;
    }
        

    });

});

// price slider

var slider = document.getElementById("priceRange");

var priceValue = document.getElementById("priceValue");

var products = document.querySelectorAll(".collection-card");

slider.addEventListener("input", function(){

    var maxPrice = Number(slider.value);

    priceValue.textContent = maxPrice;

    products.forEach(function(product){

        var productPrice = Number(product.dataset.price);

        if(productPrice <= maxPrice){

            product.style.display = "";

        }
        else{

            product.style.display = "none";

        }

    });

});


//Checkbox

var checkboxes = document.querySelectorAll(".category input[type='checkbox']");
var products = document.querySelectorAll(".collection-card");

checkboxes.forEach(function(checkbox){

    checkbox.addEventListener("change", filterProducts);

});

function filterProducts(){

    var selectedCategories = [];

    checkboxes.forEach(function(checkbox){

        if(checkbox.checked){

            selectedCategories.push(checkbox.value);

        }

    });

    products.forEach(function(product){

        var category = product.dataset.category;

        if(selectedCategories.length == 0){

            product.style.display = "";

        }

        else if(selectedCategories.includes(category)){

            product.style.display = "";

        }

        else{

            product.style.display = "none";

        }

    });

}

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

