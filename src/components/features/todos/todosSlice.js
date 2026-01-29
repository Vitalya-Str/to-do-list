import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        text: 'Variant',
        checked: false,
        date: new Date().toISOString()
    },
    {
        id: 2,
        text: 'Variant22',
        checked: true,
        date: new Date().toISOString()
    }
]

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        todoAdded(state, action) {
            state.push({
                id: action.payload.id,
                text: action.payload.text,
                checked: false,
                date: new Date().toISOString()
            })
        },

        todosDeleteAll(state) {
            state.length = 0
        },

        todoToggle(state, action) {
            const toggle = state.find(todo => todo.id === action.payload)
            toggle.checked = !toggle.checked
        },

        todoDelete(state, action) {
           return state.filter(f => f.id !== action.payload)
        },
      
    }
})

export const { todoAdded, todoToggle, todosDeleteAll, todoDelete, todoSearch } = todosSlice.actions

export const selectTodos = state => state.todos

export default todosSlice.reducer