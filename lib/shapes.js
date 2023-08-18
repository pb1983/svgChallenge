class Shape {

    constructor(fill, textColor, text) {

        this.fill = fill;
        this.textColor = textColor;
        this.text = text;
    }

}


class Circle extends Shape {

    constructor(fill, textColor, text) {
        super(fill, textColor, text)

    }

    render() {

        return `<circle cx="150" cy="100" r="80" fill="${this.fill}"/>`
            `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }

}

class Square extends Shape {

    constructor(fill, textColor, text) {
        super(fill, textColor, text)

    }

    render() {
        return `<rect width="100%" height="100%" fill="${this.fill}"/>`
            `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }


}

class Triangle extends Shape {
    constructor(fill, textColor, text) {
        super(fill, textColor, text)

    }

    render() {
        return `<polygon points="250,60 100,400 400,400" fill="${this.fill}"/>`
            `<text x="250" y="250" font-size="60" text-anchor="middle" fill=${this.textColor}>${this.text}</text>`
    }
}



module.exports = Shape;
module.exports = Circle;
module.exports = Square;
module.exports = Triangle;