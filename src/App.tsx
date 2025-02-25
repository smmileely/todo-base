import * as React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { Provider as JotaiProvider } from 'jotai';
import TopBar from './components/TopBar';
import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <JotaiProvider>
        <Box maxWidth='8xl' margin='auto' p={5}>
          <TopBar />
          <TodoList />
          <TodoAdd />
        </Box>
      </JotaiProvider>
    </ChakraProvider>
  );
}
