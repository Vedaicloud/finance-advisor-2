let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

let chart;

function addExpense(){

let title = document.getElementById("title").value;

let category = document.getElementById("category").value;

let amount = parseFloat(document.getElementById("amount").value);

let date = document.getElementById("date").value;

let expense = {

title,
category,
amount,
date

};

expenses.push(expense);

localStorage.setItem("expenses",JSON.stringify(expenses));

displayExpenses();

}

function displayExpenses(){

let list = document.getElementById("expenseList");

list.innerHTML="";

let total=0;

let categoryTotals={};

expenses.forEach((e,index)=>{

total+=e.amount;

categoryTotals[e.category]=(categoryTotals[e.category]||0)+e.amount;

list.innerHTML+=`

<tr>

<td>${e.title}</td>

<td>${e.category}</td>

<td>₹${e.amount}</td>

<td>${e.date}</td>

<td>
<button onclick="deleteExpense(${index})">Delete</button>
</td>

</tr>

`;

});

document.getElementById("total").innerText=total;

updateChart(categoryTotals);

}

function deleteExpense(index){

expenses.splice(index,1);

localStorage.setItem("expenses",JSON.stringify(expenses));

displayExpenses();

}

function updateChart(dataObj){

let labels=Object.keys(dataObj);

let values=Object.values(dataObj);

if(chart){

chart.destroy();

}

chart=new Chart(document.getElementById("expenseChart"),{

type:"pie",

data:{

labels:labels,

datasets:[{

data:values,

backgroundColor:[

"#007bff",

"#00c6ff",

"#6c5ce7",

"#00b894",

"#fdcb6e"

]

}]

}

});

}

displayExpenses();