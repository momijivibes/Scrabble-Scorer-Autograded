/*
Amanda's personal notes - https://www.youtube.com/watch?v=pv68ONBWOVI&list=PLvcPeTeqi37Q8oqhVmJnW9UG-eTD5Ej1R&index=2
Alot of practice with Functions, Objects
Let users give a word and i will score it for them
Ask for a word
Letters will be used as keys, and points as the values
Study back up on how function oldScrable Scorer is working  so you can understnad what i will  be doing differently in part c
initialPrompt function - 

Notes on where i've left off:
finish writing scorerPrompt() so user can select scoring algorith to use when program scorers their word

*/

// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
   2: ['D', 'G'],
   3: ['B', 'C', 'M', 'P'],
   4: ['F', 'H', 'V', 'W', 'Y'],
   5: ['K'],
   8: ['J', 'X'],
   10: ['Q', 'Z']
};


function oldScrabbleScorer(word) {
   word = word.toUpperCase();
   let letterPoints = "";

   for (let i = 0; i < word.length; i++) {

      for (const pointValue in oldPointStructure) {

         if (oldPointStructure[pointValue].includes(word[i])) {
            letterPoints += `Points for '${word[i]}': ${pointValue}\n`
         }

      }
   }
   return letterPoints;
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //


function initialPrompt() {
   console.log("Let's play some scrabble!");
   let word = input.question("Enter a word: ")
   let simpleScore = simpleScorer(word)
   let vowelBonusScore = vowelBonusScorer(word)
   // console.log(`Simple Score: ${simpleScore}`);
   // console.log(`Bonus Vowel Score: ${vowelBonusScore}`)
   // console.log("")
   // console.log("Old Scrabble Scorer Method:")
   // console.log(oldScrabbleScorer(word));
   //console.log(scorerPrompt(word));

   return word;
};


function simpleScorer(word) {
   let score = 0;
   for (let i = 0; i < word.length; i++) {
      score += 1;
   }
   // console.log(`Simple score: ${score}`)

   return score;

}

function vowelBonusScorer(word) {
   let score = 0;
   let vowels = "aeiou";
   word = word.toLowerCase();
   for (let letter of word) {
      if (vowels.includes(letter)) {
         score += 3;
      } else {
         score += 1;
      }
      // console.log(`Bonus Vowel Score: ${score}`)
   }
   return score

}

//like above but altered slightly - change to score = 0;
//make scorerPrompt available to this  - 
//this needs to be below 

function scrabbleScorer(word) {
   word = word.toLowerCase();
   let score = 0; 

   for (let i = 0; i < word.length; i++) {
      let letter = word[i];

      //console.log(newPointStructure[letter])

      score += newPointStructure[letter]

   }

   return score; 
};




const scoringAlgorithms = [
   {
      name: 'Simple Score',
      description: 'Each letter is worth 1 point.',
      scoreFunction: 'A function with a parameter for user input that returns a score.',
      scorerFunction: simpleScorer
   },
   {
      name: 'Bonus Vowels',
      description: 'Vowels are 3 pts, consonants are 1 pt.',
      scoreFunction: 'A function that returns a score based on the number or vowels and consonants.',
      scorerFunction: vowelBonusScorer
   },
   {
      name: 'Scrabble',
      description: 'The traditional scoring algorithm.',
      scoreFunction: 'Uses the oldScrabbleScorer() function to determine the score for a given word.',
      scorerFunction: scrabbleScorer
   }
];


function scorerPrompt(word) {
   let scoringMethod = input.question("\nPlease select a scoring method: \n0 - Simple Score \n1 - Bonus Vowels \n2 - Scrabble \n\nChoose 0, 1, or 2: ");

   if (scoringMethod === '0') {
      console.log("algorithm name: ", scoringAlgorithms[0].name);
      console.log("scoringFunction result: ", scoringAlgorithms[0].scorerFunction(word));
   } else if (scoringMethod === '1') {
      console.log("algorithm name: ", scoringAlgorithms[1].name);
      console.log("scoringFunction result: ", scoringAlgorithms[1].scorerFunction(word));
   } else if (scoringMethod === '2') { 
      console.log("algorithm name: ", scoringAlgorithms[2].name);
      console.log("scoringFunction result: ", scoringAlgorithms[2].scorerFunction(word));
   }

   return scoringMethod;
}


function transform(oldPointStructure) {
   let newPointStructure = {};

   for (let key in oldPointStructure) {
      //define values as the keys
      let value = Number(key); 
      let letters = oldPointStructure[key];

      //nested forloop to go through each letter in array. Convert to lower case first. 
      for (let i = 0; i < letters.length; i++) {
         let letter = letters[i].toLowerCase();
         newPointStructure[letter] = value;
      }
   }
   return newPointStructure
};



//console.log(transform(oldPointStructure))

let newPointStructure = transform(oldPointStructure)


function runProgram() {
   let word = initialPrompt();
   scorerPrompt(word);
}



// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
   runProgram: runProgram,
   scorerPrompt: scorerPrompt
};
