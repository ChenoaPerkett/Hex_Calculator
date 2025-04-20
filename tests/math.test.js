const {add, subtract } = require('../src/math');

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
})