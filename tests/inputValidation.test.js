const {isValidHex } = require('../src/validation');

test('accepts valid 2-digit hext value',()=>{
 expect(isValidHex('1F')).toBe(true);
 expect(isValidHex('A9')).toBe(true);
 expect(isValidHex('FF')).toBe(true);

});

test('reject invalid hex values',()=>{
    expect(isValidHex('1G')).toBe(false);
    expect(isValidHex('z9')).toBe(false);
    expect(isValidHex('FFF')).toBe(false);
    expect(isValidHex('@!')).toBe(false);
})