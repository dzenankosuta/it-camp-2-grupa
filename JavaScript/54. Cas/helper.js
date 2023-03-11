const returnResponse = (status, message, res, data) => {
    res.status(status).json({
        data,
        status,
        message
    })
}

module.exports = {
    returnResponse,
}