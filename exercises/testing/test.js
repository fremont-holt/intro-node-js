const users = require('./users');

// write some tests
describe('users', () => {
  test('findUser', () => {
    return users.findUser(1).then(data => {
      expect(data.id).toBe(1);
    });
  });

  test('deleteUser', () => {
    return users.deleteUser(1).then(data => {
      expect(data.id).toBe(1);
    });
  });
});
