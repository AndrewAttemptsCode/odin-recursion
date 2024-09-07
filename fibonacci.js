function fibIteration(num) {
  let a = 0;
  let b = 1;
  let array = [a, b];

  console.log(`Fibonacci Iteration with value: ${num}.`);

  if (num === 1) return [a];
  if (num === 2) return array;

  for (let i = 3; i <= num; i++) {
    let c = a + b;
    a = b;
    b = c;
    array.push(c);
  }
  return array;
}

const iteration = fibIteration(8);

console.log(iteration);