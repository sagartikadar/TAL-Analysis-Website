
var xValues = ["01/02/2024", "02/02/2024", "03/02/2024", "04/02/2024", "05/02/2024", "06/02/2024", "07/02/2024", "08/02/2024", "09/02/2024"];
var yValues = [4.1, 4.9, 4.4, 2.4, 1.7, 3.1, 3.7, 1.9, 4.6];
var barColors = ["red", "green","blue","orange","brown", "green","blue","orange","brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Daily Chess Game Analysis",
      fontColor: 'white' 
    },
    scales: {
      yAxes: [{
        ticks: {
          fontColor: 'white' 
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: 'white' 
        }
      }]
    }
  }
});

