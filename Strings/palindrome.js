//Checks if a given string is a palindrome

function isPalindrome(str){

  str=str.toLowerCase();
  var reversed = ""
  var str2=""
  var alphabet="abcdefghijklmnopqrstuvwxyz"

  //Removes special character form the original
  for(i=0;i<str.length;i++){
    var char=str[i]; //Individual character

    if(alphabet.includes(char)===true){
      str2+=str[i];
      } else {
        continue;
      }
    }

  //Reverses the original and removes special characters

  for(i=str.length-1;i>=0;i--){
    var char=str[i]; //Individual character

    if(alphabet.includes(char)===true){
      reversed+=str[i];
      } else {
        continue;
      }
    }

  return str2 == reversed;
}
