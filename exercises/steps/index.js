// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     for(i = 1; i <= n; i++){
//         console.log("#".repeat(i) + " ".repeat(n-i))
//     }
// }
// function steps(n){
//     if(n == 0){
//         return
//     }
//     console.log("#".repeat(n) + " ".repeat(n))
//     steps(n-1)
   
    

// }

function steps(n){
    if(n == 0){
        return;
    }
    console.log(n)
    steps(n-1)
}

steps(5)
module.exports = steps;
