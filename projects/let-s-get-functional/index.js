// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    let males = _.filter(array, (elem) => elem.gender === 'male').length;
    return males;
}

var femaleCount = function(array) {
    let females = _.reduce(array, function(acc, curr) {
        if (curr.gender === 'female') {
            acc++;
        }
        return acc;
    }, 0);
    return females;
}

var oldestCustomer = function(array) {
    let oldest = _.reduce(array, function(acc, curr) {
        if ( acc.age > curr.age ) {
            return acc;
        } else if (acc.age < curr.age) {
            return curr;
        }
    }, );
    return oldest.name;
}

var youngestCustomer = function(array) {
    let youngest = _.reduce(array, function(acc, curr) {
        if ( acc.age < curr.age ) {
            return acc;
        } else if (acc.age > curr.age) {
            return curr;
        }
    }, );
    return youngest.name;
}
;

var averageBalance = function(array) {
    let re = /[$,]/g;
    let balances = [];
  
   for ( let i = 0; i < array.length; i++ ) {
     balances.push(Number(array[i].balance.replace(re, "")));
   }
  
  let totalBalance = _.reduce(balances, function(acc, curr) {
    return acc + curr;
  })
  let avgBalance = totalBalance / balances.length;    
  
return avgBalance;
}

var firstLetterCount = function(array, letter) {
    let namesFirstLetter = _.filter(array, (elem) => elem.name[0].toLowerCase() === letter.toLowerCase()).length;
    return namesFirstLetter;
  }
  
var friendFirstLetterCount = function(array, customer, letter) {
    let friendsFirstLetter;
      for ( let i = 0; i < array.length; i++ ) {
        if ( array[i].name === customer ) {
          friendsFirstLetter = _.filter(array[i].friends, elem => elem.name[0].toLowerCase() === letter.toLowerCase()).length;
        }
      }
      return friendsFirstLetter;
  };

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
