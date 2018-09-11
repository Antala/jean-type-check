// jscs:disable
define([
    "TypeCheck"
], function (TypeCheck) {
    describe('TypeCheck.spec.js', function () {
        describe("TypeCheck.isString", function () {
            var testString = "test-string",
                testBoolean = true,
                testNumber = 1,
                testObject = {},
                testArray = [],
                testNull = null,
                testFunction = function () { },
                testUndefined;

            it("Responds with true, if provided element is a string", function () {
                expect(TypeCheck.isString(testString)).toBe(true);
            });
            it("Responds with false, if provided element is a boolean", function () {
                expect(TypeCheck.isString(testBoolean)).toBe(false);
            });
            it("Responds with false, if provided element is a nummber", function () {
                expect(TypeCheck.isString(testNumber)).toBe(false);
            });
            it("Responds with false, if provided element is an object", function () {
                expect(TypeCheck.isString(testObject)).toBe(false);
            });
            it("Responds with false, if provided element is an array", function () {
                expect(TypeCheck.isString(testArray)).toBe(false);
            });
            it("Responds with false, if provided element is null", function () {
                expect(TypeCheck.isString(testNull)).toBe(false);
            });
            it("Responds with false, if provided element is a function", function () {
                expect(TypeCheck.isString(testFunction)).toBe(false);
            });
            it("Responds with false, if provided element is undefined", function () {
                expect(TypeCheck.isString(testUndefined)).toBe(false);
            });
            it("Responds with false, if nothing is provided", function () {
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

            it("Responds with true, if provided element is a boolean", function () {
                expect(TypeCheck.isBoolean(testBoolean)).toBe(true);
            });
            it("Responds with false, if provided element is a string", function () {
                expect(TypeCheck.isBoolean(testString)).toBe(false);
            });
            it("Responds with false, if provided element is a number", function () {
                expect(TypeCheck.isBoolean(testNumber)).toBe(false);
            });
            it("Responds with false, if provided element is an object", function () {
                expect(TypeCheck.isBoolean(testObject)).toBe(false);
            });
            it("Responds with false, if provided element is an array", function () {
                expect(TypeCheck.isBoolean(testArray)).toBe(false);
            });
            it("Responds with false, if provided element is null", function () {
                expect(TypeCheck.isBoolean(testNull)).toBe(false);
            });
            it("Responds with false, if provided element is a function", function () {
                expect(TypeCheck.isBoolean(testFunction)).toBe(false);
            });
            it("Responds with false, if provided element is undefined", function () {
                expect(TypeCheck.isBoolean(testUndefined)).toBe(false);
            });
            it("Responds with false, if nothing is provided", function () {
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
            it("Responds with true, if provided element is a number", function () {
                expect(TypeCheck.isNumber(testNumber)).toBe(true);
            });
            it("Responds with false, if provided element is a boolean", function () {
                expect(TypeCheck.isNumber(testBoolean)).toBe(false);
            });
            it("Responds with false, if provided element is a string", function () {
                expect(TypeCheck.isNumber(testString)).toBe(false);
            });
            it("Responds with false, if provided element is an object", function () {
                expect(TypeCheck.isNumber(testObject)).toBe(false);
            });
            it("Responds with false, if provided element is an array", function () {
                expect(TypeCheck.isNumber(testArray)).toBe(false);
            });
            it("Responds with false, if provided element is null", function () {
                expect(TypeCheck.isNumber(testNull)).toBe(false);
            });
            it("Responds with false, if provided element is a function", function () {
                expect(TypeCheck.isNumber(testFunction)).toBe(false);
            });
            it("Responds with false, if provided element is undefined", function () {
                expect(TypeCheck.isNumber(testUndefined)).toBe(false);
            });
            it("Responds with false, if nothing is provided", function () {
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
            it("Responds with true, if provided element is a function", function () {
                expect(TypeCheck.isFunction(testFunction)).toBe(true);
            });
            it("Responds with false, if provided element is a number", function () {
                expect(TypeCheck.isFunction(testNumber)).toBe(false);
            });
            it("Responds with false, if provided element is a boolean", function () {
                expect(TypeCheck.isFunction(testBoolean)).toBe(false);
            });
            it("Responds with false, if provided element is a string", function () {
                expect(TypeCheck.isFunction(testString)).toBe(false);
            });
            it("Responds with false, if provided element is an object", function () {
                expect(TypeCheck.isFunction(testObject)).toBe(false);
            });
            it("Responds with false, if provided element is an array", function () {
                expect(TypeCheck.isFunction(testArray)).toBe(false);
            });
            it("Responds with false, if provided element is null", function () {
                expect(TypeCheck.isFunction(testNull)).toBe(false);
            });
            it("Responds with false, if provided element is undefined", function () {
                expect(TypeCheck.isFunction(testUndefined)).toBe(false);
            });
            it("Responds with false, if nothing is provided", function () {
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
            it("Responds with true, if provided element is an object", function () {
                expect(TypeCheck.isObject(testObject)).toBe(true);
            });
            it("Responds with true, if provided element is an object with keys", function () {
                expect(TypeCheck.isObject(objWithKeys)).toBe(true);
            });
            it("Responds with false, if provided element is a number", function () {
                expect(TypeCheck.isObject(testNumber)).toBe(false);
            });
            it("Responds with false, if provided element is a boolean", function () {
                expect(TypeCheck.isObject(testBoolean)).toBe(false);
            });
            it("Responds with false, if provided element is a string", function () {
                expect(TypeCheck.isObject(testString)).toBe(false);
            });
            it("Responds with false, if provided element is an array", function () {
                expect(TypeCheck.isObject(testArray)).toBe(false);
            });
            it("Responds with false, if provided element is null", function () {
                expect(TypeCheck.isObject(testNull)).toBe(false);
            });
            it("Responds with false, if provided element is a function", function () {
                expect(TypeCheck.isObject(testFunction)).toBe(false);
            });
            it("Responds with false, if provided element is undefined", function () {
                expect(TypeCheck.isObject(testUndefined)).toBe(false);
            });
            it("Responds with false, if nothing is provided", function () {
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
            it("Responds with true, if provided element is a empty object", function () {
                expect(TypeCheck.isEmptyObject(testObject)).toBe(true);
            });
            it("Responds with false, if provided element is an object with keys", function () {
                expect(TypeCheck.isEmptyObject(objWithKeys)).toBe(false);
            });
            it("Responds with false, if provided element is a number", function () {
                expect(TypeCheck.isEmptyObject(testNumber)).toBe(false);
            });
            it("Responds with false, if provided element is a boolean", function () {
                expect(TypeCheck.isEmptyObject(testBoolean)).toBe(false);
            });
            it("Responds with false, if provided element is a string", function () {
                expect(TypeCheck.isEmptyObject(testString)).toBe(false);
            });
            it("Responds with false, if provided element is an array", function () {
                expect(TypeCheck.isEmptyObject(testArray)).toBe(false);
            });
            it("Responds with false, if provided element is null", function () {
                expect(TypeCheck.isEmptyObject(testNull)).toBe(false);
            });
            it("Responds with false, if provided element is a function", function () {
                expect(TypeCheck.isEmptyObject(testFunction)).toBe(false);
            });
            it("Responds with false, if provided element is undefined", function () {
                expect(TypeCheck.isEmptyObject(testUndefined)).toBe(false);
            });
            it("Responds with false, if nothing is provided", function () {
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
            it("Responds with true, if provided element is am empty object", function () {
                expect(TypeCheck.isDefined(testObject)).toBe(true);
            });
            it("Responds with true, if provided element is a number", function () {
                expect(TypeCheck.isDefined(testNumber)).toBe(true);
            });
            it("Responds with true, if provided element is a boolean", function () {
                expect(TypeCheck.isDefined(testBoolean)).toBe(true);
            });
            it("Responds with true, if provided element is a string", function () {
                expect(TypeCheck.isDefined(testString)).toBe(true);
            });
            it("Responds with true, if provided element is an array", function () {
                expect(TypeCheck.isDefined(testArray)).toBe(true);
            });
            it("Responds with true, if provided element is a function", function () {
                expect(TypeCheck.isDefined(testFunction)).toBe(true);
            });
            it("Responds with false, if provided element is null", function () {
                expect(TypeCheck.isDefined(testNull)).toBe(false);
            });
            it("Responds with false, if provided element is undefined", function () {
                expect(TypeCheck.isDefined(testUndefined)).toBe(false);
            });
            it("Responds with false, if nothing is provided", function () {
                expect(TypeCheck.isDefined()).toBe(false);
            });
        });
        describe("TypeCheck.isArray", function () {
            var testString = "test-string",
                testBoolean = true,
                testNumber = 1,
                testObject = {},
                objWithKeys = { name: "name" },
                testArray = [],
                testFunction = function () { },
                testNull = null,
                testUndefined;
            it("Responds with true, if provided element is an array", function () {
                expect(TypeCheck.isArray(testArray)).toBe(true);
            });
            it("Responds with false, if provided element is a number", function () {
                expect(TypeCheck.isArray(testNumber)).toBe(false);
            });
            it("Responds with false, if provided element is a boolean", function () {
                expect(TypeCheck.isArray(testBoolean)).toBe(false);
            });
            it("Responds with false, if provided element is a string", function () {
                expect(TypeCheck.isArray(testString)).toBe(false);
            });
            it("Responds with false, if provided element is an object", function () {
                expect(TypeCheck.isArray(testObject)).toBe(false);
            });
            it("Responds with false, if provided element is null", function () {
                expect(TypeCheck.isArray(testNull)).toBe(false);
            });
            it("Responds with false, if provided element is a function", function () {
                expect(TypeCheck.isArray(testFunction)).toBe(false);
            });
            it("Responds with false, if provided element is undefined", function () {
                expect(TypeCheck.isArray(testUndefined)).toBe(false);
            });
            it("Responds with false, if nothing is provided", function () {
                expect(TypeCheck.isArray()).toBe(false);
            });
        });
        describe("TypeCheck.isArrayTypeOf", function () {
            var stringArray = ["a", "b", "c"];
            var numberArray = [1, 2, 3];

            it("Responds with true, if provided array elements are strings", function () {
                expect(TypeCheck.isArrayTypeOf(stringArray, "string")).toBe(true);
            });
            it("Responds with true, if provided array elements are numbers", function () {
                expect(TypeCheck.isArrayTypeOf(numberArray, "number")).toBe(true);
            });
            it("Responds with false, if provided array elements are strings but type should be number", function () {
                expect(TypeCheck.isArrayTypeOf(stringArray, "number")).toBe(false);
            });
            it("Responds with false, if provided array elements are numbers but type should be string", function () {
                expect(TypeCheck.isArrayTypeOf(numberArray, "string")).toBe(false);
            });
            it("Responds with false, if provided array elements are numbers but type should be undefined", function () {
                expect(TypeCheck.isArrayTypeOf(numberArray, "undefined")).toBe(false);
            });
            it("Throws exception, if no valid type is provided", function () {
                try {
                    TypeCheck.isArrayTypeOf(numberArray, 123);
                } catch (e) {
                    expect(e instanceof Error).toBe(true);
                }
            });
            it("Throws exception, if no type is provided", function () {
                try {
                    TypeCheck.isArrayTypeOf(stringArray);
                } catch (e) {
                    expect(e instanceof Error).toBe(true);
                }
            });
            it("Throws exception, if empty array is provided", function () {
                expect(TypeCheck.isArrayTypeOf([], "string")).toBe(false);
            });
            it("Throws exception, if something else than an array is provided", function () {
                try {
                    TypeCheck.isArrayTypeOf({}, "string");
                } catch (e) {
                    expect(e instanceof Error).toBe(true);
                }
            });
        });
        describe("TypeCheck.isInstanceOf", function () {
            function A(name) { this.name = name; }
            it("Responds with true, if the provided object is an instance of the provided function", function () {
                expect(TypeCheck.isInstanceOf(new A(), A)).toBe(true);
            });
            it("Responds with false, if the provided object is an instance of the provided function", function () {
                expect(TypeCheck.isInstanceOf({}, A)).toBe(false);
            });
            it("Throws exception, if there is no object provided", function () {
                try {
                    TypeCheck.isInstanceOf(undefined, A);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
            });
            it("Throws exception, if there is no function provided", function () {
                try {
                    TypeCheck.isInstanceOf({}, undefined);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
            });
        });
        describe("TypeCheck.isEnumValue", function () {
            var e = {
                id: "123",
                name: "test",
                test: 123
            };
            it("Responds with true, if the provided value is an instance of the provided object", function () {
                expect(TypeCheck.isEnumValue("123", e)).toBe(true);
                expect(TypeCheck.isEnumValue(123, e)).toBe(true);
            });
            it("Responds with false, if the provided value is an instance of the provided object", function () {
                expect(TypeCheck.isEnumValue("abc", e)).toBe(false);
            });
            it("Throws exception, if there is no object provided", function () {
                try {
                    TypeCheck.isEnumValue("132", undefined);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
            });
            it("Throws exception, if there is no string provided", function () {
                try {
                    TypeCheck.isEnumValue(undefined, e);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
            });
        });
    });
});

