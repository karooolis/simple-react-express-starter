const express = require('express')
const app = express()

app.get('/api/people', (req, res) => res.send([
	'Homer',
	'Marge',
	'Bart',
	'Lisa',
	'Maggie'
]))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))