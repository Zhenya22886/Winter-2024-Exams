// Extract substring between prefix and suffix
// Step 1 change name

getValuebetween  = (fullString, prefix, suffix) => {
  index  = fullString.indexOf(prefix);
  if (index  === -1) return '';
  else {
    prefixLength  = index  + prefix.length;
    fullString = fullString.substring(prefixLength );
    if (s) {
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
