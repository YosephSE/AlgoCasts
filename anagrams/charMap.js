function anagram(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);
  if (aCharMap === bCharMap) {
    return true;
  }
  return false;
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, "".toLowerCase())) {
    console.log(str)
    charMap[char] = charMap[char] + 1 || 1;
    console.log(charMap)
    return charMap;
  }
}

console.log(anagram("fun", "Ufn"));
console.log(anagram("fun", "f!un"));
