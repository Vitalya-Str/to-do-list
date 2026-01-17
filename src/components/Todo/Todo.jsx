import { Box, Paper } from '@mui/material';
import s from './Todo.module.css'
import TodoForm from '../TodoForm';
import TodoList from '../TodoList/TodoList';



const Todo = () => {


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
                        <TodoForm />
                        <TodoList />
                    </div>

                </div>

            </Paper>
        </Box>
    )

}

export default Todo
