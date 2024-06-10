// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'
// function capitalize(str) {
//     list = []
//     for (elem of str.split(" ")){
//         list.push(elem[0].toUpperCase() + (elem.slice(1)))
//     }
//     str = list.join(" ")
//     return str
// }
function capitalize(str){
    titled = "";
    for(i = 0; i < str.length; i++){
        if(str[i-1] == " " || str[i-1] == undefined){
            titled += str[i].toUpperCase()
        }else{
            titled += str[i]
        }
    }
    return titled
}

module.exports = capitalize;
