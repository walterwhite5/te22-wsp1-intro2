import express from "express" // ESM
import nunjucks from 'nunjucks'
import morgan from "morgan"

import indexRouter from './routes/index.js'

import searchRouter from './routes/search.js'

const app = express()

app.use(express.static('public'))
app.use(morgan("dev"))
app.use('/', indexRouter)
app.use('/search', searchRouter)

nunjucks.configure("views", {
  autoescape: true,
  express: app,
})


app.use((req, res) => {
//  res.status(404).send('404 - Not found')
res.status(404).render('404.njk')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})


