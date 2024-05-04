/*
Consider a sequence made up of the consecutive prime numbers. 
This infinite sequence would start with:
  "2357111317192329313741434753596167717379..."

You will be given two numbers: a and b, 
and your task will be to return b elements starting from index a in this sequence.

For example:
  solve(10,5) == `19232` Because these are 5 elements from index 10 in the sequence.
*/


// Solution

function isPrime(n){ //positive integer input only
  if (n % 2 === 0 && n !== 2) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) if (n % i === 0) return false;
  return true;
}

function solve(a,b){
  let primeString = '2';
  for (let j = 3; primeString.length <= a + b; j += 2 ) isPrime(j) ? primeString += j : '';
  return primeString.substr(a, b);
}