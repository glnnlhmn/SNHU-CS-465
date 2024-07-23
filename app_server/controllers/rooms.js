/* GET rooms view */
const rooms = (req, res) => {

    res.render('rooms', { title: 'Travlr Gateways'});
};

module.exports = {
    rooms
};