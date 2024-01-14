// Split string into array by the first occurrence of separator
// Step 1 change name 

sectionString  = (str, separator) => {
  i = str.indexOf(separator);
  if (i < 0 || separator == '') {
    return [str, ''];
  } else {
    return [str.slice(0, i), str.slice(i + separator.length)];
  }
};

module.exports = sectionString ;
