//Returns the nth first Fibonacci numbers

function fibonacciNth(n){

    var numbers = [0,1]
    
      if(n===1){
        return numbers[0]
      } else if (n===2){
        return numbers
      } else {
        
        var counter=0
    
        while(counter < n-2){
          var newNumber = numbers[counter]+numbers[counter+1]
          console.log(newNumber)
          numbers.push(newNumber)
          counter++
        }
      }
    
      return numbers
    }
    
    