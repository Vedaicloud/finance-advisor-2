let emiChart;

function calculateEMI(){

let loanAmount = parseFloat(document.getElementById("loanAmount").value);

let rate = parseFloat(document.getElementById("interestRate").value)/12/100;

let years = parseFloat(document.getElementById("loanYears").value);

let months = years*12;


let emi = (loanAmount * rate * Math.pow(1+rate,months)) /
          (Math.pow(1+rate,months)-1);

let totalPayment = emi * months;

let totalInterest = totalPayment - loanAmount;


document.getElementById("emi").innerText = Math.round(emi);

document.getElementById("interest").innerText = Math.round(totalInterest);

document.getElementById("totalPayment").innerText = Math.round(totalPayment);



const data = {

labels:["Principal","Interest"],

datasets:[{

data:[loanAmount,totalInterest],

backgroundColor:["#007bff","#00c6ff"]

}]

};


if(emiChart){

emiChart.destroy();

}


const ctx=document.getElementById("emiChart");

emiChart=new Chart(ctx,{

type:"doughnut",

data:data

});

}