let budgetChart;

function calculateBudget(){

let income = parseFloat(document.getElementById("income").value) || 0;

let rent = parseFloat(document.getElementById("rent").value) || 0;
let food = parseFloat(document.getElementById("food").value) || 0;
let transport = parseFloat(document.getElementById("transport").value) || 0;
let bills = parseFloat(document.getElementById("bills").value) || 0;
let other = parseFloat(document.getElementById("other").value) || 0;

let expenses = rent + food + transport + bills + other;

let balance = income - expenses;

document.getElementById("expenses").innerText = expenses;

document.getElementById("balance").innerText = balance;


let status = document.getElementById("status");

if(balance >= 0){

status.innerText = "Good! Your budget is balanced.";
status.style.color = "green";

}else{

status.innerText = "Warning! You are overspending.";
status.style.color = "red";

}


const data = {

labels:["Rent","Food","Transport","Bills","Other"],

datasets:[{

data:[rent,food,transport,bills,other],

backgroundColor:[
"#007bff",
"#00c6ff",
"#6c5ce7",
"#00b894",
"#fdcb6e"
]

}]

};


if(budgetChart){

budgetChart.destroy();

}

const ctx=document.getElementById("budgetChart");

budgetChart=new Chart(ctx,{

type:"pie",
data:data

});

}