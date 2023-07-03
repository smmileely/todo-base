import * as React from 'react';
import { Button, Input, Flex, Checkbox, Heading } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import {
  todosAtom,
  toggleTodoAtoms,
  updateTodoAtoms,
  deleteTodoAtoms,
} from '../store';

function TodoListItems() {
  const [todos] = useAtom(todosAtom);
  const [, toggleTodo] = useAtom(toggleTodoAtoms);
  const [, updateTodo] = useAtom(updateTodoAtoms);
  const [, removeTodo] = useAtom(deleteTodoAtoms);
  return (
    <>
      {todos.map((todo) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox checked={todo.done} onClick={() => toggleTodo(todo.id)} />
          <Input
            mx={2}
            value={todo.text}
            onChange={(evt) =>
              updateTodo({ id: todo.id, text: evt.target.value })
            }
          />
          <Button onClick={() => removeTodo(todo.id)}>Delete</Button>
        </Flex>
      ))}
    </>
  );
}

function TodoList() {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItems />
    </>
  );
}

export default TodoList;
