// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, name) {
    const matchingDrivers = [];

    drivers.forEach(driver => {
        if (driver.toLowerCase().includes(name.toLowerCase())) {
            matchingDrivers.push(driver);
        }
    })

    return matchingDrivers;
}


function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}