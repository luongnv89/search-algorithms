/* jshint esversion: 6 */
const MERGE_SORT = 'MERGE_SORT';
const QUICK_SORT = 'QUICK_SORT';
const BUBBLE_SORT = 'BUBBLE_SORT';
const INSERTION_SORT = 'INSERTION_SORT';

const compare = (a, b, sortKey = null) => {
  if (sortKey) {
    return a[sortKey] > b[sortKey];
  }
  return a > b;
};

const shiftArrayToRight = (data, firstIndex, lastIndex) => {
  const newArray = data.slice(0);
  for (let index = lastIndex; index > firstIndex; index -= 1) {
    newArray[index] = data[index - 1];
  }
  return newArray;
};

const mergeSort = (data, desc, sortKey = null) => {
  console.log('Merge sort', data);
  return data;
};

const quickSort = (data, desc, sortKey = null) => {
  console.log('quick sort', data);
  return data;
};

/**
 * Bubble sort - O(n^2)
 * @param {Array} data Array of data
 * @param {Boolean} desc true - desc, false - inscrease
 * @param {Strign||null} sortKey sorted attribute
 */
const bubbleSort = (data, desc, sortKey = null) => {
  const sortedData = data.slice(0);
  for (let index1 = 0; index1 < sortedData.length - 1; index1 += 1) {
    for (let index = index1 + 1; index < sortedData.length; index += 1) {
      const comp = compare(sortedData[index1], sortedData[index], sortKey);
      if ((desc && !comp) || (!desc && comp)) {
        const temp = sortedData[index1];
        sortedData[index1] = sortedData[index];
        sortedData[index] = temp;
      }
    }
  }
  return sortedData;
};
/**
 * Insertion sort - O(n^2)
 * @param {Array} data Array of data
 * @param {Boolean} desc true - desc, false - inscrease
 * @param {Strign||null} sortKey sorted attribute
 */
const insertionSort = (data, desc, sortKey = null) => {
  let sortedData = data.slice(0);
  for (let index1 = 0; index1 < sortedData.length; index1 += 1) {
    const currentElem = sortedData[index1];
    const comp0 = compare(sortedData[0], currentElem, sortKey);
    if ((desc && !comp0) || (!desc && comp0)) {
      // current element need to be in the head
      // Move each element 1 step
      sortedData = shiftArrayToRight(sortedData, 0, index1);
      sortedData[0] = currentElem;
    } else {
      for (let index = 0; index < index1; index += 1) {
        const comp1 = compare(sortedData[index], currentElem, sortKey);
        const comp2 = compare(sortedData[index + 1], currentElem, sortKey);
        if ((comp1 && !comp2) || (!comp1 && comp2)) {
          sortedData = shiftArrayToRight(sortedData, index + 1, index1);
          sortedData[index + 1] = currentElem;
          break;
        }
      }
    }
  }
  return sortedData;
};

/**
 * Sort an array
 *
 * @param {Array} data Data to be sorted
 * @param {String} alg Algorithm Type
 * @param {Boolean} desc true - desc, false - inscrease
 * @param {Strign||null} sortKey attribute to use to sort
 */
const multiSort = (data, alg, desc, sortKey = null) => {
  if (data.constructor !== Array) {
    console.error('Invalid data type - not array!');
    return null;
  }

  if (typeof desc !== 'boolean') {
    console.error(`Sorting direction must be a boolean variable: ${desc}`);
    return null;
  }

  if (data.length < 2) {
    console.log('Nothing to sort');
    return data;
  }

  switch (alg) {
    case MERGE_SORT:
      return mergeSort(data, desc, sortKey);
    case QUICK_SORT:
      return quickSort(data, desc, sortKey);
    case BUBBLE_SORT:
      return bubbleSort(data, desc, sortKey);
    case INSERTION_SORT:
      return insertionSort(data, desc, sortKey);
    default:
      console.error(`Algorithm is not supported: ${alg}`);
      return null;
  }
};

module.exports = {
  MERGE_SORT,
  QUICK_SORT,
  BUBBLE_SORT,
  INSERTION_SORT,
  multiSort,
  mergeSort,
  quickSort,
  bubbleSort,
  insertionSort,
};
