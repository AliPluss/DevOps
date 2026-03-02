const { name } = require("ejs");

exports.getHome = (req, res) => {
    res.render('index', { name: 'Home Page' });
};