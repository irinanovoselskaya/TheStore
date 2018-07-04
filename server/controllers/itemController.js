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

        return res.status(200).json({status: 200, data: items, message: "Received"});
    } catch(e) {

        return res.status(400).json({status: 400, message: e});
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
    const item = {
        color: req.body.color,
        number: req.body.number,
    };

    try {
        const createdItem = await services.createItem(item);

        return res.status(201).json({status: 201, data: createdItem, message: "Created"});
    } catch(e) {

        return res.status(400).json({status: 400, message: e});
    }
};
