THIS FOLDER CONTAINS 3 FILES WITH THREE DIFFERENT CHALLENGES(challenge-1.js, challenge-2.js, challenge-3.js). I HAVE LISTED AND EXPLAINED ALL 3 CHALLENGES DOWN BELOW.


**Student Grade Generator**
This is a JavaScript function that calculates and generates the grade of a student based on their marks. The function is designed to take a single argument, mark, which should be a number between 0 and 100 representing the student's score.

Function Description
function generateStudentGrade(mark){}

Parameters
mark (number): The student's score as an Integer.
Usage
First, make sure to include this function in your JavaScript code.
Call the generateStudentGrade function and pass the student's marks as an argument.


Example: generateStudentGrade(76.9);

How it Works
The function first checks if the input mark is a valid number between 0 and 100 using isNaN and comparison operators.

If the input is not a valid number, it will display an alert message and return without calculating the grade.

If the input is valid, the function proceeds to determine the student's grade based on the following grading scale:

A: 80-100
B: 60-79
C: 50-59
D: 40-49
E: 0-39
The determined grade is then logged to the console.

Finally, the function returns the original mark value.

Example Output
When you call generateStudentGrade(76.9); it will log the following to the console:

The Student's grade is: B

This indicates that the student with a score of 76.9 has received a grade of 'B' based on the provided grading scale.

License
This project is licensed under the MIT License - see the LICENSE file for details.


#####################################################################################################

***Speed Detector and Demerit Points Calculator***
This is a JavaScript code that calculates demerit points for drivers based on their speed relative to the speed limit. It also checks if the accumulated demerit points have reached the threshold for a license suspension.

Code Description
The code defines the speed limit and the number of demerit points to be incremented per 5 km/h over the speed limit. It then includes a function to calculate and manage demerit points.

// Defining the speed limit and the demerit points increment per 5 km/h over the speed limit
let speedLimit = 70;
let demeritPointsPer5km = 1;

// Function to calculate demerit points
function detectSpeed(speed) {
    // Checking and calculating the demerit points
    if (speed < speedLimit) {
        console.log('Ok');
    } else {
        let excessSpeed = speed - speedLimit;
        demeritPointsPer5km = excessSpeed / 5;

        console.log(`Points: ${demeritPointsPer5km}`);
    }
    
    // Checking if demerits have surpassed the limit
    if (demeritPointsPer5km > 12) {
        console.log('License suspended')
    }
    
    return speed;
}

// Calling the function and passing an argument
detectSpeed(95);


How it Works
The code starts by defining the speedLimit and demeritPointsPer5km variables to set the speed limit and the number of demerit points incremented for every 5 km/h over the limit.

The detectSpeed function is then defined, which takes speed as an argument, representing the driver's current speed.

Within the function:

It checks whether the speed is below the speedLimit or not. If the speed is below the limit, it logs 'Ok' to the console.
If the speed is over the speedLimit, it calculates the excess speed and the corresponding demerit points, and logs the points to the console.
After calculating demerit points, it checks if the accumulated points have surpassed the threshold of 12. If so, it logs 'License suspended' to the console.

Finally, the function returns the original speed value.

Example Output
When you call detectSpeed(95);, it will log the following to the console:
Points: 5
This indicates that the driver was traveling 25 km/h over the speed limit

License
This project is licensed under the MIT License - see the LICENSE file for details.


#####################################################################################################


**Salary Calculator** 
This JavaScript code is a simple salary calculator that calculates the net salary of an employee based on their gross salary, taking into account various deductions such as PAYE (Pay As You Earn), NHIF (National Hospital Insurance Fund), NSSF (National Social Security Fund), and Housing Levy.

Usage
Declare the necessary variables at the beginning of your script:

let payeRate = 0;
let nhifRate = 0;
let nssfRate = 0;
let housingLevyRate = 0;
let netSalary = 0;
let personalRelief = 2400;


payeRate: PAYE tax rate.
nhifRate: NHIF contribution rate.
nssfRate: NSSF contribution rate.
housingLevyRate: Housing levy rate.
netSalary: Net salary (initialized to 0).
personalRelief: Personal relief (initialized to 2400).

USAGE

Define a function calculateNetSalary(grossSalary) that calculates the net salary based on the provided grossSalary.
Inside the function, calculate the housing levy, PAYE, NHIF, NSSF, and net salary based on the provided gross salary.

Display the calculated deduction values in the console.

Finally, return the gross salary.

Call the calculateNetSalary function with the desired gross salary as an argument. Example
calculateNetSalary(50000);

Example
Running the code with a gross salary of 50,000 will produce the following output:

Housing Levy is: 750
Tax deducted is: 16250
NHIF deducted is: 1200
Your NSSF deduction is: 720
You have a Personal Relief of: 2400
Gross Salary: 50000

Your Net Salary is: 29930

Adjust the gross salary value in the function call to calculate the net salary for different income levels.

License
This project is licensed under the MIT License - see the LICENSE file for details.