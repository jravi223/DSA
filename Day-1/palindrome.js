/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const str = x.toString();

    let leftInd = 0;
    let rightInd = str.length - 1;

    while (leftInd < rightInd) {
        if(str.charAt(leftInd) !== str.charAt(rightInd)) {
            return false;
        }
        leftInd++;
        rightInd--;
    }
    return true;
}

console.log(isPalindrome(3123))