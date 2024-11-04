import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Redux/store.tsx'
import TodoList from './components/ToDoList.tsx';
import './components/styles.css';

const App: React.FC = () => (
  <Provider store={store}>
    <div className="App">
      <TodoList />
    </div>
  </Provider>
);

export default App;
