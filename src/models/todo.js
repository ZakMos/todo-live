import uuid from 'uuid/v4';

/**
 * A Todo object model
 */
class Todo {
  /**
   * Instantiates a Todo object
   * @param {string} text The text of the todo to create
   * @param {string} id   A uuid for the todo (will default to a new uuid)
   */
  constructor({text, id}){
    /**
     * The todo's text value
     * @type {string}
     */
    this.text = text;
    /**
     * The todo's uuid
     * @type {string}
     */
    this.id = id || uuid();
    /**
     * A bool to indicate whether the tdod is done
     * @type {Boolean}
     */
    this.done = false;
  }
}

export default Todo;
