

function  sum(a){
    return function sum(a){
        return function sum(a){
            return a*a*a
        }
    }
}

console.log(sum(5)(5)(5))