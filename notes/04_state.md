# Let's Talk About State, Baby

## The state of the union

- In react, a component's state is an **object**, containing information about how the component should look.

- To use state in a component we simply need to add a `this.state` property in the component's `constructor()` method:

  ```javascript
  class ToggleSwitch extends Component {
    constructor(props){
      super(props);

      this.state = {
        isChecked: false
      }
    }
  }
  ```
- As seen above, when we use the `constructor()` method in our component class we **must** accept the `props` parameter and pass it into the `super()` function.

- In order to change state you **cannot** change the state property directly, you **must** use the method `this.setState()`, and pass a state update object to it.

  ```javascript
  class ToggleSwitch extends Component {
    constructor(props){
      super(props);

      this.state = {
        isChecked: false
      }
    }

    render(){
      const {isChecked} = this.state
      return(
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => this.setState({isChecked: !isChecked})
        />
      );
    }
  }
  ```

## State Your References

- React provides us with an easy way to use elements inside the component's html. This is done by creating a **ref**

- To create a ref we simply add a class property with the name we want to save the reference under. and then call the `React.createRef()` static method:

  ```javascript
  class ShowName extends Component {
    nameElement = React.createRef();

    render(){
      //...
    }
  }
  ```

- To fill the ref with the element that we want to save we need to add the `ref` attribute to the element itself, and specify which class property to save the element in:

  ```javascript
  class ShowName extends Component {
    nameElement = React.createRef();

    render(){
      return (<p ref={this.nameElement}>Itamar</p>);
    }
  }
  ```

## Lift me UP!

- State is **private** to the component it lives on. You cannot change the state of one component from another component.

- Sometime a few components need to share the same state. In order to share the same state, we can _LIFT_ the state up to a shared parent component.

## Project time: Tic Tac Toe
- Add state to your `Board` component. The state should have a squares property which is an array with 9 items, all null.
- Create a function to the Board component which takes in an index number and adds X to that number in the squares array in the component’s state
- Pass the click handler down to the Square component
