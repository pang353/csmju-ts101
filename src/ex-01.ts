function greet(name: string): string { 
  return `Hello, ${name}!`; 
} 

function sum(x: number, y: number): number {
  return x + y;
}

console.log(greet("CSMJU")); 
console.log(greet("Because of U i Shine"));

// Test sum function
console.log(`Sum of 5 + 3 = ${sum(5, 3)}`);