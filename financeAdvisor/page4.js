
let chart;

function calculateSIP(){

let amount = parseFloat(document.getElementById("amount").value);

let rate = parseFloat(document.getElementById("rate").value)/100/12;

let years = parseFloat(document.getElementById("years").value)*12;

let futureValue = amount*((Math.pow(1+rate,years)-1)/rate)*(1+rate);

let invested = amount*years;

let gain = futureValue-invested;

document.getElementById("invested").innerText = Math.round(invested);

document.getElementById("gain").innerText = Math.round(gain);

document.getElementById("total").innerText = Math.round(futureValue);


const data = {

labels:["Invested","Wealth Gain"],

datasets:[{

data:[invested,gain],

backgroundColor:["#007bff","#00c6ff"]

}]

};

if(chart){

chart.destroy();

}

const ctx=document.getElementById("sipChart");

chart=new Chart(ctx,{

type:"doughnut",

data:data

});

}