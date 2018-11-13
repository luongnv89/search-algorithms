# sorting-algorithms
Collection of ready-to-use implementation of some sorting algorithms such as: merge sort, quick sort, bubble sort, insertion sort,

## Install

`npm i sorting-algorithms`

## Usage

```javascript
const { quickSort } = require('sorting-algorithms'); // with xxx can be: bubble, merge, selection, insertion, quick

const data = [1, 4, 5, 6, 45, 4, 3, 42, 4];
const sortedData = quickSort(data, false);
console.log(sortedData);
// [ 1, 3, 4, 4, 4, 5, 6, 42, 45 ]

const data2 = [{"id":1}, {"id":4}, {"id":5}, {"id":6}, {"id":45}, {"id":4}, {"id":3}, {"id":42}, {"id":4}];
const sortedData2 = quickSort(data2, false, "id");
console.log("result: ", sortedData2);
/* [ { id: 1 },
  { id: 3 },
  { id: 4 },
  { id: 4 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 42 },
  { id: 45 } ]
  */
```

## APIs

```
/**
 * xxx can be: bubble, quick, merge, selection, insertion
 * @param {Array} array Array that will be sorted
 * @param {Boolean} desc true - desc, false - inscrease
 * @param {Strign||null} sortKey sorted attribute
*/
xxxSort(array, desc, sortedKey);
```