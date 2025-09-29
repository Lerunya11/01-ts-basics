// Задача 2. Интерфейсы

interface Product {
  readonly id: number; // только для чтения
  title: string;
  description?: string; // необязательное поле
}

const product: Product = {
  id: 1,
  title: 'Tablet',
  description: 'Compact and fast',
};

console.log(`Product: ${JSON.stringify(product)}`);

export {};
