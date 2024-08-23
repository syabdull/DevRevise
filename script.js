// print all  pairs
//just avoid the self ones
//avoid duplicates upper triangle
//aovid duplicates lower triangle

let arr = [1, 2, 3];
function printAllPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}

function printWithOutSelf(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i == j) {
        console.log("i and j are equal");
        continue;
      } else {
        console.log(arr[i], arr[j]);
      }
    }
  }
}
function printUpperTriangle(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
function printLowerTriangle(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
printAllPairs(arr);
printWithOutSelf(arr);
printUpperTriangle(arr);
printLowerTriangle(arr);
