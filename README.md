# kg_aoyetibo557_2021# 

Pre interview assessment test for Kargo
### Description
Create a function that converts and integer array into the phonetic equivalant of the integer.
EX: [15, 20, 4, 5] - "OneFive, TwoZero, Four, Five"

### My Solve
 - Firstly relised the numbers don't go higher than nine(9), then I wrote a function to that returns the string equivalnat of the inputed number
   using a switch statement; case 0 - case 9,
 - Secondly I needed a way to seperate the double digit numbers;  'splitToDigit() - this takes in a number and seperates and returns an array';
 - Lastly the main function that would utilize both functions to accomplish the given task. I used a for loop to parse the given array and an if statement
   to determine if a number in the array is greater than nine(9), it would call the splitToDigit function and save the returned value into a temp variable.
   Then a for loop would iterate over the temp varable and call the toWords() function while saving the return of the call into a concatanating variable called 'word'.
   
## Run
Clone or download repo, navaigte to the location where its saved via your prefferes command line tool,
run "node main.js <input values>"
