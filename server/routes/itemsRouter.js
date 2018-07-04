import express from 'express';
import * as controller from '../controllers/itemController';

const router = express.Router();

router.get('/', controller.getItems);

router.post('/', controller.createItem);

export default router;
