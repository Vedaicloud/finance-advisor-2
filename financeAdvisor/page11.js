let stockChart;

function calculateStock(){

let buy = parseFloat(document.getElementById("buyPrice").value);

let sell = parseFloat(document.getElementById("sellPrice").value);

let qty = parseFloat(document.getElementById("quantity").value);


let investment = buy * qty;

let returnValue = sell * qty;

let profit = returnValue - investment;

let percent = (profit / investment) * 100;


document.getElementById("investment").innerText = Math.round(investment);

document.getElementById("return").innerText = Math.round(returnValue);

document.getElementById("profit").innerText = Math.round(profit);

document.getElementById("percentage").innerText = percent.toFixed(2);


let profitText = document.getElementById("profitText");

if(profit >= 0){

profitText.style.color="green";

}else{

profitText.style.color="red";

}


if(stockChart){

stockChart.destroy();

}


stockChart = new Chart(

document.getElementById("stockChart"),

{

type:"bar",

data:{

labels:["Investment","Return"],

datasets:[{

data:[investment,returnValue],

backgroundColor:["#007bff","#00c6ff"]

}]

}

}

);

}stockChart