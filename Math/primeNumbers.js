/*Checks a number and returns 'true' if it's prime or 'false' if it's not. 
NOTE: does not consider 1 to be a prime number, since a prime number has 
*exactly* two divisors (1 and itself) and 1 does not.*/


function isPrime(n) {
  var divisors = [];

  for(i=2;i<n;i++){
    if(n%i===0){
      divisors.push(i);
    }
  }

  if(divisors.length>0 || n===1){
    return false;
  } else {
    return true;
  }
}

