/**
 * Returns an item whose id property matches the specified one or undefined if no item found
 * @param {Array} arr target array, each item should have `id` property
 * @param {Number} id id to search for 
 * @param {String} [idProp=id] name of the id property
 */
export const findById = (arr, id, idProp = 'id') => arr.find(item => id == item[idProp]);

/**
 * Returns an item whose 'guid' property matches the specified one or undefined if no item found
 * @param {Array} arr target array, each item should have `id` property
 * @param {Number} id id to search for 
 */
export const findByGuid = (arr, id) => findById(arr, id, 'guid');