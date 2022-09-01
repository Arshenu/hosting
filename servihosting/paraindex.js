$(document).ready(function(){

  $(window).scroll(function(){
    if($(this).scrollTop() > 40){
      $('#topBtn').fadeIn();
    } else{
      $('#topBtn').fadeOut();
    }
  });

  $("#topBtn").click(function(){
    $('html ,body').animate({scrollTop : 0},800);
  });
});




window.onscroll = function(){miFuncion()};

var futbol = document.getElementById("futbol");
var imghost = document.getElementById("mujer");


var distancia_futbol, distancia_imghost;

function miFuncion(){
    distancia_futbol = window.innerHeight - futbol.getBoundingClientRect().top;
    if(distancia_futbol >=200){
        futbol.classList.add("efecto-futbol");
    }
	
	distancia_mujer = window.innerHeight - mujer.getBoundingClientRect().top;
    if(distancia_mujer >=200){
        mujer.classList.add("efecto-mujer");
    }


}

window.onload = function(){Function1()};

var animbnv = document.getElementById("animbnv");
var animbnv1 = document.getElementById("animbnv1");
var animbnv2 = document.getElementById("animbnv2");

var distancia_animbnv, distancia_animbnv1, distancia_animbnv2;

function Function1(){

distancia_animbnv = window.innerHeight - animbnv.getBoundingClientRect().top;
if(distancia_animbnv >=200){
  animbnv.classList.add("efecto-animbnv");
}

  distancia_animbnv1 = window.innerHeight - animbnv.getBoundingClientRect().top;
  if(distancia_animbnv1 >=200){
    animbnv1.classList.add("efecto-animbnv1");
  
  }

   distancia_animbnv2 = window.innerHeight - animbnv2.getBoundingClientRect().top;
  if(distancia_animbnv2 >=200){
    animbnv2.classList.add("efecto-animbnv2");
  
  }
}




const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

document.getElementsByTagName("h1")[0].style.fontSize = "6vw";


