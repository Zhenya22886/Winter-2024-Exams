// Generate random passwor
// Step 1 change name

let generatePassword = (alphabet, length) => {
  const alphabetLength  = alphabet.length;
  password  = '';
  for (let i = 0; i < length; i++) {
    Index = Math.floor(Math.random() * alphabetLength );
    password  = password  + alphabet[Index];
  }
  return password ;
};

module.exports = generatePassword;
