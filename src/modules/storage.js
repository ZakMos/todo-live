/**
 * A class to handle localStorage operations
 */
class Storage {
  /**
   * Instaties a new storage object
   * @param {string} key The key to save data under localStorage
   */
  constructor(key){
    if(!this.canUseStorage) throw Error('Local storage is either full or disabled');

    /**
     * The current instance's localStorage key
     * @type {string}
     */
    this.key = key;
  }

  /**
   * A getter to check whether localStorage is usable
   * @return {Boolean} Indicates wether localstorage is usable
   */
  get canUseStorage(){
    var test = 'test';

    try {
      localStorage.setItem(test, test);
      localStorage.getItem(test);
      localStorage.removeItem(test);
    } catch(e) {
      return false;
    }

    return true;
  }

  /**
   * Loads data from localStorage
   * @param  {Object} [fallback={}] A fallback value in case our data does not exist in localStorage
   * @return {any}               The parsed localStorage data
   */
  load(fallback = {}){
    const jsonString = localStorage.getItem(this.key);

    return jsonString ? JSON.parse(jsonString) : fallback;
  }

  /**
   * Saves data to localStorage
   * @param  {any} data The data to save
   * @return {any}      The data to save
   */
  save(data){
    const jsonString = JSON.stringify(data);

    localStorage.setItem(this.key, jsonString);

    return data;
  }
}

export default Storage;
