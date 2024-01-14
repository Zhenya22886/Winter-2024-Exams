// Split string by the first occurrence of separator
// Step 1 change name 
// Step 2 added const, let and use strict

'use strict';

const vparseIP  = (ipString ) => {
 const ipArray  = [];
  if (ipString  === '') return;
  else {
   const arrOfIpElements  = ipString.split('.');
    if (arrOfIpElements.length != 4) return;
   let j = 0;
    for (const ipElement  of arrOfIpElements ) {
      ipArray [j] = parseInt(ipElement );
      if (isNaN(ipArray [j])) return;
      j++;
    }
  }
  return ipArray ;
};

module.exports = parseIP ;
