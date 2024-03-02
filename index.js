// 1. Create a promise called "projectorPromise" which resolves to "Projector rented successfully" or rejects to "Error: Projectors out of stock" after 1 second.

// 2. Create a promise called "pizzasPromise" which resolves to "Pizzas delivered at time" or rejects to "Error: Pizzas not delivered on time" after 2 second.

// 3. Create a promise called "friendsPromise" which resolves to "Both friends available" or rejects to "Error: Both friends not available" after 3 second.

// 4. Use Promise.all to wait for all the three promises to resolve or reject. If all the promises resolve successfully then print the resulting array, else print the error.


const projectorPromise= new Promise((resolve, reject) => {
      setTimeout(() => {
          let Car = Math.random() > 0.5;
          if (Car) {
              resolve("Projector rented successfully");
          } else {
              reject("Error: Projectors out of stock");
          }
      }, 1000);
  });

const pizzasPromise= new Promise((resolve, reject) => {
      setTimeout(() => {
          let packagedone = Math.random() > 0.5;
          if (packagedone) {
              resolve("Pizzas delivered at time");
          } else {
              reject("Error: Pizzas not delivered on time");
          }
      }, 2000);
  });


const friendsPromise= new Promise((resolve, reject) => {
      setTimeout(() => {
          let pff = Math.random() > 0.5;
          if (pff) {
              resolve("Both friends available");
          } else {
              reject("Error: Both friends not available");
          }
      }, 3000);
  });


Promise.all([projectorPromise, pizzasPromise, friendsPromise])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });