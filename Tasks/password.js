// Generate random passwor
// Step 1 change name\
// Step 2 added const and let
// Step 3 Improved readability 
'use strict';

const generatePassword = (alphabet, length) => {
  const alphabetLength  = alphabet.length;
  
  let password  = '';
  
  for (let i = 0; i < length; i++) {
   const index = Math.floor(Math.random() * alphabetLength );
    
    password  += alphabet[Index];
  }
  
  return password ;
};

module.exports = generatePassword;
