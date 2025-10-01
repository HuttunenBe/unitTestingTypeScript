export function mergedArray(a: number[], b: number[]): number[] {
  return [...a, ...b];
}

export function joinStrings(a: string[], b: string[]): string[] {
  return [...a, ...b];
}

export function sumArrays(a: number[], b: number[]): number {
  return [...a, ...b].reduce((acc, num) => acc + num, 0);
}

export function concatAndUppercase(a: string[], b: string[]): string[] {
  return [...a, ...b].map((str) => str.toUpperCase());
}
