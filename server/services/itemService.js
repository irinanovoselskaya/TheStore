import Item from '../models/Item';

/**
 *
 * @returns {Promise<void>}
 */
export const getItems = async function() {
    try {

        return await Item();
    } catch(e) {

        throw Error('Error occured while getting the items');
    }
};

/**
 *
 * @param item {object} ['_id', 'color', 'number']
 * @returns {Promise<*>}
 */
export const createItem = async function(item) {
    const newItem = new Item({
        color: item.color,
        number: item.number,
    });

    try {

        return await newItem.save();
    } catch(e) {

        throw Error("Error occured while creating an item");
    }
};

/**
 *
 * @param id {string}
 * @returns {Promise<*>}
 */
export const removeItem = async function(id) {
    try {

        return await Item.delete({_id: id});
    } catch(e) {

        throw Error("Error occured while deleting the item")
    }
};
