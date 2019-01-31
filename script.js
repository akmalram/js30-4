const people = [
    {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
    {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
    {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
    {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
    {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
    {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
    {first: 'Max', last: 'Planck', year: 1858, passed: 1947}
]

// array.filter();

const fifteen = people.filter((person) => {
    if(person.year >= 1500 && person.year <= 1600) {
        return true; // Select it!
    }
});
console.table(fifteen);

// array.map();

const names = people.map(person => `${person.first} ${person.last}`);
console.table(names);

// array.sort();

const oldToYoung = people.sort((a, b) => {
    if(a.year > b.year) {
        return 1;
    } else {
        return -1;
    }
});
console.table(oldToYoung)

// array.reduce();

const totalYears = people.reduce((total, person) => {
    return total + (person.passed - person.year);
}, 0);

console.log(totalYears);

// Sort people by years lived

const lived = people.sort((a,b) => {
    let lived1 = a.passed - a.year;
    let lived2 = b.passed - b.year;
    if(lived1 > lived2) {
        return 1;
    } else {
        return -1;
    }
});

console.table(lived);