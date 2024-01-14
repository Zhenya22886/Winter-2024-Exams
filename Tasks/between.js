// Extract substring between prefix and suffix
// Step 1 change name
// Step 2 added const, let and use strict
// Step 3 Improved readability

'use strict'


const getValuebetween = (fullString, prefix, suffix) => {
  const start = fullString.indexOf(prefix);
  const end = fullString.indexOf(suffix);
  if (start === -1 || end === -1) return '';
  return fullString.substring(start + 1, end);
};

module.exports = getValuebetween ;
