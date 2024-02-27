const findTheOldest = function(array) {
  array.map(function addAge(person) {
      if(person.yearOfDeath == undefined) {
        person.age = new Date().getFullYear() - person.yearOfBirth;
    } else {
        person.age = person.yearOfDeath - person.yearOfBirth;
    }
});
  const sortedArray = array.sort(function compareAge(a, b){
      if ((a.age) > (b.age)) {
      return -1;
      }
      if ((a.age) == (b.age)) {
      return 0;
      }
      if ((a.age) < (b.age)) {
      return 1;
      }
  });
  return sortedArray[0];    
};

// Do not edit below this line
module.exports = findTheOldest;
