function isValidHex(value){
    const regex = /^[0-9A-F]{2}$/;
    return regex.test(value);
}

module.exports={isValidHex};