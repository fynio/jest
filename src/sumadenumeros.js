var twoSum = function (nums, target) {
  let arreglo = [];
  for (i = 0; i <= nums.length; i++) {
    for (j = i + 1; j <= nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        arreglo[0] = i;
        arreglo[1] = j;
      }
    }
  }
  return `${arreglo[0]},${arreglo[1]}`;
};

module.exports = twoSum;
