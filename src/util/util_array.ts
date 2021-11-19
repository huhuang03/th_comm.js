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
