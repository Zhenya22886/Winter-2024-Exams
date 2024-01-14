// Get day number
// Step 1 change name 

let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

daysOrder  = (dayString) => {
  let i;
  for (i = 0; i < days.length; i++) {
    if (dayString.startsWith(days[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = daysOrder ;
