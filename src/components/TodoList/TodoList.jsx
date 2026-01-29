import { Button, Checkbox, Dialog, DialogActions, DialogTitle, FormControlLabel } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import s from './TodoList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectTodos, todoDelete, todoToggle } from '../features/todos/todosSlice';
import { useState } from 'react';




const TodoList = ({ searchTodo }) => {

    const [todo, setTodo] = useState(null)
    const [sortType, setSortType] = useState('date')

    const todos = useSelector(selectTodos)
    const dispatch = useDispatch()

    const handleChange = (id) => {
        dispatch(todoToggle(id))
    }

    const deleteOne = (id) => {
        dispatch(todoDelete(id))
        setTodo(null)
    }

    const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchTodo.toLowerCase()))

    const sortedTodos = [...filteredTodos].sort((a, b) => {

        if (sortType === 'asc') {
            return a.text.localeCompare(b.text)
        } else if (sortType === 'desc') {
            return b.text.localeCompare(a.text)
        } else {
            return new Date(a.date) - new Date(b.date)
        }
    })

    return (
        <>
            <select className={s.sort} name="sort" id="sort" onClick={(e) => setSortType(e.target.value)}>
                <option value="date">По дате</option>
                <option value="asc">По возрастанию</option>
                <option value="desc">По по убыванию</option>
            </select>
            <div className={s.todo_list}>
                {sortedTodos.map((t, i) => {

                    const isActiveChecked = t.checked ? s.todo_card_active : ''

                    return <div key={i} className={`${s.todo_card} ${isActiveChecked}`}>

                        <FormControlLabel
                            control={<Checkbox
                                checked={t.checked}
                                onChange={() => handleChange(t.id)}
                            />}
                            label={<div className={s.lable_card}>
                                <span>{t.text}</span>
                                <span className={s.lable_card_date}>{t.date}</span>
                            </div>}

                        />

                        <div className={s.todo_card_item}>
                            <Button >
                                <ModeEditIcon />
                            </Button>
                            <Button onClick={() => setTodo(t)}>
                                <DeleteForeverIcon />
                            </Button>

                        </div>
                    </div>
                })}
            </div>

            <Dialog
                sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
                maxWidth="xs"
                open={todo}
            >
                <DialogTitle>{todo ? `Хотите удалить заметку ${todo.text}?` : ''}</DialogTitle>
                <DialogActions>
                    <Button autoFocus onClick={() => setTodo(null)}>
                        Cancel
                    </Button>
                    <Button onClick={() => deleteOne(todo.id)}>Ok</Button>
                </DialogActions>
            </Dialog>
        </>

    )
}

export default TodoList