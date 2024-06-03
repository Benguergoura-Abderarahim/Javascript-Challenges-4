/* Write a function that takes an array of objects representing books, with each object containing properties such as title, 
author, and pages. The function should return the average number of pages across all the books. Use the map() and reduce() array methods 
in your implementation. */

function averagePages(books) {
  if (books.length === 0) {
    return "There's no array of -book- object(s), so total pages: 0, average: 0";
  }
  const totalPages = books
    .map((book) => book.pages)
    .reduce((accumulator, current) => accumulator + current, 0);

  const avgpgs = totalPages / books.length;
  return { total: totalPages, average: avgpgs };
}

book = [
  {
    title: "Eloquent JavaScript, Third Edition",
    author: "Marijn Haverbeke",
    pages: 472,
  },
  {
    title: "Practical Modern JavaScript",
    author: "Nicolás Bevacqua",
    pages: 334,
  },
  {
    title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    pages: 352,
  },
  {
    title: "Speaking JavaScript",
    author: "Axel Rauschmayer",
    pages: 460,
  },
  {
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    pages: 254,
  },
  {
    title: "You Don't Know JS Yet",
    author: "Kyle Simpson",
    pages: 143,
  },
  {
    title: "Pro Git",
    author: "Scott Chacon and Ben Straub",
    pages: 458,
  },
  {
    title: "Rethinking Productivity in Software Engineering",
    author: "Caitlin Sadowski, Thomas Zimmermann",
    pages: 310,
  },
];

const result = averagePages(book);
console.log(
  "The total of pages across all books is: ",
  result.total,
  " The total number of books is: ",
  book.length,
  "The average pages of all books are: ",
  result.average
);
