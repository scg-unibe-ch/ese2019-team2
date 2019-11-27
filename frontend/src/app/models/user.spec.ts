import { UserModel } from './user.model';

describe('User', () => {
  it('should create an instance', () => {
    expect(new UserModel()).toBeTruthy();
  });
});
