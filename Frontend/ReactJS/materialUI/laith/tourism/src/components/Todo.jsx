import React, { useState } from 'react';
import { List, ListItem,ListItemText, Checkbox, TextField,Button} from '@mui/material';



function Todo() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Finish project', completed: false },
    { id: 2, text: 'Go for a run', completed: false },
    { id: 3, text: 'Buy groceries', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState('');

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodo === '') return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  return (
    <div style={{width: '100%',
    maxWidth: 360,
    backgroundColor: '#fff',}} >
      <form onSubmit={handleSubmit}>
        <TextField
          label="Add a to-do"
          value={newTodo}
          onChange={handleChange}
          fullWidth
        />
        <Button type="submit">Add</Button>
      </form>
      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            <Checkbox checked={todo.completed} onClick={() => toggleTodo(todo.id)} />
            <ListItemText primary={todo.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export  default Todo;