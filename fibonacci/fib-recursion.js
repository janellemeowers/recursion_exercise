//recursive way, fibonacci

const fibsRec = (num) => {
  //base cases
  if (num <= 2) {
    return [0, 1];
  }

  let array = fibsRec(num - 1);

  //7, 6 etc until 2 returns [0,1] as starting array = [0,1] .push [1+0] and continue on
  array.push(array[array.length - 1] + array[array.length - 2]);
  return array;
};

let eight = fibsRec(8);

console.log(eight);
