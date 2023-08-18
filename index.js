const fs = require("fs")
const SVG = require("./svg.js")

let example = new SVG("blue", "green", "PJB", "triangle");

fs.writeFile("shape.svg", example.shape, function(err){
    if(err)
    console.log(err)
})

console.log(example);