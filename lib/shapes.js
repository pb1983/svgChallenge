class Shape {

    constructor(fill, setColor) {
    
        this.fill = fill;
        this.setColor = setColor;
    }

}


class Circle extends Shape {

    constructor(fill, radius){
        super(fill)
        this.radius = radius;
    }

    render() {

        return `<circle cx="150" cy="100" r="80" fill="${this.fill}"/>`
    }

}

class Squre extends Shape {

}

class Triangle extends Shape {

}