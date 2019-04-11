const express = require('express');
const app = express();

app.get('/api/people', (req, res) => res.send([
	'Homer',
	'Marge',
	'Bart',
	'Lisa',
	'Maggie'
]))

// if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  app.use(express.static(path.resolve(__dirname, '../client/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
  });
// }

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
