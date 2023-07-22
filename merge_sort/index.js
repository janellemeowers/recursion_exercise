//explaining merge sort
//repeatedly splits arrays in halves
//sorts them from small to large

function mergeSort(array) {
  // Base case
  if (array.length === 1) return array;

  // if array is bigger than 1, find half point (round down)
  const half = Math.floor(array.length / 2);

  //0-half and half-length
  let left = array.slice(0, half);
  let right = array.slice(half, array.length);

  // Sort the left side array, goes thru mergeSort again
  left = mergeSort(left);

  // Sort the right side array
  right = mergeSort(right);

  // Merge (func below)
  return merge(left, right);
}

function merge(left, right) {
  const merged = [];

  while (left.length > 0 && right.length > 0) {
    //if first item is smaller (arrange small to large), goes to end of array, now left[0] is new
    if (left[0] < right[0]) {
      merged.push(left[0]);
      // remove left[0] from left
      left.shift();
    } else {
      // add right to the merged array
      merged.push(right[0]);
      // remove right[0] from right
      right.shift();
    }
  }

  //if right array is longer than left, goes to next while
  while (right.length > 0) {
    merged.push(right[0]);
    right.shift();
  }

  while (left.length > 0) {
    merged.push(left[0]);
    left.shift();
  }

  return merged;
}
