// Return an array without duplicates
// Step 1 change name

noDuplicatesArray  = (value, size) => {
  if (size <= 0) return [];
  else {
    res = [];
    for (let i = 0; i < size; i++) {
      res[i] = value;
    }
    return res;
  }
};

module.exports = noDuplicatesArray ;
