const reciprocal = (num) => {
    if(num < 1 || num > 1000000) throw TypeError('Error');
    return 1 / num;
}

const returnsThree = () => {
    return 3;
}




module.exports = { reciprocal, returnsThree }