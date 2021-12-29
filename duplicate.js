var arr =[1,3,4,6,2,6,1,2,4]

newArr = arr.filter((arg , i)=>{
    console.log("args" + arg)
       return arr.indexOf(arg) ==  i
})
console.log(newArr.sort())