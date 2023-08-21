const {Shape, Circle, Square, Triangle} = require("./shapes.js")



test ('should set the color to red if we provide a background_color of red', () => {
    const shape = new Circle("red", "green","PJB");
    expect(shape.fill).toEqual("red")
    
});

test ('should set the color to red if we provide a background_color of red', () => {
    const shape = new Square("red", "green","PJB");
    expect(shape.fill).toEqual("red")
    
});

test ('should set the color to red if we provide a background_color of red', () => {
    const shape = new Triangle("red", "green","PJB");
    expect(shape.fill).toEqual("red")
    
});

test ('should set the text color to green if we provide a text_color of green', () => {
    const shape = new Circle("red", "green","PJB");
    expect(shape.textColor).toEqual("green")
    
});

test ('should set the color to green if we provide a text of green', () => {
    const shape = new Square("red", "green","PJB");
    expect(shape.textColor).toEqual("green")
    
});

test ('should set the color to green if we provide a text_color of green', () => {
    const shape = new Triangle("red", "green","PJB");
    expect(shape.textColor).toEqual("green")
    
});


