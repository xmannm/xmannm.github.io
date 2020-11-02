
<html lang="cs">
<head>
  <meta charset="utf-8">
  <title>Handpoke Tattoo</title>
  <link rel="stylesheet" type="text/css" href="styl.css">
  
  <style type="text/css">
  <!--
	  
* {
  box-sizing: border-box;
}

/* Position the image container (needed to position the left and right arrows) */
.container {
  position: relative;
	width: 70%;
	left: 50%;
	transform: translate(-50%, 0%);
	margin-top: 50px;
}

/* Hide the images by default */
.mySlides {
  display: none;
}

/* Add a pointer when hovering over the thumbnail images */
.cursor {
  cursor: pointer;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* Container for image text */
.caption-container {
  text-align: center;
  background-color: #222;
  padding: 2px 16px;
  color: white;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Six columns side by side */
.column {
  float: left;
  width: 16.66%;
}

/* Add a transparency effect for thumnbail images */
.demo {
  opacity: 0.6;
}

.active,
.demo:hover {
  opacity: 1;
}

	  
	  
	  //-->
  </style>
  
</head>
<body>
    <div id="stranka">
      <header>
         <div class="header"><a href="home.html"><img src="images/logo.png" alt="logo" width="180" height="90"/></a> 
		  </div>
     <h1>Handpoke Tattoo Studio</h1>
      </header>
      
<nav>      
  <div class="topnav" id="myTopnav">
  <div class="dropdown">
    <button class="dropbtn">GALERIE
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <i class="fa fa-caret-down"></i>
      
    </button>
    <div class="dropdown-content">
      <a href="tattoos.html">TETOVÁNÍ</a>
      <a href="flashes.html">VOLNÉ NÁVRHY</a>
    </div>
  </div>
  <a href="contact.html">BOOKING</a>
  
  <a href="aboutme.html">O MĚ</a>
</div>
</nav>
   
   
<div id="obsah">
                   
    <h2>CO JE HANDPOKE?</h2>
    <p>Handpoke, nebo také "Stick and poke" je trvalé tetování, které se tvoří bez strojku a elektřiny, pouze jehlou a barvou. Hand – ruka. Poke – šťouchnout. Je to tradiční metoda tetování, která vznikla  už před tisíci lety. Nyní se k ní mnoho lidí vrací. </p>
    <p>Výhodou této techniky je, že narozdíl od strojku nevydává žádný hluk a tatér má nad jehlou větší kontrolu. Je však pomalejší a pracnější, barva je vpravována do kůže tečku po tečce. Bolest vnímá každý jinak, ovšem pro mnohé je proces handpoku uklidňující a relaxující zkušeností, někteří jej vnímají přímo jako rituál.</p>
    
    
    <!-- Container for the image gallery -->
<div class="container">

  <!-- Full-width images with number text -->
  <div class="mySlides">
    <div class="numbertext">1 / 6</div>
      <img src="images/01.jpg" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">2 / 6</div>
      <img src="images/portrait-cropped.png" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">3 / 6</div>
      <img src="images/kristiandetail.jpg" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">4 / 6</div>
      <img src="images/tool1.png" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">5 / 6</div>
      <img src="images/tool2.png" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">6 / 6</div>
      <img src="images/ring.png" style="width:100%">
  </div>

  <!-- Next and previous buttons -->
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>

  <!-- Image text -->
  <div class="caption-container">
    <p id="caption"></p>
  </div>

  <!-- Thumbnail images -->
  <div class="row">
    <div class="column">
      <img class="demo cursor" src="images/01.jpg" style="width:100%" onclick="currentSlide(1)" alt="1">
    </div>
    <div class="column">
      <img class="demo cursor" src="images/portrait-cropped.png" style="width:100%" onclick="currentSlide(2)" alt="2">
    </div>
    <div class="column">
      <img class="demo cursor" src="images/kristiandetail.jpg" style="width:100%" onclick="currentSlide(3)" alt="3">
    </div>
    <div class="column">
      <img class="demo cursor" src="images/tool1.png" style="width:100%" onclick="currentSlide(3)" alt="4">
    </div>
	<div class="column">
      <img class="demo cursor" src="images/tool2.png" style="width:100%" onclick="currentSlide(3)" alt="5">
    </div>
    <div class="column">
      <img class="demo cursor" src="images/ring.png" style="width:100%" onclick="currentSlide(3)" alt="6">
    </div>

  

  </div>
</div>
    
    <h2>ČÍM TETUJI?</h2>
    <p>V současné době už samozřejmě netetujeme obroušenými kostmi nebo trny, tak jako dříve naši předkové. K tetování používám standartní jednorázové tetovací jehly a ty nejkvalitnější barvy značky 'World Famous Tattoo Ink'. Produkty, které používám, jsou veganské a netestované na zvířtech a pomůcky převážně ekologické a rozložitelné, za účelem minimalizace plastového odpadu.</p>
    <h2>KDE TETUJI?</h2>
       <p>Hradec Králové. Zatím doma. Tady bude jednou adresa mého studia :) </p>
       <h2>PROCES STRUČNĚ KROK ZA KROKEM</h2>
       <p>Kontakt na mě najdete v sekci BOOKING. S klienty se nejprve domlouvám online. Napíšou jaký motiv by chtěli,jak si ho představují, nebo co by měl znázorňovat (případně mohou poslat vlastní obrázek pro inspiraci), a já jim následně zpracuji návrh ke schválení. Pokud jsou s návrhem spokojení domluvíme se na termínu kdy samotné tetování proběhne. Před tetováním by člověk neměl pít alkohol. Měl by přijít dobře naladěný a najedený. Po krátké osobní konzultaci otisknu, nebo překreslím motiv na kůži a můžeme jít na věc. Hotové tetování si vyfotím a zalepím ho fólií. Před odchodem se pak také dozvíte vše o tom, jak o své nové tetování pečovat a na co si dát pozor.</p>
       
       <h2>Tetuji pouze osoby starší 18ti let!</h2>
       
       
        <!--<img src="images/portrait.png" alt="portrait" title="Image of me." class="homeImg"> -->
        </div>
      <footer>      
        &copy; MM, 2020
      </footer>    
    </div>
    
    
    <script>
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
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
</script>
 
  </body>
</html>


