// Importing necessary modules
const { Circle, Square, Triangle } = require('./lib/shapes');
const inquirer = require('inquirer');
const fs = require('fs');

// Questions to be answered by the user
const questions = [
    {
        type: 'list',
        name: 'shape',
        choices: ["Circle", "Square", "Triangle"],
        message: "Select the shape for your logo",
    },
    {
        type: 'input',
        name: 'text',
        message: "Type up to 3 characters for your logo",
        validate: input => (input.length > 0 && input.length <= 3) ? true : "Please enter 1 to 3 characters.",
    },
    {
        type: 'input',
        name: 'textColor',
        message: "Enter a CSS or Hexadecimal color for your logo's text",
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: "Enter a CSS or Hexadecimal color for your logo's shape",
    }
];

// Renders the selected shape with the specified color
function renderShape(shape, selectedColor) {
    const shapeInstance = new (eval(shape))();
    shapeInstance.setColor(selectedColor);
    return shapeInstance.render();
}

// Creates an SVG based on the user's choices
function createSVG(data) {
    let yAxis = 100;
    let xAxis = 100;
    let fontSize = 60;
    if (data.shape === "Triangle") {
        yAxis = 130;
        fontSize = 50;
    }
    return `<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    ${renderShape(data.shape, data.shapeColor)}
    <text x="${xAxis}" y="${yAxis}" font-size="${fontSize}" text-anchor="middle" dominant-baseline="middle" fill="${data.textColor}">${data.text}</text>
    </svg>`;
}

// Writes the SVG file to the user's storage
function writeToFile(fileName, data) {
    const fileData = createSVG(data);
    fs.writeFile(fileName, fileData, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log(`Generated SVG File as ${fileName}`);
        }
    });
}

// Asks the user questions and initiates the process
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('yourlogo.svg', answers);
    });
}

// Start the process
init();
