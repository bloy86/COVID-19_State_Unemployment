// Load data from hours-of-tv-watched.csv
d3.csv("./COVID_Unemployment.csv").then(function(data) {

  // console.log(data);

  var states = data.map(data => data.State);
  console.log("States", states);


}).catch(function(error) {
  console.log(error);
});















// //   /* data route */
// //   const url = "/api/unemployment";
// //   d3.json(url).then(function(response) {
// // set the dimensions and margins of the graph
// var margin = {top: 30, right: 0, bottom: 30, left: 50},
//     width = 210 - margin.left - margin.right,
//     height = 210 - margin.top - margin.bottom;

// // append the svg object to the body of the page
// var svg = d3.select("#my_dataviz")
//     .selectAll("uniqueChart")
//     .data(sumstat)
//     .enter()
//     .append("svg")
//       .attr("width", width + margin.left + margin.right)
//       .attr("height", height + margin.top + margin.bottom)
//     .append("g")
//       .attr("transform",
//             "translate(" + margin.left + "," + margin.top + ")");

// // Parse the Data
// d3.csv("./COVID_Unemployment.csv").then(function(data) {

//   console.log(data);

// }).catch(function(error) {
//   console.log(error);
// });

// // const url = "/api/unemployment";
// // d3.json(url).then(function(data), {
// // d3.csv("https://raw.githubusercontent.com/bloy86/Test_D3/master/COVID_Cases_Only-Dates%20Out.csv", function(data) {


//   //////////
//   // GENERAL //
//   //////////

//   // List of groups = header of the csv files
//   var sumstat = d3.nest() // nest function allows to group the calculation per level of a factor
//     .key(function(d) { return d.State;})
//     .entries(data);
  
//   allKeys = sumstat.map(function(d){return d.key})
  
//   // var keys = data.columns.slice(1)

//   // // color palette
//   // var color = d3.scaleOrdinal()
//   //   .domain(keys)
//   //   .range(d3.schemeSet2);

//   // //stack the data?
//   // var stackedData = d3.stack()
//   //   .keys(keys)
//   //   (data)

//   // Add an svg element for each group. The will be one beside each other and will go on the next row when no more room available
//   var svg = d3.select("#my_dataviz")
//     .selectAll("uniqueChart")
//     .data(sumstat)
//     .enter()
//     .append("svg")
//       .attr("width", width + margin.left + margin.right)
//       .attr("height", height + margin.top + margin.bottom)
//     .append("g")
//       .attr("transform",
//             "translate(" + margin.left + "," + margin.top + ")");



//   //////////
//   // AXIS //
//   //////////

//   // Add X axis
//   var x = d3.scaleLinear()
//     .domain(d3.extent(data, function(d) { return d.Date; }))
//     .range([ 0, width ]);
//   var xAxis = svg.append("g")
//     .attr("transform", "translate(0," + height + ")")
//     .call(d3.axisBottom(x).ticks(10))

//   // Add X axis label:
//  // Add X axis --> it is a date format
//  var x = d3.scaleLinear()
//     .domain(d3.extent(data, function(d) { return d.Date; }))
//     .range([ 0, width ]);
//   svg
//     .append("g")
//     .attr("transform", "translate(0," + height + ")")
//     .call(d3.axisBottom(x).ticks(3));

//   //Add Y axis
//   var y = d3.scaleLinear()
//     .domain([0, d3.max(data, function(d) { return +d.cumulative_cases; })])
//     .range([ height, 0 ]);
//   svg.append("g")
//     .call(d3.axisLeft(y).ticks(5));

//   // color palette
//   var color = d3.scaleOrdinal()
//     .domain(allKeys)
//     .range(['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33','#a65628','#f781bf','#999999'])


//   // Draw the line
//   svg
//     .append("path")
//       .attr("fill", "none")
//       .attr("stroke", function(d){ return color(d.key) })
//       .attr("stroke-width", 1.9)
//       .attr("d", function(d){
//         return d3.line()
//           .x(function(d) { return x(d.Date); })
//           .y(function(d) { return y(+d.cumulative_cases); })
//           (d.values)
//       })

//   // Add titles
//   svg
//     .append("text")
//     .attr("text-anchor", "start")
//     .attr("y", -5)
//     .attr("x", 0)
//     .text(function(d){ return(d.key)})
//     .style("fill", function(d){ return color(d.key) })

// })