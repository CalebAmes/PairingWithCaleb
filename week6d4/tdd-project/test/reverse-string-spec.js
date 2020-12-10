const chai = require('chai');
const spies = require('chai-spies');

const expect = chai.expect;

chai.use(spies);

const reverseString = require('../problems/reverse-string.js')


describe("reverse", () => {
  it('should return string in reverse', () => {
    const input = 'fun';
    const expected = 'nuf';

    const result = reverseString(input);

    expect(result).to.equal(expected);
  });

  it('should throw and error with a invalid arg', () => {
    expect(() => reverseString()).to.throw(TypeError)
  })

















});