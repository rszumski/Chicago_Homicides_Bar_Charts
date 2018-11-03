// Our labels along the x-axis
var years = [2001,2002,2003,2004,2005,2006,2007,2008,2009,
2010,2011,2012,2013,2014,2015,2016,2017];
// For drawing the lines
var homicides = [667,657,604,454,453,476,447,513,460,438,437,505,421,427,500,783,671];

var clearance = [64,63,61,63,60,54,55,52,49,45,42,42,43,42,37,31,23];



var ctx = document.getElementById("TotalHomicides");


var TotalHomicides = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: years,
      datasets: [
        {
          label: "Homicides",
          backgroundColor: "#a9aca0",
           data: homicides
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Total Homicides by Year'
      }
    }
});

var ctx = document.getElementById("ClearanceRate");


var ClearanceRate = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: years,
      datasets: [
        {
          label: "Arrest Rate",
          backgroundColor: "#a6cce3",
           data: clearance
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Arrest Rate by Year'
      },
      tooltips: {
          mode: 'label',
          callbacks: {
          label: function(tooltipItem, data) { 
            return data.datasets[tooltipItem.datasetIndex].label + ": " + tooltipItem.yLabel + "%";
          }
          }
         },
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
          max: 100,// Your absolute max value
          callback: function (value) {
          return (value / 100 * 100).toFixed(0) + '%'; // convert it to percentage
        }
      }}],
    }
    }
});
