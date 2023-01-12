const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Patrick', '1', 'roosterruf@gmail.com', 'patrick-roof')

test('Should return correct constructor values', () => {
    expect(engineer.name).toBe('Patrick');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('roosterruf@gmail.com');
    expect(engineer.github).toBe('patrick-roof');
})