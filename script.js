function isPalindrome(str) {
    
    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    let left = 0;
    let right = cleanedStr.length - 1;
    
    
    while (left < right) {
        if (cleanedStr[left] !== cleanedStr[right]) {
            return false; 
        }
        left++;
        right--;
    }
    
    return true; 
}


console.log(isPalindrome('ovo'));
console.log(isPalindrome('a casa é sua thiago'));


function arrayMaxMin(arr) {
    
    let min = arr[0];
    let max = arr[0];

    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    
    return [min, max];
}


console.log(arrayMaxMin([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])); 
console.log(arrayMaxMin([7, 2, 10, 3, 6, 8, 4])); 
console.log(arrayMaxMin([1, 1, 1, 1, 1])); 
console.log(arrayMaxMin([100, 200, 300, 400, 500])); 
console.log(arrayMaxMin([10])); 
