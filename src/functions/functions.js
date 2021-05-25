module.exports = {
    getUser: async function (id) {
        const fetched = await fetch("/api/get/user/" + id)
        const user = fetched.json();
        return user
    }
}