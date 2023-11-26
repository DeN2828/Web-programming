const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');
let students =
  [
    { id: 10, firstName: "Marty", lastName: "McFly", group: 101, rate: 9.5 },
    { id: 11, firstName: "Squidward", lastName: "Tentakles", group: 102, rate: 6.1 },
    { id: 12, firstName: "Donald", lastName: "Duck", group: 102, rate: 7.2 },
    { id: 13, firstName: "Sarah", lastName: "Connor", group: 101, rate: 8.3 },
    { id: 14, firstName: "Yugin", lastName: "Krabbs", group: 102, rate: 6.8 },
  ];

  app.use(bodyparser.json());

//GET all students
app.get('/students', (req, res) => {
  res.json(students);
});

//POST new students
app.post('/students/:id', (req, res) => {
  // res.sendFile(path.join(__dirname + '/index.html'));
  console.log(req.query,req.params,req.body);
  const { id } = req.params;
  const { firstName, lastName, group, rate } = req.body;

  // Check if firstName and lastName are empty
  if (!firstName || !lastName) {
    return res.status(400).json({ error: 'First Name and Last Name is empty' });
  }

  const newStudent = { id: parseInt(id), firstName: firstName, lastName: lastName, group: group, rate: rate };
  students.push(newStudent);
  res.json(newStudent);
});

//GET students by id
app.get('/students/:id', (req, res) => {
  const { id } = req.params;
  const student = students.find(s => s.id === parseInt(id));

  // Check if id not found
  if (!student) { res.status(404).json({ error: 'Student not found' }) };

  res.json(student);

});

//PUT students by id
app.put('/students/:id', (req, res) => {
  const id = req.params.id;
  const idd = req.params;
  console.log(id,idd);
  const student = students.find(s => s.id === parseInt(id));

  // Check if id not found
  if (!student) { res.status(404).json({ error: 'Student not found' }) }
  else {
    const { firstName, lastName, group, rate } = req.body;
    students[student] = { id: parseInt(id), firstName, lastName, group, rate };
  }

  res.json(students[student]);

});

// DELETE student by id
app.delete('/students/:id', (req, res) => {
  const { id } = req.params;
  const index = students.findIndex(s => s.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: 'Student not found.' });
  }

  const deletedStudent = students.splice(index, 1)[0];
  res.json(deletedStudent);
});




const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
