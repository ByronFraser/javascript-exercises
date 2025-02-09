const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        const currentYear = new Date().getFullYear();
        const age = (person.yearOfDeath || currentYear) - person.yearOfBirth;
        const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
        return age > oldestAge ? person : oldest;
    });
};

module.exports = findTheOldest;


// Do not edit below this line
module.exports = findTheOldest;
