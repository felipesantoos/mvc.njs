const fs = require("fs")

function news() {}

news.prototype.getLastNews = (callback) => {
    fs.readFile("./data/news.json", "utf-8", (err, result) => {
        var data = []
        var i

        if (!err) {
            var obj = JSON.parse(result)

            if (obj.news.length > 4) {
                i = 4
            } else {
                i = obj.news.length - 1
            }

            obj.news.forEach((newsItem) => {
                if (i >= 0) {
                    data[i] = newsItem
                    i--
                }
            })
        }

        callback(err, data)
    })
}

module.exports = () => {
    return news
}
