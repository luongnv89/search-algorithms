/* jshint esversion: 6 */
const { multiSort, QUICK_SORT, MERGE_SORT, BUBBLE_SORT, INSERTION_SORT } = require('./index');

const data = [1, 4, 5, 6, 45, 4, 3, 42, 4];
const insData = [1, 3, 4, 4, 4, 5, 6, 42, 45];
const descData = [45, 42, 6, 5, 4, 4, 4, 3, 1];

describe('Test input', () => {
  test('Input data type is not valid', () => {
    expect(multiSort('hehe', MERGE_SORT, true, 'sort_key')).toBeNull();
  });

  test('Algorithm does not exist', () => {
    expect(multiSort(data, 'COUNTING_SORT', true, 'sort_key')).toBeNull();
  });

  test('Sort direction must be a boolean variable', () => {
    expect(multiSort(data, MERGE_SORT, 'true', 'sort_key')).toBeNull();
  });
});

describe('Test sort', () => {
  test('MERGE sort', () => {
    const sortedData = multiSort(data, MERGE_SORT, true, 'sort_key');
    console.log(`Sorted Data: ${sortedData}`);
  });

  test('QUICK sort', () => {
    const sortedData = multiSort(data, QUICK_SORT, true, 'sort_key');
    console.log(`Sorted Data: ${sortedData}`);
  });

  test('BUBBLE sort', () => {
    expect(multiSort(data, BUBBLE_SORT, false)).toEqual(insData);
    expect(multiSort(data, BUBBLE_SORT, true)).toEqual(descData);
  });

  test('INSERTION sort', () => {
    expect(multiSort(data, INSERTION_SORT, false)).toEqual(insData);
    expect(multiSort(data, INSERTION_SORT, true)).toEqual(descData);
  });
});
