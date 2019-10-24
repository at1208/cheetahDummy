
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);

const contacts = mongoose.model('Contacts')
module.exports = (app) => {


app.post('/addContact' , async (req,res) => {

    const newContact = new contacts({
      _id: req.body._id,
      name: req.body.name,
      ph: req.body.ph

    })

  const result = await newContact.save()
   res.send(result)

})
app.get('/allContact', async (req,res) => {
  const allCustomer = await contacts.find()
  res.send(allCustomer)
})

app.put('/updateContact/:_id', async (req,res) => {
  const updatedContacts = await contacts.findByIdAndUpdate(req.params._id, {
      ph: req.body.ph
    }, { new: true });
  res.send(updatedContacts);


})

app.delete('/deleteContact/:_id', async (req,res) => {
const removedContacts = await contacts.findByIdAndRemove(req.params._id)

res.send(removedContacts)
})

}
