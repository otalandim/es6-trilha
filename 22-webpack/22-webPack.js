//import * as R from 'ramda';

const R = require('ramda');
const arr1 = [1,2,2,3,3,3,4,4,4,4,5,5,5,5,5];
const arr2 = [6,6,6,6,6,6,7,7,7,7,7,7,7,1];

const arr3 = R.union(arr1, arr2);

console.log(arr3);