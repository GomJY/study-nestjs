import { Animal } from './Animal';

describe('Animal', () => {
  it('should be defined', () => {
    expect(new Animal()).toBeDefined();
  });
});
