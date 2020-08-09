import express from 'express';

const object = {
  key: 'value',
};

const posts = [
  { id: 1, title: 'post1', desc: 'This is post 1 desc' },
  { id: 2, title: 'post2', desc: 'This is post 2 desc' },
  { id: 3, title: 'post3', desc: 'This is post 3 desc' },
  { id: 4, title: 'post4', desc: 'This is post 4 desc' },
];

const users = [
  { id: 1, title: 'Ram', Salutation: 'Mr.', city: 'Jaipur' },
  { id: 2, title: 'Rohan', desc: 'Master', city: 'Delhi' },
  { id: 3, title: 'Rohit', desc: 'Mr.', city: 'Ajmer' },
  { id: 4, title: 'Radha', desc: 'Miss', city: 'Udaipur' },
];

const app = express();

console.log('Server Started');
app.get('/', (req, res) => {
  console.log('API has been hit');
  res.status(200).send('app');
});

app.get('/users', (req, res) => {
  console.log('API has been hit');
  res.status(200).send(users);
});

app.get('/users/:id', (req, res) => {
  console.log('API has been hit');
  if (req.params.id >= 0 && req.params.id < users.length)
    res.status(200).send(users[req.params.id]);
  else res.status(400).send('Invalid id');
});

app
  .route('/posts/')
  .get(function (req, res) {
    console.log('API has been hit /posts/');
    res.send('Get posts');
  })
  .post(function (req, res) {
    console.log('API has been hit /posts/');
    res.send('Add a post');
  });

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
