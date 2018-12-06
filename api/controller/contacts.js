const Contacts = require('../models/Contacts');

const getAllContacts = (req, res, next) =>{
    Contacts.find()
        .then(contacts =>{
            res.status(200).json({
                message : 'All Contacts',
                contacts
            })
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                message : 'Error Occured',
                error : err
            })
        })
};

const postContact = (req, res, next) =>{
    const contacts = new Contacts({
        name : req.body.name,
        phone : req.body.phone,
        email: req.body.email
    });

    contacts.save()
        .then(contacts => {
            res.status(201).json({
                message : 'contact saved',
                contacts
            })
        })
        .catch(err =>{
            res.status(500).json({
                message : 'Dont Saved',
                error : err
            })
        })
};

const deleteContact = (req, res, next) =>{
    let id = req.params.id;
    Contacts.findByIdAndDelete(id)
        .then(contact =>{
            res.json({
                message : 'contact Delete'
            })
        })
        .catch(err =>{
            console.log(err);
        })
};

const updateContact = (req, res, next) =>{
    let id = req.params.id;
    const contactUpdate = {
        name : req.body.name,
        phone : req.body.phone,
        email : req.body.email
    };

    Contacts.findByIdAndUpdate(id, {$set : contactUpdate})
        .then(contact =>{
            Contacts.findById(contact._id)
                .then(newContact =>{
                    res.json({
                       message : 'Contact Updata Successfull',
                       newContact
                    })
                })
        })
        .catch(err =>{
            res.status(500).json({
                message : 'Dont Saved',
                error : err
            })
        })
};

const getSingleContact = (req, res, next) =>{
    let id = req.params.id;
    Contacts.findById(id)
        .then(contact =>{
            res.json({
                contact
            })
        })
        .catch(err =>{
            console.log(err);
        })
};

module.exports = {
    getAllContacts,
    getSingleContact,
    postContact,
    deleteContact,
    updateContact

};