import { Box, Button, Checkbox, FormControlLabel, Modal, Typography, } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import s from './TodoList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectTodos, todoDelete, todoToggle } from '../features/todos/todosSlice';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const TodoList = ({ searchTodo }) => {

    const [todo, setTodo] = useState(null)

    const todos = useSelector(selectTodos)
    const dispatch = useDispatch()

    const handleChange = (id) => {
        dispatch(todoToggle(id))
    }

    const deleteOne = (id) => {
        dispatch(todoDelete(id))
        setTodo(null)
    }

    const filterTodo = todos.filter(todo => todo.text.toLowerCase().includes(searchTodo.toLowerCase()))
    
    return (
        <>
            <div className={s.todo_list}>
                {filterTodo.map((t, i) => {

                    const isActiveChecked = t.checked ? s.todo_card_active : ''

                    return <div key={i} className={`${s.todo_card} ${isActiveChecked}`}>

                        <FormControlLabel
                            control={<Checkbox
                                checked={t.checked}
                                onChange={() => handleChange(t.id)}
                            />}
                            label={t.text} />

                        <div className={s.todo_card_item}>
                            <Button>
                                <ModeEditIcon />
                            </Button>
                            <Button onClick={() => setTodo(t)}>
                                <DeleteForeverIcon />
                            </Button>
                        </div>
                    </div>
                })}
            </div>

            <Modal
                open={todo}
                onClose={() => setTodo(null)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {todo ? `Хотите удалить заметку ${todo.text}?` : ''}
                    </Typography>
                    <Button onClick={() => deleteOne(todo.id)}>Yes</Button>
                    <Button onClick={() => setTodo(null)}>No</Button>
                </Box>

            </Modal>
        </>

    )
}

export default TodoList