export function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

export function isPalindrome(str: string): boolean {
  const lower = str.toLowerCase();
  return lower === lower.split("").reverse().join("");
}

export function countVowels(str: string): number {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (const char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}
