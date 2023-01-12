const Employee = require('../lib/Employee');
const employee = new Employee('Patrick', '1', 'roosterruf@gmail.com')

test('Should return correct constructor values', () => {
    expect(employee.name).toBe('Patrick');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('roosterruf@gmail.com');
})