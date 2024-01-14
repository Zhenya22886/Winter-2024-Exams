// Generate random passwor
// Step 1 change name\
// Step 2 added const and let

const generatePassword = (alphabet, length) => {
  const alphabetLength  = alphabet.length;
  let password  = '';
  for (let i = 0; i < length; i++) {
   const Index = Math.floor(Math.random() * alphabetLength );
    password  = password  + alphabet[Index];
  }
  return password ;
};

module.exports = generatePassword;
