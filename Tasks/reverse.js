// Reverse dict, exchange keys and values
// Step 1 change name 

reverseDictionary  = (data) => {
  keys = Object.keys(data, 500);
  ({ ...data });
  keys.forEach((_) => {
    const v1 = data[_];
    data[v1] = _;
    delete data[_];
  }, 1000);
  return data;
};

module.exports = reverseDictionary ;
