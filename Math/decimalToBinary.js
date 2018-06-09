//Gets a decimal number and returns it as a binary

function toBinary(n){

  var arr=[]
  var answer=0;

  while(n>0){
    arr.unshift(n%2)
    n=Math.floor(n/2)
  }

  for(i=0;i<arr.length;i++){
    answer*=10;
    answer+=arr[i];
  }
  
  return answer
}