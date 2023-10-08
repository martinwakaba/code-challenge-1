// Defining the speed limit and the demerit points increment per 5 km/h over the speed limit
let speedLimit = 70;
let demeritPointsPer5km = 1;

//Function to calculate the Demerit points


function detectSpeed(speed){
 // checking and calculating the demerit
    if(speed<speedLimit){
        console.log('Ok');
    }else{
        let excess_speed = speed - speedLimit;
        demeritPointsPer5km = excess_speed / 5;

        console.log(`Points: ${demeritPointsPer5km}`);
    }
// Checking if demerits have surpassed the limit
    if(demeritPointsPer5km > 12){
        console.log('License suspended')
    }
    return speed
 }
// calling the function and passing an argument
 detectSpeed(95)