let CountJs = document.getElementById("count")
let SaveJs = document.getElementById("record")
CountJs.innerText= 0
let ccount = 0 
function apple() {
    ccount +=1 
    CountJs.innerText = ccount
} 
function banana(){
    SaveJs.textContent += ccount + " - "
    ccount = 0
    CountJs.textContent= 0
  
}