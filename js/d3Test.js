import * as d3 from "d3"; //comment for github
// var d3 = window.d3; //uncomment for github
var peoplePromise = d3.csv("data/people.csv");

peoplePromise.then(function (people) {
  console.log("data", people);

  d3.select("body")
    .append("ol")
    .selectAll("li")
    .data(people)
    .enter()
    .append("li")
    .text(function (person) {
      return person.name;
    });
});
