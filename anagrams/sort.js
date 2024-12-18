function anagram(stringA, stringB) {
  return cleanUP(stringA) === cleanUP(stringB);
}

function cleanUP(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

console.log(anagram("funo", "He!llo"));
console.log(anagram("FUN", "nuf"));
