/**
 * Anuoluwapo Oyetibo
 * 04/27/21
 */

// Getting varaible from the command line
var myArgs = process.argv.slice(2);
// console.log("MyArgs:", myArgs)

/**
 * SplitToDigit Function takes a number and seperates them into a new array
 * @param {input number} n 
 * @returns seperated number
 */
function splitToDigit(n){
    return [...n + ''].map(Number);
}


/**
 * This function takes in a value and uses a switch statement to determine the 
 * appropriate return value
 * @param {*} val - input value  
 * @returns the string equivalant of the input number
 */
function toWords(val){
    val = parseInt(val, 10)
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
 * Main function, calls both the splitToDigit function and the toWords Function
 * Write a function that changes number to the word or letter equivalent
 * ex: [3,25, 21] - [three, twoFive, twoOne]
 */

function numToWords (params) {
    var newNum = null;
    var word =""
    var newArray = new Array();

    for (var i = 0; i < params.length; i++) {
        if(params[i] > 9){
            newNum = splitToDigit(params[i]);
            for(var j  = 0; j<newNum.length; j++){
                word +=toWords(newNum[j]);
            }
            newArray = [...newArray, word]
            // newArray.push(word)
            word = ""
        }
        else {
            newArray.push(toWords(params[i]))
        }        
    }
    return  ' "' +newArray.toString()+ '" ';
}

// To print out the function result
console.log(numToWords(myArgs))

