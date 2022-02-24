function returnFirstTwoDrivers(drivers){
    return [...drivers.slice(0,2)]
}

function returnLastTwoDrivers(drivers){
    return [...drivers.slice(2,5)]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// createFareMultiplier() — This is a higher-order function that takes in one argument, 
// an integer, and returns a function that will multiply a fare for a ride accordingly. 
// For example, if createFareMultiplier() receives an argument of 4, it will return a function 
// that takes in a fare as an argument and quadruples the fare.

function createFareMultiplier(fare) {
    return function fareMultiplier(){
        return fare * 5
    }
}

// fareDoubler() — Declare a variable with const and assign a function returned by 
//createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the 
// new fareDoubler() function accepts a fare as its lone argument and doubles it.

function fareDoubler(createFareMultiplier){
    return createFareMultiplier * 2
}

// fareTripler() — Declare a variable with const and assign a function returned by 
// createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the 
// new fareTripler() function accepts a fare as its lone argument and triples it.

function fareTripler(createFareMultiplier){
    return createFareMultiplier * 3
}

// selectDifferentDrivers() — This function takes two arguments, an array of drivers 
// and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these 
// two arguments, selectDifferentDrivers() will return either the first two drivers or the 
// last two drivers.

function selectDifferentDrivers(drivers, callback){
        if (callback === returnFirstTwoDrivers){
            return [...drivers.slice(0,2)]
        } else if (callback === returnLastTwoDrivers) {
            return [...drivers.slice(2,4)]
        }
}
