// Task 7 — Promise typing
function getMessage(): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => resolve('Hello from TS'), 1000);
  });
}

console.log('Task 7:');
getMessage().then((result) => console.log(result));

export {};
