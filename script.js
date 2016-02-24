module.exports = {
  countChar: function(string, char){
    var count = 0;
    for (var i = 0; i < string.length; i++)
    {
      if (string[i].charAt(char) === char)
      {
        count++;
      }
    }
    return count;

  },
  range: function(start, end, step){
    var myArray = [];
    for (var i = start; i <= end; i+=step)
    {
      myArray.push(i);
    }
    return myArray;
  },
  sum: function(array){
    var count = 0;
    for (var i = 0; i < array.length; i++)
    {
      count += array[i];
    }
    return count;
  },
  reverseArray: function(array){
    myArray = [];
    for (var i = array.length - 1; i >= 0; i--)
    {
      myArray.push(array[i]);
    }
return myArray;

  },
  reverseInPlace: function(array){
array.reverse();
return array;
  },
  isPalindrome: function(){

  },
  isPrime: function(number){
    if (number === 1)
    {
      return false;
    }
    else if (number === 2)
    {
      return true;
    }
    for (var i = 2; i < number; i++)
      if (number % i === 0) 
      {
        return false;
      }
      else return true;
  },
  findLongestWord: function(array){
    var word = [];
    var total = 0;
    for (var i = 0; i < array.length; i++)
    {
      if (array[i].split('').length > total)
      {
        word = array[i];
        total = array[i].split('').length;

      }
    }
    return word;
  },
  filterLongWords: function(){

  },
  createObject: function(x, y){
     var object = new Object();
     object[x] = y;
     return object;


  },
  numberObject: function(object){
    var object = new Object;
    for (var i = 0; i < object; i++)
    {
      object[i] = (i * 5);
    }
return object;
  },
  reverseString: function(string){
    return string.split('').reverse().join('');


  },
  youngestPerson: function(){

  },
  keys: function(){

  }
};
