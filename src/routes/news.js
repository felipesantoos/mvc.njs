module.exports = (app) => {
    app.get("/", (req, res) => {
        app.src.controllers.news.index(app, req, res)
    })
}
