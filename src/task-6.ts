// Задача 6. Обобщённые типы (Generics)

function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

// Явные дженерики в вызовах:
const n = getFirstElement<number>([1, 2, 3]); // number | undefined
const s = getFirstElement<string>(['a', 'b', 'c']); // string | undefined
const b = getFirstElement<boolean>([true, false, true]); // boolean | undefined

console.log(n, s, b);

// Смешанный массив без объединённого типа — ошибка:
// const bad = getFirstElement([1, 'a']);
// Корректный способ:
// const ok = getFirstElement<number | string>([1, 'a']);

export {};
