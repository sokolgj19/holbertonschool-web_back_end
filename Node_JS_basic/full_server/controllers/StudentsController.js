/* eslint-disable */

import readDatabase from '../utils.js';

class StudentsController {
  static async getAllStudents(req, res) {
    const path = process.argv[2];
    try {
      const data = await readDatabase(path);
      let response = 'This is the list of our students';

      const sortedFields = Object.keys(data).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
      for (const field of sortedFields) {
        const names = data[field];
        response += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
      }

      res.status(200).send(response);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const path = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const data = await readDatabase(path);
      const names = data[major];
      res.status(200).send(`List: ${names.join(', ')}`);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}

export default StudentsController;
