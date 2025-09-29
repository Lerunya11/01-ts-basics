// Task 2 — interfaces
interface Product {
  readonly id: number;
  title: string;
  description?: string;
}

const product: Product = {
  id: 1,
  title: 'Tablet',
  description: 'Compact and fast',
};

console.log('Task 2:');
console.log('Product:', JSON.stringify(product));

export {};
