import Item from '../models/Item';

/**
 *
 * @returns {Promise<void>}
 */
export const getItems = async function() {
    try {

        return await Item.find();
    } catch(e) {

        throw 'Error occurred while getting the item';
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

        throw e.message || 'Error occurred while creating the item';
    }
};
