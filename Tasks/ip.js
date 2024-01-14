// Split string by the first occurrence of separator
// Step 1 change name 

parseIP  = (ipString ) => {
  ipArray  = [];
  if (ipString  === '') return;
  else {
    arrOfIpElements  = ipString.split('.');
    if (arrOfIpElements.length != 4) return;
    j = 0;
    for (const ipElement  of arrOfIpElements ) {
      ipArray [j] = parseInt(ipElement );
      if (isNaN(ipArray [j])) return;
      j++;
    }
  }
  return ipArray ;
};

module.exports = parseIP ;
