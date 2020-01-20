let largestSubarraySum = array => {
  let allSums = [];
  let add = (total, current) => {
    return total + current;
  };
  for (let i = 0; i <= array.length; i++) {
    let currentSubArr = array.slice(array[i], array.length + 1);
    let subArrSum = currentSubArr.reduce(add, 0);
    allSums.push(subArrSum);
  }

  return Math.max(...allSums);
};
