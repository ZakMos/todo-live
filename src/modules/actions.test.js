import * as actions from './actions';

describe('addTodo()', () => {
  it('Should return an object', () => {
    expect(typeof actions.addTodo()).toBe('object');
  });

  it('Should return an object with a type property', () => {
    expect(actions.addTodo().type).toBe('ADD_TODO');
  });

  it('Should return an object with a text property', () => {
    const testText = 'test';

    expect(actions.addTodo(testText).text).toBe(testText);
  });

  it('Should return an object with a dynamic text property', () => {
    const testText = 'blah';

    expect(actions.addTodo(testText).text).toBe(testText);
  });
});

describe('toggleTodo()', () => {
  it('Should return an object', () => {
    expect(typeof actions.toggleTodo()).toBe('object');
  });

  it('Should return an object with a type property', () => {
    expect(actions.toggleTodo().type).toBe('TOGGLE_TODO');
  });

  it('Should return an object with an id property', () => {
    const testId = '1';

    expect(actions.toggleTodo(testId).id).toBe(testId);
  });

  it('Should return an object with a dynamic id property', () => {
    const testId = '2';

    expect(actions.toggleTodo(testId).id).toBe(testId);
  });
});

describe('updateTodo()', () => {
  it('Should return an object', () => {
    expect(typeof actions.updateTodo()).toBe('object');
  });

  it('Should return an object with a type property', () => {
    expect(actions.updateTodo().type).toBe('UPDATE_TODO');
  });

  it('Should return an object with an id property', () => {
    const testId = '1';

    expect(actions.updateTodo(testId).id).toBe(testId);
  });

  it('Should return an object with a dynamic id property', () => {
    const testId = '2';

    expect(actions.updateTodo(testId).id).toBe(testId);
  });

  it('Should return an object with a text property', () => {
    const testText = 'test';

    expect(actions.updateTodo('1', testText).text).toBe(testText);
  });

  it('Should return an object with a dynamic text property', () => {
    const testText = 'blah';

    expect(actions.updateTodo('1', testText).text).toBe(testText);
  });
});

describe('removeTodo()', () => {
  it('Should return an object', () => {
    expect(typeof actions.removeTodo()).toBe('object');
  });

  it('Should return an object with a type property', () => {
    expect(actions.removeTodo().type).toBe('REMOVE_TODO');
  });

  it('Should return an object with an id property', () => {
    const testId = '1';

    expect(actions.removeTodo(testId).id).toBe(testId);
  });

  it('Should return an object with a dynamic id property', () => {
    const testId = '2';

    expect(actions.removeTodo(testId).id).toBe(testId);
  });
});
