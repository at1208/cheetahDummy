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
res.status(200).send(result)
})

app.get('/login/:emailID/:password', async (req,res) => {

  const userInDB = await user.find({ emailID: req.params.emailID })
  const userEmail = userInDB.map(user => user.emailID)
  const userPass = userInDB.map(user => user.password)

  if(userEmail == req.params.emailID && userPass == req.params.password){
    return res.send('Successfull Login!')
  }
  return res.send("incorrect Email or Password")
})
}
