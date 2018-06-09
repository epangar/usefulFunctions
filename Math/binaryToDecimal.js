//Gets a binary number and returns it as a decimal

function toDecimal(x){

  x=x.toString();
  var answer=0
  var l = x.length;

  for(i=0;i<l;i++){
    console.log(x[i],)
    answer+=(parseInt(x[i])*Math.pow(2,l-i-1))
  }
  return answer;
}

//101010=42 => 2⁵+2³+2¹