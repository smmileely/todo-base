import { atom } from 'jotai';

// Standard interface and functions
export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    text: todo.id === id ? text : todo.text,
  }));

const toggleTodo = (todos: Todo[], id: number): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done,
  }));

const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
];

//Jotai implementation
export const newTodoAtom = atom<string>('');
export const todosAtom = atom<Todo[]>([]);
export const addTodoAtoms = atom(
  () => '',
  (get, set) => {
    set(todosAtom, addTodo(get(todosAtom), get(newTodoAtom)));
    set(newTodoAtom, '');
  }
);

export const updateTodoAtoms = atom(
  () => '',
  (get, set, { id, text }: { id: number; text: string }) => {
    set(todosAtom, updateTodo(get(todosAtom), id, text));
  }
);

export const toggleTodoAtoms = atom(
  () => '',
  (get, set, id: number) => {
    set(todosAtom, toggleTodo(get(todosAtom), id));
  }
);

export const deleteTodoAtoms = atom(
  () => '',
  (get, set, id: number) => {
    set(todosAtom, removeTodo(get(todosAtom), id));
  }
);
