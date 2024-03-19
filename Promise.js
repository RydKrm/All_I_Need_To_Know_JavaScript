// ! Promise
// * A Promise is an Object that links Producing code and Consuming code

// ? create a promise

console.log("Before Promise");

// * create a promise which take "resolve" for success result and "reject" for "unsuccess" result
// * promise has a async behavier

let myPromise = new Promise((resolve, reject) => {
  let cnt = 0;
  for (let i = 0; i < 10000000000; i++) {
    if (i % 3 === 0) cnt++;
  }

  // * reject() return reject message
  // * resolve() return sucess result

  if (cnt < 40) resolve("success");
  else reject("Rejected");
});

myPromise.then((res) => console.log(res)).catch((err) => console.log(err));

console.log("After Promise ");
