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

