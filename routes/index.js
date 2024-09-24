import express from "express"

const router = express.Router()

router.get("/test", (req, res) => {
    res.send("Det här är test routen från en annan f")
})

router.get("/watch", (req, res) => {
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


router.get('/ytub', (req, res) => {
    const ID = req.query.v
    console.log(ID)
    res.render('ytub.njk', {
        title: 'Youtube',
        youtubeID: ID,
    })
})


export default router