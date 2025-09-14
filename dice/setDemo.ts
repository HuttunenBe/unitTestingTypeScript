const aa: number[] = [2, 3, 4, 2, 3, 4, 4, 4, 4];

// create set from array -> removes duplicants
const bb: Set<number> = new Set(aa);
console.log(bb);
console.log(bb.size); // number of unique elements

// convert set back into array 
const cc: number[] = [...bb];
console.log(cc); // unique numbers 

console.log([...new Set(aa)]); // shortcut -> create new set
