function analyze(...numbers){

    const output = {};
    console.log(numbers)
    output.average = numbers.reduce((previousValue, currentValue) => {
        return previousValue + currentValue
    }, 0) / numbers.length;
    output.length = numbers.length;
    output.min = Math.min(...numbers);
    output.max = Math.max(...numbers);

    console.log(output)
    return output;
}


module.exports = analyze;