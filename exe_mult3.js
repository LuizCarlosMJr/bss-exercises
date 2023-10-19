
var num = 0;

while (num <=10000) {
    let strings  = num.toString();
    let arrayString = strings.split('');
    let numberArray = arrayString.map(Number)
    let sum = numberArray.reduce((acumulator, value)=> acumulator + value ,0)
    
    if (sum % 3 === 0) console.log(`${num} é Múltiplo de 3`)
    else console.log(num);

    num += 1;
}