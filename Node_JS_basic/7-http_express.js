/* eslint-disable */
const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
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

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const database = process.argv[2];
  try {
    const result = await countStudents(database);
    res.type('text/plain').send(`This is the list of our students\n${result}`);
  } catch (err) {
    res.status(500).send('This is the list of our students\nCannot load the database');
  }
});

app.listen(PORT);

module.exports = app;
