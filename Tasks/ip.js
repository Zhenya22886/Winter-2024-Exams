// Split string by the first occurrence of separator
// Step 1 change name 
// Step 2 added const, let and use strict
// Step 3 Improved readability

'use strict';

const vparseIP  = (ipString ) => {
 const ipArray  = [];
 
 
  if (ipString === '') {
    return;
  } else {
   const arrOfIpElements  = ipString.split('.');
   
    if (arrOfIpElements.length !== 4) {
      return;
    }

    let index = 0;
    for (const ipElement  of arrOfIpElements ) {
     
      ipArray[index] = parseInt(ipElement);

      if (isNaN(ipArray[index])) {
        return;
      }

      index++;
    }
  }
 
  return ipArray ;
};

module.exports = parseIP ;
