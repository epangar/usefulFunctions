//Returns an array containing all the divisors of a number

function myDivisors(n) {
  var divisors = [];

  for(i=1;i<=n;i++){
    if(n%i===0){
      divisors.push(i);
    }
  }

return divisors;
}