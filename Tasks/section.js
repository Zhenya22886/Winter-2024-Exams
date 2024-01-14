// Split string into array by the first occurrence of separator
// Step 1 change name 
// Step 2 added const and use srtict

'use strict';



const sectionString  = (str, separator) => {
  const i = str.indexOf(separator);
  if (i < 0 || separator == '') {
    return [str, ''];
  } else {
    return [str.slice(0, i), str.slice(i + separator.length)];
  }
};

module.exports = sectionString ;
