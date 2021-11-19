/**
 *  [1, 2, 3, 4, 5] => [[1, 2], [3, 4], [5]]
 */
export function groupByNum<T>(arr: Array<T>, num: number): Array<Array<T>> {
  const rst = [];
  let take = 0;
  while (take < arr.length) {
    const len = Math.min(num, arr.length)
    rst.push(arr.slice(take, take + len));
    take += len;
  }
  return rst;
}

export function fillTo<T>(arr: Array<T>, val: T, to: number): Array<T> {
  const rst = [...arr];
  while (rst.length < to) {
    rst.push(val);
  }
  return rst;
}

export function fillToInPlace<T>(arr: Array<T>, val: T, to: number): Array<T> {
  while (arr.length < to) {
    arr.push(val);
  }
  return arr;
}
