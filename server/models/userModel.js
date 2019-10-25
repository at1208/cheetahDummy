const mongoose = require('mongoose');

const UserSchema  = new mongoose.Schema({
  firstName: { type:String, required: true },
  lastName: { type:String, required: true },
  emailID: { type: String, unique: true },
  phoneNumber: { type: Number },
  password: { type: String, required: true }
})

mongoose.model('Users', UserSchema)
