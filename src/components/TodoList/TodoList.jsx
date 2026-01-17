import { Checkbox, FormControlLabel, } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import s from './TodoList.module.css'

const TodoList = () => {

    return (
        <div className={s.todo_list}>
            <div className={s.todo_card}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="lable" />
                <div>
                    <ModeEditIcon />
                    <DeleteForeverIcon />
                </div>
            </div>
           </div>
    )
}

export default TodoList