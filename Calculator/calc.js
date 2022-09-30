let numb1 = 8
let numb2 = 2

 document.getElementById("num1").textContent = numb1
 document.getElementById("num2").textContent = numb2

 let sumAll = document.getElementById("sum-all")

 function add() {
    let addUp = numb1 + numb2
    sumAll.textContent = "Sum: " + addUp 
 }

 function sub() {
    let subAll = numb1 - numb2
    sumAll.textContent = "Sum: " + subAll 
 }

 function divide() {
    let divAll = numb1 / numb2
    sumAll.textContent = "Sum: " + divAll 
 }

 function multiply() {
    let multAll = numb1 * numb2
    sumAll.textContent = "Sum: " + multAll
 }

 function reset() {
    let resetFig = 0
    sumAll.textContent = "Sum: " + resetFig
    
 }























// let errorParagraph = document.getElementById("error")
//     console.log(errorParagraph)

// function purchase() {
//     console.log("button clicked")
// errorParagraph.textContent = "Something went wrong, please try again later"
// }


