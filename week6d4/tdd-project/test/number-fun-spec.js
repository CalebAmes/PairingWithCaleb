const chai = require('chai');
const spies = require('chai-spies');
const assert = chai.assert;

const expect = chai.expect;

chai.use(spies);

const { reciprocal, returnsThree } = require('../problems/number-fun.js');

describe('returnsThree', () => {
  it('returns the number three', () => {
    const result = returnsThree()
    expect(result).to.equal(3)
  })
})

describe('reciprocal', () => {
  it('return reciprocal', () => {
    const value1 = reciprocal(8);
    const result1 = 0.125;
    const value2 = reciprocal(10);
    const result2 = 0.1;
    const value3 = reciprocal(5);
    const result3 = 0.2;

    assert.strictEqual(value1, result1)
    assert.strictEqual(value2, result2)
    assert.strictEqual(value3, result3)
  })



})


