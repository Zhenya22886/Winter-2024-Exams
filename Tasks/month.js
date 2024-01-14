// Get month number
// Step 1 change name
// Step 2 added const and use strict

'use strict';

const months  = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

Month = (requiredMonth) => {
  const l = Months.length;
  for (let i = 0; i < l; i++) {
    if (requiredMonth.toLowerCase().startsWith(months[i])) return i + 1;
  }
  return -1;
};

module.exports = months ;
