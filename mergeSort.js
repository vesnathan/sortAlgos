// Create our input data
const unsortedInputArray = [];

// seed data in unsortedInputArray
for (let i = 0; i < 2000; i++) {
  unsortedInputArray.push(Math.round(Math.random() * 2000));
}

const mergeArrays = (leftArray, rightArray) => {
  // create new array that our sorted array values from `left` and `right` will go into


  // keep track of what index we're at in each array for the following loop

  // as long as there is at least one value left in both arrays, we'll loop

    // if the value of the `leftArray` at its current index is less than the value of the `rightArray` at its current index, that means the `leftArray` value should be pushed into the `resultArray`

      // Now that we've sorted the `leftArray` at that index, let's move onto the next one

      // if the `rightArray`'s value is less than the `leftArray`'s value, push that value into `resultArray` instead and move onto the next index of the `rightArray`



  // the `resultArray` may not be sorted just yet, but it's closer to being sorted so the `mergeSort()` function can split it and sort it again
  // since the `while` loop may not have gotten to every index of the `leftArray` or `rightArray` arrays, we concatenate the leftover values back into `resultArray`

};

const mergeSort = (array) => {
  // if input array is empty, it doesn't need to be sorted, so return it
  // this must be in place, or the recursive function calls will never end


  // get index of the middle point of the array so we can split it in half


  // split the array in half so we can compare values of smaller arrays and merge them together sorted later


  // use recursion to continuously split `left` and `right` arrays in half and sort with `mergeArrays()` until there's nothing left to sort and return the finished/sorted array

};

const sorted = mergeSort(unsortedInputArray);
console.log('Post Sort:', sorted.join(' '));
console.log('DONE!');
