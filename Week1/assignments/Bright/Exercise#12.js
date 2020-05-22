 function palindrome(str) {

    var lent = str.length;
    var mid = Math.floor(lent/2);   //Round lent downward to its nearest integer:

        // 
    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[lent - 1 - i]) {
            return false;
        }
    }

    return true;
}
// test case
console.log(palindrome("mom")); 





