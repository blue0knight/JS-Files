let myScript = document.createElement("script");
myScript.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js");
document.body.appendChild(myScript);

function insertChart () {
    setTimeout(function() {
        new Chart(document.getElementById("myChart"), {
    type: 'pie',
    data: {
      labels: ["Books and Materials","Sedgwick Tuition Assistance Program", "Non-Education Related Costs"],
      datasets: [{
        label: "Percentage",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
        data: [60,5,35]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'How Your Full Tuition Grant Works, %'
      }
    }
});
    }, 500);
    
}

insertChart();
