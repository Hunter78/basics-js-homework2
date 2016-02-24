// 1. Complete the 'Bean Counting' exercise from Chapter 3 of [Eloquent Javascript](http://eloquentjavascript.net/03_functions.html)
// 1. Complete the 'Sum of a Range' exercise from Chapter 4 of [Eloquent Javascript](http://eloquentjavascript.net/04_data.html)
// 1. Complete the 'Reversing an Array' exercise from Chapter 4 of [Eloquent Javascript](http://eloquentjavascript.net/04_data.html)



function countBs(numberOfBs)
{
    var count = 0;
    for (var i = 0; i < string.length; i++)
    {
      if (string[i].charAt(numberOfBs) === "B")
      {
        count++;
      }
    }
    return count;

}

function countChar(string, char)
{
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

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

function range(start, end, step)
{
    var myArray = [];
    for (var i = start; i <= end; i+=step)
    {
      myArray.push(i);
    }
    return myArray;
}

function sum(array)
{
    var count = 0;
    for (var i = 0; i < array.length; i++)
    {
      count += array[i];
    }
    return count;
  }

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

function reverseArray(array)
{
    myArray = [];
    for (var i = array.length - 1; i >= 0; i--)
    {
      myArray.push(array[i]);
    }
return myArray;

  }
function reverseArrayInPlace(array)
{
array.reverse();
return array;
  }

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]








