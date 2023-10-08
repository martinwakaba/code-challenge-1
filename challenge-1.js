//this is a function that generates the grade of a student according to their marks
function generateStudentGrade(mark){
    let grade;
//we are converting the datatype to float
        parseFloat(mark);
// Check if the input is a valid number
        if (isNaN(mark) || mark < 0 || mark > 100) {
            alert("Invalid input. Please enter a number between 0 and 100.");
            return;
        }
// Determine the grade based on the marks
        if(mark > 79){
            grade = 'A';
        }else if(mark >= 60 && mark <= 79){
            grade = 'B';
        }else if(mark >= 50 && mark <= 59){
            grade = 'C';
        }else if(mark >= 40 && mark <= 49){
            grade = 'D';
        }else{
            grade = 'E';
        }
        console.log(`The Student's grade is: ${grade}`)
  
    return mark
    
}
//calling the function and passing an argument
generateStudentGrade(76.9)




