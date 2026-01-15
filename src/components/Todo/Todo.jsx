import { Button, Paper, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import s from './Todo.module.css'

const Todo = () => {

    return (
        <Box className={s.toDo_container} >
            <Paper className={s.toDo_item} sx={{
                width: 400,
                height: 500,
                borderRadius: 1,
                marginTop: 5
            }}
                elevation={12}>
                <div className={s.toDo_title}>
                    <h1>ToDo List </h1>
                </div>
                <div className= {s.toDo_element}>
                    <TextField label="Input" sx={{marginLeft: 5,}} size='small'/>
                    <Button variant="contained" size='medium' sx={{marginLeft: 2}}>Add</Button>
                </div>

            </Paper>
        </Box>
    )

}

export default Todo
