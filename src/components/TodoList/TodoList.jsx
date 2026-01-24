import { Checkbox, FormControlLabel, } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import s from './TodoList.module.css'
import { useDispatch } from 'react-redux';
import { todoToggle } from '../features/todos/todosSlice';

const TodoList = ({ todos }) => {

    const dispatch = useDispatch()

    const handleChange = (id) => {
        dispatch(todoToggle(id))
    }

    return (
        <div className={s.todo_list}>
            {todos.map((t, i) => {

                const isActiveChecked = t.checked ? s.todo_card_active : ''

                return <div key={i} className={`${s.todo_card} ${isActiveChecked}`}>

                    <FormControlLabel
                        control={<Checkbox
                            checked={t.checked}
                            onChange={() => handleChange(t.id)}
                        />}
                        label={t.text} />

                    <div className={s.todo_card_item}>

                        <ModeEditIcon />

                        <DeleteForeverIcon sx={{ marginLeft: 2 }} />

                    </div>
                </div>
            })}
        </div>
    )
}

export default TodoList