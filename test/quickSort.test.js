const { quickSort } = require('../algorithms/quickSort');

const data = [1, 4, 5, 6, 45, 4, 3, 42, 4];
const insData = [1, 3, 4, 4, 4, 5, 6, 42, 45];
const descData = [45, 42, 6, 5, 4, 4, 4, 3, 1];
const invalidArray = [1, 3, 'fef', {name: 'quick'}];

describe('Test QuickSort', () => {
  test('Invalid array', () => {
    quickSort(invalidArray, true, null);
  });

  test('Sort desc', () => {
    quickSort(data, true);
    expect(data).toEqual(descData);
  });

  test('Sort ins', () => {
    quickSort(data, false);
    expect(data).toEqual(insData);
  });
});

const data2 = [{age: 1}, {age: 4}, {age: 5}, {age: 6}, {age: 45}, {age: 4}, {age: 3}, {age: 42}, {age: 4}];
const insData2 = [{age: 1}, {age: 3}, {age: 4}, {age: 4}, {age: 4}, {age: 5}, {age: 6}, {age: 42}, {age: 45}];
const descData2 = [{age: 45}, {age: 42}, {age: 6}, {age: 5}, {age: 4}, {age: 4}, {age: 4}, {age: 3}, {age: 1}];

describe('Test QuickSort with sort key', () => {
  test('Sort desc', () => {
    quickSort(data2, true,'age');
    expect(data2).toEqual(descData2);
  });

  test('Sort ins', () => {
    quickSort(data2, false,'age');
    expect(data2).toEqual(insData2);
  });
});
