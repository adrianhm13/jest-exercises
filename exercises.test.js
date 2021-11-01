const sum = require('./sum');
const capitalize = require('./capitalize');
const reverse = require('./reverse');
const calculate = require('./calculator');
const cypher = require('./caesar-cypher');
const analyze = require('./analyze')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Capitalize the first letter of a string', () => {
  expect(capitalize("hola")).toBe("Hola");
})

test('Reverse string', () => {
  expect(reverse("Tomates")).toBe("setamoT");
})

test('Sum', () => {
  expect(calculate.sum(2, 5)).toBe(7);
})

test('Substract', () => {
  expect(calculate.subtract(5, 5)).toBe(0);
})

test('Divide', () => {
  expect(calculate.divide(10, 2)).toBe(5);
})

test('Multiply', () => {
  expect(calculate.multiply(5, 2)).toBe(10);
})

test('Cyphering a message', () => {
  expect(cypher('hola')).toBe('ipmb')
})

test('Cyphering message with blank space', () => {
  expect(cypher('destroy the enemy!')).toBe('eftuspz uif fofnz!')
})

test('Analyze an array of numbers and give properties to an object', () => {
  expect(analyze([1,8,3,4,2,6])).toBe({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  })
})