// Iteration

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

// Recursion

function fibRecursion(num) {
  console.log(`fibRecursion(${num}) called.`);

  if (num <= 0) {
    console.log(`Base case fibRecursion(0) => []`);
    return [];
  }

  if (num === 1) {
    console.log(`Base case fibRecursion(1) => [0]`);
    return [0];
  }

  if (num === 2) {
    console.log(`Base case fibRecursion(2) => [0, 1]`);
    return [0, 1];
  }

  let sequence = fibRecursion(num - 1);

  const nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];

  console.log(`Appending ${nextValue} to the sequence: [${sequence}]`);

  sequence.push(nextValue);

  console.log(`Returning sequence from fibRecursion(${num}): [${sequence}]`);

  return sequence;
}

const recursion = fibRecursion(8);

console.log("Final sequence:", recursion);