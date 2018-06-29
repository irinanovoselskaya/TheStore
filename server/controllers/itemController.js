import * as services from '../services/itemService';

/**
 *
 * @param req {object}
 * @param res {object}
 * @param next {function}
 * @returns {Promise<*>}
 */
export const getItems = async function(req, res, next) {
    try {
        const items = await services.getItems();

        return res.status(200).json({status: 200, data: items, message: "The items has been received"});
    } catch(e) {

        return res.status(400).json({status: 400, message: e.message});
    }
};

/**
 *
 * @param req {object}
 * @param res {object}
 * @param next {function}
 * @returns {Promise<*>}
 */
export const createItem = async function(req, res, next) {
    if (itemInvalid) return false;

    const item = {
        color: req.body.color,
        number: req.body.number,
    };

    try {
        const createdItem = await services.createItem(item);

        return res.status(201).json({status: 201, data: createdItem, message: "An item has been created"});
    } catch(e) {

        return res.status(400).json({status: 400, message: e.message});
    }
};

/**
 *
 * @param req {object}
 * @param res {object}
 * @param next {function}
 * @returns {Promise<*>}
 */
export const removeItem = async function(req, res, next) {
    const id = req.params.id;

    try {
        await services.removeItem(id);

        return res.status(204).json({status:204, message: "Item has been deleted"});
    } catch(e) {

        return res.status(400).json({status: 400, message: e.message});
    }
};

/**
 *
 * @param item {object}
 * @returns {boolean}
 */
const itemInvalid = item => {
    // TODO server validade function

    return false;
};
