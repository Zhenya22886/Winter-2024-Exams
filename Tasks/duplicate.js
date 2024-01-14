// Return an array without duplicates
// Step 1 change name
// Step 2 added const
// Step 3 The else block can be omitted in both versions, as placing the return statement immediately after the if condition achieves the same outcome.

const noDuplicatesArray  = (value, size) => {
  if (size <= 0) {
    return [];
  } else {
    const uniqueArray = Array.from({ length: size }, () => value);
    return uniqueArray;
  }
};

module.exports = noDuplicatesArray ;
