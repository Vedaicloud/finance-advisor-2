// Card hover animation

document.querySelectorAll(".card").forEach(card => {

card.addEventListener("mouseenter", () => {

card.style.transform = "scale(1.05)";

});

card.addEventListener("mouseleave", () => {

card.style.transform = "scale(1)";

});

});


// Stock chart

const ctx = document.getElementById("marketChart");

if(ctx){

new Chart(ctx, {

type: "line",

data: {

labels:["Jan","Feb","Mar","Apr","May"],

datasets:[{

label:"Market Growth",

data:[100,120,140,130,170],

borderColor:"#007bff",

fill:false

}]

},

options:{

responsive:true

}

});

}