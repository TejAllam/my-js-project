// helloWorld.test.js
const { helloWorld } = require('../src/index');

describe('helloWorld function', () => {
    test('should return "Hello, World!"', () => {
        expect(helloWorld()).toBe('Hello, World!');
    });
});