const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;
const DATA_FILE = 'data.json';

app.use(express.json());

// Read existing data
const readData = () => {
    try {
        const data = fs.readFileSync(DATA_FILE);
        return JSON.parse(data);
    } catch (error) {
        return []; // If file doesn't exist or error occurs, return an empty array
    }
};

// Write data to file
const writeData = (data) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};
app.get('/', (req, res) => {
    res.send('Welcome to the TODO API!');
});
// Get all todos
app.get('/todos', (req, res) => {
    res.json(readData());
});

// Add a new todo
app.post('/todos', (req, res) => {
    const todos = readData();
    const newTodo = { id: Date.now(), text: req.body.text };

    todos.push(newTodo);
    writeData(todos);

    res.json({ message: 'Todo added successfully', todo: newTodo });
});

// Update a todo
app.put('/todos/:id', (req, res) => {
    let todos = readData();
    const todoId = parseInt(req.params.id);

    todos = todos.map(todo =>
        todo.id === todoId ? { ...todo, text: req.body.text } : todo
    );

    writeData(todos);
    res.json({ message: 'Todo updated successfully' });
});

// Delete a todo
app.delete('/todos/:id', (req, res) => {
    let todos = readData();
    const todoId = parseInt(req.params.id);

    todos = todos.filter(todo => todo.id !== todoId);

    writeData(todos);
    res.json({ message: 'Todo deleted successfully' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});