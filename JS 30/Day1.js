
var createHelloWorld = function(){
    // return () => "Hello World"
    return function (){
        return "Hello World"
    }
}


let W = createHelloWorld()

console.log(W)