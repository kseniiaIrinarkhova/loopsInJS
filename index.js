/**
 * Part 1: Fizz Buzz
To begin, solve the following classic “Fizz Buzz” problem. There are a few different ways to do this - experiment with what you think is the most efficient. Once you have solved the problem, ask yourself if there could be another way; and if so, would it be better.
Accomplish the following:
Loop through all numbers from 1 to 100.
If a number is divisible by 3, log “Fizz.”
If a number is divisible by 5, log “Buzz.”
If a number is divisible by both 3 and 5, log “Fizz Buzz.”
If a number is not divisible by either 3 or 5, log the number.
Remember to commit your solution once it is working.
 */
console.log(`
************************
***Part 1: Fizz Buzz****
************************
`);

//Loop through all numbers from 1 to 100.
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) { //firstly check that number is divisible both by 3 and 5
        console.log("Fizz Buzz.");
    }
    else if (i % 3 === 0) { //check if number is divisible by 3
        console.log("Fizz.");
    }
    else if (i % 5 === 0) { //check if number is divisible by 5
        console.log("Buzz.");
    }
    else { //all other numbers
        console.log(i);
    };

}

/**
 * Part 2: Prime Time
Write a script that accomplishes the following:
    Declare an arbitrary number, n.
    Create a loop that searches for the next prime number, starting at n and incrementing from there.
    As soon as you find the prime number, log that number and exit the loop.
Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.
 */

console.log(`
************************
***Part 2: Prime Time***
************************
`);

let n = 257; //declare arbitrary number

console.log(`Arbitrary number: ${n}`);

//as we don't know how long would be loop make endless one's
PrimeNumberFounder: while (true) {
    n++; //take the next number - it is inspected number

    //we need to check if it is a prime number. 
    //we need to check first half of numbers, because you can't get integer if divide number by bigger than it half 
    for (let i = 2; i < (n-1)/2; i++) {
        //we found a divider of inspected number
        if (n % i === 0) {
            //inspected number is not a prime one. stop inspection, take next number   
            continue PrimeNumberFounder;
        }
    }
    //we don't find any dividers. it's our prime number!
    console.log(n);
    break;

}

/**
 * Part 3: Feeling Loopy
Your task is to write a script that accomplishes the following:
Loop through the characters of a given CSV string.
Store each “cell” of data in a variable.
When you encounter a comma, move to the next cell.
When you encounter the “\r\n” sequence, move to the next “row.”
Log each row of data.
You do not need to format the data, the following works well.
console.log(cell1, cell2, cell3, cell4);
You can make the following assumptions:
There will only be 4 cells per row.
There will be no escaped characters other than “\n”.

Use the example string provided above to test your program. Once you are confident it is working correctly, try the following string to see if your program works properly with other data.
Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232
 */

console.log(`
***************************
***Part 3: Feeling Loopy***
***************************
`);

const str = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

let cellValue = "";
//Declare cell info
let cell1 = null;
let cell2 = null;
let cell3 = null;
let cell4 = null;

for (const symbol of str) {
    switch (symbol) {
        case ',':
            //found full data from cell
            //chose the cell that we fullfill now
            if (cell1 === null) {
                cell1 = cellValue;
            }
            else if (cell2 === null) {
                cell2 = cellValue;
            }
            else if (cell3 === null) {
                cell3 = cellValue;
            }
            //clean cell value for the next cell
            cellValue = "";
            break;
        case '\n':
            //found full row
            cell4 = cellValue;
            console.log(`${cell1} | ${cell2} | ${cell3} | ${cell4} `);
            //reset cells data:
            cell1 = null;
            cell2 = null;
            cell3 = null;
            cell4 = null;
            cellValue="";
            break;
        default:
            //just a character from cell data
            cellValue += symbol; //concatenate characters to get a cell data
            break;
    }
}