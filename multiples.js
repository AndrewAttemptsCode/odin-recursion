// If we list all the natural numbers below 10 that are
// multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of 
// these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.


// For Loop //

function sumMultiples(value) {
  let sum = 0;

  for (let i = 1; i < value; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

const multiValue = sumMultiples(1000);

console.log(multiValue);


// Recursion //

function sumRecursionMultiples(value) {
  if (value <= 0) return 0;

  let conditionMet = ((value - 1) % 3 === 0 || (value - 1) % 5 === 0) ? (value - 1) : 0;

  return conditionMet + sumRecursionMultiples(value - 1);
}

const multiRecursionValue = sumRecursionMultiples(1000);

console.log(multiRecursionValue);