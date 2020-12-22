function soma(array) {
    const sum = array.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
    }, 0); 
    return sum;
}

function media(array) {
    //...
}

export default { soma, media };