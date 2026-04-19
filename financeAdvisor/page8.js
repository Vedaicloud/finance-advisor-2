let investmentChart;

function calculateInvestment(){

let initial = parseFloat(document.getElementById("initial").value) || 0;
let monthly = parseFloat(document.getElementById("monthly").value) || 0;
let rate = parseFloat(document.getElementById("rate").value)/100/12;
let years = parseFloat(document.getElementById("years").value);

let months = years * 12;

let value = initial;

let invested = initial;

let growthData = [];

for(let i=1;i<=months;i++){

value = value*(1+rate) + monthly;

invested += monthly;

growthData.push(value);

}

let profit = value - invested;

document.getElementById("invested").innerText=Math.round(invested);

document.getElementById("profit").innerText=Math.round(profit);

document.getElementById("total").innerText=Math.round(value);


if(investmentChart){

investmentChart.destroy();

}

investmentChart = new Chart(

document.getElementById("investmentChart"),

{

type:"line",

data:{

labels:growthData.map((_,i)=>i+1),

datasets:[{

label:"Portfolio Value",

data:growthData,

borderColor:"#007bff",

fill:false

}]

}

}

);

}