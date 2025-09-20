export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function isEven(a: number): boolean {
  return a % 2 === 0;
}

export function absolute(n: number): number {
  return n < 0 ? -n : n;
}

export function max(a: number, b: number): number {
  return a > b ? a : b;
}

export function min(a: number, b: number): number {
  return a < b ? a : b;
}

export function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

export function sumOfArray(arr: number[]): number {
  return arr.reduce((acc, n) => acc + n, 0);
}
