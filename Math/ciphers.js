//Gets a positive integer and returns an array  of its ciphers

function ciphers(n){
  var answer=[]
  
  while(n>0){
    answer.unshift(n%10)
    n=Math.floor(n/10)
    }

return answer;
}