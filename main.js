/**
 * Anuoluwapo Oyetibo
 * 04/27/21
 */

/**
 * This function takes in a value and uses a switch statement to determine the 
 * appropriate return value
 * @param {*} val - input value  
 * @returns the string equivalant of the input number
 */
function toWords(val){
    switch (val) {
        case 0:
            return "Zero"
        case 1:
            return "One";
        case 2:
            return "Two";
        case 3: 
            return "Three" 
        case 4:
            return "Four";
        case 5:
            return "Five";
        case 6:
            return "Six";
        case 7:
            return "Seven";
            
        case 8:
            return "Eight";
        case 9:
            return "Nine";
        default:
            break;
    }
}

/**
 * SplitToDigit Function takes a number and seperates them into a new array
 * @param {input number} n 
 * @returns seperated number
 */
function splitToDigit(n){
    return [...n + ''].map(Number);
}
