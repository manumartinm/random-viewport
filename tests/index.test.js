const { random } = require('../index');

describe("test for the random function", () => {
    test("should return a json", () => {
        expect(typeof(random())).toBe("object");
    });
});

describe("test the properties of the return object", () => {
    test("should return a json containing a user agent, width and height", () => {
        expect(random()).toHaveProperty("userAgent");
        expect(random()).toHaveProperty("width");
        expect(random()).toHaveProperty("height");
    });
    test("typeof width should be a number", () => {
        expect(typeof(random().width)).toBe("number");
    });
    test("typeof height should be a number", () => {
        expect(typeof(random().height)).toBe("number");
    });
    test("typeof user agent should be a string", () => {
        expect(typeof(random().userAgent)).toBe("string");
    });
})