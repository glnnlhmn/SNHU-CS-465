/* GET news view */
const news = (req, res) => {

    res.render('news', { title: 'Travlr Gateways'});
};

module.exports = {
    news
};