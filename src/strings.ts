export function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

export function isPalindrome(str: string): boolean {
  const lower = str.toLowerCase();
  return lower === lower.split('').reverse().join('');
}

