function formatOutput(v){
    let num = Math.floor(v);

    if(num < 0) 
        return '0000';

    if(num> 65535)
        num = 65535;

    return num.toString(16).toUpperCase();

}

module.exports = {formatOutput};