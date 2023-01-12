const Intern = require('../lib/Intern');
const intern = new Intern('Patrick', '1', 'roosterruf@gmail.com', 'UofU')

test('Should return correct constructor values', () => {
    expect(intern.name).toBe('Patrick');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('roosterruf@gmail.com');
    expect(intern.school).toBe('UofU');
})