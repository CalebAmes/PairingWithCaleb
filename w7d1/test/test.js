const { expect } = require('chai');

const {
  recurBSearch,
  iterBSearch,
  recurBSearchIdx,
  recurBSearchIdxV2,
  iterBSearchIdx
} = require('../problems/bsearch.js');


// These are the arrays used as input in all test cases 
const oddNums = [11, 12, 13, 14, 15, 16, 17, 18, 19]
const evenNums = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const empty = [];

// Problem 1 -- Recursive Binary Search (Boolean)
describe('recurBSearch', () => {
  // it should accept an sorted array of numbers and a targetNum as an arg
  it('should return true when targetNum is contained in nums', () => {
    expect(recurBSearch(oddNums, 11)).to.equal(true);
    expect(recurBSearch(oddNums, 15)).to.equal(true);
    expect(recurBSearch(oddNums, 19)).to.equal(true);
    expect(recurBSearch(evenNums, 12)).to.equal(true);
    expect(recurBSearch(evenNums, 15)).to.equal(true);
    expect(recurBSearch(evenNums, 20)).to.equal(true);
  });
  it('should return false when targetNum is not contained in nums', () => {
    expect(recurBSearch(oddNums, 10)).to.equal(false);
    expect(recurBSearch(oddNums, 20)).to.equal(false);
    expect(recurBSearch(evenNums, 10)).to.equal(false);
    expect(recurBSearch(evenNums, 21)).to.equal(false);
    expect(recurBSearch(empty, 15)).to.equal(false);
  });
});
// Problem 2 -- Iterative Binary Search (Boolean)
describe('iterBSearch', () => {
  // it should accept an sorted array of numbers and a targetNum as an arg
  it('should return true when targetNum is contained in nums', () => {
    expect(iterBSearch(oddNums, 11)).to.equal(true);
    expect(iterBSearch(oddNums, 15)).to.equal(true);
    expect(iterBSearch(oddNums, 19)).to.equal(true);
    expect(iterBSearch(evenNums, 12)).to.equal(true);
    expect(iterBSearch(evenNums, 15)).to.equal(true);
    expect(iterBSearch(evenNums, 20)).to.equal(true);
  });
  it('should return false when targetNum is not contained in nums', () => {
    expect(iterBSearch(oddNums, 10)).to.equal(false);
    expect(iterBSearch(oddNums, 20)).to.equal(false);
    expect(iterBSearch(evenNums, 10)).to.equal(false);
    expect(iterBSearch(evenNums, 21)).to.equal(false);
    expect(iterBSearch(empty, 15)).to.equal(false);
  });
});
// Problem 3 -- Recursive Binary Search (Index, Version 1)
describe('recurBSearchIdx', () => {
  // it should accept an sorted array of numbers and a targetNum as an arg
  it('should return the index of targetNum when targetNum is contained in nums', () => {
    expect(recurBSearchIdx(oddNums, 11)).to.equal(0);
    expect(recurBSearchIdx(oddNums, 15)).to.equal(4);
    expect(recurBSearchIdx(oddNums, 19)).to.equal(8);
    expect(recurBSearchIdx(evenNums, 12)).to.equal(1);
    expect(recurBSearchIdx(evenNums, 15)).to.equal(4);
    expect(recurBSearchIdx(evenNums, 20)).to.equal(9);
  });
  it('should return -1 when targetNum is not contained in nums', () => {
    expect(recurBSearchIdx(oddNums, 10)).to.equal(-1);
    expect(recurBSearchIdx(oddNums, 20)).to.equal(-1);
    expect(recurBSearchIdx(evenNums, 10)).to.equal(-1);
    expect(recurBSearchIdx(evenNums, 21)).to.equal(-1);
    expect(recurBSearchIdx(empty, 15)).to.equal(-1);
  });
});
// Problem 4 -- Recursive Binary Search (Index, Version 2)
describe('recurBSearchIdxV2', () => {
  // it should accept an sorted array of numbers and a targetNum as an arg
  it('should return the index of targetNum when targetNum is contained in nums', () => {
    expect(recurBSearchIdxV2(oddNums, 11)).to.equal(0);
    expect(recurBSearchIdxV2(oddNums, 15)).to.equal(4);
    expect(recurBSearchIdxV2(oddNums, 19)).to.equal(8);
    expect(recurBSearchIdxV2(evenNums, 12)).to.equal(1);
    expect(recurBSearchIdxV2(evenNums, 15)).to.equal(4);
    expect(recurBSearchIdxV2(evenNums, 20)).to.equal(9);
  });
  it('should return -1 when targetNum is not contained in nums', () => {
    expect(recurBSearchIdxV2(oddNums, 10)).to.equal(-1);
    expect(recurBSearchIdxV2(oddNums, 20)).to.equal(-1);
    expect(recurBSearchIdxV2(evenNums, 10)).to.equal(-1);
    expect(recurBSearchIdxV2(evenNums, 21)).to.equal(-1);
    expect(recurBSearchIdxV2(empty, 15)).to.equal(-1);
  });
});
// Problem 5 -- Iterative Binary Search (Index)
describe('iterBSearchIdx', () => {
  // it should accept an sorted array of numbers and a targetNum as an arg
  it('should return the index of targetNum when targetNum is contained in nums', () => {
    expect(iterBSearchIdx(oddNums, 11)).to.equal(0);
    expect(iterBSearchIdx(oddNums, 15)).to.equal(4);
    expect(iterBSearchIdx(oddNums, 19)).to.equal(8);
    expect(iterBSearchIdx(evenNums, 12)).to.equal(1);
    expect(iterBSearchIdx(evenNums, 15)).to.equal(4);
    expect(iterBSearchIdx(evenNums, 20)).to.equal(9);
  });
  it('should return -1 when targetNum is not contained in nums', () => {
    expect(iterBSearchIdx(oddNums, 10)).to.equal(-1);
    expect(iterBSearchIdx(oddNums, 20)).to.equal(-1);
    expect(iterBSearchIdx(evenNums, 10)).to.equal(-1);
    expect(iterBSearchIdx(evenNums, 21)).to.equal(-1);
    expect(iterBSearchIdx(empty, 15)).to.equal(-1);
  });
});