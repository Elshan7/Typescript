import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../../types/types';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState:[] as Task[],
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    toggle: (state, action: PayloadAction<number>) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleted: (state, action: PayloadAction<number>) => {
      return state.filter((item: Task) => item.id !== action.payload);
    },
    
  },
});

export const { add, toggle,deleted } = tasksSlice.actions;
export default tasksSlice.reducer;
