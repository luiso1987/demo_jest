const { Router } = require('express');

const { demo } = require('../controllers/demo');

const router = Router();

router.get('/', demo);


module.exports = router;