// import funnction
import { aletPassword } from './aletPassword.js'

// fixed vards
//btn gem var
const btnGem = document.getElementById("PasswordGem")

// caps checkbox var
const caps = document.getElementById("caps")

// especial chars checkbox var
const especialChar = document.getElementById("chars")

// number checked var
const number = document.getElementById("number")

// password size var
const sizePassword = document.getElementById("output")

// chars var
const chars = [
  
]


//listenen of buton
btnGem.addEventListener("click", () => {
  switch (true) {
    case (caps.checked === true && especialChar.checked === true && number.checked === true):
      aletPassword(sizePassword.value)
      break
    case (caps.checked === true && especialChar.checked === true && number.checked === false):
      aletPassword(sizePassword.value)
      break
    case (caps.checked === true && especialChar.checked === false && number.checked === true):
      aletPassword(sizePassword.value)
      break
    case (caps.checked === false && especialChar.checked === true && number.checked === true):
      aletPassword(sizePassword.value)
      break
    case (caps.checked === true && especialChar.checked === false && number.checked === false):
      aletPassword(sizePassword.value)
      break
    case (caps.checked === false && especialChar.checked === false && number.checked === true):
      aletPassword(sizePassword.value)
      break
    case (caps.checked === false && especialChar.checked === true && number.checked === false):
      aletPassword(sizePassword.value)
      break
    case (caps.checked === false && especialChar.checked === false && number.checked === false):
      aletPassword(sizePassword.value)
      break
    default:
      alert("Erro tente novamete")
  }
})