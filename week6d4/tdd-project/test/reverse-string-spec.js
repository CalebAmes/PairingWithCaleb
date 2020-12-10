const chai = require('chai');
const spies = require('chai-spies');

const expect = chai.expect;

chai.use(spies);

const reverseString = require('../problems/reverse-string.js')


describe("reverse", () => {
  it('should return string in reverse', () => {
    const input = 5;
    const expected = 'nuf';

    const result = reverseString(input);

    expect(result).to.equal(expected);

  });

  it(typeof reverseString() !== "string") {
    throw Error('Error')
  }
















});