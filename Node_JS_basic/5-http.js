/* eslint-disable */
const http = require('http');
const fs = require('fs').promises;
const url = require('url');

const PORT = 1245;

function countStudents(pathToFile) {
  return fs.readFile(pathToFile, 'utf-8')
    .then((data) => {
      const lines = data.trim().split('\n');
      const students = lines.slice(1).filter(line => line.trim() !== '');

      const fields = {};

      for (const student of students) {
        const parts = student.split(',');
        const field = parts[parts.length - 1].trim();
        const name = parts[0].trim();

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(name);
      }

      let output = `Number of students: ${students.length}`;
      for (const [field, names] of Object.entries(fields)) {
        output += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
      }

      return output;
    });
}

const app = http.createServer(async (req, res) => {
  const route = url.parse(req.url).pathname;

  if (route === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (route === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    const database = process.argv[2];

    try {
      const result = await countStudents(database);
      res.end(`This is the list of our students\n${result}`);
    } catch (err) {
      res.end('This is the list of our students\nCannot load the database');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

app.listen(PORT);

module.exports = app;
