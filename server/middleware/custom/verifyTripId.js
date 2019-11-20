const { Trips } = require('../../../utils');

module.exports = (req, res, next) => {
    const tripId = req.params.tripId;
    Trips.findById(tripId)
        .then(trip => {
            if (!trip) {
                res.status(404).json({ error: 'Invalid Trip Id. Trip Not Found.' });
            } else {
                next();
            }
        })
        .catch(() => res.status(500).json({ error: 'There was an error finding the trip' }));
};