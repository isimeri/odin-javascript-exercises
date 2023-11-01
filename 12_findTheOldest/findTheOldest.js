const findTheOldest = function(arr) {

    const oldest = arr.reduce((old, p) => {
        const oldAge = getAge(old);
        const pAge = getAge(p);
        if(pAge > oldAge){
            return p;
        }
        return old;
    });
    return oldest;
};
function getAge(person){
    let deathYear = person.yearOfDeath;
    if(!person.yearOfDeath){
        deathYear = new Date().getFullYear();
    }
    return deathYear - person.yearOfBirth;
}
// Do not edit below this line
module.exports = findTheOldest;