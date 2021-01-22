//import * as d3 from "d3";
var d3 = import("https://d3js.org/d3.v6.min.js");
var peoplePromise = d3.csv("data/people.csv");

peoplePromise.then(function (people) {
  console.log("data", people);
});
