// Define the base class for shapes
class Shape {
    constructor() {
        this.color = "";
    }

    setColor(color) {
        this.color = color;
    }
}

// Define the Circle class that extends Shape
class Circle extends Shape {
    render() {
        return `<circle cx="100" cy="100" r="100" fill="${this.color}"/>`;
    }
}

// Define the Square class that extends Shape
class Square extends Shape {
    render() {
        return `<rect x="0" y="0" width="200" height="200" fill="${this.color}"/>`;
    }
}

// Define the Triangle class that extends Shape
class Triangle extends Shape {
    render() {
        return `<polygon points="0,200 100,0 200,200" fill="${this.color}"/>`;
    }
}

// Export the shape classes
module.exports = {
    Circle,
    Square,
    Triangle
};