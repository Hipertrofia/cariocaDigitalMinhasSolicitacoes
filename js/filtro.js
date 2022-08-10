const radio = document.querySelectorAll('[data-filtro]')
const close = document.querySelector('#closebutton')
let click = true
let check = true

close.addEventListener('click', (evento) => {
    closebutton()
    close.parentElement.parentElement.childNodes[1].checked = false
})

radio.forEach((elemento) => {
  if (elemento.checked == true) {
    console.log(elemento.dataset.filtro)
    if(check==false) {
      elemento.checked = false
      console.log(check)
    }
  }
})

radio.forEach((elemento) => {
  elemento.addEventListener('click', (evento) => {
    if (elemento.checked == true) {
      console.log(elemento.dataset.filtro)
      console.log(elemento.parentElement.lastElementChild)
        elemento.parentElement.lastElementChild.appendChild(close)
        close.style.display = ""
        click=true
    }
  })
})

function closebutton() {
  console.log("aaaa")
    click = !click
    check = !check
    click?(close.style.display = ""):close.style.display= "none"
}
