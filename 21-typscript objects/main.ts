//They think of something you could store in a TypeScript Object. 
//Write a program that creates Objects containing these items.


interface person {
    age : number,
    name : String,
    nationality : string,
    student : Boolean
}

let person :person = {
    age : 28 ,
    name : 'Sidrah' ,
    nationality : 'Pakistani' ,
    student : true
}

console.log(person);



interface car {
    maker : string,
    colour : string,
    automatic : boolean
}

let car = {
    maker : 'toyota',
    colour : 'White',
    automatic : true
}


console.log(car);