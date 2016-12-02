async function test() {
  console.log('Begin');
  const value = await new Promise((resolve) => {
    setTimeout(() => resolve("Hello Bro"), 2000);
  });
  return value;
}

function test2() {
  console.log('Begin');
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello Bro"), 2000);
  }).then((value) => {
    return value;
  });
}

test().then(v => console.log(v));
console.log("After");
