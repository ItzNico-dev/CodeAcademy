import express from 'express';
import tasks from '../db/tasks.js';
const router = express.Router();

router.post('/tasks', (req, res) => {
  const { name, description } = req.body;
  const id = tasks[tasks.length - 1].id + 1;

  const task = {
    name,
    description,
    id,
  };

  tasks.push(task);

  res.json({
    success: true,
  });
});

router.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;

  const taskIndex = tasks.findIndex((item) => item.id === +id);
  tasks.splice(taskIndex, 1);

  res.json({
    success: true,
  });
});

router.get('/tasks', (req, res) => {
  res.json(tasks);
});

router.get('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const task = tasks.find((item) => item.id === +id);

  res.json(task);
});

router.put('/tasks/:id', (req, res) => {
  const { name, description } = req.body;
  const { id } = req.params;

  const taskIndex = tasks.findIndex((item) => item.id === +id);

  tasks[taskIndex].name = name;
  tasks[taskIndex].description = description;

  res.json({
    success: true,
  });
});

export default router;