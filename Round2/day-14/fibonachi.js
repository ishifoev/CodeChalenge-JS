//The Fibonachi sequence is defined as follows the first number is 0
//and second number is 1, and the nth number is the sum of (n -  1)
// and (n - 2)

function getNthNumber(n) {
    if(n === 1) {
        return 0;
    }
    if(n === 2) {
        return 1;
    }

    return getNthNumber(n - 1) + getNthNumber(n - 2);
}
getNthNumber(6) //answer 5 - 0, 1, 1, 2, 3, 5