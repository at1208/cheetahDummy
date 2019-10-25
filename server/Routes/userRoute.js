const mongoose = require('mongoose')

const user = mongoose.model('Users')

module.exports = (app) => {

app.post('/signup', async (req,res) => {
  const newUser = new user({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    emailID: req.body.emailID,
    phoneNumber: req.body.phoneNumber,
    password: req.body.password
  })

const result  = await newUser.save()
res.send(result)
})
}
