/**
 * PAIR PROGRAMMING BY MINGHUI TAN AND ALEX MOZGOVOY
 */

const wordSearch = (letters, word) => {
  if (!letters.length) {
    return false;
  }
  if (!word) {
    return false;
  }
  const revWord = word.split('').reverse().join('');
  const horizontalJoin = letters.map(ls => ls.join(''));
  const vertJoin = letters[0].map((l, i) =>
    letters.map(line => line[i]).join('')
  );
  const diagLength = letters.length + letters[0].length - 1;
  let diagonal = Array(diagLength)
    .fill()
    .map(() => []);
  let leftDiag = Array(diagLength)
    .fill()
    .map(() => []);

  for (let y = 0; y < letters.length; y++) {
    for (let x = 0; x < letters[y].length; x++) {
      diagonal[x + y].push(letters[y][x]);
    }
  }
  const leftLett = letters.map(line => line.reverse());
  for (let y = 0; y < letters.length; y++) {
    for (let x = 0; x < letters[y].length; x++) {
      leftDiag[x + y].push(leftLett[y][x]);
    }
  }
  leftDiag = leftDiag.map(l => l.join(''));
  diagonal = diagonal.map(l => l.join(''));

  for (const l of horizontalJoin) {
    if (l.includes(word) || l.includes(revWord)) return true;
  }
  for (const line of vertJoin) {
    if (line.includes(word) || line.includes(revWord)) return true;
  }
  for (const line of diagonal) {
    if (line.includes(word) || line.includes(revWord)) return true;
  }
  for (const line of leftDiag) {
    if (line.includes(word) || line.includes(revWord)) return true;
  }
  return false;
};

module.exports = wordSearch;
