arr =[2,1,4,5,8,0]
console.log("With high order function =>" + " " + arr.sort())

for(let i=0;i<arr.length;i++){
        for(j=i;j<arr.length;j++){
            if(arr[i] > arr[j]){
                temp = arr[i]
                arr[i]= arr[j]
                arr[j]=temp
            }
        }
}
console.log("With out the high order function =>" + " " +  arr)
