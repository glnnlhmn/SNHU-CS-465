/* GET Homepage */
const index = (req, res) => {
  let pageTile = process.env.npm_package_description + ' - Main' ;
  res.render('index', { title: pageTile,
    active_nav: {index: true}
   });
};

const about = (req, res) => {
  let pageTile = process.env.npm_package_description + ' - About' ;
  res.render('about', { title: pageTile,
    active_nav: {about: true}
   });
};

const contact = (req, res) => {
  let pageTile = process.env.npm_package_description + ' - Contact' ;
  res.render('contact', { title: pageTile,
    active_nav: {contact: true}
   });
}

module.exports = {
    index
};