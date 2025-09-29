// Task 3 — arrays
const usernames: string[] = ['alice', 'bob', 'charlie'];
const ratings: number[] = [4.5, 3.8, 5];

interface ProductItem {
  id: number;
  title: string;
}
const products: ProductItem[] = [
  { id: 1, title: 'Phone' },
  { id: 2, title: 'Laptop' },
];

console.log('Task 3:');
console.log('Usernames:', usernames);
console.log('Ratings:', ratings);
console.log('Products:', products);

export {};
