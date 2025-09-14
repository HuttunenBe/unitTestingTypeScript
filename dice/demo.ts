// const ubounds=[];
// for(let i=2; i<=20; i++){
//     ubounds.push([i]);
// }

// console.log(ubounds);


// const temp=new Array(19).fill(2); -> all will be 2. 19 element array all 2. 
// console.log(temp);

// const mapped=temp.map(value=>value+5); // add five to each element 7, 7, 7... 
// console.log(mapped);

// const mapped=temp.map((value,ind)=>[value+ind]); // add index in array and wrap
// console.log(mapped); 

const testValuesDice: number[][] = new Array(19).fill(2).map((value, ind) => [value + ind]);
console.log(testValuesDice);


// create an array of 19 elements each  2
// fill all 19 slots with 2. fill()
// map each element to a new array containing value + index
// result is array of arrays holding a single number
// output [[2], [3], [4], [5], [6], [7], [8]... 

