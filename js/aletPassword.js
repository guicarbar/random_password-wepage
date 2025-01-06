// export function
export { aletPassword }

// import function
import { addPassword } from './addP.js'

// function of alet password
function aletPassword(q, chars) {
  let newPassword = ""
  for (let i = 0; i < q; i++) {
    let index = Math.floor(Math.random() * chars.length)
    newPassword += chars[index]
  }

  // pass to insert html function
  addPassword(newPassword)
}