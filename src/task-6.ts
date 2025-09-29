// Task 6 — generics
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const n = getFirstElement<number>([1, 2, 3]);
const s = getFirstElement<string>(['a', 'b', 'c']);
const b = getFirstElement<boolean>([true, false, true]);

console.log('Task 6:');
console.log(n, s, b);

// const bad = getFirstElement([1, 'a']); // ошибка TS
// const ok = getFirstElement<number | string>([1, 'a']);

export {};
