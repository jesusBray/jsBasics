exports.getHome = (req, res) => {
    res.status(200).send('update date');
}

exports.getPageNotFound = (req, res) => {
    res.status(200).send('page not found')
}