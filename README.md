# search-algorithms
Collection of ready-to-use implementation of search algorithms such as: merge sort, quick sort, bubble sort, insertion sort,

## Install

`npm i search-algorithms`

## Usage

```
const { mergeSort } = require('search-algorithms');

const data = [1, 4, 5, 6, 45, 4, 3, 42, 4];
const sortedData = mergeSort(data, true);
// 45, 42, 6, 5, 4, 4, 4, 3, 1
```

## APIs

### multiSort

```
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

```
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

```
/**
 * Insertion sort - O(n^2)
 * @param {Array} data Array of data
 * @param {Boolean} desc true - desc, false - inscrease
 * @param {Strign||null} sortKey sorted attribute
 */
 ```