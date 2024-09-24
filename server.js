import express from "express" // ESM
import nunjucks from "nunjucks"
const app = express()
nunjucks.configure("views", {
  autoescape: true,
  express: app,
})
app.use(express.static("public"))
app.get("/", (request, response) => {
  response.render("index.njk", {
    message: "Hemsidan nunjuckad och klar weee!",
    title: "Hem",
  })
})

app.get("/watch", (req, res) => {
    const movieID = req.query.v
    console.log(movieID)
    const movies = {
        "ETTID": {
            title: 'The Shawshank Redemption',
            year: 1994
        },
        "TVÅID": {
            title: "The Godfather",
            year: 1972
        },
    }
    const movie = movies[movieID]
    console.log(movie)
    res.render('watch.njk', {
        title: 'Watch',
        movie: movie
    })
    // res.json(movie)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})



app.get('/ytub', (req, ren) => {
    const ID = req.query.v
    console.log(ID)
    res.render('ytub.njk', {
        title: 'Youtube',
        youtubeID: ID,
    })
})