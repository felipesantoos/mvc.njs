module.exports.index = (app, req, res) => {
    var newsModel = new app.src.models.news()

    newsModel.getLastNews((err, result) => {
        res.render("news/index", {news: result})
    })
}
