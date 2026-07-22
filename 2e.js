"use strict";
var MathUtils;
(function (MathUtils) {
    function add(a, b) {
        return a + b;
    }
    MathUtils.add = add;
    function subtract(a, b) {
        return a - b;
    }
    MathUtils.subtract = subtract;
})(MathUtils || (MathUtils = {}));
// Using the namespace
console.log("Namespace Add:", MathUtils.add(10, 5));
console.log("Namespace Subtract:", MathUtils.subtract(10, 5));
