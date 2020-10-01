const { add } = require('.');

test('that is true', () => {
    expect(true).toBe(true);
});

describe('Add function', () => {
	it('should return correct result', () => {
		expect(add(1,2)).toBe(3);
	});

	it('should return correct result when one of args is negative', () => {
		expect(add(-1,1)).toBe(0);
	});

	it('should return correct result when both of args are negative', () => {
		expect(add(-1,-1)).toBe(-2);
	});

	it('should return correct result when both of args are negative', () => {
		expect(add(-1,-3)).toBe(-4);
	});
});

test("multiply two numbers", () => {
  expect(3 * 2).toBe(6);
});
