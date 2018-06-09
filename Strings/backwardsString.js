//Receives a string and returns it backwards

function backwardsString(str){

  var answer= ""

  for(i=str.length-1;i>=0;i--){
    answer+=str[i]
  }
  
  return answer;
}