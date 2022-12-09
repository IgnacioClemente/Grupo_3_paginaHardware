const { v4: uuidv4 } = require ("uuid");
const fs = require ("fs");
const path = require('path');

const usersListPath = path.resolve(__dirname, "../data/users.json")
const usersList = JSON.parse(fs.readFileSync(usersListPath, "utf8")); 

const usersController = {
  login: (req, res) => {
     res.render ("users/login", {
         users: usersList
  });
    },

     register: (req, res) => {
      res.render ("users/register");

     },

   storeUser: (req, res) => {
    let uset = req.body;

    user.id =uuidv4();

    usersList.push(user);

    fs.writeFileSync(usersListPath, JSON.stringify(usersList, null,2));

    res.redirect("/users");
   },
    // login: (req, res) => {
    //     res.sendFile(path.join(__dirname,'../views/users/login.ejs'));
    //   },

    login: (req, res) => {
      res.render("users/login");
 },

      // register:(req,res) => {
      //   res.sendFile(path.join(__dirname, '../views/users/register.html'));
      // }

    

module.exports = mainController,