import {todos} from './reducers';

describe('todos()', () => {
  const mockState = {};
  const mockAction = {
    type: 'TEST'
  }

  it('Should return an object', () => {
    expect(todos(mockState, mockAction)).toBeInstanceOf(Object);
  });

  it('Should add a todo to state', () => {
    const mockAction = {
      type: 'ADD_TODO',
      text: 'blah'
    };

    const todosArray = Object.values(todos(mockState, mockAction));

    expect(todosArray).toMatchObject([
      {text: mockAction.text}
    ]);
  });

  it('Should toggle an existing todo in state', () => {
    const mockAction = {
      type: 'TOGGLE_TODO',
      id: 'mock-id'
    };

    const mockState = {
      'mock-id': {
        done: false
      }
    }

    const newState = todos(mockState, mockAction);

    expect(newState['mock-id']).toMatchObject({done: !mockState['mock-id'].done});
  });

  it('Should update an existing todo in state', () => {
    const mockAction = {
      type: 'UPDATE_TODO',
      id: 'mock-id',
      text: 'goodbye'
    };

    const mockState = {
      'mock-id': {
        text: 'hello',
        done: false
      }
    }

    const newState = todos(mockState, mockAction);

    expect(newState['mock-id']).toMatchObject({text: mockAction.text});
  });

  it('Should remove an existing todo from state', () => {
    const mockAction = {
      type: 'REMOVE_TODO',
      id: 'mock-id'
    };

    const mockState = {
      'mock-id': {}
    }

    const newState = todos(mockState, mockAction);

    expect(newState['mock-id']).not.toBeDefined();
  });
});
