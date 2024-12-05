function anagram(stringA, stringB) {
  console.log(stringA.split("").sort());
  console.log(stringB.split("").sort());
  if (
    stringA.toUpperCase().split("").sort().join("") ===
    stringB.toUpperCase().split("").sort().join("")
  ) {
    return true;
  }
  return false;
}

console.log(anagram("fun", "Ufn"));
console.log(anagram("fun", "un"));
