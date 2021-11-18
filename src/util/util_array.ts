export function fillTo<T>(arr: Array<T>, val: T, to: number) {
  while (arr.length < to) {
    arr.push(val);
  }
  return arr;
}
