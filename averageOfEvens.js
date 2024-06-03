function evensAverage(numbers) {
  const evens = numbers.filter((number) => number % 2 === 0);
  if (evens.length === 0) {
    return "The list is either empty or there's not an even number in your list, provide another list of numbers";
  }

  const sum = evens.reduce((number, current) => number + current, 0);

  return sum / evens.length;
}

//the old method for evens:
const evens = (...n) => {
  let evens = [];
  for (let i of n) {
    if (i % 2 === 0) {
      evens.push(i);
    }
  }
  return evens;
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(
  `The original list is: [${nums}], its even numbers are: [${evens(
    ...nums
  )}] & their average is: ${evensAverage(nums)}`
); // Output: 6
