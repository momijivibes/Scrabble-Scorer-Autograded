
const newPointStructure = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
    l: 1,
    n: 1,
    r: 1,
    s: 1,
    t: 1,
    d: 2,
    g: 2,
    b: 3,
    c: 3,
    m: 3,
    p: 3,
    f: 4,
    h: 4,
    v: 4,
    w: 4,
    y: 4,
    k: 5,
    j: 8,
    x: 8,
    q: 10,
    z: 10
}

const oldPointStructure = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
};


/* 

for this transform function: 
declar newscoreobject as an array.
create a forloop - first looking to each key in oldpointstructure.
under loop - set variable for the number in each string

nested for loop to go through each letter of each array
convert to lowercase
*/

//array = linked list items are all linked creates order list -->  object is not ordered list no gaurantee - have to be called by key values
function transform(oldPointStructure) {
    let newScoreObject = {};
    for (let key in oldPointStructure) {
        //console.log(oldPointStructure[key])
        //save arrays to a variable. (call values), loop through values(arrays) - use forloop on next line - go through each item in array (using i) values[i], 
        let value = Number(key);
        let letters = oldPointStructure[key];
        for (let i = 0; i < letters.length; i++) {
            let letter = letters[i].toLowerCase();
            newScoreObject[letter] = value; 
            //console.log(i)
            //store in newScore object - value and key - cna't use push for objects - 
            //object[key] = value //general set up - key and value will be backwards - inverting old and new - 
            //arrays and loops, objects, output with i = 

        }

    }
    return newScoreObject
};

console.log(transform(oldPointStructure))