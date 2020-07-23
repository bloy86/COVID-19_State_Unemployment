// function buildPlot() {
//   /* data route */
//   const url = "/api/unemployment";
//   d3.json(url).then(function(response) {

//     console.log(response);

//     const data = response;

//     const layout = {
//       scope: "usa",
//       title: "Pet Pals",
//       showlegend: false,
//       height: 600,
//             // width: 980,
//       geo: {
//         scope: "usa",
//         projection: {
//           type: "albers usa"
//         },
//         showland: true,
//         landcolor: "rgb(217, 217, 217)",
//         subunitwidth: 1,
//         countrywidth: 1,
//         subunitcolor: "rgb(255,255,255)",
//         countrycolor: "rgb(255,255,255)"
//       }
//     };

//     Plotly.newPlot("plot", data, layout);
//   });
// }

// buildPlot();

// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 50},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
const url = "/api/unemployment";
d3.json(url).then(function(response),

  // When reading the csv, I must format variables:
  function(d){
    return { Date : d3.timeParse("%Y-%m-%d")(d.Date), value : d.value }
  },

  // Now I can use this dataset:
  function(data) {

    // Add X axis --> it is a date format
    var x = d3.scaleTime()
      .domain(d3.extent(data, function(d) { return d.date; }))
      .range([ 0, width ]);
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // Add Y axis
    var y = d3.scaleLinear()
      .domain([0, d3.max(data, function(d) { return +d.value; })])
      .range([ height, 0 ]);
    svg.append("g")
      .call(d3.axisLeft(y));

    // Add the area
    svg.append("path")
      .datum(data)
      .attr("fill", "#cce5df")
      .attr("stroke", "#69b3a2")
      .attr("stroke-width", 1.5)
      .attr("d", d3.area()
        .x(function(d) { return x(d.date) })
        .y0(y(0))
        .y1(function(d) { return y(d.value) })
        )

})