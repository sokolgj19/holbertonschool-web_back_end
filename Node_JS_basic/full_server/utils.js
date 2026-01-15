/* eslint-disable */

import fs from 'fs/promises';

export default function readDatabase(filePath) {
  return fs.readFile(filePath, 'utf-8')
    .then((data) => {
      const lines = data.trim().split('\n').filter(line => line.trim() !== '');
      const students = lines.slice(1);

      const fields = {};

      for (const student of students) {
        const parts = student.split(',');
        const firstName = parts[0].trim();
        const field = parts[parts.length - 1].trim();

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      }

      return fields;
    })
    .catch((err) => {
      throw new Error('Cannot load the database');
    });
}
