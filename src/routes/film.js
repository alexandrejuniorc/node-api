import { Film } from '../models/film.js'

export async function StarWarsFilms(app) {
  app.delete('/:id', async function (req, res) {
    await Film.findByIdAndDelete(req.params.id)
    res.send('Film deleted')
  })

  app.get('/', async function (req, res) {
    const films = await Film.find()
    res.send(films)
  })

  app.post('/', async function (req, res) {
    const film = new Film({
      title: req.body.title,
      description: req.body.description,
      image_url: req.body.image_url,
      trailer_url: req.body.trailer_url
    })
    await film.save().then(() => console.log('Film saved'));
    res.send(film)
  })
}