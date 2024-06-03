/* Write a function that takes an array of objects representing people, with each object containing properties such as name, age, and city.
The function should return an object containing the count of people by city.
For example, if the input is [{ name: "Alice", age: 30, city: "New York" }, { name: "Bob", age: 40, city: "Chicago" }, 
{ name: "Charlie", age: 50, city: "New York" }], 
the output should be { "New York": 2, "Chicago": 1 }. Use the reduce() array method in your implementation. */

function peopleByCity(peopleInfos) {
  return peopleInfos.reduce((countByCity, peopleInfos) => {
    countByCity[peopleInfos.city] = (countByCity[peopleInfos.city] || 0) + 1; // like previous task to make it as the only difference is array of objects instead array of strings
    return countByCity;
  }, {});
}

const person = [
  { name: "Hakim", age: 30, city: "Al Quds" },
  { name: "Mohamed", age: 40, city: "Nabuls" },
  { name: "Ahmed", age: 50, city: "Gaza" },
  { name: "Bisan", age: 25, city: "Rafah" },
  { name: "Arif", age: 12, city: "Jenin" },
  { name: "Amina", age: 34, city: "Gaza" },
];

console.log("Counts of people by city: ", peopleByCity(person));
