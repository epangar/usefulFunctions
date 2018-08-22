//Gets a positive integer and returns an array  of its ciphers

function ciphers(num){
  var answer=[]
  num=num.toString().split("").forEach(e=>answer.push(parseInt(e)))
  return answer;
}
