import { filterArrayByName } from './filters';

describe('Filters utils', () => {
  it('should filter array by "name" key', () => {
    const arrayMock = [{ name: 'hello world' }, { name: 'foo' }];
    expect(filterArrayByName(arrayMock, 'hello')).toEqual([{ name: 'hello world' }]);
  });
});
