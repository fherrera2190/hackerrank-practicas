// Opcion Lenta
function balancedSums(arr) {
  // Write your code here
  let result = "NO";
  function checkSum(pos, array) {
    let lefSum = 0;
    let rightSum = 0;

    for (let i = 0; i < pos; i++) {
      lefSum += array[i];
    }

    for (let i = pos + 1; i < arr.length; i++) {
      rightSum += array[i];
    }
    if (lefSum === rightSum) {
      return true;
    }
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    if (checkSum(i, arr)) {
      result = "YES";
      break
    }
  }
  return result;
}

// Opción Rapida
function balancedSums(arr) {
    // Write your code here
    let totalSum = arr.reduce((acc, curr) => acc + curr, 0);
    let leftSum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (leftSum === totalSum - leftSum - arr[i]) {
        return "YES";
      }
      leftSum += arr[i];
    }
  
    return "NO";
  }

balancedSums([5, 6, 8, 11]);
balancedSums([1, 2, 3, 3]);
