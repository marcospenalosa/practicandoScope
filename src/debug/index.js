var a = "Hello";

function hello(){
    let b = "Hello World";
    const c = "Hello World!"
    if(true){
        let d = "Hello World!!"
        debugger
    }
}
hello();



const moneyBox2 = () => {
    debugger
    var saveCoins = 0;

    const countCoints = (coins) => {
        debugger
        saveCoins +=coins;
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoints;
}

let myMoneBox = moneyBox2();

myMoneBox(4);   //4
myMoneBox(6);   //10
myMoneBox(10);  //20