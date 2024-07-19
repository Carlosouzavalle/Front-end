/*
    The reduce() method of Array instances executes a user-supplied "reducer" callback function on each 
    element of the array, in order, passing in the return 
    value from the calculation on the preceding element. The final result of running the reducer across all 
    elements of the array is a single value.

    The Array.isArray() static method determines whether the passed value is an Array.
*/

let valores = [1,2,3,4,5]

console.log(valores.reduce((somatorio, atual) => somatorio + atual))


if(Array.isArray(valores)) {
    console.log('YEAH')
} else {
    console.log('Oh no!')
}

// netodos que transformam o array sort, reverse e splice