import { Box, Paper } from '@mui/material';
import s from './Todo.module.css'
import TodoList from '../TodoList/TodoList';
import TodoForm from './../TodoForm/TodoForm';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodos, todoAdded } from '../features/todos/todosSlice';



const Todo = () => {

    const todos = useSelector(selectTodos)
    const dispatch = useDispatch()

    return (
        <Box className={s.wrapper} >
            <Paper
                sx={{
                    width: 500,
                    height: '100%',
                    borderRadius: 5,
                    marginTop: 5,
                    paddingBottom: 5
                }}
                elevation={12}>

                <div className={s.title}>
                    <h1> Notebook </h1>
                </div>

                <div className={s.container}>
                    <div className={s.element}>

                        <TodoForm
                            todos={todos}
                            addTodo={(newText) => dispatch(todoAdded(newText))} />

                        <TodoList
                            todos={todos}
                        />
                    </div>

                </div>

            </Paper>
        </Box>
    )

}

export default Todo
