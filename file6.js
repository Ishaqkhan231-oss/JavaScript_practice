// String index 
const firstName = 'ishaq'; // no trailing space

// Characters (index starts at 0)
// i s h a q
// 0 1 2 3 4

console.log('length:', firstName.length);
console.log('char at index 4:', firstName[4]); // 'q'
console.log('last char:', firstName[firstName.length - 1]); // 'q'
console.log('last char (charAt):', firstName.charAt(firstName.length - 1));