import {fillTo} from '../lib/index';

test('normal fill to', () => {
  const arr = [1, 2,];
  const _rst = [1, 2, 0, 0, 0];
  fillTo(arr, 0, 5);
  console.log(arr);
  expect(!(arr > _rst || _rst > arr)).toBe(true);
  expect(arr.length).toBe(5);
})

test('normal fill not enough', () => {
  const arr = [1, 2];
  const _rst = [1, 2];
  fillTo(arr, 0, 2);
  console.log(arr);
  expect(!(arr > _rst || _rst > arr)).toBe(true);
  expect(arr.length).toBe(2);
})
