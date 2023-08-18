const Shape = require("./lib/shapes.js");
const Circle = require("./lib/shapes.js");
const Square = require("./lib/shapes.js");
const Triangle = require("./lib/shapes.js");




class SVG extends Shape {
    constructor(fill, textColor, text, shape) {
     super(fill, textColor, text)
        this.shape = shape;
    

             if (shape === "triangle") {
            
                    

                `<svg version="1.1"
                width="300" height="200"
                xmlns="http://www.w3.org/2000/svg">
           
                ${Triangle.render()}
             
               </svg>`
                    return
             } else if (shape === "circle") {
            
        
                `<svg version="1.1"
                width="300" height="200"
                xmlns="http://www.w3.org/2000/svg">
           
                ${Circle.render}
             
               </svg>`
             } else if (shape === "square") {
            
          
        
                `<svg version="1.1"
                width="300" height="200"
                xmlns="http://www.w3.org/2000/svg">
           
                ${Square.render}
             
               </svg>`
             }
            }
    }


newSVG = new SVG("blue", "green", "PJB", "triangle")

console.log(newSVG)

module.exports = SVG;