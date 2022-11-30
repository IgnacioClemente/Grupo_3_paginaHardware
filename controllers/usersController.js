//const path = require('path');

const usersController = {

    // login: (req, res) => {
    //     res.sendFile(path.join(__dirname,'../views/users/login.ejs'));
    //   },

    login: (req, res) => {
      res.render("users/login");
 },

      // register:(req,res) => {
      //   res.sendFile(path.join(__dirname, '../views/users/register.html'));
      // }

      register: (req, res) => {
        res.render("users/register");
      }
}

module.exports = usersController;