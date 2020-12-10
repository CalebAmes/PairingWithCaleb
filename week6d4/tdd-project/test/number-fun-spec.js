const chai = require('chai');
const spies = require('chai-spies');

const expect = chai.expect;

chai.use(spies);

// const reciprocal = require('../problems/number-fun.js');
const returnsThree = require('../problems/number-fun.js');

describe('returnsThree', () => {
  
  it('returns the number three', ()=> {
    const result = returnsThree()
    expect(result).to.equal(3)
  })
})


