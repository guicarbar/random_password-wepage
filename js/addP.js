// export function
export { addPassword }

// function to add passwor to html
function addPassword(newPassword) {
  const main = document.getElementById("mainArea")
  
  // create and add content to p
  let p = document.createElement("p")
  p.textContent = newPassword

  // add p to html
  main.appendChild(p)
  main.scrollTop = main.scrollHeight;
}