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
