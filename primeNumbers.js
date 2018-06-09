//Check a number and return 'true' if it's prime or 'false' if it's not 

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

