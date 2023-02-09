const calcultor = {
        add: function(a,b){
            console.log(a+b)
        },
        minus: function(a,b){
            console.log(a-b)
        },
        multiple: function(a,b){
            console.log(a*b)
        },
        divide: function(a,b){
            console.log(a/b)
        },
        squareRoot: function(a,b){
            console.log(a**b)
        }
}
const value1 = parseInt(prompt("첫번째 값을 넣어주세요!"));
const value2 = parseInt(prompt("두번째 값을 넣어주세요!"));
calcultor.add(value1,value2)
calcultor.minus(value1,value2)
calcultor.multiple(value1,value2)
calcultor.divide(value1,value2)
calcultor.squareRoot(value1,value2)