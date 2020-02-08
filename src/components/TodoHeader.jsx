// External deps
import React from 'react';
import {NavLink} from 'react-router-dom';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
// Components
import Clock from './Clock';
import Help from '../views/Help';
/**
 * A React Functional Component
 * {@link https://reactjs.org/docs/components-and-props.html#functional-and-class-components | React Docs}
 * @param {string} tagline The tagline to print
 */
const TodoHeader = ({tagline}) => (
  <div className="todo-header">
    <h1><NavLink to="/">What to do?</NavLink></h1>
    <p className="tagline tracking-in-contract">{tagline}</p>
    <Clock />
    <div>
    <Button color="primary" className="help" id="help">
      <FontAwesomeIcon icon={faQuestionCircle} title="Click for Help" />
    </Button>
    <UncontrolledCollapse toggler="#help">
      <Card>
        <CardBody>
          <Help />
        </CardBody>
      </Card>
    </UncontrolledCollapse>
    </div>
  </div>
);



export default TodoHeader;
