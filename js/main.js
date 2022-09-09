const linha = document.querySelectorAll('[data-linha]')

const aflushD = document.querySelectorAll('[data-acc="aflush"]')
const aitemD = document.querySelectorAll('[data-acc="aitem"]')
const ahoneD = document.querySelectorAll('[data-acc="ahone"]')
const abuttonD = document.querySelectorAll('[data-acc="abutton"]')
const aconeD = document.querySelectorAll('[data-acc="acone"]')
const abodyD = document.querySelectorAll('[data-acc="abody"]')

const acardbD = document.querySelectorAll('[data-acc="acardb"]')

const asitT = document.querySelectorAll('[data-acc="asit"]')


let m = 0;
linha.forEach((element) => {
  $(ahoneD)[m].id = 'flush-heading' + m
  $(abuttonD)[m].dataset.bsTarget = '#flush-collapse' + m
  $(abuttonD)[m].setAttribute("aria-controls", 'flush-collapse' + m);
  $(aconeD)[m].id = 'flush-collapse' + m
  $(aconeD)[m].setAttribute("aria-labelledby", 'flush-heading' + m);
  aconeD[m].ariaLabelledby = 'flush-heading' + m
  m++
})

let controle = 0;
let cont = 0;
function myFunction(x) {
  if (x.matches) { // If media query matches
    
    if (controle == 0) {

      let n = 0
      linha.forEach((elemento) => {
        aflushD[n].parentElement.replaceChild(acardbD[n], aflushD[n])

        n++
      })
      
      controle = 1;
      
      
    }

  } else {
    if (controle == 1) {

      let n = 0
      linha.forEach((element) => {
        console.log( element.childNodes[n].parentNode)
        element.childNodes[n].parentNode.appendChild(aflushD[n])
        aflushD[n].appendChild(aitemD[n])
        aitemD[n].appendChild(ahoneD[n])
        aitemD[n].appendChild(abuttonD[n])
        aitemD[n].appendChild(asitT[n])
        aflushD[n].appendChild(aconeD[n])
        aconeD[n].appendChild(abodyD[n])
        abodyD[n].appendChild(acardbD[n])
        n++
      })
      
      controle = 0;
    }

  }
}




var x = window.matchMedia("(min-width: 780px)")
myFunction(x) 
x.addListener(myFunction) 
window.onresize = function(){ location.reload(); }


function expande(){
  var b = window.document.getElementById('btnMostrarMais');
  var c =window.document.getElementById('firstText');
  b.innerText= 'Monstrar menos';
  c.style.color = #000000;
}
  