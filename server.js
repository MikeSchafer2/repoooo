
const app = require('./app');

const port = process.argv[2];

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
