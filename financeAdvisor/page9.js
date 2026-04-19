let compoundChart;

function calculateCompound(){

let principal = parseFloat(document.getElementById("principal").value) || 0;

let rate = parseFloat(document.getElementById("rate").value) / 100;

let years = parseFloat(document.getElementById("years").value);

let n = parseInt(document.getElementById("frequency").value);

let amount = principal * Math.pow((1 + rate/n), n * years);

let interest = amount - principal;


document.getElementById("principalOut").innerText = Math.round(principal);

document.getElementById("interestOut").innerText = Math.round(interest);

document.getElementById("finalOut").innerText = Math.round(amount);


let growth = [];

for(let i=1;i<=years;i++){

let val = principal * Math.pow((1 + rate/n), n * i);

growth.push(val);

}


if(compoundChart){

compoundChart.destroy();

}

compoundChart = new Chart(

document.getElementById("compoundChart"),

{

type:"line",

data:{

labels:growth.map((_,i)=>"Year "+(i+1)),

datasets:[{

label:"Investment Growth",

data:growth,

borderColor:"#007bff",

fill:false

}]

}

}

);

}