import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        text: 'Variant',
        checked: false
    },
    {
        id: 2,
        text: 'Variant22',
        checked: true
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
                checked: false
            })
        },

        todosDeleteAll(state) {
            state.length = 0
        },

        todoToggle(state, action) {
            const toggle = state.find(todo => todo.id === action.payload)
            toggle.checked = !toggle.checked
        }
    }
})

export const { todoAdded, todoToggle, todosDeleteAll } = todosSlice.actions

export const selectTodos = state => state.todos

export default todosSlice.reducer