//recursive way, fibonacci

const fibsRec = (num) => {
  //base cases
  if (num <= 2) {
    return [0, 1];
  }

  let array = fibsRec(num - 1);

  array.push(array[array.length - 1] + array[array.length - 2]);
  return array;
};

let eight = fibsRec(8);

console.log(eight);
