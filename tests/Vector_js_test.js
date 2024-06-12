import { Vector } from 'Vector.js';

var testVectorA = new Vector([1, 2, 3]);

console.log(testVectorA);

console.log(testVectorA.comp);

var testVectorB = new Vector([4, 5, 6]);

console.log(testVectorB);

console.log(testVectorB.comp);

console.log(testVectorA.Add(testVectorB));

console.log(testVectorA.Sub(testVectorB));

console.log(testVectorA.dot_product(testVectorB));

console.log(testVectorA.cross_product(testVectorB));