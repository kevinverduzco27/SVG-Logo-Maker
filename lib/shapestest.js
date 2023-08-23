// Importing the necessary modules
const { Circle, Square, Triangle } = require('./shapes');

// Circle Testing
describe('Circle', () => {
    it('will render a red circle', () => {
        const shape = new Circle();
        shape.setColor('red');
        expect(shape.render()).toEqual(`<circle cx="100" cy="100" r="100" fill="red"/>`);
    });
});

// Square Testing
describe('Square', () => {
    it('will render a square using the hex code #702abf', () => {
        const shape = new Square();
        shape.setColor('#702abf');
        expect(shape.render()).toEqual(`<rect x="0" y="0" width="200" height="200" fill="#702abf"/>`);
    });
});

// Triangle Testing
describe('Triangle', () => {
    it('will render a blue triangle', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toEqual(`<polygon points="0,200 100,0 200,200" fill="blue"/>`);
    });
});
