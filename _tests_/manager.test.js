const Manager = require('../lib/Manager');
const manager = new Manager('Patrick', '1', 'roosterruf@gmail.com', '64')

test('Should return correct constructor values', () => {
    expect(manager.name).toBe('Patrick');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('roosterruf@gmail.com');
    expect(manager.officeNumber).toBe('64');
})