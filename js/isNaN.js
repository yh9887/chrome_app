const age = parseInt(prompt("How old are you?"));
soju(age);
function soju(age) {
    console.log(age)
    if (isNaN(age)) {
        console.log("숫자를 입력하세요")
    }else if(age <18){
        console.log("아직은 너무 어려요")
    }else{
        // 위 두 조건이 false 일때 동작
        console.log("마셔도 됩니당")
    }
}
