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
  "abcdefghijklmnopqrstuvwxyz",
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "!@#$%^&*()_+",
  "0123456789"
]


//listenen of buton
btnGem.addEventListener("click", () => {
  let charSelected

  // switch to validadtion and request aletpassword function
  switch (true) {
    case (caps.checked === true && especialChar.checked === true && number.checked === true):
      charSelected = chars[0] + chars[1] + chars[2] + chars[3]

      aletPassword(sizePassword.value, charSelected)
      break
    case (caps.checked === true && especialChar.checked === true && number.checked === false):
      charSelected = chars[0] + chars[1] + chars[2]

      aletPassword(sizePassword.value, charSelected)
      break
    case (caps.checked === true && especialChar.checked === false && number.checked === true):
      charSelected = chars[0] + chars[1] + chars[3]

      aletPassword(sizePassword.value, charSelected)
      break
    case (caps.checked === false && especialChar.checked === true && number.checked === true):
      charSelected = chars[0] + chars[2] + chars[3]

      aletPassword(sizePassword.value, charSelected)
      break
    case (caps.checked === true && especialChar.checked === false && number.checked === false):
      charSelected = chars[0] + chars[1]

      aletPassword(sizePassword.value, charSelected)
      break
    case (caps.checked === false && especialChar.checked === false && number.checked === true):
      charSelected = chars[0] + chars[3]

      aletPassword(sizePassword.value, charSelected)
      break
    case (caps.checked === false && especialChar.checked === true && number.checked === false):
      charSelected = chars[0] + chars[2]

      aletPassword(sizePassword.value, charSelected)
      break
    case (caps.checked === false && especialChar.checked === false && number.checked === false):
      charSelected = chars[0]

      aletPassword(sizePassword.value, charSelected)
      break
    default:
      alert("Erro tente novamete")
  }
})