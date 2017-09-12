define([
    "TypeCheck"
], function (TypeCheck) {
    describe('TypeCheck.spec.js', function () {
        describe("TypeCheck", function () {
            it("TODO: Check if all methods are available | EXPECTATION: TypeCheck has all necessary methods", function () {
                var numberOfMethods = 8;
                expect(TypeCheck.isString).not.toBeUndefined();
                expect(TypeCheck.isBoolean).not.toBeUndefined();
                expect(TypeCheck.isNumber).not.toBeUndefined();
                expect(TypeCheck.isEmptyObject).not.toBeUndefined();
                expect(TypeCheck.isObject).not.toBeUndefined();
                expect(TypeCheck.isFunction).not.toBeUndefined();
                expect(TypeCheck.isDefined).not.toBeUndefined();
                expect(TypeCheck.isArrayTypeOf).not.toBeUndefined();
                var methodCount = Object.keys(TypeCheck).length;
                expect(methodCount).toEqual(numberOfMethods);
            });
        });
        describe("TypeCheck.isString", function () {
            var testString = "test-string",
                testBoolean = true,
                testNumber = 1,
                testObject = {},
                testArray = [],
                testNull = null,
                testFunction = function () { },
                testUndefined;

            it("TODO: Pass string | EXPECTATION: passed argument is a string", function () {
                expect(TypeCheck.isString(testString)).toBe(true);
            });
            it("TODO: Pass boolean | EXPECTATION: passed argument is not a string", function () {
                expect(TypeCheck.isString(testBoolean)).toBe(false);
            });
            it("TODO: Pass number | EXPECTATION: passed argument is not a string", function () {
                expect(TypeCheck.isString(testNumber)).toBe(false);
            });
            it("TODO: Pass object | EXPECTATION: passed argument is not a string", function () {
                expect(TypeCheck.isString(testObject)).toBe(false);
            });
            it("TODO: Pass array | EXPECTATION: passed argument is not a string", function () {
                expect(TypeCheck.isString(testArray)).toBe(false);
            });
            it("TODO: Pass null | EXPECTATION: passed argument is not a string", function () {
                expect(TypeCheck.isString(testNull)).toBe(false);
            });
            it("TODO: Pass function | EXPECTATION: passed argument is not a string", function () {
                expect(TypeCheck.isString(testFunction)).toBe(false);
            });
            it("TODO: Pass undefined | EXPECTATION: passed argument is not a string", function () {
                expect(TypeCheck.isString(testUndefined)).toBe(false);
            });
            it("TODO: Pass nothing | EXPECTATION: passed argument is not a string", function () {
                expect(TypeCheck.isString()).toBe(false);
            });
        });
        describe("TypeCheck.isBoolean", function () {
            var testString = "test-string",
                testBoolean = true,
                testNumber = 1,
                testObject = {},
                testArray = [],
                testFunction = function () { },
                testNull = null,
                testUndefined;

            it("TODO: Pass bolean | EXPECTATION: passed argument is a boolean", function () {
                expect(TypeCheck.isBoolean(testBoolean)).toBe(true);
            });
            it("TODO: Pass string | EXPECTATION: passed argument is not a boolean", function () {
                expect(TypeCheck.isBoolean(testString)).toBe(false);
            });
            it("TODO: Pass number | EXPECTATION: passed argument is not a boolean", function () {
                expect(TypeCheck.isBoolean(testNumber)).toBe(false);
            });
            it("TODO: Pass object | EXPECTATION: passed argument is not a boolean", function () {
                expect(TypeCheck.isBoolean(testObject)).toBe(false);
            });
            it("TODO: Pass array | EXPECTATION: passed argument is not a boolean", function () {
                expect(TypeCheck.isBoolean(testArray)).toBe(false);
            });
            it("TODO: Pass null | EXPECTATION: passed argument is not a boolean", function () {
                expect(TypeCheck.isBoolean(testNull)).toBe(false);
            });
            it("TODO: Pass function | EXPECTATION: passed argument is not a boolean", function () {
                expect(TypeCheck.isBoolean(testFunction)).toBe(false);
            });
            it("TODO: Pass undefined | EXPECTATION: passed argument is not a boolean", function () {
                expect(TypeCheck.isBoolean(testUndefined)).toBe(false);
            });
            it("TODO: Pass nothing | EXPECTATION: passed argument is not a boolean", function () {
                expect(TypeCheck.isBoolean()).toBe(false);
            });
        });
        describe("TypeCheck.isNumber", function () {
            var testString = "test-string",
                testBoolean = true,
                testNumber = 1,
                testObject = {},
                testArray = [],
                testFunction = function () { },
                testNull = null,
                testUndefined;
            it("TODO: Pass number | EXPECTATION: passed argument is a number", function () {
                expect(TypeCheck.isNumber(testNumber)).toBe(true);
            });
            it("TODO: Pass bolean | EXPECTATION: passed argument is not a number", function () {
                expect(TypeCheck.isNumber(testBoolean)).toBe(false);
            });
            it("TODO: Pass string | EXPECTATION: passed argument is not a number", function () {
                expect(TypeCheck.isNumber(testString)).toBe(false);
            });
            it("TODO: Pass object | EXPECTATION: passed argument is not a number", function () {
                expect(TypeCheck.isNumber(testObject)).toBe(false);
            });
            it("TODO: Pass array | EXPECTATION: passed argument is not a number", function () {
                expect(TypeCheck.isNumber(testArray)).toBe(false);
            });
            it("TODO: Pass null | EXPECTATION: passed argument is not a number", function () {
                expect(TypeCheck.isNumber(testNull)).toBe(false);
            });
            it("TODO: Pass function | EXPECTATION: passed argument is not a number", function () {
                expect(TypeCheck.isNumber(testFunction)).toBe(false);
            });
            it("TODO: Pass undefined | EXPECTATION: passed argument is not a number", function () {
                expect(TypeCheck.isNumber(testUndefined)).toBe(false);
            });
            it("TODO: Pass nothing | EXPECTATION: passed argument is not a number", function () {
                expect(TypeCheck.isNumber()).toBe(false);
            });
        });
        describe("TypeCheck.isFunction", function () {
            var testString = "test-string",
                testBoolean = true,
                testNumber = 1,
                testObject = {},
                testArray = [],
                testFunction = function () { },
                testNull = null,
                testUndefined;
            it("TODO: Pass function | EXPECTATION: passed argument is a function", function () {
                expect(TypeCheck.isFunction(testFunction)).toBe(true);
            });
            it("TODO: Pass number | EXPECTATION: passed argument is not a function", function () {
                expect(TypeCheck.isFunction(testNumber)).toBe(false);
            });
            it("TODO: Pass bolean | EXPECTATION: passed argument is not a function", function () {
                expect(TypeCheck.isFunction(testBoolean)).toBe(false);
            });
            it("TODO: Pass string | EXPECTATION: passed argument is not a function", function () {
                expect(TypeCheck.isFunction(testString)).toBe(false);
            });
            it("TODO: Pass object | EXPECTATION: passed argument is not a function", function () {
                expect(TypeCheck.isFunction(testObject)).toBe(false);
            });
            it("TODO: Pass array | EXPECTATION: passed argument is not a function", function () {
                expect(TypeCheck.isFunction(testArray)).toBe(false);
            });
            it("TODO: Pass null | EXPECTATION: passed argument is not a function", function () {
                expect(TypeCheck.isFunction(testNull)).toBe(false);
            });
            it("TODO: Pass undefined | EXPECTATION: passed argument is not a function", function () {
                expect(TypeCheck.isFunction(testUndefined)).toBe(false);
            });
            it("TODO: Pass nothing | EXPECTATION: passed argument is not a function", function () {
                expect(TypeCheck.isFunction()).toBe(false);
            });
        });
        describe("TypeCheck.isObject", function () {
            var testString = "test-string",
                testBoolean = true,
                testNumber = 1,
                testObject = {},
                objWithKeys = { name: "name" },
                testArray = [],
                testFunction = function () { },
                testNull = null,
                testUndefined;
            it("TODO: Pass empty object | EXPECTATION: passed argument is an object", function () {
                expect(TypeCheck.isObject(testObject)).toBe(true);
            });
            it("TODO: Pass object with keys | EXPECTATION: passed argument is an object", function () {
                expect(TypeCheck.isObject(objWithKeys)).toBe(true);
            });
            it("TODO: Pass number | EXPECTATION: passed argument is not an object", function () {
                expect(TypeCheck.isObject(testNumber)).toBe(false);
            });
            it("TODO: Pass bolean | EXPECTATION: passed argument is not an object", function () {
                expect(TypeCheck.isObject(testBoolean)).toBe(false);
            });
            it("TODO: Pass string | EXPECTATION: passed argument is not an object", function () {
                expect(TypeCheck.isObject(testString)).toBe(false);
            });
            it("TODO: Pass array | EXPECTATION: passed argument is not an object", function () {
                expect(TypeCheck.isObject(testArray)).toBe(false);
            });
            it("TODO: Pass null | EXPECTATION: passed argument is not an object", function () {
                expect(TypeCheck.isObject(testNull)).toBe(false);
            });
            it("TODO: Pass function | EXPECTATION: passed argument is not an object", function () {
                expect(TypeCheck.isObject(testFunction)).toBe(false);
            });
            it("TODO: Pass undefined | EXPECTATION: passed argument is not an object", function () {
                expect(TypeCheck.isObject(testUndefined)).toBe(false);
            });
            it("TODO: Pass nothing | EXPECTATION: passed argument is not an object", function () {
                expect(TypeCheck.isObject()).toBe(false);
            });
        });
        describe("TypeCheck.isEmptyObject", function () {
            var testString = "test-string",
                testBoolean = true,
                testNumber = 1,
                testObject = {},
                objWithKeys = { name: "name" },
                testArray = [],
                testFunction = function () { },
                testNull = null,
                testUndefined;
            it("TODO: Pass empty object | EXPECTATION: passed argument is an empty object", function () {
                expect(TypeCheck.isEmptyObject(testObject)).toBe(true);
            });
            it("TODO: Pass object with keys | EXPECTATION: passed argument is not an empty object", function () {
                expect(TypeCheck.isEmptyObject(objWithKeys)).toBe(false);
            });
            it("TODO: Pass number | EXPECTATION: passed argument is not an empty object", function () {
                expect(TypeCheck.isEmptyObject(testNumber)).toBe(false);
            });
            it("TODO: Pass bolean | EXPECTATION: passed argument is not an empty object", function () {
                expect(TypeCheck.isEmptyObject(testBoolean)).toBe(false);
            });
            it("TODO: Pass string | EXPECTATION: passed argument is not an empty object", function () {
                expect(TypeCheck.isEmptyObject(testString)).toBe(false);
            });
            it("TODO: Pass array | EXPECTATION: passed argument is not an empty object", function () {
                expect(TypeCheck.isEmptyObject(testArray)).toBe(false);
            });
            it("TODO: Pass null | EXPECTATION: passed argument is not an empty object", function () {
                expect(TypeCheck.isEmptyObject(testNull)).toBe(false);
            });
            it("TODO: Pass function | EXPECTATION: passed argument is not an empty object", function () {
                expect(TypeCheck.isEmptyObject(testFunction)).toBe(false);
            });
            it("TODO: Pass undefined | EXPECTATION: passed argument is not an empty object", function () {
                expect(TypeCheck.isEmptyObject(testUndefined)).toBe(false);
            });
            it("TODO: Pass nothing | EXPECTATION: passed argument is not an empty object", function () {
                expect(TypeCheck.isEmptyObject()).toBe(false);
            });
        });
        describe("TypeCheck.isDefined", function () {
            var testString = "test-string",
                testBoolean = true,
                testNumber = 1,
                testObject = {},
                testArray = [],
                testFunction = function () { },
                testNull = null,
                testUndefined;
            it("TODO: Pass empty object | EXPECTATION: passed argument is defined", function () {
                expect(TypeCheck.isDefined(testObject)).toBe(true);
            });
            it("TODO: Pass number | EXPECTATION: passed argument is defined", function () {
                expect(TypeCheck.isDefined(testNumber)).toBe(true);
            });
            it("TODO: Pass bolean | EXPECTATION: passed argument is defined", function () {
                expect(TypeCheck.isDefined(testBoolean)).toBe(true);
            });
            it("TODO: Pass string | EXPECTATION: passed argument is defined", function () {
                expect(TypeCheck.isDefined(testString)).toBe(true);
            });
            it("TODO: Pass array | EXPECTATION: passed argument is defined", function () {
                expect(TypeCheck.isDefined(testArray)).toBe(true);
            });
            it("TODO: Pass null | EXPECTATION: passed argument is undefined", function () {
                expect(TypeCheck.isDefined(testNull)).toBe(false);
            });
            it("TODO: Pass function | EXPECTATION: passed argument is defined", function () {
                expect(TypeCheck.isDefined(testFunction)).toBe(true);
            });
            it("TODO: Pass undefined | EXPECTATION: passed argument is undefined", function () {
                expect(TypeCheck.isDefined(testUndefined)).toBe(false);
            });
            it("TODO: Pass nothing | EXPECTATION: passed argument is undefined", function () {
                expect(TypeCheck.isDefined()).toBe(false);
            });
        });
        describe("TypeCheck.isArrayTypeOf", function () {
            var stringArray = ["a", "b", "c"];
            var numberArray = [1, 2, 3];

            it("TODO: Pass string array with correct type | EXPECTATION: Arrays type is <String>", function () {
                expect(TypeCheck.isArrayTypeOf(stringArray, "string")).toBe(true);
            });
            it("TODO: Pass string array with false type | EXPECTATION: Arrays type is not <String>", function () {
                expect(TypeCheck.isArrayTypeOf(stringArray, "number")).toBe(false);
            });
            it("TODO: Pass number array with correct type | EXPECTATION: Arrays type is <Number>", function () {
                expect(TypeCheck.isArrayTypeOf(numberArray, "number")).toBe(true);
            });
            it("TODO: Pass number array with false type | EXPECTATION: Arrays type is not <Number>", function () {
                expect(TypeCheck.isArrayTypeOf(numberArray, "string")).toBe(false);
            });
            it("TODO: Pass string array with undefined as type | EXPECTATION: Arrays type is not <undefiend>", function () {
                expect(TypeCheck.isArrayTypeOf(numberArray, "undefined")).toBe(false);
            });
            it("TODO: Pass string array with bullshit as type | EXPECTATION: Throws Exception", function () {
                try {
                    TypeCheck.isArrayTypeOf(numberArray, 123);
                } catch (e) {
                    expect(e instanceof Error).toBe(true);
                }
            });
            it("TODO: Pass string array without type | EXPECTATION: Throws Exception", function () {
                try {
                    TypeCheck.isArrayTypeOf(stringArray);
                } catch (e) {
                    expect(e instanceof Error).toBe(true);
                }
            });
            it("TODO: Pass empty array with correct type | EXPECTATION: Throws Exception", function () {
                expect(TypeCheck.isArrayTypeOf([], "string")).toBe(false);
            });
            it("TODO: Pass object with correct type | EXPECTATION: Throws Exception", function () {
                try {
                    TypeCheck.isArrayTypeOf({}, "string");
                } catch (e) {
                    expect(e instanceof Error).toBe(true);
                }
            });
        });
    });
});

