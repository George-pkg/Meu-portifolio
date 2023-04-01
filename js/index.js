//script de digitação

var el = document.querySelector("#animaçao_nomes");
var animaçao_nomes = "eorge Guiro|"
var interval = 200;

function showtext(el, animaçao_nomes, interval) {
  var char = animaçao_nomes.split("").reverse();
  
  var typer = setInterval(function() {
  
    if (!char.length) {
        return clearInterval(typer)
    }
    
    var next = char.pop();
    
    el.innerHTML += next;
    
  }, interval);
  
}
showtext(el, animaçao_nomes, interval);

//script do menu interativo

function openNav() {
  document.getElementById("myNav")
  .style.width = "100%";
 }
 
 function closeNav() {
  document.getElementById("myNav")
  .style.width = "0%";
 }

//script do carrocel

var count = 0;
var inc = 0;
var margin = 0;
var slider = document.getElementsByClassName("proj-tra")[0];
var itemDisplay = 0;

if(screen.width > 990){
  itemDisplay = document.getElementsByClassName("projetos")[0].getAttribute("item-display-d");
  margin = itemDisplay * 5;
}
if(screen.width > 700 && screen.width < 990){
  itemDisplay = document.getElementsByClassName("projetos")[0].getAttribute("item-display-t");
  margin = itemDisplay * 6.8;
}
if(screen.width > 280 && screen.width < 700){
  itemDisplay = document.getElementsByClassName("projetos")[0].getAttribute("item-display-m");
  margin = itemDisplay * 20;
}

var item = document.getElementsByClassName("trabalhos");
var itemleft = item.length % itemDisplay;
var itemSlide = Math.floor(item.length / itemDisplay) - 1;
for(let i=0; i<item.length; i++){
  item[i].style.width = (screen.width / itemDisplay)- margin + "px";
}