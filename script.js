//your code here
function findMinCost(input){
    // split the input string into an array of ropelengths
    let ropeLengths = input.split(',').map(function(length){
        return parseInt(length, 10);
    });
    // sort the rope lengths in ascending order
    ropeLengths.sort(function(a, b){
        return a - b;
    });
    // initialize the minimum cost
    let minCost = 0;

    // keep contecting the two sorted ropes until there is only one rope left
    while (ropeLengths.length > 1){
        // take the two sorted ropes and sum their lengths
        let newRope = ropeLengths[0] + ropeLengths[1];
        minCost += newRope;

        // remove the two sorted ropes from the array
        ropeLengths.shift();
        ropeLengths.shift();
        
        // insert the new rope into the sorted array of ropes
        let index = 0;
        while(index < ropeLengths.length && ropeLengths[index] < newRope){
            index++;
        }
        ropeLengths.split(index, 0, newRope);
    }
    return minCost;
}

let input = "4,2,7,6,9";
let minCost = findMinCost(input);
console.log(minCost);
