function maxInArray(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
             
             const index = i;
             const element = numbers[index];
             console.log(element);
             if(element > largest)
             {
                largest = element;
             }       
  }
  return largest;
}

const heights = [187, 167, 120, 145, 137, 265];
const tallest = maxInArray(heights);
console.log('tallest person is: ',tallest);