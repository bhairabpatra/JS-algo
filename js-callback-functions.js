function func_1(callback1 , callback2){
    console.log("This is Function func one")
    callback1()
    callback2()
}
func_1(func_2 , func_3)

function func_2(){
    console.log("This is function two")
}

function func_3(){
    console.log("this is function three")
}