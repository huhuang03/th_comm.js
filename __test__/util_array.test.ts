import {fillTo} from '../lib/index';

test('normal fill to', () => {
  const arr = [1, 2,];
  const arrDump = [...arr];
  const _rst = [1, 2, 0, 0, 0];

  const newArr = fillTo(arr, 0, 5);
  expect(newArr.length).toBe(5);
  expect(!(newArr > _rst || _rst > newArr)).toBe(true);

  expect(arr.length).toBe(2);
  expect(!(arr > arrDump || arr > arrDump)).toBe(true);
})

test('normal fill not enough', () => {
  const arr = [1, 2];
  const _rst = [1, 2];
  fillTo(arr, 0, 2);
  console.log(arr);
  expect(!(arr > _rst || _rst > arr)).toBe(true);
  expect(arr.length).toBe(2);
})
