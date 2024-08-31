const express = require('express');
const { createAgencyAndClient, getAgencyWithTopClient } = require('../controller/agencyController');
const { updateClient } = require('../controller/clientController')
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/agency-client', auth, createAgencyAndClient);
router.put('/client/:id', auth, updateClient);
router.get('/agency/top-client', auth, getAgencyWithTopClient);

module.exports = router;