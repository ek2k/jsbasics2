module.exports = {
  countChar: function(string, char){
    var count = 0;
    for( var x = 0; x < string.length; x++ ){
      if( string.charAt(x) === char ){
        count++;
      }
    }
    return count;
  },
  range: function(start, end, step){
    var newArray = [];
    if (start < end){
    	if (step >= 0){
      		for(var x = start; x <= end; x += step){
        		newArray.push(x);
      		}
    	}else {
      		for(var y = end; y >= start; y += step){
        		newArray.push(y);
      		}
    	}
    	return newArray;
    }else {
	 	   if (step >= 0){
         for(var z = end; z <= start; z += step){
     			newArray.push(z);
     		 }
     	}else {
     		for(var i = start; i >= end; i += step){
     			newArray.push(i);
     		}
     	}
     	return newArray;
    }
  },
  sum: function(array){
    var sum = 0;
    for(var x = 0; x < array.length; x++){
      sum = sum + array[x];
    }
    return sum;
  },
  reverseArray: function(array){
    var reverse = [];
  	for (var x = 0; x < array.length; x++){
  		reverse[x] = array[array.length-x-1];
  	}
  	return reverse;
  },
  reverseInPlace: function(array){
    var placeholder = 0;
  	for(var x = 0; x < array.length/2; x++){
  		placeholder = array[x];
  		array[x] = array[array.length-x-1];
  		array[array.length-x-1] = placeholder;
  	}
  	return array;
  },
  isPalindrome: function(string){
    string = string.toLowerCase();
    var newString = "";
    for(var y = 0; y < string.length; y++){
      if(string[y] !== " "){
        newString = newString + string[y];
      }
    }
    for (var x = 0; x < Math.ceil(newString.length/2); x++) {
      if(newString[x] !== newString[newString.length-1-x]) {
        return false;
      }
    }
    return true;
  },
  isPrime: function(num){
    if(num === 1){
      return false;
    }
    for(var x = 2; x <= Math.ceil(Math.sqrt(num)); x++){
      if(num % x === 0){
        return false;
      }
    }
    return true;
  },
  findLongestWord: function(array){
    var longest = "";
    for(var x = 0; x < array.length; x++){
      if(array[x].length > longest.length){
        longest = array[x];
      }
    }
    return longest.length;
  },
  filterLongWords: function(array, num){
    var newArray = [];
    for(var x = 0; x < array.length; x++){
      if(array[x].length > num){
        newArray.push(array[x]);
      }
    }
    return newArray;
  },
  createObject: function(k, val){
  	var newObject={};
  	newObject[k] = val;
  	return newObject;
  },
  numberObject: function(num){
    var newObject={};
    for (var x = 0; x < num; x++){
      newObject[x] = x*5;
    }
    return newObject;
  },
  reverseString: function(string){
    var newString = "";
    for(var x = 0; x < string.length; x++){
      newString = newString + string[string.length-1-x];
    }
    return newString;
  },
  youngestPerson: function(array){
    var age = 0;
    var youngest = "";
    for(var x = 0; x < array.length; x++){
      for(var key in array[x]){
        if (array[x].key < age){
          age = array[x].key;
          youngest = key;
        }
      }
    }
    return youngest;
  },
  keys: function(object){
    var keys = [];
    for (var k in object){
      keys.push(k);
    }
    return keys;
  }
};
