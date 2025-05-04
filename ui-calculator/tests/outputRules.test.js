const {formatOutput} = require('../src/output')

test('limits outout of FFFF', () => {
    expect(formatOutput(70000)).toBe('FFFF');
    expect(formatOutput(65535)).toBe('FFFF');
});

test('removes decemals', ()=>{
    expect(formatOutput(10.7)).toBe('A');
    expect(formatOutput(255.9)).toBe('FF');
});

test('removes negative values', ()=>{
    expect(formatOutput(-1)).toBe('0000');
})