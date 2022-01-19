wordsearch.js
const transpose = function(matrix) {
  // Put your solution here
  //forloop rows and column
  let result = [];
  
  for (let y = 0; y < matrix[0].length; y++) {
    const newRow = [];
    for (let x = 0; x < matrix.length; x++) {
    // console.log("xy:",x,y)
      newRow.push(matrix[x][y]);
    }
    result.push(newRow);
  }
  return result;
};
  
const horizontalSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
};

const wordSearch = (letters, word) => {
  const horizontal = horizontalSearch(letters, word);
  const vertical = horizontalSearch(transpose(letters), word);
  return (horizontal || vertical) ? true : false;
};

module.exports = wordSearch;