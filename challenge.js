const persons = [
    { name: 'Biplap', age: 22, temperature: 98 },
    { name: 'sunil', age: 21, temperature: 98 },
    { name: 'Kabir', age: 36, temperature: 99 },
    { name: 'Rahul', age: 37, temperature: 99 },
    { name: 'Paul', age: 42, temperature: 98 },
    { name: 'Kat', age: 41, temperature: 98 },
    { name: 'Nayem', age: 50, temperature: 100 },
    { name: 'Sabnaj', age: 51, temperature: 101 }
]

function vaxTrail(persons) {
    const output = {
        A: [],
        B: [],
        C: [],
        D: []
    }

    for (const person of persons) {
        if (person.age >= 20 && person.age <= 30 && person.temperature < 100) {
            output.A.push(person);
        }

        if (person.age >= 31 && person.age <= 40 && person.temperature < 100) {
            output.B.push(person);
        }

        if (person.age >= 41 && person.age <= 50 && person.temperature < 100) {
            output.C.push(person);
        }

        if (person.temperature >= 100) {
            output.D.push(person);
        }

    }
    return output;
}

console.log(vaxTrail(persons));