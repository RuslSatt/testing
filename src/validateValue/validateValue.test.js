const validateValue = require("./validateValue");

describe("validate value test", () => {
    test("validate value", () => {
        expect(validateValue(50)).toBe(true);
    });
    test("validate value min", () => {
        expect(validateValue(0)).toBe(false);
    });
    test("validate value max", () => {
        expect(validateValue(100)).toBe(false);
    });
    test("validate value incorrect", () => {
        expect(validateValue(101)).toBe(false);
    });
});
