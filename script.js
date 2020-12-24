window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;


function myFunction() {
    var items = navbar.getElementsByTagName("a");
    if (window.pageYOffset >= sticky && window.innerWidth > 600)  {
        navbar.classList.add("sticky");
        for (var i = 0; i < items.length; i++) {
            items[i].style.fontSize = "22px";
        }
    } else {
        navbar.classList.remove("sticky");
        for (var i = 0; i < items.length; i++) {
            items[i].style.fontSize = "30px";
        }
    }
   

       

        
       

    
}
/*text slide show */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}