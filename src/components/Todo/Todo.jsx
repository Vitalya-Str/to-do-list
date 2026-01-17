import { Paper, } from '@mui/material';
import Box from '@mui/material/Box';
import { Field } from '../shared/Field/Field'
import { ButtonComponent } from '../shared/Button/ButtonComponent'
import s from './Todo.module.css'



const Todo = () => {


    return (
        <Box className={s.container} >
            <Paper sx={{
                width: 500,
                height: 500,
                borderRadius: 5,
                marginTop: 5
            }}
                elevation={12}>
                <div className={s.title}>
                    <h1>ToDo List </h1>
                </div>
                <div className={s.element_container}>
                    <div className={s.element}>
                        <div className={s.elemt_item}>
                            <Field label='input to do'
                                size='small'
                                fullWidth
                            />
                            <ButtonComponent
                                variant="contained"
                                size='medium'
                                sx={{ marginLeft: 2 }}> Add </ButtonComponent>
                        </div>
                        <Field label='Search Task'
                            size='small'
                            sx={{ marginTop: 2 }}
                            fullWidth
                        />
                        <div className={s.elemt_item}>
                            <ButtonComponent
                                variant="contained"
                                size='medium'
                                sx={{ marginTop: 2 }}
                                fullWidth > Scroll </ButtonComponent>
                        </div>


                    </div>
                </div>


            </Paper>
        </Box>
    )

}

export default Todo
