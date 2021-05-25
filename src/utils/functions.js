module.exports = {
    getID: function (location) {
        const id = location.split("/")[4]
        const command = location.split("/")[5]
        return id
    }
}