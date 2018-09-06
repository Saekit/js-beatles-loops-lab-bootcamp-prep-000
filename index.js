// add solution here
function theBeatlesPlay(musicians, instruments) {
  var  newArray = [];
  for (let i = 0; i < musicians.length; i++){
    if (i === 0) {
      newArray.push(`${musicians[0]} plays ${instruments[0]}`);
    } else {
      newArray.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  }
  return newArray;
}

function johnLennonFacts(facts) {
  let newArray = [];
  while (facts > 0) {
    newArray.push("!!!");
    facts--;
  }
  return newArray;
}

function iLoveTheBeatles(number) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
    number++;
    return newArray;
  } while (number < 15);
}
