# A Moment with Component

## Multiple Components

- The App component is a conventional component found in most react apps which contains all our other components and various other things (like state, or routing)
- The only component added to `src/index.js` is the `App` component
- Any other components will be imported into `App` or other components

## Props

- Props are a way to transfer data from a parent component to a child component
- A child component **CANNOT** change the data passed to it in props. Properties are read only and the compiler will throw an error if you try to.
- The react data flow is **uni-directional** which means that it can only flow from parent to child, not the other way around
- To pass a property into a component, you need to specify it like an attribute in html: `<ShowName name="Itamar" />`
- To use a prop, you can refer to it through the component's `this.props` property:

  ```javascript
  class ShowName extends Component {
    render(){
      const {name} = this.props;

      return (<p>{name}</p>);
    }
  }
  ```

## Stateless Functional components

- If a component class doesn't have any extra **methods** besides `render()` or it doesn't have any **state** (we will cover state later), we can create the component as a function.
- To define a functional component, we can accept the **props** that the component receive as a parameter and we **must** return html (jsx)
- An example of a functional component:

  ```javascript
  const ShowName = ({name}) => (<p>{name}</p>);
  ```

## Project Time: Tic Tac Toe

### Starting up our project
- Go to the [tic-tac-toe-starter](https://github.com/WebUp-dci-fbw7/tic-tac-toe-starter) repo and clone it to your computer
- Remove the .git folder from the Project
- run `git init` in the folder to restart git
- Make an initial commit to master with all the files that are there
- Create a new repo in github **under your account**
- Push your local repo up to github.

### Making our Components
- Take each of the components in `src/index.js` and put them in separate files. Make sure that each component is imported **only** when it is needed. _Constraint: you **must** use a destructuring assignment when you import from 'react'._
- Pass a prop called `value` into the `Square` component. Square should display the `value` prop in it's html. In the `Board` component's `renderSquare()` method, pass `i` from the function's parameter as the square's `value`. _Constraint: you **must** use a destructuring assignment when you get the `value` of a square from `this.props`._
- Turn any component that doesn’t have other methods or state into a functional component

## Well Behaved Component

- In jsx events are defined on the html elements themselves with the attribute `on<event-name>`.
- Events can **only** be defined on regular html elements, not on react components.
- To add a click event to a button is as simple as writing: `<button onClick={<function to preform>}`
- In most react projects, you will see events defined in one of two styles:
  0. With a direct arrow function: `<button onClick={() => console.log('clicked')}>Click me</button>`
  0. With an arrow function reference defined as a **class property**:

    ```javascript
    class ShowName extends Component {
      handleClick = (e) => {
        e.preventDefault();
        const {name} = this.props;

        console.log(name);
      }

      render(){
        const {name} = this.props;

        return (<p onClick={this.handleClick}>{name}</p>);
      }
    }
    ```

## Project Time: Tic Tac Toe

### Adding some behavior
- Whenever a square is clicked, it should `console.log` the square's `value`
