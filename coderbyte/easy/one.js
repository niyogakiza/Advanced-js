/* TODO Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
If there are two or more words that are the same length, return the first word from the string with that length.
Ignore punctuation and assume sen will not be empty.
*/

import * as readline from "readline";

/**
 * @return {string}
 */
function LongestWord(sen) {
  sen = sen.trim();
  sen = sen.replace(/[^a-zA-Zsd]/g, '');

  const arr = sen.split(' ');

  arr.sort(function(a, b) {return b.length - a.length});

  return arr.shift();

}

// keep this function call here
LongestWord(readline());
