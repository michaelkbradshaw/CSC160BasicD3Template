import * as d3 from "d3";

var peoplePromise = d3.csv("data/people.csv");

peoplePromise.then(function (people) {
  console.log("data", people);
});