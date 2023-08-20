const {Shape, Circle, Square, Triangle} = require("./shapes.js")



test('should set the color to red if we provide the background_color of red', () => {
    const shape = new Triangle();
    shape.fill("red");
    expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="red"/>`)
    
});