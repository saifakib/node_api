const express = require('express');
const router = express.Router();
const ContactController = require('../controller/contacts');

//Get Route
router.get('/', ContactController.getAllContacts);
router.get('/:id', ContactController.getSingleContact);

//Post Route
router.post('/', ContactController.postContact);

//Put Route
router.put('/:id', ContactController.updateContact);

//Delete Route
router.delete('/:id', ContactController.deleteContact);

module.exports = router;