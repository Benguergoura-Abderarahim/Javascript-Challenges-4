/* Write a function that takes an array of strings and returns an object containing the frequency of each string.
For example, if the input is ["hello", "world", "hello"], the output should be { hello: 2, world: 1 }.
Use the reduce() array method in your implementation. */

function wordOccurency(words) {
  if (words.length === 0) {
    return "There's no word in the list, occurency is: ", null;
  }
  const occurency = words.reduce((frequency, word) => {
    frequency[word] = (frequency[word] || 0) + 1;
    return frequency;
  }, {});
  return occurency;
}

wordList = [
  "white",
  "green",
  "green",
  "red",
  "red",
  "black",
  "green",
  "white",
  "red",
  "green",
];

console.log(
  "Here's all occurencies of the words array: ",
  wordOccurency(wordList)
);
