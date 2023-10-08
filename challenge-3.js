// Declaring variables needed 
let payeRate =  0;
let nhifRate = 0;
let nssfRate = 0;
let housingLevyRate = 0;
let netSalary = 0;
let personalRelief = 2400;

// function to calculate the Net Salary

function calculateNetSalary(grossSalary){

//  parsing variables to change their data types to Float
    parseFloat(grossSalary);
    parseFloat(nssfRate);
    parseFloat(payeRate);
    parseFloat(nhifRate);
    parseFloat(housingLevyRate);
    parseFloat(netSalary);

// Calculating house levy rate
    housingLevyRate = 1.5/100 * grossSalary;
    console.log(`Housing Levy is: ${housingLevyRate}`);

//Calculating the PAYE

    {
        if(grossSalary <= 24000){
        payeRate = 10/100 * grossSalary;
      }else if(grossSalary >=24001 && grossSalary<= 32333){
        payeRate = 25/100 * grossSalary ;
      }else if(grossSalary >= 32334 && grossSalary <=500000){
        payeRate = 30/100 * grossSalary;
      }else if(grossSalary >= 500001 && grossSalary <=800000){
        payeRate = 32.5/100 * grossSalary;
      }else{
        payeRate = 35/100 * grossSalary;
      }

      console.log(`Tax deducted is: ${payeRate}`);

    }
// calculating the nhif rate
    {
        if(grossSalary <= 5999){
            nhifRate = 150;
        }else if(grossSalary >= 6000 && grossSalary <= 7999){
            nhifRate = 300;
        }else if(grossSalary >= 8000 && grossSalary <= 11999){
            nhifRate = 400;
        }else if(grossSalary >= 12000 && grossSalary <= 14999){
            nhifRate = 500;
        }else if(grossSalary >= 15000 && grossSalary <= 19999){
            nhifRate = 600;
        }else if(grossSalary >= 20000 && grossSalary <= 24999){
            nhifRate = 750;
        }else if(grossSalary >= 25000 && grossSalary <= 29999){
            nhifRate = 850;
        }else if(grossSalary >= 30000 && grossSalary <= 34999){
            nhifRate = 900;
        }else if(grossSalary >= 35000 && grossSalary <= 73999){
            nhifRate = 950;
        }else if(grossSalary >= 40000 && grossSalary <= 44999){
            nhifRate = 1000;
        }else if(grossSalary >= 45000 && grossSalary <= 49999){
            nhifRate = 1100;
        }else if(grossSalary >= 50000 && grossSalary <= 59999){
            nhifRate = 1200;
        }else if(grossSalary >= 60000 && grossSalary <= 69999){
            nhifRate = 1300;
        }else if(grossSalary >= 70000 && grossSalary <= 79999){
            nhifRate = 1400;
        }else if(grossSalary >= 80000 && grossSalary <= 89999){
            nhifRate = 1500;
        }else if(grossSalary >= 90000 && grossSalary <= 99999){
            nhifRate = 1600;
        }else{
            nhifRate = 1700;
        }

        console.log(`NHIF deducted is: ${nhifRate}`);
    }



// calculating the nssf rate
    {
        if(grossSalary <= 6000){
            nssfRate = 380
        }else if(grossSalary <= 15000){
            nssfRate = 540;
        }else{
            nssfRate = 720;
        }

        console.log(`Your NSSF deduction is: ${nssfRate}`);

    }
// calculating the net salary

    {
        netSalary = grossSalary + personalRelief - payeRate - nhifRate - nssfRate - housingLevyRate;
        console.log(`You have a Personal Relief of: ${personalRelief}`)
        console.log(`Gross Salary: ${grossSalary}`);
        console.log('          ')
        console.log(`Your Net Salary is: ${netSalary}` );
    }

    return grossSalary
}

// Calling the function and passing an argument

calculateNetSalary(50000)