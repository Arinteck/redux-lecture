const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

let contacts = [
    { name: 'Константин Петров', phone: '+79202303624'},
    { name: 'Петр Констанинов', phone: '+79202304532'},
    { name: 'Ольга Иванова', phone: '+79208468748'}
];

app.get('/contacts', function (req, res) {
    res.send(contacts);
});

app.post('/contacts', function (req, res) {
    const contact = req.body.contact;
    const foundContact = contacts.find(c => c.phone === contact.phone);
    if (!foundContact) {
        contacts.push(contact);
        res.send(true);
    } else {
        res.send(false);
    }

});

app.listen(3010, function () {
    // console.log('Example app listening on port 3010!');
});
