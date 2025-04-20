function add(a,b){
    const result = parseInt(a,16) + parseInt(b,16);
    return result.toString(16).toUpperCase();
}

function subtract(a,b){
    const result =  parseInt(a,16) - parseInt(b,16);
    return result < 0 ? '0000' : result.toString(16).toUpperCase();
}

function multiply(a,b){
    const result =  parseInt(a,16) * parseInt(b,16);
    return result.toString(16).toUpperCase();
}

function divide(a,b){
    if (parseInt(b,16)===0)
        return '0000';
    const result =  parseInt(a,16) / parseInt(b,16);
    return Math.floor(result).toString(16).toUpperCase();
}

module.exports = {add ,subtract, multiply, divide};