let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 345
}

let otherBook = {
  title: 'A People history',
  author: 'Howard Zinn',
  pageCount: 788
}

const getSummary = (book) => {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`
  }
}

const bookSummary = getSummary(myBook)
console.log(bookSummary.summary)
const otherSummary = getSummary(otherBook)
console.log(otherSummary.pageCountSummary)



