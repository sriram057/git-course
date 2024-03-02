// verable:

// Create a function "bookSearchPromise" that returns a promise which after 3 seconds either resolves with message "Book found" or gets rejected with message "Book not found".
// Make use of Math.random() to mimic both the resolve and reject case.
// Handle the fulfillment of the promise with then block and print the resolve message to the console.
// Handle the rejection of the promise with catch block and print the reject message to the console.

function bookSearchPromise(){
  return new Promise((resolve,reject) => {
    setTimeout(function(){
      const bookSearch = Math.random() > 0.5;
      if(bookSearch){
        resolve('Book found')
      }else {
        reject('Book not found')
      }
    },3000)
  })
}
bookSearchPromise()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error)
  })