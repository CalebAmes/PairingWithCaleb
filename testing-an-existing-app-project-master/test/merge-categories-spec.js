const { expect } = require('chai');
const { mergeCategories } = require('../merge-categories');

describe("mergeCategories()", () => {
  context("Using <li> tags", () => {
    const template = `
      <div>
        <ul>
          <!-- Content here -->
        </ul>
      </div>
    `;

    it("should return no <li>s for no categories", () => {
      // expect.fail('please write this test');
      const tagName = "<li>"
      const result  = mergeCategories(template, [], tagName)
      expect(result).to.not.include("<li>")
    });

    it("should return a single <li> for one category", () => {
      // expect.fail('please write this test');
      const tagName = "<li>"
      const result = mergeCategories(template, ["one"], tagName)
      expect(result).to.includes("<li>")
    });

    it("should return an <li> for each category", () => {
      const tagName = "<li>"
      const result = mergeCategories(template, ["one", "two"], tagName)
      expect(result).to.includes("<li>")
    });
  });

  context("using <option> tags", () => {
    const template = `
      <div>
        <select>
          <!-- Content here -->
        </select>
      </div>
    `;

    it("should return no <option>s for no categories", () => {
      expect.fail('please write this test');
    });

    it("should return a single <option> for one category", () => {
      expect.fail('please write this test');
    });

    it("should return an <option> for each category", () => {
      expect.fail('please write this test');
    });
  });
});
