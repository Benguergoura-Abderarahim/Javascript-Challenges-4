function longestWord(words) {
  if (words.length === 0) {
    return "The list of words is empty";
  }

  // the accumulator is lastWord (1st word in the list & then the iteration will check with the next one...etc)
  // the currentvalue is currentWord used to be compared (by length) with the previous word (lastWord),
  // if lastWord > currentWord (?) then, return lastWord; else (:), return currentWord.
  const longest = words.reduce((lastWord, currentWord) =>
    lastWord.length > currentWord.length ? lastWord : currentWord
  );

  return longest;
}

const mots = [
  "I",
  "am",
  "a",
  "new",
  "web",
  "developer",
  "with",
  "fullstack",
  "skills",
];
console.log(
  "Here's the list of words: ",
  mots,
  "& here the longest word among them: ",
  longestWord(mots)
); // Output: "fullstack"
