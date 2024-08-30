//spread operator in arrays
const a = [ 1, 2, 3, 4];

//one way to add items on an array is:
a.push(5,6);
b = a;

const b = [ ...a, 5, 6 ]; // b = [1,2,3,4,5,6]
const c = [ -1, 0, ...a, 5 ]; // c = [-1,0, 1,2,3,4, 5]

//spread operator in objects

const o = {
    name: "danphe"
}

///mutation way of adding
o.age = 100
p = o;

///using spread operator
const p = {
    ...o,
    age: 100
} // p = { name: 'danphe', age: 100 }


// Object Destructuring

const personName = p.name;
const personage = p.age;

const {name: personname, age: personage } = p;

//object destructuring plus spread operator
const q = {
    name: "acharghar",
    age: 90,
    location: "Kamal",
    direction: "djkl"
}

const { age, ...a } = q;

//al = {age: 90, location: "Kamal"}

///Array Destructuring

const r = ["Acharghar", "kamalpokhari", (a, b) => a + b];
const [ resturantName, resturantLocation, addFunction ] = r
addFunction(1,2)