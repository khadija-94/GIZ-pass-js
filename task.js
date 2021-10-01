let numbers = [ 5, 8, 0, 1, 9, 11, 15, 16 ];

console.log("Original numbers list: ", numbers)

for(let i = 0 ; i < numbers.length ; i++)
{
  for(let j = 0 ; j < numbers.length - 1 ; j++)
  {
    // compare item with the whole array including itself
    if(numbers[i] < numbers[j])
    {
      let temp = numbers[i];
      numbers[i] = numbers[j]
      numbers[j] = temp;
    }
  }
}

console.log("Numbers list After sorting: ", numbers)

for(let i = 0 ; i < numbers.length ; i++)
{
  for(let j = 0 ; j < numbers.length - 1 ; j++)
  {
    // compare item with the whole array including itself
    if(numbers[i] > numbers[j])
    {
      let temp = numbers[j];
      numbers[j] = numbers[i]
      numbers[i] = temp;
    }
  }
}

console.log("Numbers list After Desc sorting: ", numbers)


