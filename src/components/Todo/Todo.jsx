import { Button, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import { Field } from '../shared/Field/Field'
import s from './Todo.module.css'



const Todo = () => {


    return (
        <Box className={s.toDo_container} >
            <Paper className={s.toDo_item} sx={{
                width: 500,
                height: 500,
                borderRadius: 5,
                marginTop: 5
            }}
                elevation={12}>
                <div className={s.toDo_title}>
                    <h1>ToDo List </h1>
                </div>
                <div className={s.toDo_element_container}>
                    <div className={s.toDo_element}>
                        <Field label='input to do'
                         size='small'
                         width={220} />
                        <Button variant="contained" size='medium' sx={{ marginLeft: 2 }}>Add</Button>
                        <Field label='Search Task'
                            size='small'
                            fullWidth={true}
                            marginTop={2}
                            width={300} />
                    </div>
                </div>


            </Paper>
        </Box>
    )

}

export default Todo
