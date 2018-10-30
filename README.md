# search-algorithms
Collection of ready-to-use implementation of search algorithms such as: merge sort, quick sort, bubble sort, insertion sort,

## Install

`npm i search-algorithms`

## Usage

```javascript
const { bubbleSort } = require('search-algorithms');

const data = [1, 4, 5, 6, 45, 4, 3, 42, 4];
const sortedData = bubbleSort(data, false);
console.log(sortedData);
// [ 1, 3, 4, 4, 4, 5, 6, 42, 45 ]

const data2 = [{"id":1}, {"id":4}, {"id":5}, {"id":6}, {"id":45}, {"id":4}, {"id":3}, {"id":42}, {"id":4}];
const sortedData2 = bubbleSort(data2, false, "id");
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

### multiSort

```javascript
/**
 * Sort an array
 *
 * @param {Array} data Data to be sorted
 * @param {String} alg Algorithm Type
 * @param {Boolean} desc true - desc, false - inscrease
 * @param {Strign||null} sortKey attribute to use to sort
 */
const multiSort = (data, alg, desc, sortKey = null)
```
With the `alg` can be: `QUICK_SORT, MERGE_SORT, BUBBLE_SORT, INSERTION_SORT`


### mergeSort

### bubbleSort

```javascript
/**
 * Bubble sort - O(n^2)
 * @param {Array} data Array of data
 * @param {Boolean} desc true - desc, false - inscrease
 * @param {Strign||null} sortKey sorted attribute
 */
const bubbleSort = (data, desc, sortKey = null)
```

### quickSort

### insertionSort

```javascript
/**
 * Insertion sort - O(n^2)
 * @param {Array} data Array of data
 * @param {Boolean} desc true - desc, false - inscrease
 * @param {Strign||null} sortKey sorted attribute
 */
 ```