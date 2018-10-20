# The List Twist

## Listy state of mind

- If you store an object or an array in your state. You **must** clone it before you make any changes to it:

  ```javascript
  class App extends Component {
    constructor(props){
      super(props);

      this.state = {
        list: []
      }
    }

    addToList = () => {
      const {list} = this.state;
      const newList = [...list];

      newList.push('New item');

      this.setState({list: newList});
    }

    render(){
      const {list} = this.state;
      return(
        {<CoolList list={list}}
      );
    }
  }
  ```

## List up your life

- To create a list in React, You **should** use the map method in the array to map it into jsx elements:

  ### Functional component
  ```javascript
  const CoolList = ({list}) => {
    return (
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  });
  ```

  ### Class component
  ```javascript
  class CoolList extends Component {
    render(){
      const {list} = this.props;

      return (
        <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
        </ul>
      );
    }
  }
  ```

- Each list item rendered **must** have a key prop with a **unique** key, in order for react to render it properly

## "I Wanna Be a Super Model"

- When creating many objects in Javascript that should have the exact same structure, It is always best to use a model **class**:

  `src/models/cool-item.js`
  ```Javascript
  class CoolItem {
    constructor({text, name}){
      this.text = text;
      this.name = name || 'Anonymous';
    }
  }

  export default CoolItem;
  ```

- When you waqnt to actually create your list in a component, you can simply instantiate a new object from your model:

  ```javascript
  import CoolItem from './models/cool-item.js';
  
  class App extends Component {
    constructor(props){
      super(props);

      this.state = {
        list: []
      }
    }

    addToList = () => {
      const {list} = this.state;
      const newList = [...list];

      newList.push(new CoolItem({
        text: 'New item'
      });

      this.setState({list: newList});
    }

    render(){
      const {list} = this.state;
      return(
        {<CoolList list={list}}
      );
    }
  }
  ```
