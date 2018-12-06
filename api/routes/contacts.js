const express = require('express');
const router = express.Router();
const ContactController = require('../controller/contacts');

router.get('/', ContactController.getAllContacts);

router.get('/:id', ContactController.getSingleContact);

router.post('/', ContactController.postContact);

router.put('/:id', ContactController.updateContact);

router.delete('/:id', ContactController.deleteContact);

module.exports = router;