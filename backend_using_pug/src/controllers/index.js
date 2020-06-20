exports.getHome = (req, res) => {
    res.status(200).render('index')
}

exports.getNotFound = (req, res) => {
    res.status(200).send('Page not found!')
}