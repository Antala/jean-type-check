## Description

Provides functionality for type checking 

## Code Example

```javascript
require(["path/to/TypeCheck"], function(TypeCheck){
    TypeCheck.isString(""); // true
    TypeCheck.isBoolean(true); // true
    TypeCheck.isNumber(1); // true
    TypeCheck.isObject({ name: "jean" }); // true
    TypeCheck.isEmptyObject({}); // true
    TypeCheck.isFunction(function(){}); // true
    TypeCheck.isDefined(undefined); //true
    TypeCheck.isArrayTypeOf(["1","2", "3"]);
});
```

## Installation

`npm install jean-type-check --save --legacy-bundling`

## API Reference

### isString(o) 

Checks if passed element type is string

**Parameters**
 - **o**: `Any` - element to be checked

**Returns**
- `Boolean` - True, if element type is string, false otherwise


### isBoolean(o) 

Checks if passed element type is boolean

**Parameters**
- **o**: `Any` - element to be checked

**Returns**
- `Boolean` - True, if element type is boolean, false otherwise


### isNumber(o) 

Checks if passed element type is boolean

**Parameters**
- **o**: `Any` - element to be checked

**Returns**
-  `Boolean` - True, if element type is boolean, false otherwise


### isObject(o) 

Checks if passed element is an object

**Parameters**
- **o**: `Any` - element to be checked

**Returns**
 - `Boolean` - True, if element is object, false otherwise


### isEmptyObject(o) 

Checks if passed element is an empty object

**Parameters**
- **o**: `Any` - element to be checked

**Returns** 
- `Boolean` - True, if element is empty, false otherwise


### isFunction(o) 

Checks if passed element is a function

**Parameters**
- **o**: `Any` - element to be checked

- **Returns** `Boolean` - True, if element is a function, false otherwise


### isDefined(o) 

Checks if passed element is defined

**Parameters**
- **o**: `Any` - element to be checked

**Returns**
- `Boolean` - True, if element is defined, false otherwise


### isArrayTypeOf(array, type) 

Checks if all elements in this array have the same type

**Parameters**
- **array**: `Any[]`, Array to be checked
- **type**: `String`, Type of elements in this array. Valid values are all which matches 
                       to the typeof operator

**Returns**
- `Boolean` -  True, if element is defined, false otherwise

## Tests

Open spec/spec-runner.html in browser to see the test cases.

## License

MIT