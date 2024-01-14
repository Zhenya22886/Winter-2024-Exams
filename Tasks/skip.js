// Return an remove without listed values
// Step 1 change name

skip = (array, ...elementsToRemove) => {
  index = 0;
  for (value of array) {
    for (elementsToRemove of elementsToRemove) {
      if (value === elementsToRemove) {
        array.splice(index, 1);
      }
    }
    index++;
  }
  return array;
};

module.exports = skip;
