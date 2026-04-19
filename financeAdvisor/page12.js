let regime = "old";

let taxChart;

function selectRegime(type){

regime = type;

document.querySelectorAll(".regime-card")
.forEach(card=>card.classList.remove("active"));

if(type==="old"){

document.querySelectorAll(".regime-card")[0]
.classList.add("active");

}else{

document.querySelectorAll(".regime-card")[1]
.classList.add("active");

}

}


function calculateTax(){

let income = parseFloat(document.getElementById("income").value) || 0;

let taxableIncome = income - 50000;

let tax = 0;

if(regime === "old"){

if(taxableIncome <= 250000){

tax = 0;

}

else if(taxableIncome <= 500000){

tax = (taxableIncome-250000)*0.05;

}

else if(taxableIncome <= 1000000){

tax = 12500 + (taxableIncome-500000)*0.2;

}

else{

tax = 112500 + (taxableIncome-1000000)*0.3;

}

}

else{

if(taxableIncome <= 300000){

tax = 0;

}

else if(taxableIncome <= 600000){

tax = (taxableIncome-300000)*0.05;

}

else if(taxableIncome <= 900000){

tax = 15000 + (taxableIncome-600000)*0.1;

}

else if(taxableIncome <= 1200000){

tax = 45000 + (taxableIncome-900000)*0.15;

}

else if(taxableIncome <= 1500000){

tax = 90000 + (taxableIncome-1200000)*0.2;

}

else{

tax = 150000 + (taxableIncome-1500000)*0.3;

}

}

document.getElementById("taxable").innerText = Math.round(taxableIncome);

document.getElementById("tax").innerText = Math.round(tax);


if(taxChart){

taxChart.destroy();

}

taxChart = new Chart(

document.getElementById("taxChart"),

{

type:"pie",

data:{

labels:["Tax Paid","Remaining Income"],

datasets:[{

data:[tax,income-tax],

backgroundColor:["#ff6b6b","#007bff"]

}]

}

}

);

}