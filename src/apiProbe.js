const Probe = function probeAPI(req, res, next) {
    res.send('{"status":"OK"}');
    next();
}

module.exports = {
    Probe
};