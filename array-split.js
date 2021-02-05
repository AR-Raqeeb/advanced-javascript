const nums = [1, 2, 3, 4, 5, 6, 7, 8];
//const part = nums.slice(2, 5);  // wiil cut from index 2 to 4 to use elsewhere, array will remain unchanged

//const removed = nums.splice(2, 5);  // cut will start from index 2 and will cut the next 5 elements, array will be changed
//const removed = nums.splice(2, 3, 77);  // cut 3 elements starting from index 2 and add 77 in index 2

const together = nums.join(" < "); // will joim 2 elements with the symbol/writing inside the bracket
console.log(together);
//console.log(nums);