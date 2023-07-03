import * as React from 'react';
import { Button, Input, Grid } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { newTodoAtom, addTodoAtoms } from '../store';

function TodoAdd() {
  const [newTodo, newTodoSet] = useAtom(newTodoAtom);
  const [, addTodo] = useAtom(addTodoAtoms);

  return (
    <Grid pt={2} templateColumns='5fr 1fr' columnGap='3'>
      <Input
        placeholder='New todo'
        value={newTodo}
        onChange={(evt) => newTodoSet(evt.target.value)}
      />
      <Button onClick={() => addTodo()}>Add Todo</Button>
    </Grid>
  );
}

export default TodoAdd;
