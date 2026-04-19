let retirementChart;

function calculateRetirement(){

let currentAge = parseInt(document.getElementById("currentAge").value);

let retireAge = parseInt(document.getElementById("retireAge").value);

let expenses = parseFloat(document.getElementById("expenses").value);

let rate = parseFloat(document.getElementById("rate").value)/100/12;

let yearsLeft = retireAge - currentAge;

let months = yearsLeft * 12;


let corpus = expenses * 12 * 25;


let monthlyInvestment = corpus * rate / (Math.pow(1+rate,months)-1);


document.getElementById("yearsLeft").innerText = yearsLeft;

document.getElementById("corpus").innerText = Math.round(corpus);

document.getElementById("monthlyInvest").innerText = Math.round(monthlyInvestment);


let growth = [];

let value = 0;

for(let i=1;i<=months;i++){

value = value*(1+rate) + monthlyInvestment;

if(i%12===0){

growth.push(value);

}

}


if(retirementChart){

retirementChart.destroy();

}

retirementChart = new Chart(

document.getElementById("retirementChart"),

{

type:"line",

data:{

labels:growth.map((_,i)=>"Year "+(i+1)),

datasets:[{

label:"Retirement Fund Growth",

data:growth,

borderColor:"#007bff",

fill:false

}]

}

}

);

}