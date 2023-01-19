let studentdetails = {
    firstName : "Sourov",
    lastName : "Dey",
    roll : "588708",
    group : "A1",
}

let fulldetails = "";
let space = " "

for (let i in studentdetails){
    fulldetails = fulldetails + studentdetails[i] + space
}
console.log(fulldetails)