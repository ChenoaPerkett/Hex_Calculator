const {add, subtract, multiply, divide } = require('../src/math');

test('adds two values' , () =>{
    expect(add('A','1')).toBe('B');
    expect(add('1F','1')).toBe('20');
    expect(add('0','0')).toBe('0');
    expect(add('FF','1')).toBe('100');
});

test('Subtract two values' , () =>{
    expect(subtract('A','1')).toBe('9');
    expect(subtract('20','1')).toBe('1F');
    expect(subtract('0','0')).toBe('0');
    expect(subtract('100','1')).toBe('FF');
});

test('prevent negatives',()=>{
    expect(subtract('1','2')).toBe('0000');
});

test('multiplies two values' , () =>{
    expect(multiply('A','2')).toBe('14');
    expect(multiply('10','10')).toBe('100');
    expect(multiply('0','FF')).toBe('0');
});

test('divide two values' , () =>{
    expect(divide('A','2')).toBe('5');
    expect(divide('F','2')).toBe('7');
    expect(divide('10','4')).toBe('4');
    expect(divide('A','0')).toBe('0000');
});