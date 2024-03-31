
// // Clear Original Statement
// document.getElementById("ClearInput").onclick = function () {
//     document.getElementById("Input").innerHTML = ""
// }
//  Clear Output
document.getElementById("ClearOutput").onclick = function () {
    document.getElementById("Output").innerHTML = ""
}
// Simple Alert
function simpleAlert(){
    alert("My Name is Muhammad Uzair Shahbaz")
    document.getElementById("Output").innerHTML= "My Name is Muhammad Uzair Shahbaz";
}

// print name 
function printName(){
   let myName= document.getElementById("inputText").value;
   if(myName===""){
    alert("Please Enter Your Good Name")
    return
   }
   document.getElementById("Output").innerHTML=myName;
}
// print city 
let  cities = [" Faisalabad","Lahore", "Karachi", "Islamabad" ,"Sargodha", "Shaikhupura" , "Kashmir"]
function printCity(){
        for (let i=0; i<cities.length; i++){
            document.getElementById("Output").innerHTML += i+1 +") " + cities[i] + "<br />"
        }
    
}

// add city
function addCity(){
    let city= document.getElementById("inputText").value;
    if(city===""){
        alert("Please Enter Your City Name")
        return
       }
       cities.push(city)
       for (let i=0; i<cities.length; i++){
        document.getElementById("Output").innerHTML += i+1 +") " + cities[i] + "<br />"
    }
       
}

// generate table
function table(){
     tableNumber=prompt("Please Enter the Number whose table you want to generate")
     document.getElementById("Output").innerHTML = `<h3>Table of ${tableNumber} <h3/> <hr />`
     for(let i=1; i<11; i++){
         let table = tableNumber + " * " + i + " = " + tableNumber*i + "<br />"
         document.getElementById("Output").innerHTML += table ;
     }
}





