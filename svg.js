const { Shape, Circle, Square, Triangle } = require("./lib/shapes.js");




class SVG extends Shape {
   constructor(fill, textColor, text, shape) {
      super(fill, textColor, text)
      this.shape = shape;
      


      if (shape === "triangle") {
         const triangle = new Triangle(fill, textColor, text)
         this.shape = 
            `<svg version="1.1"
                    width="300" height="200"
                    xmlns="http://www.w3.org/2000/svg">
                     ${triangle.render()}
                             
               </svg>`
      }

      if (shape === "circle") {

         const circle = new Circle(fill, textColor, text)
         this.shape = `<svg version="1.1"
                     width="300" height="200"
                     xmlns="http://www.w3.org/2000/svg">
                     ${circle.render()}
                              
               </svg>`
      }


      if (shape === "square") {
         const square = new Square(fill,textColor, text)
         this.shape = `<svg version="1.1"
                        width="300" height="200"
                        xmlns="http://www.w3.org/2000/svg">
                        ${square.render()}
                                 
                  </svg>`
      }
   
   }
}


module.exports = SVG;