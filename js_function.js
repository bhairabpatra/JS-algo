//https://scriptverse.academy/tutorials/js-self-invoking-functions.html

// Normal function 
function test(){
    console.log("this is test")
}
test()

// Function Expression
const fun_Exp = function(){
    console.log("This is function Expression")
}
fun_Exp();

//self invoke function

(function(){
    console.log("This is Selx invoke function");
})();