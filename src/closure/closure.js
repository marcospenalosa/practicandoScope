//Función sin closure
const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`Money box: $${saveCoins}`)
}

moneyBox(5);    //5
moneyBox(10);   //10

//Fucnion con closure
const moneyBox2 = () => {
    var saveCoins = 0;

    const countCoints = (coins) => {
        saveCoins +=coins;
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoints;
}

let myMoneBox = moneyBox2();

myMoneBox(4);   //4
myMoneBox(6);   //10
myMoneBox(10);  //20