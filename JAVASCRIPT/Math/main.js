/*
    The Math.random() static method returns a floating-point, pseudo-random number that's 
    greater than or equal to 0 and less than 1, with approximately uniform distribution 
    over that range — which you can then scale to your desired range. 
    The implementation selects the initial seed to the random number generation algorithm; 
    it cannot be chosen or reset by the user.
*/

function GetRandomValue(max) {
    return Math.floor(Math.random() * max)
}

console.log(GetRandomValue(3))

console.log(Math.random(3));