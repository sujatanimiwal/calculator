const multiplyTest = require('./src/methods/multiply');


test('that is true', () => {
    expect(true).toBe(true);
});

test('9 multiplied by 2 equals 18', () => {
    expect(multiplyTest(2, 9)).toBe(18);
});
