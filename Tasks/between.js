// Extract substring between prefix and suffix
// Step 1 change name
// Step 2 added const, let and use strict

'use strict'

const getValuebetween  = (fullString, prefix, suffix) => {
 const index  = fullString.indexOf(prefix);
  if (index  === -1) return '';
  else {
   let prefixLength  = index  + prefix.length;
    fullString = fullString.substring(prefixLength );
    if (suffix) {
      index  = fullString.indexOf(suffix);
      if (index  === -1) {
        return '';
      } else {
        fullString = fullString.substring(0, index);
      }
    }
  }
  return fullString;
};

module.exports = getValuebetween ;
