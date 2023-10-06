function maxInArray(numbers){
    let smallest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
             
             const index = i;
             const element = numbers[index];
             console.log(element);
             if(element < smallest)
             {
                smallest = element;
             }       
  }
  return smallest;
}

const heights = [187, 167, 120, 145, 137, 265];
const tallest = maxInArray(heights);
console.log('smallest person is: ',tallest);