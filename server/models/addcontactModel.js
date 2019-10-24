const mongoose = require('mongoose')

const AddContactSchema = new mongoose.Schema({
  _id:  { type: Number, required: true },
  name: { type: String, required: true },
  ph: { type: Number, required: true },
})
mongoose.model('Contacts',AddContactSchema)
