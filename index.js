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
